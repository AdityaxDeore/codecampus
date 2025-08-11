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
  const [activeSection, setActiveSection] = useState('leaderboards');
  const [filters, setFilters] = useState({
    timePeriod: 'weekly',
    branch: 'all',
    university: 'all'
  });

  const sections = [
    { id: 'leaderboards', name: 'Leaderboards', icon: 'Trophy', description: 'Multi-dimensional rankings' },
    { id: 'achievements', name: 'My Achievements', icon: 'Award', description: 'Personal progress & badges' },
    { id: 'hall-of-fame', name: 'Hall of Fame', icon: 'Crown', description: 'Top performers & success stories' },
    { id: 'gamification', name: 'Progress & Challenges', icon: 'Target', description: 'Personalized growth tracking' }
  ];

  const quickStats = [
    {
      label: 'Global Rank',
      value: '#1,247',
      change: '+23',
      changeType: 'positive',
      icon: 'TrendingUp',
      color: 'text-blue-600'
    },
    {
      label: 'Total Points',
      value: '2,847',
      change: '+156',
      changeType: 'positive',
      icon: 'Zap',
      color: 'text-purple-600'
    },
    {
      label: 'Badges Earned',
      value: '24',
      change: '+3',
      changeType: 'positive',
      icon: 'Award',
      color: 'text-green-600'
    },
    {
      label: 'Current Streak',
      value: '23 days',
      change: '+1',
      changeType: 'positive',
      icon: 'Flame',
      color: 'text-orange-600'
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'leaderboards':
        return (
          <div className="space-y-6">
            <LeaderboardTabs
              activeTab={activeTab}
              onTabChange={setActiveTab}
              filters={filters}
              onFilterChange={setFilters}
            />
            <LeaderboardTable
              activeTab={activeTab}
              filters={filters}
            />
          </div>
        );
      case 'achievements':
        return <AchievementProfile />;
      case 'hall-of-fame':
        return <HallOfFame />;
      case 'gamification':
        return <GameficationElements />;
      default:
        return null;
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
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 academic-transition">
                  <Icon name="Share" size={16} />
                  <span>Share Achievements</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 academic-transition">
                  <Icon name="Download" size={16} />
                  <span>Export Report</span>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {quickStats?.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 academic-shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat?.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat?.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center ${stat?.color}`}>
                    <Icon name={stat?.icon} size={24} />
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <Icon 
                    name={stat?.changeType === 'positive' ? 'TrendingUp' : 'TrendingDown'} 
                    size={16} 
                    className={stat?.changeType === 'positive' ? 'text-green-500' : 'text-red-500'} 
                  />
                  <span className={`text-sm ml-1 ${
                    stat?.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat?.change} this week
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Section Navigation */}
          <div className="bg-white rounded-lg border border-gray-200 academic-shadow mb-8">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6" aria-label="Tabs">
                {sections?.map((section) => (
                  <button
                    key={section?.id}
                    onClick={() => setActiveSection(section?.id)}
                    className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm academic-transition ${
                      activeSection === section?.id
                        ? 'border-blue-500 text-blue-600' :'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon name={section?.icon} size={16} />
                    <span className="hidden sm:inline">{section?.name}</span>
                  </button>
                ))}
              </nav>
            </div>
            
            {/* Section Description */}
            <div className="px-6 py-4 bg-gray-50">
              <p className="text-sm text-gray-600">
                {sections?.find(s => s?.id === activeSection)?.description}
              </p>
            </div>
          </div>

          {/* Dynamic Content */}
          <div className="space-y-6">
            {renderContent()}
          </div>

          {/* Social Sharing Integration */}
          {activeSection === 'achievements' && (
            <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200 p-6">
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