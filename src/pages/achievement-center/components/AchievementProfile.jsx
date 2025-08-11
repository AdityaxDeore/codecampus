import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AchievementProfile = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const userProfile = {
    name: "Alex Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    university: "MIT",
    branch: "Computer Science",
    year: "3rd Year",
    totalBadges: 24,
    totalPoints: 2847,
    rank: 1,
    joinDate: "September 2023"
  };

  const badges = [
    {
      id: 1,
      name: "Streak Master",
      description: "Solved problems for 30 consecutive days",
      category: "consistency",
      icon: "Flame",
      color: "text-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      earned: true,
      earnedDate: "2024-07-15",
      rarity: "rare"
    },
    {
      id: 2,
      name: "Algorithm Expert",
      description: "Mastered 50+ algorithm problems",
      category: "mastery",
      icon: "Brain",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      earned: true,
      earnedDate: "2024-06-20",
      rarity: "epic"
    },
    {
      id: 3,
      name: "Community Champion",
      description: "Helped 100+ fellow students",
      category: "community",
      icon: "Users",
      color: "text-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      earned: true,
      earnedDate: "2024-08-01",
      rarity: "legendary"
    },
    {
      id: 4,
      name: "Speed Demon",
      description: "Solved 10 problems in under 1 hour",
      category: "mastery",
      icon: "Zap",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      earned: true,
      earnedDate: "2024-07-28",
      rarity: "rare"
    },
    {
      id: 5,
      name: "Project Innovator",
      description: "Created 5 innovative projects",
      category: "career",
      icon: "Lightbulb",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      earned: true,
      earnedDate: "2024-08-05",
      rarity: "epic"
    },
    {
      id: 6,
      name: "Data Structures Pro",
      description: "Master all data structure concepts",
      category: "mastery",
      icon: "Database",
      color: "text-indigo-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      earned: false,
      progress: 85,
      rarity: "epic"
    },
    {
      id: 7,
      name: "Mentor Master",
      description: "Mentor 20+ junior students",
      category: "community",
      icon: "GraduationCap",
      color: "text-teal-500",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      earned: false,
      progress: 60,
      rarity: "legendary"
    },
    {
      id: 8,
      name: "Industry Ready",
      description: "Complete 10 industry challenges",
      category: "career",
      icon: "Briefcase",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      earned: false,
      progress: 40,
      rarity: "legendary"
    }
  ];

  const skillCertifications = [
    {
      id: 1,
      name: "Algorithms & Data Structures",
      level: "Advanced",
      progress: 95,
      verified: true,
      earnedDate: "2024-07-10",
      validUntil: "2025-07-10"
    },
    {
      id: 2,
      name: "Web Development",
      level: "Intermediate",
      progress: 78,
      verified: true,
      earnedDate: "2024-06-15",
      validUntil: "2025-06-15"
    },
    {
      id: 3,
      name: "Machine Learning",
      level: "Beginner",
      progress: 45,
      verified: false,
      inProgress: true
    },
    {
      id: 4,
      name: "System Design",
      level: "Intermediate",
      progress: 62,
      verified: false,
      inProgress: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Badges', count: badges?.length },
    { id: 'consistency', name: 'Consistency', count: badges?.filter(b => b?.category === 'consistency')?.length },
    { id: 'mastery', name: 'Mastery', count: badges?.filter(b => b?.category === 'mastery')?.length },
    { id: 'community', name: 'Community', count: badges?.filter(b => b?.category === 'community')?.length },
    { id: 'career', name: 'Career', count: badges?.filter(b => b?.category === 'career')?.length }
  ];

  const filteredBadges = selectedCategory === 'all' 
    ? badges 
    : badges?.filter(badge => badge?.category === selectedCategory);

  const getRarityColor = (rarity) => {
    const colors = {
      common: 'border-gray-300 bg-gray-50',
      rare: 'border-blue-300 bg-blue-50',
      epic: 'border-purple-300 bg-purple-50',
      legendary: 'border-yellow-300 bg-yellow-50'
    };
    return colors?.[rarity] || colors?.common;
  };

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-white rounded-lg border border-gray-200 academic-shadow p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="flex-shrink-0">
            <Image
              src={userProfile?.avatar}
              alt={userProfile?.name}
              className="w-20 h-20 rounded-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900">{userProfile?.name}</h2>
            <p className="text-gray-600">{userProfile?.branch} • {userProfile?.year}</p>
            <p className="text-sm text-gray-500">{userProfile?.university} • Joined {userProfile?.joinDate}</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{userProfile?.totalPoints?.toLocaleString()}</div>
              <div className="text-sm text-gray-500">Total Points</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">#{userProfile?.rank}</div>
              <div className="text-sm text-gray-500">Global Rank</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{userProfile?.totalBadges}</div>
              <div className="text-sm text-gray-500">Badges Earned</div>
            </div>
          </div>
        </div>
      </div>
      {/* Skill Certifications */}
      <div className="bg-white rounded-lg border border-gray-200 academic-shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Skill Certifications</h3>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            View All
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillCertifications?.map((cert) => (
            <div key={cert?.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{cert?.name}</h4>
                {cert?.verified && (
                  <div className="flex items-center space-x-1 text-green-600">
                    <Icon name="CheckCircle" size={16} />
                    <span className="text-xs">Verified</span>
                  </div>
                )}
              </div>
              
              <div className="flex items-center justify-between mb-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  cert?.level === 'Advanced' ? 'bg-green-100 text-green-800' :
                  cert?.level === 'Intermediate'? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {cert?.level}
                </span>
                <span className="text-sm text-gray-600">{cert?.progress}%</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full academic-transition"
                  style={{ width: `${cert?.progress}%` }}
                ></div>
              </div>
              
              {cert?.verified && (
                <p className="text-xs text-gray-500">
                  Valid until {new Date(cert.validUntil)?.toLocaleDateString()}
                </p>
              )}
              {cert?.inProgress && (
                <p className="text-xs text-blue-600">In Progress</p>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Badges Section */}
      <div className="bg-white rounded-lg border border-gray-200 academic-shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Achievement Badges</h3>
          <button className="flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-700 font-medium">
            <Icon name="Share" size={16} />
            <span>Share Achievements</span>
          </button>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setSelectedCategory(category?.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium academic-transition ${
                selectedCategory === category?.id
                  ? 'bg-blue-100 text-blue-700 border border-blue-200' :'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category?.name} ({category?.count})
            </button>
          ))}
        </div>
        
        {/* Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredBadges?.map((badge) => (
            <div
              key={badge?.id}
              className={`relative border-2 rounded-lg p-4 academic-transition hover:shadow-md ${
                badge?.earned 
                  ? `${badge?.bgColor} ${badge?.borderColor}` 
                  : 'bg-gray-50 border-gray-200 opacity-75'
              } ${getRarityColor(badge?.rarity)}`}
            >
              {badge?.rarity === 'legendary' && (
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Icon name="Crown" size={12} className="text-yellow-800" />
                </div>
              )}
              
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-3 ${
                  badge?.earned ? badge?.bgColor : 'bg-gray-100'
                }`}>
                  <Icon 
                    name={badge?.icon} 
                    size={24} 
                    className={badge?.earned ? badge?.color : 'text-gray-400'} 
                  />
                </div>
                
                <h4 className={`font-medium mb-1 ${
                  badge?.earned ? 'text-gray-900' : 'text-gray-500'
                }`}>
                  {badge?.name}
                </h4>
                
                <p className={`text-xs mb-3 ${
                  badge?.earned ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  {badge?.description}
                </p>
                
                {badge?.earned ? (
                  <div className="text-xs text-green-600 font-medium">
                    Earned {new Date(badge.earnedDate)?.toLocaleDateString()}
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div 
                        className="bg-blue-600 h-1.5 rounded-full academic-transition"
                        style={{ width: `${badge?.progress || 0}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500">
                      {badge?.progress || 0}% Complete
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementProfile;