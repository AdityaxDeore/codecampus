import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';

const Problems = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');

  // Problem categories like LeetCode
  const categories = [
    {
      id: 'dsa',
      title: 'Data Structures & Algorithms',
      description: 'Classic coding problems and algorithms',
      icon: '🧮',
      color: 'from-blue-500 to-cyan-500',
      problemCount: 1847,
      tags: ['Array', 'String', 'LinkedList', 'Tree', 'Graph', 'Dynamic Programming']
    },
    {
      id: 'debugging',
      title: 'Debugging Challenges',
      description: 'Find and fix bugs in existing code',
      icon: '🐛',
      color: 'from-red-500 to-pink-500',
      problemCount: 156,
      tags: ['Logic Errors', 'Runtime Errors', 'Syntax Errors', 'Edge Cases']
    },
    {
      id: 'nptel',
      title: 'NPTEL Courses',
      description: 'Programming assignments from NPTEL courses',
      icon: '🎓',
      color: 'from-green-500 to-emerald-500',
      problemCount: 234,
      tags: ['C Programming', 'Java', 'Python', 'Computer Networks', 'OS']
    },
    {
      id: 'competitive',
      title: 'Competitive Programming',
      description: 'Contest-style programming challenges',
      icon: '🏆',
      color: 'from-purple-500 to-violet-500',
      problemCount: 892,
      tags: ['Contest', 'Math', 'Greedy', 'Number Theory', 'Geometry']
    },
    {
      id: 'system-design',
      title: 'System Design',
      description: 'Large-scale system design problems',
      icon: '🏗️',
      color: 'from-orange-500 to-amber-500',
      problemCount: 67,
      tags: ['Scalability', 'Database', 'Architecture', 'Microservices']
    },
    {
      id: 'interview',
      title: 'Interview Preparation',
      description: 'Common interview questions from top companies',
      icon: '💼',
      color: 'from-indigo-500 to-blue-500',
      problemCount: 445,
      tags: ['Google', 'Microsoft', 'Amazon', 'Facebook', 'Apple']
    }
  ];

  // Mock problems data for selected category
  const getProblemsForCategory = (categoryId) => {
    const problems = {
      dsa: [
        {
          id: 1,
          title: 'Two Sum',
          difficulty: 'Easy',
          acceptance: '49.1%',
          tags: ['Array', 'Hash Table'],
          isPremium: false,
          likes: 25420,
          dislikes: 834,
          companies: ['Amazon', 'Google', 'Microsoft']
        },
        {
          id: 2,
          title: 'Add Two Numbers',
          difficulty: 'Medium',
          acceptance: '36.9%',
          tags: ['LinkedList', 'Math', 'Recursion'],
          isPremium: false,
          likes: 18240,
          dislikes: 3641,
          companies: ['Amazon', 'Microsoft', 'Apple']
        },
        {
          id: 3,
          title: 'Longest Substring Without Repeating Characters',
          difficulty: 'Medium',
          acceptance: '33.8%',
          tags: ['Hash Table', 'String', 'Sliding Window'],
          isPremium: false,
          likes: 29384,
          dislikes: 1284,
          companies: ['Amazon', 'Google', 'Facebook']
        },
        {
          id: 4,
          title: 'Median of Two Sorted Arrays',
          difficulty: 'Hard',
          acceptance: '35.2%',
          tags: ['Array', 'Binary Search', 'Divide and Conquer'],
          isPremium: false,
          likes: 18392,
          dislikes: 2031,
          companies: ['Google', 'Microsoft', 'Adobe']
        },
        {
          id: 5,
          title: 'Longest Palindromic Substring',
          difficulty: 'Medium',
          acceptance: '32.1%',
          tags: ['String', 'Dynamic Programming'],
          isPremium: false,
          likes: 22839,
          dislikes: 1394,
          companies: ['Amazon', 'Microsoft', 'Google']
        }
      ],
      debugging: [
        {
          id: 101,
          title: 'Fix the Array Sum Bug',
          difficulty: 'Easy',
          acceptance: '78.3%',
          tags: ['Logic Errors', 'Array'],
          isPremium: false,
          likes: 1240,
          dislikes: 45,
          companies: ['Various']
        },
        {
          id: 102,
          title: 'Memory Leak Detection',
          difficulty: 'Hard',
          acceptance: '23.7%',
          tags: ['Memory Management', 'C++'],
          isPremium: true,
          likes: 856,
          dislikes: 123,
          companies: ['Systems Companies']
        }
      ],
      nptel: [
        {
          id: 201,
          title: 'C Programming Assignment 1',
          difficulty: 'Easy',
          acceptance: '85.2%',
          tags: ['C Programming', 'Basics'],
          isPremium: false,
          likes: 789,
          dislikes: 23,
          companies: ['Academic']
        },
        {
          id: 202,
          title: 'Data Structures Lab',
          difficulty: 'Medium',
          acceptance: '67.4%',
          tags: ['Data Structures', 'Implementation'],
          isPremium: false,
          likes: 1234,
          dislikes: 67,
          companies: ['Academic']
        }
      ]
    };
    return problems[categoryId] || [];
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-50';
      case 'Medium': return 'text-yellow-600 bg-yellow-50';
      case 'Hard': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const handleProblemClick = (problem) => {
    // Navigate to problem workspace with problem ID
    navigate(`/problem-workspace?id=${problem.id}`);
  };

  const filteredProblems = selectedCategory ? 
    getProblemsForCategory(selectedCategory.id).filter(problem => {
      const matchesSearch = problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           problem.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesDifficulty = selectedDifficulty === 'all' || problem.difficulty === selectedDifficulty;
      const matchesTag = selectedTag === 'all' || problem.tags.includes(selectedTag);
      return matchesSearch && matchesDifficulty && matchesTag;
    }) : [];

  const allTags = selectedCategory ? [...new Set(selectedCategory.tags)] : [];

  if (!selectedCategory) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Practice Problems</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Sharpen your coding skills with our comprehensive collection of programming challenges.
                Choose from various categories and difficulty levels.
              </p>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <div
                  key={category.id}
                  onClick={() => setSelectedCategory(category)}
                  className="relative group cursor-pointer transform hover:scale-105 transition-all duration-300"
                >
                  <div className={`bg-gradient-to-br ${category.color} rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300`}>
                    {/* Background decoration */}
                    <div className="absolute top-4 right-4 opacity-20">
                      <div className="w-20 h-20 rounded-full bg-white/10"></div>
                    </div>
                    <div className="absolute bottom-4 left-4 opacity-10">
                      <div className="w-16 h-16 rounded-full bg-white/10"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="text-4xl mb-4">{category.icon}</div>
                      <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                      <p className="text-white/90 mb-4 text-sm leading-relaxed">
                        {category.description}
                      </p>
                      
                      {/* Stats */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Icon name="FileText" size={16} className="text-white/80" />
                          <span className="text-sm font-medium">{category.problemCount} problems</span>
                        </div>
                        <Icon name="ArrowRight" size={16} className="text-white/80 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>

                      {/* Tags preview */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {category.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-white/20 rounded-lg text-xs font-medium">
                            {tag}
                          </span>
                        ))}
                        {category.tags.length > 3 && (
                          <span className="px-2 py-1 bg-white/20 rounded-lg text-xs font-medium">
                            +{category.tags.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Features Section */}
            <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Practice Here?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Code" size={24} className="text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Real IDE Experience</h3>
                  <p className="text-gray-600">Practice with our advanced code editor supporting multiple languages</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="CheckCircle" size={24} className="text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Instant Feedback</h3>
                  <p className="text-gray-600">Get immediate test results and detailed performance metrics</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Users" size={24} className="text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Discussions</h3>
                  <p className="text-gray-600">Learn from others and share your solutions with the community</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Problems listing view for selected category
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header with back button */}
          <div className="flex items-center mb-8">
            <button
              onClick={() => setSelectedCategory(null)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <Icon name="ArrowLeft" size={20} />
              <span>Back to Categories</span>
            </button>
          </div>

          {/* Category Header */}
          <div className={`bg-gradient-to-r ${selectedCategory.color} rounded-2xl p-8 text-white mb-8`}>
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-4xl">{selectedCategory.icon}</span>
              <div>
                <h1 className="text-3xl font-bold">{selectedCategory.title}</h1>
                <p className="text-white/90">{selectedCategory.description}</p>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="FileText" size={16} />
                <span>{selectedCategory.problemCount} problems</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Tag" size={16} />
                <span>{selectedCategory.tags.length} topics</span>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="md:col-span-2">
                <div className="relative">
                  <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search problems..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Difficulty Filter */}
              <div>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Difficulties</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>

              {/* Tag Filter */}
              <div>
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Tags</option>
                  {allTags.map((tag) => (
                    <option key={tag} value={tag}>{tag}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Problems Table */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Problem</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Difficulty</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Acceptance</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Tags</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feedback</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredProblems.map((problem) => (
                    <tr
                      key={problem.id}
                      onClick={() => handleProblemClick(problem)}
                      className="hover:bg-gray-50 cursor-pointer transition-colors duration-200"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <h3 className="text-sm font-medium text-gray-900 hover:text-blue-600">
                                {problem.title}
                              </h3>
                              {problem.isPremium && (
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                  Premium
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(problem.difficulty)}`}>
                          {problem.difficulty}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {problem.acceptance}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {problem.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800">
                              {tag}
                            </span>
                          ))}
                          {problem.tags.length > 2 && (
                            <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                              +{problem.tags.length - 2}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Icon name="ThumbsUp" size={14} className="text-green-500" />
                            <span>{problem.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="ThumbsDown" size={14} className="text-red-500" />
                            <span>{problem.dislikes}</span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredProblems.length === 0 && (
              <div className="text-center py-12">
                <Icon name="Search" size={48} className="text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No problems found</h3>
                <p className="text-gray-500">Try adjusting your search criteria or filters</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Problems;
