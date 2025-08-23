import React, { useState, useMemo } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import ActivityFeed from '../../../shared/components/ActivityFeed';

const ForumFeed = ({ posts, searchQuery, filters, onPostAction }) => {
  const [sortBy, setSortBy] = useState('recent');
  const [viewMode, setViewMode] = useState('all');

  const sortOptions = [
    { value: 'recent', label: 'Most Recent' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'trending', label: 'Trending' },
    { value: 'unanswered', label: 'Unanswered' }
  ];

  const viewOptions = [
    { value: 'all', label: 'All Posts' },
    { value: 'questions', label: 'Questions Only' },
    { value: 'discussions', label: 'Discussions Only' }
  ];

  // Transform and filter posts based on current view settings
  const transformedAndFilteredPosts = useMemo(() => {
    // First transform the posts into activity feed format
    const transformedPosts = posts?.map(post => ({
      id: post.id,
      type: post.isQuestion ? 'question' : 'forum_post',
      user: post.author.name,
      avatar: post.author.avatar,
      university: post.author.university,
      verified: post.author.verified,
      action: post.isQuestion ? 'asked' : 'posted',
      target: post.title || post.content,
      time: post.timestamp,
      likes: post.upvotes - post.downvotes,
      replies: post.replies?.length,
      tags: post.tags,
      category: post.category
    })) || [];

    let filtered = transformedPosts;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.target.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Apply category filter
    if (filters?.category && filters?.category !== 'all') {
      filtered = filtered.filter(post => post.category === filters.category);
    }

    // Apply view mode filter
    if (viewMode === 'questions') {
      filtered = filtered.filter(post => post.type === 'question');
    } else if (viewMode === 'discussions') {
      filtered = filtered.filter(post => post.type === 'forum_post');
    }

    // Apply sorting
    switch (sortBy) {
      case 'popular':
        filtered.sort((a, b) => b.likes - a.likes);
        break;
      case 'trending':
        filtered.sort((a, b) => {
          const aScore = a.likes + a.replies * 2;
          const bScore = b.likes + b.replies * 2;
          return bScore - aScore;
        });
        break;
      case 'unanswered':
        filtered = filtered.filter(post => 
          post.type === 'question' && (!post.replies || post.replies === 0)
        );
        filtered.sort((a, b) => new Date(b.time) - new Date(a.time));
        break;
      default: // recent
        filtered.sort((a, b) => new Date(b.time) - new Date(a.time));
    }

    return filtered;
  }, [posts, searchQuery, filters, sortBy, viewMode]);

  return (
    <div className="flex-1 max-w-4xl mx-auto">
      {/* Feed Controls */}
      <div className="bg-card border border-border rounded-lg p-4 mb-6 academic-shadow">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Icon name="Filter" size={18} className="text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Filters:</span>
            </div>
            <Select
              options={sortOptions}
              value={sortBy}
              onChange={setSortBy}
              className="w-40"
            />
            <Select
              options={viewOptions}
              value={viewMode}
              onChange={setViewMode}
              className="w-40"
            />
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name="MessageSquare" size={16} />
            <span>{transformedAndFilteredPosts.length} posts found</span>
          </div>
        </div>
      </div>

      {/* Posts Feed */}
      <div className="space-y-6">
        {transformedAndFilteredPosts.length > 0 ? (
          <ActivityFeed
            activities={transformedAndFilteredPosts}
            variant="forum"
            title={searchQuery ? 'Search Results' : 'Forum Posts'}
            onItemClick={(activity) => {
              // Map activity click to appropriate post action
              const postId = activity.id;
              const action = activity.type === 'question' ? 'answer' : 'reply';
              onPostAction(action, postId);
            }}
          />
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="MessageSquare" size={32} className="text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">No posts found</h3>
            <p className="text-muted-foreground mb-4">
              {searchQuery || filters?.category !== 'all' || filters?.branch !== 'all' 
                ? 'Try adjusting your search or filters' 
                : 'Be the first to start a discussion!'
              }
            </p>
            <Button variant="default" iconName="Plus" iconPosition="left">
              Create Post
            </Button>
          </div>
        )}
      </div>

      {/* Load More */}
      {transformedAndFilteredPosts.length > 0 && (
        <div className="text-center mt-8">
          <Button variant="outline" iconName="ChevronDown" iconPosition="right">
            Load More Posts
          </Button>
        </div>
      )}
    </div>
  );
};

export default ForumFeed;