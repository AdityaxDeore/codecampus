import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const ProblemHistory = () => {
  const [filter, setFilter] = useState('all'); // all, easy, medium, hard
  const [sortBy, setSortBy] = useState('recent'); // recent, difficulty, performance

  // Mock solved problems data
  const solvedProblems = [
    {
      id: 1,
      title: 'Two Sum',
      difficulty: 'Easy',
      category: 'Array',
      solvedAt: '2024-08-11T10:30:00Z',
      runtime: '64ms',
      memory: '14.2MB',
      attempts: 1,
      score: 100,
      language: 'Python'
    },
    {
      id: 2,
      title: 'Binary Tree Traversal',
      difficulty: 'Medium',
      category: 'Tree',
      solvedAt: '2024-08-10T15:45:00Z',
      runtime: '124ms',
      memory: '18.5MB',
      attempts: 3,
      score: 85,
      language: 'JavaScript'
    },
    {
      id: 3,
      title: 'Longest Palindromic Substring',
      difficulty: 'Medium',
      category: 'String',
      solvedAt: '2024-08-09T09:15:00Z',
      runtime: '89ms',
      memory: '16.1MB',
      attempts: 2,
      score: 92,
      language: 'Python'
    },
    {
      id: 4,
      title: 'Merge k Sorted Lists',
      difficulty: 'Hard',
      category: 'Linked List',
      solvedAt: '2024-08-08T14:20:00Z',
      runtime: '156ms',
      memory: '22.3MB',
      attempts: 5,
      score: 78,
      language: 'Java'
    },
    {
      id: 5,
      title: 'Valid Parentheses',
      difficulty: 'Easy',
      category: 'Stack',
      solvedAt: '2024-08-07T11:00:00Z',
      runtime: '32ms',
      memory: '12.8MB',
      attempts: 1,
      score: 100,
      language: 'Python'
    },
    {
      id: 6,
      title: 'Coin Change',
      difficulty: 'Medium',
      category: 'Dynamic Programming',
      solvedAt: '2024-08-06T16:30:00Z',
      runtime: '98ms',
      memory: '15.7MB',
      attempts: 4,
      score: 88,
      language: 'C++'
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-amber-600 bg-amber-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 75) return 'text-amber-600';
    return 'text-red-600';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const filteredProblems = solvedProblems.filter(problem => {
    if (filter === 'all') return true;
    return problem.difficulty.toLowerCase() === filter;
  });

  const sortedProblems = [...filteredProblems].sort((a, b) => {
    switch (sortBy) {
      case 'recent':
        return new Date(b.solvedAt) - new Date(a.solvedAt);
      case 'difficulty':
        const difficultyOrder = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
        return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
      case 'performance':
        return b.score - a.score;
      default:
        return 0;
    }
  });

  const stats = {
    total: solvedProblems.length,
    easy: solvedProblems.filter(p => p.difficulty === 'Easy').length,
    medium: solvedProblems.filter(p => p.difficulty === 'Medium').length,
    hard: solvedProblems.filter(p => p.difficulty === 'Hard').length,
    avgScore: Math.round(solvedProblems.reduce((sum, p) => sum + p.score, 0) / solvedProblems.length)
  };

  return (
    <>
      <Helmet>
        <title>Problem History - CodeCampus</title>
        <meta name="description" content="View your solved problems history and performance" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="pt-20 pb-12">
          <div className="container mx-auto px-4 lg:px-6">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Problem History</h1>
                  <p className="text-gray-600">Track your coding journey and progress over time</p>
                </div>
                <Button variant="outline" iconName="Download" iconPosition="left">
                  Export History
                </Button>
              </div>

              {/* Stats Overview */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
                  <div className="text-sm text-gray-600">Total Solved</div>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">{stats.easy}</div>
                  <div className="text-sm text-gray-600">Easy</div>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                  <div className="text-2xl font-bold text-amber-600">{stats.medium}</div>
                  <div className="text-sm text-gray-600">Medium</div>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                  <div className="text-2xl font-bold text-red-600">{stats.hard}</div>
                  <div className="text-sm text-gray-600">Hard</div>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{stats.avgScore}%</div>
                  <div className="text-sm text-gray-600">Avg Score</div>
                </div>
              </div>

              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-700">Filter:</span>
                  <select 
                    value={filter} 
                    onChange={(e) => setFilter(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-1 text-sm"
                  >
                    <option value="all">All Difficulties</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-700">Sort by:</span>
                  <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-1 text-sm"
                  >
                    <option value="recent">Most Recent</option>
                    <option value="difficulty">Difficulty</option>
                    <option value="performance">Performance</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Problems List */}
            <div className="space-y-4">
              {sortedProblems.map((problem) => (
                <div key={problem.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-sm transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{problem.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(problem.difficulty)}`}>
                          {problem.difficulty}
                        </span>
                        <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700">
                          {problem.category}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-6 text-sm text-gray-600 mb-3">
                        <div className="flex items-center space-x-1">
                          <Icon name="Calendar" size={14} />
                          <span>{formatDate(problem.solvedAt)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Code" size={14} />
                          <span>{problem.language}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="RotateCcw" size={14} />
                          <span>{problem.attempts} attempt{problem.attempts !== 1 ? 's' : ''}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-6 text-sm">
                        <div className="flex items-center space-x-2">
                          <Icon name="Clock" size={14} className="text-gray-500" />
                          <span className="text-gray-700">Runtime: {problem.runtime}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="HardDrive" size={14} className="text-gray-500" />
                          <span className="text-gray-700">Memory: {problem.memory}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="Star" size={14} className="text-gray-500" />
                          <span className={`font-semibold ${getScoreColor(problem.score)}`}>
                            Score: {problem.score}%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 ml-4">
                      <Button variant="ghost" size="sm" iconName="Eye">
                        View Solution
                      </Button>
                      <Button variant="ghost" size="sm" iconName="ExternalLink">
                        Retry
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {sortedProblems.length === 0 && (
              <div className="text-center py-12">
                <Icon name="Code" size={48} className="text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No problems found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters or start solving some problems!</p>
                <Button href="/problem-workspace" iconName="Plus" iconPosition="left">
                  Solve Problems
                </Button>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default ProblemHistory;
