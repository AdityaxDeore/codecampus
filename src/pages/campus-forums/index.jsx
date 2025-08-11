import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import ForumHeader from './components/ForumHeader';
import ForumSidebar from './components/ForumSidebar';
import ForumFeed from './components/ForumFeed';
import CreatePostModal from './components/CreatePostModal';

const CampusForums = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({ category: 'all', branch: 'all' });
  const [activeCategory, setActiveCategory] = useState('all');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  // Mock posts data
  const mockPosts = [
    {
      id: 1,
      title: "Need help with React Hooks optimization",
      content: `I'm working on a React project and facing performance issues with useEffect hooks. The component re-renders too frequently and I'm not sure how to optimize it.\n\nHere's what I've tried so far:\n- Added dependency arrays\n- Used useMemo for expensive calculations\n- Implemented useCallback for event handlers\n\nBut the performance is still not optimal. Any suggestions?`,
      author: {
        name: "Sarah Chen",
        year: "3rd Year",
        branch: "Computer Science",
        level: "Advanced",
        verified: true
      },
      category: "technical-help",
      tags: ["react", "hooks", "performance", "optimization"],
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000)?.toISOString(),
      upvotes: 24,
      downvotes: 2,
      replies: [
        {
          id: 101,
          author: { name: "Mike Johnson", level: "Expert" },
          content: "Try using React.memo() to prevent unnecessary re-renders. Also, consider splitting your component into smaller ones.",
          timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000)?.toISOString(),
          upvotes: 12
        },
        {
          id: 102,
          author: { name: "Dr. Kumar", level: "Expert" },
          content: "The React DevTools Profiler can help you identify which components are causing performance bottlenecks.",
          timestamp: new Date(Date.now() - 30 * 60 * 1000)?.toISOString(),
          upvotes: 8
        }
      ],
      codeSnippet: `useEffect(() => {\n  // This runs on every render\n  fetchData();\n}, []); // Empty dependency array`,
      isQuestion: true,
      status: "open",
      bookmarked: false,
      userVote: null
    },
    {
      id: 2,
      title: "Study Group for Data Structures & Algorithms",
      content: `Looking to form a study group for DSA preparation. We'll meet twice a week to solve problems together and discuss different approaches.\n\nWhat we'll cover:\n- Array and String problems\n- Linked Lists and Trees\n- Dynamic Programming\n- Graph algorithms\n\nInterested students can join our Discord server. Let's crack those coding interviews together!`,
      author: {
        name: "Alex Rodriguez",
        year: "2nd Year",
        branch: "Computer Science",
        level: "Intermediate",
        verified: false
      },
      category: "study-groups",
      tags: ["dsa", "algorithms", "study-group", "interview-prep"],
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000)?.toISOString(),
      upvotes: 18,
      downvotes: 0,
      replies: [
        {
          id: 201,
          author: { name: "Emma Wilson", level: "Intermediate" },
          content: "Count me in! I've been looking for a study group. When do we start?",
          timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000)?.toISOString(),
          upvotes: 5
        }
      ],
      isQuestion: false,
      bookmarked: true,
      userVote: "up"
    },
    {
      id: 3,
      title: "Machine Learning Project Collaboration",
      content: `Working on a sentiment analysis project using NLP techniques. Looking for teammates who are interested in:\n\n- Data preprocessing and cleaning\n- Feature engineering\n- Model training and evaluation\n- Web deployment\n\nThis could be a great addition to your portfolio! We'll be using Python, scikit-learn, and potentially TensorFlow.`,
      author: {
        name: "Priya Sharma",year: "4th Year",branch: "Computer Science",level: "Expert",
        verified: true
      },
      category: "project-collaboration",
      tags: ["machine-learning", "nlp", "python", "collaboration"],
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000)?.toISOString(),
      upvotes: 31,
      downvotes: 1,
      replies: [
        {
          id: 301,
          author: { name: "David Kim", level: "Advanced" },
          content: "This sounds interesting! I have experience with scikit-learn and would love to contribute.",
          timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000)?.toISOString(),
          upvotes: 7
        }
      ],
      isQuestion: false,
      bookmarked: false,
      userVote: null
    },
    {
      id: 4,
      title: "Career advice: Frontend vs Backend development?",
      content: `I'm in my final year and confused about choosing between frontend and backend development for my career.\n\nFrontend pros:\n- Creative and visual work\n- Direct user impact\n- Growing demand for React/Vue developers\n\nBackend pros:\n- System design challenges\n- Database and server management\n- Higher average salaries\n\nWhat factors should I consider? Any professionals here who can share their experience?`,
      author: {
        name: "Rahul Gupta",year: "4th Year",branch: "Information Technology",level: "Advanced",
        verified: false
      },
      category: "career-advice",
      tags: ["career", "frontend", "backend", "advice"],
      timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000)?.toISOString(),
      upvotes: 15,
      downvotes: 3,
      replies: [
        {
          id: 401,
          author: { name: "Industry Expert", level: "Expert" },
          content: "Both paths have great opportunities. Consider what you enjoy more - user interfaces or system architecture. You can always learn both!",
          timestamp: new Date(Date.now() - 7 * 60 * 60 * 1000)?.toISOString(),
          upvotes: 12
        }
      ],
      isQuestion: true,
      status: "open",bookmarked: false,userVote: "up"
    },
    {
      id: 5,
      title: "Industry Insights: Latest trends in Web Development",
      content: `Just attended a tech conference and wanted to share some key insights about current web development trends:\n\n1. **Server-Side Rendering (SSR)** is making a comeback with Next.js and Nuxt.js\n2. **Edge Computing** is becoming more important for performance\n3. **WebAssembly** is gaining traction for performance-critical applications\n4. **Micro-frontends** are being adopted by large organizations\n5. **AI integration** in development tools is accelerating\n\nWhat trends are you most excited about? How are you preparing for these changes?`,
      author: {
        name: "Prof. Jennifer Lee",year: "Faculty",branch: "Computer Science",level: "Expert",
        verified: true
      },
      category: "industry-insights",
      tags: ["web-development", "trends", "ssr", "webassembly", "ai"],
      timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000)?.toISOString(),
      upvotes: 42,
      downvotes: 0,
      replies: [
        {
          id: 501,
          author: { name: "Tech Enthusiast", level: "Advanced" },
          content: "WebAssembly is fascinating! I\'ve been experimenting with it for image processing tasks.",
          timestamp: new Date(Date.now() - 10 * 60 * 60 * 1000)?.toISOString(),
          upvotes: 8
        }
      ],
      isQuestion: false,
      bookmarked: true,
      userVote: "up"
    }
  ];

  useEffect(() => {
    setPosts(mockPosts);
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setFilters(prev => ({ ...prev, category }));
  };

  const handleCreatePost = () => {
    setIsCreateModalOpen(true);
  };

  const handlePostSubmit = (postData) => {
    const newPost = {
      id: posts?.length + 1,
      ...postData,
      author: {
        name: "Alex Chen",
        year: "3rd Year",
        branch: "Computer Science",
        level: "Intermediate",
        verified: false
      },
      upvotes: 0,
      downvotes: 0,
      replies: [],
      bookmarked: false,
      userVote: null,
      status: postData?.isQuestion ? "open" : undefined
    };
    setPosts(prev => [newPost, ...prev]);
  };

  const handlePostAction = (action, postId, data) => {
    setPosts(prev => prev?.map(post => {
      if (post?.id === postId) {
        switch (action) {
          case 'upvote':
            return {
              ...post,
              upvotes: post?.userVote === 'up' ? post?.upvotes - 1 : post?.upvotes + 1,
              downvotes: post?.userVote === 'down' ? post?.downvotes - 1 : post?.downvotes,
              userVote: post?.userVote === 'up' ? null : 'up'
            };
          case 'downvote':
            return {
              ...post,
              downvotes: post?.userVote === 'down' ? post?.downvotes - 1 : post?.downvotes + 1,
              upvotes: post?.userVote === 'up' ? post?.upvotes - 1 : post?.upvotes,
              userVote: post?.userVote === 'down' ? null : 'down'
            };
          case 'bookmark':
            return { ...post, bookmarked: !post?.bookmarked };
          case 'reply':
            const newReply = {
              id: Date.now(),
              author: { name: "Alex Chen", level: "Intermediate" },
              content: data,
              timestamp: new Date()?.toISOString(),
              upvotes: 0
            };
            return { ...post, replies: [...post?.replies, newReply] };
          default:
            return post;
        }
      }
      return post;
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-16">
        <ForumHeader
          onSearch={handleSearch}
          onFilterChange={handleFilterChange}
          onCreatePost={handleCreatePost}
        />
        
        <div className="flex">
          <div className="hidden lg:block">
            <ForumSidebar
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>
          
          <div className="flex-1 p-6">
            <ForumFeed
              posts={posts}
              searchQuery={searchQuery}
              filters={filters}
              onPostAction={handlePostAction}
            />
          </div>
        </div>
      </div>

      <CreatePostModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handlePostSubmit}
      />
    </div>
  );
};

export default CampusForums;