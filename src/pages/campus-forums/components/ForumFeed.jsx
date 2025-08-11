import React, { useState, useMemo } from 'react';
import ForumPost from './ForumPost';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

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

  const filteredAndSortedPosts = useMemo(() => {
    let filtered = posts;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered?.filter(post =>
        post?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        post?.content?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        post?.tags?.some(tag => tag?.toLowerCase()?.includes(searchQuery?.toLowerCase())) ||
        post?.author?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase())
      );
    }

    // Apply category filter
    if (filters?.category && filters?.category !== 'all') {
      filtered = filtered?.filter(post => post?.category === filters?.category);
    }

    // Apply branch filter
    if (filters?.branch && filters?.branch !== 'all') {
      filtered = filtered?.filter(post => post?.author?.branch?.toLowerCase()?.includes(filters?.branch?.replace('-', ' ')));
    }

    // Apply view mode filter
    if (viewMode === 'questions') {
      filtered = filtered?.filter(post => post?.isQuestion);
    } else if (viewMode === 'discussions') {
      filtered = filtered?.filter(post => !post?.isQuestion);
    }

    // Apply sorting
    switch (sortBy) {
      case 'popular':
        filtered?.sort((a, b) => (b?.upvotes - b?.downvotes) - (a?.upvotes - a?.downvotes));
        break;
      case 'trending':
        filtered?.sort((a, b) => {
          const aScore = (a?.upvotes - a?.downvotes) + a?.replies?.length * 2;
          const bScore = (b?.upvotes - b?.downvotes) + b?.replies?.length * 2;
          return bScore - aScore;
        });
        break;
      case 'unanswered':
        filtered = filtered?.filter(post => post?.isQuestion && post?.replies?.length === 0);
        filtered?.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        break;
      default: // recent
        filtered?.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    }

    return filtered;
  }, [posts, searchQuery, filters, sortBy, viewMode]);

  const handlePostAction = (action, postId, data) => {
    onPostAction(action, postId, data);
  };

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
            <span>{filteredAndSortedPosts?.length} posts found</span>
          </div>
        </div>
      </div>
      {/* Posts Feed */}
      <div className="space-y-6">
        {filteredAndSortedPosts?.length > 0 ? (
          filteredAndSortedPosts?.map((post) => (
            <ForumPost
              key={post?.id}
              post={post}
              onUpvote={(id) => handlePostAction('upvote', id)}
              onDownvote={(id) => handlePostAction('downvote', id)}
              onReply={(id, content) => handlePostAction('reply', id, content)}
              onBookmark={(id) => handlePostAction('bookmark', id)}
            />
          ))
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="MessageSquare" size={32} className="text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">No posts found</h3>
            <p className="text-muted-foreground mb-4">
              {searchQuery || filters?.category !== 'all' || filters?.branch !== 'all' ?'Try adjusting your search or filters' :'Be the first to start a discussion!'
              }
            </p>
            <Button variant="default" iconName="Plus" iconPosition="left">
              Create Post
            </Button>
          </div>
        )}
      </div>
      {/* Load More */}
      {filteredAndSortedPosts?.length > 0 && (
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