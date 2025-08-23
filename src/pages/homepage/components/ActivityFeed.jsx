import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import SharedActivityFeed from '../../../shared/components/ActivityFeed';

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

const statsData = [
  {
    icon: "TrendingUp",
    color: "green",
    value: "94%",
    label: "Success Rate",
    description: "Students report improved coding skills within 30 days"
  },
  {
    icon: "Users", 
    color: "blue",
    value: "2.3K",
    label: "Active Today",
    description: "Students currently online and coding together"
  }
];

const ActivityFeed = () => {
  const navigate = useNavigate();

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

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {statsData.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`w-10 h-10 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                      <Icon name={stat.icon} size={20} className={`text-${stat.color}-600`} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </div>
              ))}
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
            <SharedActivityFeed
              activities={activities}
              title="Campus Activity"
              autoRotate={true}
              maxItems={4}
              onItemClick={() => navigate('/status')}
            />

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