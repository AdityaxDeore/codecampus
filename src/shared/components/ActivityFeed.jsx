import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import { cn } from '../../utils/cn';

const ACTIVITY_ICONS = {
  problem_solved: "CheckCircle",
  project_shared: "Share", 
  achievement: "Trophy",
  collaboration: "Users",
  forum_post: "MessageSquare",
  code_review: "Code",
  learning_path: "Map",
  study_group: "Users",
  homework: "Book",
  default: "Activity"
};

const ACTIVITY_COLORS = {
  problem_solved: "text-green-600 bg-green-100",
  project_shared: "text-blue-600 bg-blue-100", 
  achievement: "text-amber-600 bg-amber-100",
  collaboration: "text-purple-600 bg-purple-100",
  forum_post: "text-indigo-600 bg-indigo-100",
  code_review: "text-cyan-600 bg-cyan-100",
  learning_path: "text-violet-600 bg-violet-100",
  study_group: "text-rose-600 bg-rose-100",
  homework: "text-teal-600 bg-teal-100",
  default: "text-gray-600 bg-gray-100"
};

const DIFFICULTY_COLORS = {
  Easy: "text-green-600 bg-green-100",
  Medium: "text-amber-600 bg-amber-100", 
  Hard: "text-red-600 bg-red-100",
  default: "text-gray-600 bg-gray-100"
};

const ActivityFeed = ({
  activities = [],
  title = "Activity Feed",
  variant = "default", // default, compact, dashboard, forum
  showStats = false,
  statsData,
  autoRotate = false,
  rotationInterval = 3000,
  maxItems = 4,
  onItemClick,
  className
}) => {
  const [currentActivity, setCurrentActivity] = useState(0);
  
  useEffect(() => {
    if (!autoRotate) return;
    
    const interval = setInterval(() => {
      setCurrentActivity((prev) => (prev + 1) % activities.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [activities.length, autoRotate, rotationInterval]);

  const getActivityIcon = (type) => ACTIVITY_ICONS[type] || ACTIVITY_ICONS.default;
  const getActivityColor = (type) => ACTIVITY_COLORS[type] || ACTIVITY_COLORS.default;
  const getDifficultyColor = (difficulty) => DIFFICULTY_COLORS[difficulty] || DIFFICULTY_COLORS.default;

  const renderActivityItem = (activity) => {
    const isCompact = variant === 'compact';
    const isDashboard = variant === 'dashboard';
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        onClick={() => onItemClick?.(activity)}
        className={cn(
          "flex items-start space-x-4 p-3 rounded-lg transition-colors duration-200",
          onItemClick && "cursor-pointer hover:bg-gray-50"
        )}
      >
        {/* Avatar/Icon Section */}
        <div className="relative flex-shrink-0">
          {activity.avatar ? (
            <>
              <Image
                src={activity.avatar}
                alt={activity.user}
                className={cn(
                  "rounded-full object-cover",
                  isCompact ? "w-8 h-8" : "w-10 h-10"
                )}
              />
              <div className={cn(
                "absolute -bottom-1 -right-1 rounded-full flex items-center justify-center",
                isCompact ? "w-4 h-4" : "w-5 h-5",
                getActivityColor(activity.type)
              )}>
                <Icon 
                  name={getActivityIcon(activity.type)} 
                  size={isCompact ? 10 : 12} 
                />
              </div>
            </>
          ) : (
            <div className={cn(
              "rounded-lg flex items-center justify-center",
              isCompact ? "w-8 h-8" : "w-10 h-10",
              getActivityColor(activity.type)
            )}>
              <Icon 
                name={getActivityIcon(activity.type)} 
                size={isCompact ? 16 : 20} 
              />
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center space-x-2 mb-1">
            <span className={cn(
              "font-semibold text-gray-900",
              isCompact ? "text-xs" : "text-sm"
            )}>
              {activity.user}
            </span>
            {activity.university && (
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                {activity.university}
              </span>
            )}
          </div>

          {/* Main Content */}
          <p className={cn(
            "text-gray-700",
            isCompact ? "text-xs" : "text-sm",
            "mb-2"
          )}>
            <span>{activity.action} </span>
            <span className="font-medium text-gray-900">
              {activity.target}
            </span>
            {activity.difficulty && (
              <span className={cn(
                "ml-2 text-xs px-2 py-1 rounded-full",
                getDifficultyColor(activity.difficulty)
              )}>
                {activity.difficulty}
              </span>
            )}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">
              {activity.time}
            </span>
            <div className="flex items-center space-x-3 text-xs text-gray-500">
              {activity.points && (
                <span className="flex items-center space-x-1">
                  <Icon name="Star" size={12} />
                  <span>+{activity.points}</span>
                </span>
              )}
              {activity.likes && (
                <span className="flex items-center space-x-1">
                  <Icon name="Heart" size={12} />
                  <span>{activity.likes}</span>
                </span>
              )}
              {activity.replies && (
                <span className="flex items-center space-x-1">
                  <Icon name="MessageCircle" size={12} />
                  <span>{activity.replies}</span>
                </span>
              )}
              {activity.streak && (
                <span className="flex items-center space-x-1">
                  <Icon name="Zap" size={12} />
                  <span>{activity.streak} day streak</span>
                </span>
              )}
              {activity.collaborators && (
                <span className="flex items-center space-x-1">
                  <Icon name="Users" size={12} />
                  <span>{activity.collaborators}</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const renderStats = () => {
    if (!showStats || !statsData) return null;

    return (
      <div className="grid grid-cols-2 gap-6 mb-8">
        {statsData.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center space-x-3 mb-3">
              <div className={cn(
                "w-10 h-10 rounded-lg flex items-center justify-center",
                `bg-${stat.color}-100`
              )}>
                <Icon name={stat.icon} size={20} className={`text-${stat.color}-600`} />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            </div>
            {stat.description && (
              <p className="text-sm text-gray-600">{stat.description}</p>
            )}
          </div>
        ))}
      </div>
    );
  };

  // Main container styles based on variant
  const containerStyles = cn(
    "w-full",
    variant === "forum" && "max-w-4xl mx-auto",
    variant === "dashboard" && "bg-white rounded-xl border border-gray-200 p-6 shadow-sm",
    className
  );

  // Feed container styles
  const feedStyles = cn(
    "bg-white",
    variant !== "dashboard" && "rounded-2xl shadow-xl p-6",
    "max-h-[calc(100vh-16rem)] overflow-y-auto"
  );

  return (
    <div className={containerStyles}>
      {/* Stats Section */}
      {renderStats()}

      {/* Feed Section */}
      <div className={feedStyles}>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          {autoRotate && (
            <div className="flex items-center space-x-2 text-green-600">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Live</span>
            </div>
          )}
        </div>

        {/* Activity Items */}
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            {(autoRotate 
              ? activities.slice(currentActivity, currentActivity + maxItems)
              : activities
            ).map((activity) => (
              <div key={activity.id}>
                {renderActivityItem(activity)}
              </div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;
