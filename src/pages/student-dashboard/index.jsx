import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import { getSession } from '../../utils/auth';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [loginMethod, setLoginMethod] = useState('');

  useEffect(() => {
    (async () => {
      // Prefer Supabase session
      const session = await getSession();
      if (session?.user) {
        setUserEmail(session.user.email || '');
        setUserName(session.user.user_metadata?.full_name || session.user.user_metadata?.name || '');
        setLoginMethod(session.user.app_metadata?.provider || '');
        return;
      }

      // Fallback to local storage (legacy)
      const isAuthenticated = localStorage.getItem('isAuthenticated');
      if (!isAuthenticated) {
        navigate('/login');
        return;
      }
      setUserEmail(localStorage.getItem('userEmail') || '');
      setUserName(localStorage.getItem('userName') || '');
      setLoginMethod(localStorage.getItem('loginMethod') || '');
    })();
  }, [navigate]);

  // Mock dashboard data
  const stats = [
    { 
      label: 'Problems Solved', 
      value: '47', 
      change: '+12 this week',
      icon: 'Code',
      color: 'blue',
      href: '/problem-history'
    },
    { 
      label: 'Current Streak', 
      value: '8 days', 
      change: 'Keep going!',
      icon: 'Flame',
      color: 'orange',
      href: '/achievement-center'
    },
    { 
      label: 'Forum Posts', 
      value: '23', 
      change: '+5 this week',
      icon: 'MessageSquare',
      color: 'green',
      href: '/campus-forums'
    },
    { 
      label: 'Total XP', 
      value: '2,847', 
      change: '+280 this week',
      icon: 'Trophy',
      color: 'purple',
      href: '/achievement-center'
    }
  ];

  const recentActivity = [
    {
      type: 'problem_solved',
      title: 'Solved "Two Sum" problem',
      time: '2 hours ago',
      icon: 'CheckCircle',
      color: 'green'
    },
    {
      type: 'forum_post',
      title: 'Posted in "Data Structures" forum',
      time: '5 hours ago',
      icon: 'MessageSquare',
      color: 'blue'
    },
    {
      type: 'achievement',
      title: 'Earned "Problem Solver" badge',
      time: '1 day ago',
      icon: 'Award',
      color: 'yellow'
    },
    {
      type: 'collaboration',
      title: 'Joined group project "Campus Events App"',
      time: '2 days ago',
      icon: 'Users',
      color: 'purple'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Weekly Coding Contest',
      date: 'Tomorrow, 3:00 PM',
      participants: '234 registered',
      icon: 'Calendar'
    },
    {
      title: 'AI/ML Workshop',
      date: 'Friday, 6:00 PM',
      participants: '89 registered',
      icon: 'Brain'
    },
    {
      title: 'Career Fair Prep Session',
      date: 'Next Monday, 4:00 PM',
      participants: '156 registered',
      icon: 'Briefcase'
    }
  ];

  const quickActions = [
    {
      title: 'Solve Problems',
      description: 'Practice coding problems',
      href: '/problem-workspace',
      icon: 'Code',
      color: 'blue'
    },
    {
      title: 'Join Forums',
      description: 'Discuss with peers',
      href: '/campus-forums',
      icon: 'MessageSquare',
      color: 'green'
    },
    {
      title: 'View Achievements',
      description: 'Track your progress',
      href: '/achievement-center',
      icon: 'Trophy',
      color: 'yellow'
    },
    {
      title: 'Find Projects',
      description: 'Collaborate on projects',
      href: '/projects',
      icon: 'FolderOpen',
      color: 'purple'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Dashboard - CodeCampus</title>
        <meta name="description" content="Your personal CodeCampus dashboard" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="pt-16">
          <div className="container mx-auto px-4 lg:px-6 py-8">
            {/* Welcome Section */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome back{userName ? `, ${userName}` : ''}! 👋
              </h1>
              <div className="flex items-center space-x-4">
                <p className="text-gray-600">
                  {userEmail && `Signed in as ${userEmail}`}
                </p>
                {loginMethod && (
                  <div className="flex items-center space-x-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                    <Icon name={loginMethod === 'google' ? 'Chrome' : 'Microsoft'} size={12} />
                    <span>via {loginMethod === 'google' ? 'Google' : 'Microsoft'}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <Link
                  key={index}
                  to={stat.href}
                  className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-gray-300 transition-all cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${stat.color}-100`}>
                      <Icon name={stat.icon} size={24} className={`text-${stat.color}-600`} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-xs text-green-600">{stat.change}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Quick Actions */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {quickActions.map((action, index) => (
                      <Link
                        key={index}
                        to={action.href}
                        className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-${action.color}-100`}>
                          <Icon name={action.icon} size={20} className={`text-${action.color}-600`} />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{action.title}</h3>
                          <p className="text-sm text-gray-600">{action.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-${activity.color}-100`}>
                          <Icon name={activity.icon} size={16} className={`text-${activity.color}-600`} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                          <p className="text-xs text-gray-600">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <Link to="/status" className="block">
                      <Button variant="outline" size="sm" className="w-full">
                        View All Activity
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Progress Card */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-4">Weekly Progress</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Problems Solved</span>
                        <span className="font-medium">12/15</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Study Hours</span>
                        <span className="font-medium">18/25</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '72%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Upcoming Events */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-4">Upcoming Events</h3>
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <Icon name={event.icon} size={16} className="text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">{event.title}</p>
                          <p className="text-xs text-gray-600">{event.date}</p>
                          <p className="text-xs text-gray-500">{event.participants}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <Link to="/events" className="block">
                      <Button variant="outline" size="sm" className="w-full">
                        View All Events
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default StudentDashboard;
