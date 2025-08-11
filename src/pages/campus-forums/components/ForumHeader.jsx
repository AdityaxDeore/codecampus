import React, { useState } from 'react';

import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ForumHeader = ({ onSearch, onFilterChange, onCreatePost }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBranch, setSelectedBranch] = useState('all');

  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'study-groups', label: 'Study Groups' },
    { value: 'project-collaboration', label: 'Project Collaboration' },
    { value: 'career-advice', label: 'Career Advice' },
    { value: 'technical-help', label: 'Technical Help' },
    { value: 'industry-insights', label: 'Industry Insights' }
  ];

  const branchOptions = [
    { value: 'all', label: 'All Branches' },
    { value: 'computer-science', label: 'Computer Science' },
    { value: 'information-technology', label: 'Information Technology' },
    { value: 'electronics', label: 'Electronics & Communication' },
    { value: 'mechanical', label: 'Mechanical Engineering' },
    { value: 'electrical', label: 'Electrical Engineering' }
  ];

  const handleSearch = (e) => {
    const query = e?.target?.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    onFilterChange({ category: value, branch: selectedBranch });
  };

  const handleBranchChange = (value) => {
    setSelectedBranch(value);
    onFilterChange({ category: selectedCategory, branch: value });
  };

  return (
    <div className="bg-card border-b border-border academic-shadow">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6">
        {/* Header Title */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Campus Forums</h1>
            <p className="text-muted-foreground">Connect, collaborate, and share knowledge with your academic community</p>
          </div>
          <Button 
            variant="default" 
            iconName="Plus" 
            iconPosition="left"
            onClick={onCreatePost}
            className="hidden sm:flex"
          >
            Create Post
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
          {/* Search Bar */}
          <div className="md:col-span-6">
            <Input
              type="search"
              placeholder="Search discussions, topics, or users..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full"
            />
          </div>

          {/* Category Filter */}
          <div className="md:col-span-3">
            <Select
              options={categoryOptions}
              value={selectedCategory}
              onChange={handleCategoryChange}
              placeholder="Category"
            />
          </div>

          {/* Branch Filter */}
          <div className="md:col-span-3">
            <Select
              options={branchOptions}
              value={selectedBranch}
              onChange={handleBranchChange}
              placeholder="Branch"
            />
          </div>
        </div>

        {/* Mobile Create Post Button */}
        <div className="sm:hidden mt-4">
          <Button 
            variant="default" 
            iconName="Plus" 
            iconPosition="left"
            onClick={onCreatePost}
            fullWidth
          >
            Create Post
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-border">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">2,847</div>
            <div className="text-sm text-muted-foreground">Active Discussions</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary">1,234</div>
            <div className="text-sm text-muted-foreground">Online Students</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">156</div>
            <div className="text-sm text-muted-foreground">Expert Contributors</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-trust">89</div>
            <div className="text-sm text-muted-foreground">Study Groups</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumHeader;