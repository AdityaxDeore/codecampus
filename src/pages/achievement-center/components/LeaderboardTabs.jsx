import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const LeaderboardTabs = ({ activeTab, onTabChange, filters, onFilterChange }) => {
  const [showFilters, setShowFilters] = useState(false);

  const tabs = [
    { id: 'problem-solvers', name: 'Problem Solvers', icon: 'Code', color: 'text-blue-600' },
    { id: 'community-contributors', name: 'Community Contributors', icon: 'Users', color: 'text-green-600' },
    { id: 'project-innovators', name: 'Project Innovators', icon: 'Lightbulb', color: 'text-purple-600' },
    { id: 'collaborative-leaders', name: 'Collaborative Leaders', icon: 'UserCheck', color: 'text-orange-600' }
  ];

  const timePeriods = [
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'all-time', label: 'All Time' }
  ];

  const branches = [
    { value: 'all', label: 'All Branches' },
    { value: 'computer-science', label: 'Computer Science' },
    { value: 'information-technology', label: 'Information Technology' },
    { value: 'electronics', label: 'Electronics & Communication' },
    { value: 'mechanical', label: 'Mechanical Engineering' }
  ];

  const universities = [
    { value: 'all', label: 'All Universities' },
    { value: 'mit', label: 'MIT' },
    { value: 'stanford', label: 'Stanford University' },
    { value: 'berkeley', label: 'UC Berkeley' },
    { value: 'cmu', label: 'Carnegie Mellon' }
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 academic-shadow">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <div className="flex flex-wrap items-center justify-between p-4">
          <div className="flex flex-wrap gap-2">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => onTabChange(tab?.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium academic-transition ${
                  activeTab === tab?.id
                    ? 'bg-blue-50 text-blue-600 border border-blue-200' :'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                }`}
              >
                <Icon name={tab?.icon} size={16} className={activeTab === tab?.id ? tab?.color : ''} />
                <span className="hidden sm:inline">{tab?.name}</span>
              </button>
            ))}
          </div>
          
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-lg academic-transition"
          >
            <Icon name="Filter" size={16} />
            <span>Filters</span>
            <Icon name={showFilters ? "ChevronUp" : "ChevronDown"} size={16} />
          </button>
        </div>
      </div>
      {/* Filters */}
      {showFilters && (
        <div className="p-4 bg-gray-50 border-b border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Time Period</label>
              <select
                value={filters?.timePeriod}
                onChange={(e) => onFilterChange({ ...filters, timePeriod: e?.target?.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {timePeriods?.map((period) => (
                  <option key={period?.value} value={period?.value}>
                    {period?.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Branch</label>
              <select
                value={filters?.branch}
                onChange={(e) => onFilterChange({ ...filters, branch: e?.target?.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {branches?.map((branch) => (
                  <option key={branch?.value} value={branch?.value}>
                    {branch?.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">University</label>
              <select
                value={filters?.university}
                onChange={(e) => onFilterChange({ ...filters, university: e?.target?.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {universities?.map((university) => (
                  <option key={university?.value} value={university?.value}>
                    {university?.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeaderboardTabs;