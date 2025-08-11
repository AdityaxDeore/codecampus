import React from 'react';
import Icon from '../../../components/AppIcon';

const ForumSidebar = ({ activeCategory, onCategoryChange }) => {
  const categories = [
    { id: 'all', name: 'All Posts', icon: 'Home', count: 2847, color: 'text-primary' },
    { id: 'study-groups', name: 'Study Groups', icon: 'Users', count: 456, color: 'text-secondary' },
    { id: 'project-collaboration', name: 'Project Collaboration', icon: 'GitBranch', count: 234, color: 'text-accent' },
    { id: 'career-advice', name: 'Career Advice', icon: 'Briefcase', count: 189, color: 'text-trust' },
    { id: 'technical-help', name: 'Technical Help', icon: 'HelpCircle', count: 567, color: 'text-warning' },
    { id: 'industry-insights', name: 'Industry Insights', icon: 'TrendingUp', count: 123, color: 'text-success' }
  ];

  const trendingTopics = [
    { name: 'React Hooks', posts: 45, trend: 'up' },
    { name: 'Data Structures', posts: 67, trend: 'up' },
    { name: 'Machine Learning', posts: 34, trend: 'up' },
    { name: 'System Design', posts: 23, trend: 'down' },
    { name: 'Web Development', posts: 89, trend: 'up' }
  ];

  const expertHours = [
    { name: 'Dr. Sarah Chen', topic: 'Algorithms & DS', time: '2:00 PM Today', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150' },
    { name: 'Prof. Michael Kumar', topic: 'Machine Learning', time: '4:00 PM Today', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150' },
    { name: 'Industry Expert', topic: 'Career Guidance', time: '6:00 PM Tomorrow', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150' }
  ];

  return (
    <div className="w-80 bg-card border-r border-border h-full overflow-y-auto">
      <div className="p-6">
        {/* Categories */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
            <Icon name="Folder" size={20} className="mr-2" />
            Categories
          </h3>
          <div className="space-y-2">
            {categories?.map((category) => (
              <button
                key={category?.id}
                onClick={() => onCategoryChange(category?.id)}
                className={`w-full flex items-center justify-between p-3 rounded-lg academic-transition ${
                  activeCategory === category?.id
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted text-foreground'
                }`}
              >
                <div className="flex items-center">
                  <Icon 
                    name={category?.icon} 
                    size={18} 
                    className={activeCategory === category?.id ? '' : category?.color}
                  />
                  <span className="ml-3 text-sm font-medium">{category?.name}</span>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activeCategory === category?.id 
                    ? 'bg-primary-foreground/20 text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {category?.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Trending Topics */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
            <Icon name="TrendingUp" size={20} className="mr-2" />
            Trending Topics
          </h3>
          <div className="space-y-3">
            {trendingTopics?.map((topic, index) => (
              <div key={index} className="flex items-center justify-between p-2 hover:bg-muted rounded-lg academic-transition cursor-pointer">
                <div className="flex items-center">
                  <div className={`w-2 h-2 rounded-full mr-3 ${
                    topic?.trend === 'up' ? 'bg-success' : 'bg-warning'
                  }`}></div>
                  <div>
                    <div className="text-sm font-medium text-foreground">{topic?.name}</div>
                    <div className="text-xs text-muted-foreground">{topic?.posts} posts</div>
                  </div>
                </div>
                <Icon 
                  name={topic?.trend === 'up' ? 'TrendingUp' : 'TrendingDown'} 
                  size={16} 
                  className={topic?.trend === 'up' ? 'text-success' : 'text-warning'}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Expert Hours */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
            <Icon name="Clock" size={20} className="mr-2" />
            Expert Hours
          </h3>
          <div className="space-y-3">
            {expertHours?.map((expert, index) => (
              <div key={index} className="p-3 bg-muted rounded-lg hover:bg-muted/80 academic-transition cursor-pointer">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-3">
                    <Icon name="User" size={16} color="white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">{expert?.name}</div>
                    <div className="text-xs text-muted-foreground">{expert?.topic}</div>
                  </div>
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Icon name="Calendar" size={12} className="mr-1" />
                  {expert?.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumSidebar;