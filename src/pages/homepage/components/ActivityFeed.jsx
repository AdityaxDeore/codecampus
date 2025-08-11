import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ActivityFeed = () => {
  const [currentActivity, setCurrentActivity] = useState(0);

  const activities = [
    {
      id: 1,
      type: "problem_solved",
      user: "Sarah M.",
      university: "MIT",
      action: "solved",
      target: "Binary Tree Traversal",
      difficulty: "Medium",
      time: "2 minutes ago",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
      points: 150
    },
    {
      id: 2,
      type: "project_shared",
      user: "Alex K.",
      university: "Stanford",
      action: "shared project",
      target: "AI Chess Engine",
      time: "5 minutes ago",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      likes: 23
    },
    {
      id: 3,
      type: "achievement",
      user: "Maya P.",
      university: "UC Berkeley",
      action: "earned",
      target: "Algorithm Master Badge",
      time: "8 minutes ago",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      streak: 30
    },
    {
      id: 4,
      type: "collaboration",
      user: "David L.",
      university: "Carnegie Mellon",
      action: "started collaboration on",
      target: "Machine Learning Project",
      time: "12 minutes ago",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      collaborators: 4
    },
    {
      id: 5,
      type: "problem_solved",
      user: "Emma R.",
      university: "Harvard",
      action: "solved",
      target: "Dynamic Programming Challenge",
      difficulty: "Hard",
      time: "15 minutes ago",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
      points: 300
    },
    {
      id: 6,
      type: "forum_post",
      user: "James W.",
      university: "Georgia Tech",
      action: "posted in",
      target: "Data Structures Forum",
      time: "18 minutes ago",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
      replies: 12
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentActivity((prev) => (prev + 1) % activities?.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [activities?.length]);

  const getActivityIcon = (type) => {
    const iconMap = {
      problem_solved: "CheckCircle",
      project_shared: "Share",
      achievement: "Trophy",
      collaboration: "Users",
      forum_post: "MessageSquare"
    };
    return iconMap?.[type] || "Activity";
  };

  const getActivityColor = (type) => {
    const colorMap = {
      problem_solved: "text-green-600 bg-green-100",
      project_shared: "text-blue-600 bg-blue-100",
      achievement: "text-amber-600 bg-amber-100",
      collaboration: "text-purple-600 bg-purple-100",
      forum_post: "text-indigo-600 bg-indigo-100"
    };
    return colorMap?.[type] || "text-gray-600 bg-gray-100";
  };

  const getDifficultyColor = (difficulty) => {
    const colorMap = {
      Easy: "text-green-600 bg-green-100",
      Medium: "text-amber-600 bg-amber-100",
      Hard: "text-red-600 bg-red-100"
    };
    return colorMap?.[difficulty] || "";
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="Zap" size={16} />
                <span>Live Campus Activity</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                See What Your Peers Are
                <span className="text-blue-600"> Achieving</span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed">
                Join a thriving community where every solution shared, project built, and milestone reached inspires others to reach higher.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Icon name="TrendingUp" size={20} className="text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">94%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Students report improved coding skills within 30 days</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon name="Users" size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">2.3K</div>
                    <div className="text-sm text-gray-600">Active Today</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Students currently online and coding together</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Activity Feed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 max-h-96 overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Campus Activity</h3>
                <div className="flex items-center space-x-2 text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live</span>
                </div>
              </div>

              <div className="space-y-4">
                <AnimatePresence mode="wait">
                  {activities?.slice(currentActivity, currentActivity + 4)?.map((activity, index) => (
                    <motion.div
                      key={activity?.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="relative flex-shrink-0">
                        <Image
                          src={activity?.avatar}
                          alt={activity?.user}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center ${getActivityColor(activity?.type)}`}>
                          <Icon name={getActivityIcon(activity?.type)} size={12} />
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-semibold text-gray-900 text-sm">{activity?.user}</span>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            {activity?.university}
                          </span>
                        </div>

                        <p className="text-sm text-gray-700 mb-2">
                          <span>{activity?.action} </span>
                          <span className="font-medium text-gray-900">{activity?.target}</span>
                          {activity?.difficulty && (
                            <span className={`ml-2 text-xs px-2 py-1 rounded-full ${getDifficultyColor(activity?.difficulty)}`}>
                              {activity?.difficulty}
                            </span>
                          )}
                        </p>

                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">{activity?.time}</span>
                          <div className="flex items-center space-x-3 text-xs text-gray-500">
                            {activity?.points && (
                              <span className="flex items-center space-x-1">
                                <Icon name="Star" size={12} />
                                <span>+{activity?.points}</span>
                              </span>
                            )}
                            {activity?.likes && (
                              <span className="flex items-center space-x-1">
                                <Icon name="Heart" size={12} />
                                <span>{activity?.likes}</span>
                              </span>
                            )}
                            {activity?.replies && (
                              <span className="flex items-center space-x-1">
                                <Icon name="MessageCircle" size={12} />
                                <span>{activity?.replies}</span>
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <button className="w-full text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center justify-center space-x-2 py-2 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                  <span>View All Activity</span>
                  <Icon name="ArrowRight" size={16} />
                </button>
              </div>
            </div>

            {/* Floating notification */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -top-4 -left-4 bg-emerald-500 text-white px-4 py-2 rounded-lg shadow-lg"
            >
              <div className="flex items-center space-x-2">
                <Icon name="Bell" size={16} />
                <span className="text-sm font-medium">New Achievement!</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ActivityFeed;