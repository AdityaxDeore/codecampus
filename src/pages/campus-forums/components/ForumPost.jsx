import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ForumPost = ({ post, onUpvote, onDownvote, onReply, onBookmark }) => {
  const [showReplies, setShowReplies] = useState(false);
  const [replyText, setReplyText] = useState('');

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const postTime = new Date(timestamp);
    const diffInMinutes = Math.floor((now - postTime) / (1000 * 60));
    
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  const getBadgeColor = (level) => {
    switch (level) {
      case 'Expert': return 'bg-trust text-trust-foreground';
      case 'Advanced': return 'bg-secondary text-secondary-foreground';
      case 'Intermediate': return 'bg-accent text-accent-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const handleReplySubmit = () => {
    if (replyText?.trim()) {
      onReply(post?.id, replyText);
      setReplyText('');
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg academic-shadow hover:academic-shadow-lg academic-transition">
      {/* Post Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Icon name="User" size={20} color="white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-foreground">{post?.author?.name}</span>
                <span className={`px-2 py-1 text-xs rounded-full ${getBadgeColor(post?.author?.level)}`}>
                  {post?.author?.level}
                </span>
                {post?.author?.verified && (
                  <Icon name="CheckCircle" size={16} className="text-success" />
                )}
              </div>
              <div className="text-sm text-muted-foreground">
                {post?.author?.year} • {post?.author?.branch} • {formatTimeAgo(post?.timestamp)}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              iconName="Bookmark"
              onClick={() => onBookmark(post?.id)}
              className={post?.bookmarked ? 'text-accent' : ''}
            />
            <Button variant="ghost" size="sm" iconName="MoreHorizontal" />
          </div>
        </div>

        {/* Post Content */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-foreground mb-2">{post?.title}</h3>
          <div className="text-foreground leading-relaxed">
            {post?.content?.split('\n')?.map((paragraph, index) => (
              <p key={index} className="mb-2">{paragraph}</p>
            ))}
          </div>
          
          {/* Code Block */}
          {post?.codeSnippet && (
            <div className="mt-4 bg-muted rounded-lg p-4 border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">Code</span>
                <Button variant="ghost" size="sm" iconName="Copy" />
              </div>
              <pre className="text-sm text-foreground overflow-x-auto">
                <code>{post?.codeSnippet}</code>
              </pre>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {post?.tags?.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full hover:bg-primary hover:text-primary-foreground academic-transition cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Post Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                size="sm"
                iconName="ArrowUp"
                onClick={() => onUpvote(post?.id)}
                className={post?.userVote === 'up' ? 'text-success' : ''}
              />
              <span className="text-sm font-medium text-foreground">{post?.upvotes - post?.downvotes}</span>
              <Button
                variant="ghost"
                size="sm"
                iconName="ArrowDown"
                onClick={() => onDownvote(post?.id)}
                className={post?.userVote === 'down' ? 'text-destructive' : ''}
              />
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              iconName="MessageSquare"
              onClick={() => setShowReplies(!showReplies)}
            >
              {post?.replies?.length} replies
            </Button>
            
            <Button variant="ghost" size="sm" iconName="Share">
              Share
            </Button>
          </div>

          {post?.status && (
            <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm ${
              post?.status === 'solved' ?'bg-success/10 text-success' :'bg-warning/10 text-warning'
            }`}>
              <Icon 
                name={post?.status === 'solved' ? 'CheckCircle' : 'Clock'} 
                size={16} 
              />
              <span className="capitalize">{post?.status}</span>
            </div>
          )}
        </div>
      </div>
      {/* Replies Section */}
      {showReplies && (
        <div className="p-6 bg-muted/30">
          {/* Reply Input */}
          <div className="mb-4">
            <div className="flex space-x-3">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Icon name="User" size={16} color="white" />
              </div>
              <div className="flex-1">
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e?.target?.value)}
                  placeholder="Write a reply..."
                  className="w-full p-3 border border-border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  rows="3"
                />
                <div className="flex justify-end mt-2">
                  <Button
                    variant="default"
                    size="sm"
                    onClick={handleReplySubmit}
                    disabled={!replyText?.trim()}
                  >
                    Reply
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Existing Replies */}
          <div className="space-y-4">
            {post?.replies?.map((reply) => (
              <div key={reply?.id} className="flex space-x-3">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <Icon name="User" size={16} color="white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium text-foreground text-sm">{reply?.author?.name}</span>
                    <span className={`px-2 py-0.5 text-xs rounded-full ${getBadgeColor(reply?.author?.level)}`}>
                      {reply?.author?.level}
                    </span>
                    <span className="text-xs text-muted-foreground">{formatTimeAgo(reply?.timestamp)}</span>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">{reply?.content}</p>
                  <div className="flex items-center space-x-3 mt-2">
                    <Button variant="ghost" size="sm" iconName="ArrowUp" className="text-xs">
                      {reply?.upvotes}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-xs">
                      Reply
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ForumPost;