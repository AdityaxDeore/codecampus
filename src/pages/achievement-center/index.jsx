import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import LeaderboardTabs from './components/LeaderboardTabs';
import LeaderboardTable from './components/LeaderboardTable';
import AchievementProfile from './components/AchievementProfile';
import HallOfFame from './components/HallOfFame';
import GameficationElements from './components/GameficationElements';

const AchievementCenter = () => {
  const [activeTab, setActiveTab] = useState('problem-solvers');
  const [activeSection, setActiveSection] = useState('quick-stats');

  const tabs = [
    { id: 'problem-solvers', name: 'Problem Solvers', icon: 'Terminal' },
    { id: 'collaborators', name: 'Collaborators', icon: 'Users' },
    { id: 'contributors', name: 'Contributors', icon: 'Heart' },
    { id: 'overall', name: 'Overall', icon: 'Trophy' }
  ];

  const sections = [
    { 
      id: 'quick-stats',
      name: 'Quick Stats',
      icon: 'BarChart3',
      description: 'View your performance at a glance'
    },
    { 
      id: 'detailed-profile',
      name: 'Detailed Profile',
      icon: 'User',
      description: 'Comprehensive achievement breakdown'
    },
    { 
      id: 'hall-of-fame',
      name: 'Hall of Fame',
      icon: 'Crown',
      description: 'Celebrate outstanding achievements'
    },
    { 
      id: 'leaderboards',
      name: 'Leaderboards',
      icon: 'Trophy',
      description: 'See how you rank against peers'
    },
    { 
      id: 'gamification',
      name: 'Gamification',
      icon: 'Gamepad2',
      description: 'Badges, streaks, and challenges'
    }
  ];

  const renderQuickStats = () => (
    <div className="space-y-8">
      {/* Enhanced Quick Stats - Eye-catching Design */}
      <div className="mb-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Achievement Dashboard</h2>
          <p className="text-gray-600">Track your coding journey and celebrate every milestone</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Featured College Rank Card */}
          <div className="lg:col-span-2 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-2xl p-8 text-white relative overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
            <div className="absolute top-4 right-4 opacity-20">
              <div className="w-32 h-32 rounded-full bg-white/10"></div>
            </div>
            <div className="absolute bottom-4 left-4 opacity-10">
              <div className="w-24 h-24 rounded-full bg-white/10"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-lg font-semibold mb-2 opacity-90">College Rank</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-5xl font-bold">#1,247</span>
                <span className="ml-3 text-green-300 text-lg font-semibold">+23 this week</span>
              </div>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Progress to #1,000</span>
                  <span>94%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full" style={{ width: '94%' }}></div>
                </div>
              </div>
              <p className="text-sm opacity-75">Keep solving problems to climb the leaderboard!</p>
            </div>
          </div>

          {/* Total Points */}
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white relative overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
            <div className="absolute top-2 right-2 opacity-20">
              <div className="w-16 h-16 rounded-full bg-white/10"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-lg font-semibold mb-2">Total Points</h3>
              <div className="flex items-baseline mb-2">
                <span className="text-3xl font-bold">2,847</span>
                <span className="ml-2 text-sm">pts</span>
              </div>
              <span className="text-purple-200 text-sm font-medium">+156 this week</span>
            </div>
          </div>

          {/* Badges Earned */}
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white relative overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
            <div className="absolute top-2 right-2 opacity-20">
              <div className="w-16 h-16 rounded-full bg-white/10"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-lg font-semibold mb-2">Badges Earned</h3>
              <div className="flex items-baseline mb-2">
                <span className="text-3xl font-bold">24</span>
                <span className="ml-2 text-sm">badges</span>
              </div>
              <span className="text-green-200 text-sm font-medium">+3 this week</span>
            </div>
          </div>

          {/* Current Streak */}
          <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-6 text-white relative overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
            <div className="absolute top-2 right-2 opacity-20">
              <div className="w-16 h-16 rounded-full bg-white/10"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-lg font-semibold mb-2">Current Streak</h3>
              <div className="flex items-baseline mb-2">
                <span className="text-3xl font-bold">23</span>
                <span className="ml-2 text-sm">days</span>
              </div>
              <span className="text-orange-200 text-sm font-medium">+1 this week</span>
            </div>
          </div>

          {/* Star Rating */}
          <div className="bg-gradient-to-br from-yellow-500 to-amber-600 rounded-2xl p-6 text-white relative overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
            <div className="absolute top-2 right-2 opacity-20">
              <div className="w-16 h-16 rounded-full bg-white/10"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-lg font-semibold mb-2">Average Rating</h3>
              <div className="flex items-center mb-2">
                <div className="flex space-x-1 mr-3">
                  <span className="text-2xl">⭐</span>
                  <span className="text-2xl">⭐</span>
                  <span className="text-2xl">⭐</span>
                  <span className="text-2xl">⭐</span>
                  <span className="text-2xl opacity-50">⭐</span>
                </div>
                <span className="text-2xl font-bold">4.2</span>
              </div>
              <span className="text-yellow-200 text-sm font-medium">+0.3 this week</span>
            </div>
          </div>
        </div>

        {/* Achievement Highlights */}
        <div className="mb-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Featured Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-6 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2">Top Performer</h3>
              <p className="text-purple-100">Solved 50+ problems this month</p>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-6 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-2">Code Master</h3>
              <p className="text-green-100">Perfect solutions in 3 languages</p>
            </div>
            <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl p-6 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-2">Community Hero</h3>
              <p className="text-orange-100">Helped 25+ fellow students</p>
            </div>
          </div>
        </div>

        {/* Achievement Progress Bar */}
        <div className="mt-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Next Milestone</h3>
              <p className="text-gray-600 text-sm">You're 153 points away from reaching rank #1,000!</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-purple-600">94%</p>
              <p className="text-gray-500 text-xs">Complete</p>
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out" style={{ width: '94%' }}></div>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">2,847 points</span>
            <span className="font-semibold text-purple-600">🎯 Target: 3,000 points</span>
          </div>
        </div>

        {/* 📊 Personalized Insights Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">📊 Personalized Insights</h2>
          
          {/* Performance Comparisons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Success Rate Comparison */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Success Rate Analysis</h3>
                <div className="text-2xl">📈</div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">Your Success Rate</span>
                    <span className="text-lg font-bold text-green-600">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">Global Average</span>
                    <span className="text-lg font-bold text-blue-600">62%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '62%' }}></div>
                  </div>
                </div>
                
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-green-700 font-medium">
                    🎉 You're performing 16% better than the global average!
                  </p>
                </div>
              </div>
            </div>

            {/* Time Efficiency Analysis */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Time Efficiency</h3>
                <div className="text-2xl">⏱️</div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">Your Avg Time</span>
                    <span className="text-lg font-bold text-purple-600">18 min</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">Recommended Time</span>
                    <span className="text-lg font-bold text-orange-600">25 min</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: '83%' }}></div>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-sm text-purple-700 font-medium">
                    ⚡ You're solving problems 28% faster than recommended!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Topic Mastery Levels */}
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">🧠 Topic Mastery Levels</h3>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View Details</button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { topic: 'Arrays', level: 'Expert', progress: 92, color: 'green', problems: 45 },
                { topic: 'Strings', level: 'Advanced', progress: 78, color: 'blue', problems: 32 },
                { topic: 'Trees', level: 'Intermediate', progress: 65, color: 'yellow', problems: 23 },
                { topic: 'Graphs', level: 'Beginner', progress: 34, color: 'red', problems: 12 },
                { topic: 'Dynamic Programming', level: 'Intermediate', progress: 58, color: 'purple', problems: 18 },
                { topic: 'Recursion', level: 'Advanced', progress: 82, color: 'indigo', problems: 28 }
              ].map((topic) => (
                <div key={topic.topic} className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">{topic.topic}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      topic.level === 'Expert' ? 'bg-green-100 text-green-800' :
                      topic.level === 'Advanced' ? 'bg-blue-100 text-blue-800' :
                      topic.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {topic.level}
                    </span>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{topic.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-${topic.color}-500`}
                        style={{ width: `${topic.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-500">
                    {topic.problems} problems solved
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeSection) {
      case 'quick-stats':
        return renderQuickStats();
      case 'detailed-profile':
        return <AchievementProfile />;
      case 'hall-of-fame':
        return <HallOfFame />;
      case 'leaderboards':
        return (
          <div className="space-y-6">
            <LeaderboardTabs 
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
            <LeaderboardTable activeTab={activeTab} />
          </div>
        );
      case 'gamification':
        return <GameficationElements />;
      default:
        return renderQuickStats();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="mb-6 lg:mb-0">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Achievement Center</h1>
                <p className="text-gray-600 max-w-2xl">
                  Celebrate diverse contributions beyond pure problem-solving speed. Track your progress, 
                  earn badges, and compete across multiple dimensions of coding excellence.
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <button onClick={() => window.open('https://www.linkedin.com/', '_blank', 'noopener')} className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 academic-transition">
                  <Icon name="Share" size={16} />
                  <span>Share Achievements</span>
                </button>
                <button onClick={() => alert('Export coming soon. Visit Tutorials for guidance.')} className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 academic-transition">
                  <Icon name="Download" size={16} />
                  <span>Export Data</span>
                </button>
              </div>
            </div>
          </div>

          {/* Section Navigation */}
          <div className="mb-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`p-4 rounded-lg text-left transition-all duration-200 ${
                    activeSection === section.id 
                      ? 'bg-blue-50 border-2 border-blue-200 text-blue-700' 
                      : 'bg-gray-50 border-2 border-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <Icon name={section.icon} size={20} className={activeSection === section.id ? 'text-blue-600' : 'text-gray-500'} />
                    <h3 className="font-semibold text-sm">{section.name}</h3>
                  </div>
                  <p className="text-xs opacity-80">{section.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          {renderContent()}

          {/* Share Achievements Section */}
          {activeSection === 'quick-stats' && (
            <div className="mt-8 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 border border-blue-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Share Your Success</h3>
                  <p className="text-gray-600">
                    Showcase your achievements on professional networks and inspire others in your coding journey.
                  </p>
                </div>
                <div className="flex space-x-3">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 academic-transition">
                    <Icon name="Linkedin" size={16} />
                    <span>LinkedIn</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 academic-transition">
                    <Icon name="Twitter" size={16} />
                    <span>Twitter</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AchievementCenter;
