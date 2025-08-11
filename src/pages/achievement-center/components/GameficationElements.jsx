import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const GameficationElements = () => {
  const [showUnlockAnimation, setShowUnlockAnimation] = useState(false);
  const [currentChallenge, setCurrentChallenge] = useState(0);

  const userProgress = {
    currentLevel: 12,
    currentXP: 2847,
    nextLevelXP: 3000,
    totalXP: 15420,
    streak: 23,
    longestStreak: 156
  };

  const recentUnlocks = [
    {
      id: 1,
      type: 'badge',
      name: 'Algorithm Master',
      description: 'Solved 100 algorithm problems',
      icon: 'Brain',
      color: 'text-purple-500',
      unlockedAt: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
    },
    {
      id: 2,
      type: 'level',
      name: 'Level 12',
      description: 'Reached experience level 12',
      icon: 'Star',
      color: 'text-yellow-500',
      unlockedAt: new Date(Date.now() - 5 * 60 * 60 * 1000) // 5 hours ago
    }
  ];

  const personalizedChallenges = [
    {
      id: 1,
      title: "Data Structures Deep Dive",
      description: "Master advanced tree and graph algorithms",
      progress: 65,
      target: 100,
      reward: "Tree Master Badge + 500 XP",
      difficulty: "Hard",
      timeLeft: "3 days",
      icon: "TreePine",
      color: "text-green-600"
    },
    {
      id: 2,
      title: "Community Helper",
      description: "Help 10 fellow students with their problems",
      progress: 7,
      target: 10,
      reward: "Mentor Badge + 300 XP",
      difficulty: "Medium",
      timeLeft: "1 week",
      icon: "Users",
      color: "text-blue-600"
    },
    {
      id: 3,
      title: "Speed Coding Challenge",
      description: "Solve 5 problems in under 30 minutes",
      progress: 2,
      target: 5,
      reward: "Speed Demon Badge + 400 XP",
      difficulty: "Hard",
      timeLeft: "2 days",
      icon: "Zap",
      color: "text-yellow-600"
    },
    {
      id: 4,
      title: "Project Showcase",
      description: "Upload and document 3 innovative projects",
      progress: 1,
      target: 3,
      reward: "Innovator Badge + 600 XP",
      difficulty: "Medium",
      timeLeft: "2 weeks",
      icon: "Lightbulb",
      color: "text-purple-600"
    }
  ];

  const skillGaps = [
    {
      skill: "Dynamic Programming",
      currentLevel: 65,
      targetLevel: 85,
      recommendedProblems: 12,
      estimatedTime: "2 weeks"
    },
    {
      skill: "System Design",
      currentLevel: 40,
      targetLevel: 70,
      recommendedProblems: 8,
      estimatedTime: "3 weeks"
    },
    {
      skill: "Graph Algorithms",
      currentLevel: 78,
      targetLevel: 90,
      recommendedProblems: 6,
      estimatedTime: "1 week"
    }
  ];

  useEffect(() => {
    // Simulate achievement unlock animation
    const timer = setTimeout(() => {
      setShowUnlockAnimation(true);
      setTimeout(() => setShowUnlockAnimation(false), 3000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const getDifficultyColor = (difficulty) => {
    const colors = {
      Easy: 'bg-green-100 text-green-800',
      Medium: 'bg-yellow-100 text-yellow-800',
      Hard: 'bg-red-100 text-red-800'
    };
    return colors?.[difficulty] || colors?.Medium;
  };

  const getTimeLeftColor = (timeLeft) => {
    if (timeLeft?.includes('day') && parseInt(timeLeft) <= 2) return 'text-red-600';
    if (timeLeft?.includes('day') && parseInt(timeLeft) <= 5) return 'text-yellow-600';
    return 'text-green-600';
  };

  return (
    <div className="space-y-6">
      {/* Achievement Unlock Animation */}
      {showUnlockAnimation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center academic-shadow-lg animate-pulse">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Brain" size={32} className="text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Achievement Unlocked!</h3>
            <p className="text-gray-600 mb-4">Algorithm Master</p>
            <div className="text-sm text-purple-600 font-medium">+500 XP</div>
          </div>
        </div>
      )}
      {/* Progress Overview */}
      <div className="bg-white rounded-lg border border-gray-200 academic-shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Your Progress</h3>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Icon name="Flame" size={16} className="text-orange-500" />
            <span>{userProgress?.streak} day streak</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Level Progress */}
          <div className="text-center">
            <div className="relative w-24 h-24 mx-auto mb-4">
              <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-gray-200"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={`${2 * Math.PI * 40}`}
                  strokeDashoffset={`${2 * Math.PI * 40 * (1 - (userProgress?.currentXP - (userProgress?.nextLevelXP - 153)) / 153)}`}
                  className="text-blue-600 academic-transition"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-900">{userProgress?.currentLevel}</div>
                  <div className="text-xs text-gray-500">Level</div>
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              {userProgress?.currentXP} / {userProgress?.nextLevelXP} XP
            </div>
          </div>

          {/* Total XP */}
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Zap" size={24} className="text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-purple-600">{userProgress?.totalXP?.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Total XP</div>
          </div>

          {/* Longest Streak */}
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Trophy" size={24} className="text-orange-600" />
            </div>
            <div className="text-2xl font-bold text-orange-600">{userProgress?.longestStreak}</div>
            <div className="text-sm text-gray-600">Best Streak</div>
          </div>
        </div>
      </div>
      {/* Recent Unlocks */}
      <div className="bg-white rounded-lg border border-gray-200 academic-shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Achievements</h3>
        <div className="space-y-3">
          {recentUnlocks?.map((unlock) => (
            <div key={unlock?.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center academic-shadow">
                  <Icon name={unlock?.icon} size={20} className={unlock?.color} />
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{unlock?.name}</h4>
                <p className="text-sm text-gray-600">{unlock?.description}</p>
              </div>
              <div className="text-xs text-gray-500">
                {unlock?.unlockedAt?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Personalized Challenges */}
      <div className="bg-white rounded-lg border border-gray-200 academic-shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Personalized Challenges</h3>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {personalizedChallenges?.slice(0, 4)?.map((challenge) => (
            <div key={challenge?.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md academic-transition">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <Icon name={challenge?.icon} size={20} className={challenge?.color} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{challenge?.title}</h4>
                    <p className="text-sm text-gray-600">{challenge?.description}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(challenge?.difficulty)}`}>
                  {challenge?.difficulty}
                </span>
              </div>

              <div className="mb-3">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium">{challenge?.progress}/{challenge?.target}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full academic-transition"
                    style={{ width: `${(challenge?.progress / challenge?.target) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Reward: {challenge?.reward}</span>
                <span className={`font-medium ${getTimeLeftColor(challenge?.timeLeft)}`}>
                  {challenge?.timeLeft} left
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Skill Gap Analysis */}
      <div className="bg-white rounded-lg border border-gray-200 academic-shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Skill Gap Recommendations</h3>
        
        <div className="space-y-4">
          {skillGaps?.map((skill, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-gray-900">{skill?.skill}</h4>
                <span className="text-sm text-gray-600">{skill?.estimatedTime}</span>
              </div>
              
              <div className="flex items-center space-x-4 mb-3">
                <div className="flex-1">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-600">Current</span>
                    <span className="font-medium">{skill?.currentLevel}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gray-400 h-2 rounded-full"
                      style={{ width: `${skill?.currentLevel}%` }}
                    ></div>
                  </div>
                </div>
                
                <Icon name="ArrowRight" size={16} className="text-gray-400" />
                
                <div className="flex-1">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-600">Target</span>
                    <span className="font-medium">{skill?.targetLevel}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${skill?.targetLevel}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  {skill?.recommendedProblems} recommended problems
                </span>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  Start Learning
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameficationElements;