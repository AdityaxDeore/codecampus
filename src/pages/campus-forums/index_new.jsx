import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const CampusForums = () => {
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [sortBy, setSortBy] = useState('hot');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showComments, setShowComments] = useState({});
  const [newComment, setNewComment] = useState({});
  const [playingVideos, setPlayingVideos] = useState({});
  const [friendRequests, setFriendRequests] = useState([]);
  const [showFriendRequests, setShowFriendRequests] = useState(false);
  const [createPostType, setCreatePostType] = useState('text');

  // Mock friend requests data
  const mockFriendRequests = [
    {
      id: 1,
      user: { name: "Emma Wilson", username: "emmaw", avatar: "👩‍💼", year: "2nd Year CS" },
      mutualFriends: 3,
      timestamp: "2h"
    },
    {
      id: 2,
      user: { name: "David Kim", username: "davidk", avatar: "👨‍🔬", year: "3rd Year CS" },
      mutualFriends: 7,
      timestamp: "1d"
    }
  ];

  // Mock stories data
  const mockStories = [
    {
      id: 1,
      user: { name: "Your Story", username: "you", avatar: "👤", isOwn: true },
      preview: "Add to your story",
      timestamp: new Date()
    },
    {
      id: 2,
      user: { name: "Sarah Chen", username: "sarahc", avatar: "👩‍💻" },
      preview: "React Hooks Deep Dive",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      hasNew: true
    },
    {
      id: 3,
      user: { name: "Alex Rodriguez", username: "alexr", avatar: "👨‍💻" },
      preview: "DSA Study Session",
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
      hasNew: true
    }
  ];

  // Mock posts data with enhanced features
  const mockPosts = [
    {
      id: 1,
      user: {
        name: "Sarah Chen",
        username: "sarahc",
        avatar: "👩‍💻",
        verified: true,
        year: "3rd Year CS"
      },
      content: {
        type: "image",
        text: "Just finished my React portfolio website! 🎉 What do you think of the design?",
        images: [
          { id: 1, url: "https://picsum.photos/600/400?random=1", alt: "Portfolio homepage" },
          { id: 2, url: "https://picsum.photos/600/400?random=2", alt: "Projects page" },
          { id: 3, url: "https://picsum.photos/600/400?random=3", alt: "About page" }
        ],
        tags: ["#ReactJS", "#Portfolio", "#WebDev", "#UI/UX"]
      },
      timestamp: "2h",
      likes: 234,
      comments: 45,
      shares: 12,
      upvotes: 187,
      downvotes: 12,
      isLiked: false,
      isSaved: false,
      userVote: null,
      category: "Project Showcase",
      replies: []
    },
    {
      id: 2,
      user: {
        name: "Alex Rodriguez",
        username: "alexr",
        avatar: "👨‍💻",
        verified: false,
        year: "2nd Year CS"
      },
      content: {
        type: "video",
        text: "Quick tutorial: Setting up a Node.js REST API in 5 minutes! 🚀",
        video: {
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          thumbnail: "https://picsum.photos/600/400?random=4",
          duration: "5:23"
        },
        tags: ["#NodeJS", "#API", "#Tutorial", "#Backend"]
      },
      timestamp: "4h",
      likes: 189,
      comments: 32,
      shares: 8,
      upvotes: 156,
      downvotes: 7,
      isLiked: true,
      isSaved: false,
      userVote: 'up',
      category: "Tutorials",
      replies: []
    },
    {
      id: 3,
      user: {
        name: "Mike Johnson",
        username: "mikej",
        avatar: "👨‍🎓",
        verified: false,
        year: "Graduate"
      },
      content: {
        type: "code",
        text: "Clean React component pattern I've been using lately 💡",
        code: `// Custom hook for API calls
const useApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
};`,
        tags: ["#ReactJS", "#CustomHooks", "#CleanCode"]
      },
      timestamp: "6h",
      likes: 156,
      comments: 67,
      shares: 23,
      upvotes: 143,
      downvotes: 4,
      isLiked: false,
      isSaved: true,
      userVote: null,
      category: "Technical Help",
      replies: []
    }
  ];

  useEffect(() => {
    setPosts(mockPosts);
    setStories(mockStories);
    setFriendRequests(mockFriendRequests);
  }, []);

  // Filter and sort posts
  const filteredAndSortedPosts = posts
    .filter(post => selectedCategory === 'all' || post.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'hot':
          const aScore = (a.upvotes - a.downvotes) * 2 + a.comments * 3;
          const bScore = (b.upvotes - b.downvotes) * 2 + b.comments * 3;
          return bScore - aScore;
        case 'new':
          return new Date(b.timestamp) - new Date(a.timestamp);
        case 'top':
          return (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes);
        default:
          return 0;
      }
    });

  const handleLike = (postId) => {
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            isLiked: !post.isLiked,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1
          }
        : post
    ));
  };

  const handleVote = (postId, voteType) => {
    setPosts(prev => prev.map(post => {
      if (post.id === postId) {
        const currentVote = post.userVote;
        let newUpvotes = post.upvotes;
        let newDownvotes = post.downvotes;
        let newUserVote = null;

        if (voteType === 'up') {
          if (currentVote === 'up') {
            newUpvotes -= 1;
          } else {
            newUpvotes += 1;
            if (currentVote === 'down') newDownvotes -= 1;
            newUserVote = 'up';
          }
        } else {
          if (currentVote === 'down') {
            newDownvotes -= 1;
          } else {
            newDownvotes += 1;
            if (currentVote === 'up') newUpvotes -= 1;
            newUserVote = 'down';
          }
        }

        return { ...post, upvotes: newUpvotes, downvotes: newDownvotes, userVote: newUserVote };
      }
      return post;
    }));
  };

  const handleSave = (postId) => {
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { ...post, isSaved: !post.isSaved }
        : post
    ));
  };

  const toggleComments = (postId) => {
    setShowComments(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const handleVideoToggle = (postId) => {
    setPlayingVideos(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const handleFriendRequest = (requestId, action) => {
    setFriendRequests(prev => prev.filter(req => req.id !== requestId));
  };

  const handleAddComment = (postId) => {
    const commentText = newComment[postId];
    if (!commentText?.trim()) return;

    const newReply = {
      id: Date.now(),
      user: { name: "Alex Chen", username: "alexc", avatar: "👤", verified: false },
      content: commentText,
      timestamp: "now",
      upvotes: 0,
      downvotes: 0,
      userVote: null
    };

    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { ...post, replies: [...post.replies, newReply], comments: post.comments + 1 }
        : post
    ));

    setNewComment(prev => ({ ...prev, [postId]: '' }));
  };

  // Instagram-style Post Component
  const InstagramPost = ({ post }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const renderContent = () => {
      switch (post.content.type) {
        case 'image':
          return (
            <>
              <p className="text-sm text-gray-900 mb-3 px-4">{post.content.text}</p>
              {post.content.images && (
                <div className="relative">
                  <div className="aspect-square bg-black overflow-hidden">
                    <img 
                      src={post.content.images[currentImageIndex].url}
                      alt={post.content.images[currentImageIndex].alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {post.content.images.length > 1 && (
                    <>
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {post.content.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full ${
                              index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                      
                      {currentImageIndex > 0 && (
                        <button
                          onClick={() => setCurrentImageIndex(prev => prev - 1)}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70"
                        >
                          <Icon name="ChevronLeft" size={20} />
                        </button>
                      )}
                      {currentImageIndex < post.content.images.length - 1 && (
                        <button
                          onClick={() => setCurrentImageIndex(prev => prev + 1)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70"
                        >
                          <Icon name="ChevronRight" size={20} />
                        </button>
                      )}
                      
                      <div className="absolute top-4 right-4 bg-black/50 text-white text-sm px-2 py-1 rounded-full">
                        {currentImageIndex + 1}/{post.content.images.length}
                      </div>
                    </>
                  )}
                </div>
              )}
            </>
          );
        
        case 'video':
          return (
            <>
              <p className="text-sm text-gray-900 mb-3 px-4">{post.content.text}</p>
              <div className="relative aspect-video bg-black">
                {playingVideos[post.id] ? (
                  <video 
                    src={post.content.video.url}
                    controls
                    autoPlay
                    className="w-full h-full object-cover"
                    onEnded={() => handleVideoToggle(post.id)}
                  />
                ) : (
                  <>
                    <img 
                      src={post.content.video.thumbnail}
                      alt="Video thumbnail"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={() => handleVideoToggle(post.id)}
                        className="bg-black/70 text-white rounded-full p-4 hover:bg-black/80 transition-colors"
                      >
                        <Icon name="Play" size={32} />
                      </button>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-2 py-1 rounded">
                      {post.content.video.duration}
                    </div>
                  </>
                )}
              </div>
            </>
          );

        case 'code':
          return (
            <>
              <p className="text-sm text-gray-900 mb-3 px-4">{post.content.text}</p>
              <div className="bg-gray-900 rounded-lg p-4 mx-4 mb-3 overflow-x-auto">
                <pre className="text-green-400 text-xs font-mono whitespace-pre-wrap">
                  {post.content.code}
                </pre>
              </div>
            </>
          );

        default:
          return <p className="text-sm text-gray-900 mb-3 px-4">{post.content.text}</p>;
      }
    };

    return (
      <div className="bg-white border border-gray-200 rounded-lg mb-4">
        {/* Post Header */}
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-sm">
              {post.user.avatar}
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <h3 className="font-semibold text-sm">{post.user.name}</h3>
                {post.user.verified && (
                  <Icon name="BadgeCheck" size={14} className="text-blue-500" />
                )}
                <span className="text-gray-400">·</span>
                <span className="text-xs text-gray-500">{post.timestamp}</span>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-xs text-gray-500">{post.user.year}</p>
                <span className="px-2 py-0.5 bg-blue-100 text-blue-600 text-xs rounded-full">
                  {post.category}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 bg-gray-100 rounded-full px-2 py-1">
              <Icon name="TrendingUp" size={12} className="text-green-500" />
              <span className="text-xs font-medium text-gray-700">
                {post.upvotes - post.downvotes}
              </span>
            </div>
            <Button variant="ghost" size="sm" iconName="MoreHorizontal" />
          </div>
        </div>

        {/* Post Content */}
        <div className="pb-3">
          {renderContent()}
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-3 px-4">
            {post.content.tags.map((tag, index) => (
              <span key={index} className="text-blue-600 text-sm hover:underline cursor-pointer">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Post Actions */}
        <div className="px-4 pb-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-6">
              {/* Reddit-style voting */}
              <div className="flex items-center space-x-1">
                <button 
                  onClick={() => handleVote(post.id, 'up')}
                  className={`p-1 rounded hover:bg-gray-100 ${
                    post.userVote === 'up' ? 'text-orange-500' : 'text-gray-600'
                  }`}
                >
                  <Icon name="ChevronUp" size={20} />
                </button>
                <span className={`text-sm font-medium min-w-[20px] text-center ${
                  post.userVote === 'up' ? 'text-orange-500' : 
                  post.userVote === 'down' ? 'text-blue-500' : 'text-gray-700'
                }`}>
                  {post.upvotes - post.downvotes}
                </span>
                <button 
                  onClick={() => handleVote(post.id, 'down')}
                  className={`p-1 rounded hover:bg-gray-100 ${
                    post.userVote === 'down' ? 'text-blue-500' : 'text-gray-600'
                  }`}
                >
                  <Icon name="ChevronDown" size={20} />
                </button>
              </div>

              {/* Instagram-style interactions */}
              <button 
                onClick={() => handleLike(post.id)}
                className="flex items-center space-x-1 hover:opacity-70"
              >
                <Icon 
                  name="Heart" 
                  size={20} 
                  className={post.isLiked ? "text-red-500 fill-current" : "text-gray-700"} 
                />
                <span className="text-sm text-gray-600">{post.likes}</span>
              </button>
              
              <button 
                onClick={() => toggleComments(post.id)}
                className="flex items-center space-x-1 hover:opacity-70"
              >
                <Icon name="MessageCircle" size={20} className="text-gray-700" />
                <span className="text-sm text-gray-600">{post.comments}</span>
              </button>
              
              <button className="flex items-center space-x-1 hover:opacity-70">
                <Icon name="Repeat2" size={20} className="text-gray-700" />
                <span className="text-sm text-gray-600">{post.shares}</span>
              </button>
              
              <button className="flex items-center space-x-1 hover:opacity-70">
                <Icon name="Send" size={20} className="text-gray-700" />
              </button>
            </div>
            
            <button 
              onClick={() => handleSave(post.id)}
              className="hover:opacity-70"
            >
              <Icon 
                name="Bookmark" 
                size={20} 
                className={post.isSaved ? "text-gray-900 fill-current" : "text-gray-700"} 
              />
            </button>
          </div>
        </div>

        {/* Comments Section */}
        {showComments[post.id] && (
          <div className="border-t border-gray-200">
            <div className="p-4 border-t border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white text-xs">
                  👤
                </div>
                <input 
                  type="text" 
                  placeholder="Write a comment..." 
                  value={newComment[post.id] || ''}
                  onChange={(e) => setNewComment(prev => ({ ...prev, [post.id]: e.target.value }))}
                  className="flex-1 text-sm outline-none bg-gray-50 rounded-full px-4 py-2"
                  onKeyPress={(e) => e.key === 'Enter' && handleAddComment(post.id)}
                />
                <button 
                  onClick={() => handleAddComment(post.id)}
                  className="text-blue-500 text-sm font-semibold hover:opacity-70 disabled:opacity-50"
                  disabled={!newComment[post.id]?.trim()}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Stories Component
  const Stories = () => (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {stories.map((story) => (
          <div key={story.id} className="flex-shrink-0 text-center">
            <div className={`w-16 h-16 rounded-full p-0.5 mb-2 ${
              story.hasNew ? 'bg-gradient-to-tr from-yellow-400 to-pink-600' : 'bg-gray-300'
            }`}>
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white">
                  {story.user.avatar}
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-900 max-w-[64px] truncate">
              {story.user.isOwn ? "Your story" : story.user.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  // Friend Requests Modal
  const FriendRequestsModal = () => (
    showFriendRequests && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Friend Requests</h2>
            <button 
              onClick={() => setShowFriendRequests(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <Icon name="X" size={20} />
            </button>
          </div>
          
          <div className="space-y-4">
            {friendRequests.map((request) => (
              <div key={request.id} className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white">
                  {request.user.avatar}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{request.user.name}</h3>
                  <p className="text-xs text-gray-500">{request.user.year}</p>
                  <p className="text-xs text-gray-500">{request.mutualFriends} mutual friends</p>
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleFriendRequest(request.id, 'accept')}
                    className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600"
                  >
                    Accept
                  </button>
                  <button 
                    onClick={() => handleFriendRequest(request.id, 'decline')}
                    className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-lg hover:bg-gray-300"
                  >
                    Decline
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );

  // Enhanced Create Post Modal
  const CreatePostModal = () => (
    showCreateModal && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 max-w-lg w-full mx-4 max-h-[80vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Create Post</h2>
            <button 
              onClick={() => setShowCreateModal(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <Icon name="X" size={20} />
            </button>
          </div>
          
          {/* Post Type Selection */}
          <div className="flex space-x-2 mb-4">
            {[
              { type: 'text', icon: 'Type', label: 'Text' },
              { type: 'image', icon: 'Image', label: 'Photo' },
              { type: 'video', icon: 'Video', label: 'Video' },
              { type: 'code', icon: 'Code', label: 'Code' },
              { type: 'poll', icon: 'BarChart3', label: 'Poll' }
            ].map(({ type, icon, label }) => (
              <button
                key={type}
                onClick={() => setCreatePostType(type)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm ${
                  createPostType === type 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon name={icon} size={16} />
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Content Input */}
          <textarea 
            placeholder="What's on your mind?"
            className="w-full p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          />

          {/* Media Upload for images/videos */}
          {(createPostType === 'image' || createPostType === 'video') && (
            <div className="mt-4 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Icon name={createPostType === 'image' ? 'Image' : 'Video'} size={48} className="text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600 mb-2">
                Drop your {createPostType === 'image' ? 'photos' : 'video'} here or click to browse
              </p>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Choose {createPostType === 'image' ? 'Photos' : 'Video'}
              </button>
            </div>
          )}

          {/* Code Editor */}
          {createPostType === 'code' && (
            <div className="mt-4">
              <textarea 
                placeholder="Paste your code here..."
                className="w-full p-3 border border-gray-200 rounded-lg resize-none font-mono text-sm bg-gray-50"
                rows="8"
              />
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-3 mt-6">
            <button 
              onClick={() => setShowCreateModal(false)}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Post
            </button>
          </div>
        </div>
      </div>
    )
  );

  // Sidebar with categories and sorting
  const Sidebar = () => (
    <div className="sticky top-20 space-y-4">
      {/* Sort Controls */}
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h3 className="font-semibold text-gray-900 mb-3">Sort Posts</h3>
        <div className="space-y-2">
          {[
            { value: 'hot', label: '🔥 Hot', desc: 'Most engaging' },
            { value: 'new', label: '🆕 New', desc: 'Latest posts' },
            { value: 'top', label: '⬆️ Top', desc: 'Highest voted' }
          ].map((sort) => (
            <button
              key={sort.value}
              onClick={() => setSortBy(sort.value)}
              className={`w-full text-left p-2 rounded-lg transition-colors ${
                sortBy === sort.value 
                  ? 'bg-blue-50 border border-blue-200 text-blue-700' 
                  : 'hover:bg-gray-50'
              }`}
            >
              <div className="font-medium text-sm">{sort.label}</div>
              <div className="text-xs text-gray-500">{sort.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
        <div className="space-y-1">
          {[
            { value: 'all', label: '📋 All Posts' },
            { value: 'Technical Help', label: '🔧 Technical Help' },
            { value: 'Project Showcase', label: '🎨 Projects' },
            { value: 'Tutorials', label: '📚 Tutorials' }
          ].map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`w-full text-left p-2 rounded text-sm transition-colors ${
                selectedCategory === category.value 
                  ? 'bg-blue-50 text-blue-700' 
                  : 'hover:bg-gray-50 text-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Campus Forums - CodeCampus</title>
        <meta name="description" content="Connect, share, and learn with the CodeCampus community" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="pt-20">
          <div className="max-w-6xl mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Main Feed */}
              <div className="lg:col-span-3">
                <div className="max-w-2xl mx-auto">
                  {/* Stories */}
                  <Stories />
                  
                  {/* Create Post */}
                  <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white">
                        👤
                      </div>
                      <button 
                        onClick={() => setShowCreateModal(true)}
                        className="flex-1 text-left px-4 py-2 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200 transition-colors"
                      >
                        What's on your mind, Alex?
                      </button>
                      {/* Friend Request Button */}
                      <button 
                        onClick={() => setShowFriendRequests(true)}
                        className="relative p-2 text-gray-600 hover:text-gray-800"
                      >
                        <Icon name="Users" size={20} />
                        {friendRequests.length > 0 && (
                          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {friendRequests.length}
                          </span>
                        )}
                      </button>
                    </div>
                    <div className="flex items-center justify-around mt-4 pt-4 border-t border-gray-200">
                      <button 
                        onClick={() => { setCreatePostType('image'); setShowCreateModal(true); }}
                        className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <Icon name="Image" size={20} className="text-green-500" />
                        <span className="text-sm text-gray-700">Photo</span>
                      </button>
                      <button 
                        onClick={() => { setCreatePostType('video'); setShowCreateModal(true); }}
                        className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <Icon name="Video" size={20} className="text-red-500" />
                        <span className="text-sm text-gray-700">Video</span>
                      </button>
                      <button 
                        onClick={() => { setCreatePostType('code'); setShowCreateModal(true); }}
                        className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <Icon name="Code" size={20} className="text-blue-500" />
                        <span className="text-sm text-gray-700">Code</span>
                      </button>
                      <button 
                        onClick={() => { setCreatePostType('poll'); setShowCreateModal(true); }}
                        className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <Icon name="BarChart3" size={20} className="text-purple-500" />
                        <span className="text-sm text-gray-700">Poll</span>
                      </button>
                    </div>
                  </div>

                  {/* Posts Feed */}
                  <div>
                    {/* Feed Header */}
                    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <h2 className="font-semibold text-gray-900">
                            {selectedCategory === 'all' ? 'All Posts' : selectedCategory}
                          </h2>
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            {filteredAndSortedPosts.length} posts
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Icon name="TrendingUp" size={16} />
                          <span className="capitalize">{sortBy}</span>
                        </div>
                      </div>
                    </div>

                    {filteredAndSortedPosts.map((post) => (
                      <InstagramPost key={post.id} post={post} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="hidden lg:block">
                <Sidebar />
              </div>
            </div>
          </div>
        </main>

        {/* Modals */}
        <FriendRequestsModal />
        <CreatePostModal />
      </div>
    </>
  );
};

export default CampusForums;
