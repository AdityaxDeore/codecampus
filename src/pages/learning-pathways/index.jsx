import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';

const LearningPathways = () => {
  const [selectedPath, setSelectedPath] = useState(null);
  const [userLevel, setUserLevel] = useState('intermediate');

  const learningPaths = [
    {
      id: 1,
      title: "Algorithm Fundamentals",
      description: "Master the essential algorithms every programmer should know",
      difficulty: "Beginner",
      duration: "6 weeks",
      progress: 35,
      totalProblems: 45,
      completedProblems: 16,
      tags: ["Arrays", "Sorting", "Searching", "Two Pointers"],
      color: "from-blue-500 to-blue-600",
      problems: [
        { title: "Two Sum", difficulty: "Easy", completed: true, concepts: ["Hash Map", "Array"] },
        { title: "Binary Search", difficulty: "Easy", completed: true, concepts: ["Search", "Divide & Conquer"] },
        { title: "Merge Two Sorted Arrays", difficulty: "Easy", completed: false, concepts: ["Two Pointers", "Merge"] },
        { title: "Quick Sort Implementation", difficulty: "Medium", completed: false, concepts: ["Sorting", "Recursion"] }
      ]
    },
    {
      id: 2,
      title: "Data Structures Mastery",
      description: "Deep dive into fundamental data structures and their applications",
      difficulty: "Intermediate",
      duration: "8 weeks",
      progress: 60,
      totalProblems: 38,
      completedProblems: 23,
      tags: ["LinkedList", "Trees", "Graphs", "Hash Tables"],
      color: "from-emerald-500 to-emerald-600",
      problems: [
        { title: "Reverse Linked List", difficulty: "Easy", completed: true, concepts: ["LinkedList", "Pointers"] },
        { title: "Binary Tree Traversal", difficulty: "Medium", completed: true, concepts: ["Trees", "DFS", "BFS"] },
        { title: "Detect Cycle in Graph", difficulty: "Medium", completed: false, concepts: ["Graphs", "DFS"] },
        { title: "LRU Cache", difficulty: "Hard", completed: false, concepts: ["Hash Map", "LinkedList"] }
      ]
    },
    {
      id: 3,
      title: "Dynamic Programming Journey",
      description: "From basic memoization to advanced DP patterns",
      difficulty: "Advanced",
      duration: "10 weeks",
      progress: 12,
      totalProblems: 52,
      completedProblems: 6,
      tags: ["DP", "Memoization", "Optimization", "Recursion"],
      color: "from-purple-500 to-purple-600",
      problems: [
        { title: "Fibonacci Numbers", difficulty: "Easy", completed: true, concepts: ["Basic DP", "Memoization"] },
        { title: "Coin Change", difficulty: "Medium", completed: false, concepts: ["DP", "Bottom-up"] },
        { title: "Longest Common Subsequence", difficulty: "Medium", completed: false, concepts: ["2D DP", "Strings"] },
        { title: "Edit Distance", difficulty: "Hard", completed: false, concepts: ["String DP", "Optimization"] }
      ]
    },
    {
      id: 4,
      title: "System Design Prep",
      description: "Learn to design scalable systems with coding challenges",
      difficulty: "Advanced",
      duration: "12 weeks",
      progress: 8,
      totalProblems: 28,
      completedProblems: 2,
      tags: ["Scalability", "Architecture", "Databases", "Caching"],
      color: "from-red-500 to-red-600",
      problems: [
        { title: "Design URL Shortener", difficulty: "Medium", completed: true, concepts: ["Hashing", "Database Design"] },
        { title: "Rate Limiter", difficulty: "Medium", completed: false, concepts: ["Algorithms", "System Design"] },
        { title: "Chat System", difficulty: "Hard", completed: false, concepts: ["Real-time", "WebSockets"] },
        { title: "Search Engine", difficulty: "Hard", completed: false, concepts: ["Indexing", "Ranking"] }
      ]
    },
    {
      id: 5,
      title: "Interview Preparation Track",
      description: "Company-specific problems and interview patterns",
      difficulty: "Mixed",
      duration: "4 weeks",
      progress: 78,
      totalProblems: 25,
      completedProblems: 19,
      tags: ["FAANG", "Interview", "Coding Rounds", "Behavioral"],
      color: "from-amber-500 to-amber-600",
      problems: [
        { title: "Valid Parentheses", difficulty: "Easy", completed: true, concepts: ["Stack", "String"] },
        { title: "Merge Intervals", difficulty: "Medium", completed: true, concepts: ["Arrays", "Sorting"] },
        { title: "Serialize Binary Tree", difficulty: "Hard", completed: false, concepts: ["Trees", "DFS"] },
        { title: "Word Ladder", difficulty: "Hard", completed: false, concepts: ["BFS", "Graph"] }
      ]
    },
    {
      id: 6,
      title: "Competitive Programming",
      description: "Advanced algorithms for coding competitions",
      difficulty: "Expert",
      duration: "16 weeks",
      progress: 0,
      totalProblems: 67,
      completedProblems: 0,
      tags: ["Advanced Algorithms", "Math", "Optimization", "Contests"],
      color: "from-indigo-500 to-indigo-600",
      problems: [
        { title: "Segment Trees", difficulty: "Hard", completed: false, concepts: ["Data Structures", "Range Queries"] },
        { title: "Number Theory", difficulty: "Hard", completed: false, concepts: ["Math", "Modular Arithmetic"] },
        { title: "Graph Algorithms", difficulty: "Expert", completed: false, concepts: ["Advanced Graphs", "Optimization"] },
        { title: "String Algorithms", difficulty: "Expert", completed: false, concepts: ["KMP", "Suffix Arrays"] }
      ]
    }
  ];

  const personalizedRecommendations = [
    {
      reason: "Based on your recent performance in Array problems",
      pathId: 1,
      confidence: 92
    },
    {
      reason: "You've shown strong grasp of basic concepts",
      pathId: 2,
      confidence: 87
    },
    {
      reason: "Interview season is approaching",
      pathId: 5,
      confidence: 95
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      case 'Expert': return 'text-purple-600 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-50 via-white to-purple-50 border-b border-border">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                📚 Learning Pathways
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Structured learning paths designed to take you from beginner to expert
              </p>
              
              {/* Personalized Recommendations */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-border mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center justify-center">
                  <Icon name="Target" size={20} className="mr-2 text-blue-600" />
                  Recommended For You
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {personalizedRecommendations.map((rec, index) => {
                    const path = learningPaths.find(p => p.id === rec.pathId);
                    return (
                      <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-200">
                        <div className="text-sm font-medium text-blue-900 mb-1">{path?.title}</div>
                        <div className="text-xs text-blue-700 mb-2">{rec.reason}</div>
                        <div className="flex items-center justify-between">
                          <div className="text-xs text-green-600 font-medium">{rec.confidence}% match</div>
                          <Button size="sm" className="text-xs h-6 px-2">Start</Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Paths Grid */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {learningPaths.map((path) => (
              <div
                key={path.id}
                className="bg-white rounded-xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => setSelectedPath(path)}
              >
                {/* Path Header */}
                <div className={`bg-gradient-to-r ${path.color} p-6 text-white`}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{path.title}</h3>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      path.difficulty === 'Beginner' ? 'bg-green-200 text-green-800' :
                      path.difficulty === 'Intermediate' ? 'bg-yellow-200 text-yellow-800' :
                      path.difficulty === 'Advanced' ? 'bg-red-200 text-red-800' :
                      'bg-purple-200 text-purple-800'
                    }`}>
                      {path.difficulty}
                    </div>
                  </div>
                  <p className="text-white/90 text-sm mb-4">{path.description}</p>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span>{path.completedProblems}/{path.totalProblems} problems</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div 
                        className="bg-white h-2 rounded-full transition-all duration-300"
                        style={{ width: `${path.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center">
                      <Icon name="Clock" size={16} className="mr-1" />
                      {path.duration}
                    </span>
                    <span>{path.progress}% complete</span>
                  </div>
                </div>

                {/* Path Content */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {path.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Recent Problems Preview */}
                  <div className="space-y-2 mb-4">
                    <h4 className="text-sm font-medium text-gray-800">Recent Problems:</h4>
                    {path.problems.slice(0, 3).map((problem, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-2">
                        <div className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${
                            problem.completed ? 'bg-green-500' : 'bg-gray-300'
                          }`}></div>
                          <span className="text-sm text-gray-700">{problem.title}</span>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(problem.difficulty)}`}>
                          {problem.difficulty}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full" variant={path.progress > 0 ? "default" : "outline"}>
                    {path.progress > 0 ? 'Continue Learning' : 'Start Pathway'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Path Modal */}
        {selectedPath && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className={`bg-gradient-to-r ${selectedPath.color} p-6 text-white`}>
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{selectedPath.title}</h2>
                    <p className="text-white/90">{selectedPath.description}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedPath(null)}
                    iconName="X"
                    className="text-white hover:bg-white/20"
                  />
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Path Stats */}
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{selectedPath.totalProblems}</div>
                    <div className="text-sm text-gray-600">Total Problems</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{selectedPath.completedProblems}</div>
                    <div className="text-sm text-gray-600">Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{selectedPath.duration}</div>
                    <div className="text-sm text-gray-600">Duration</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{selectedPath.progress}%</div>
                    <div className="text-sm text-gray-600">Progress</div>
                  </div>
                </div>

                {/* Problems List */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Problems in this pathway:</h3>
                  <div className="space-y-3">
                    {selectedPath.problems.map((problem, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                              problem.completed ? 'bg-green-500' : 'bg-gray-300'
                            }`}>
                              {problem.completed && <Icon name="Check" size={14} className="text-white" />}
                            </div>
                            <h4 className="font-medium text-gray-900">{problem.title}</h4>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(problem.difficulty)}`}>
                              {problem.difficulty}
                            </span>
                            <Button size="sm" variant="outline">
                              {problem.completed ? 'Review' : 'Start'}
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 ml-9">
                          {problem.concepts.map((concept, conceptIndex) => (
                            <span 
                              key={conceptIndex}
                              className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs"
                            >
                              {concept}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 mt-6 pt-6 border-t border-gray-200">
                  <Button className="flex-1">
                    {selectedPath.progress > 0 ? 'Continue Pathway' : 'Start Pathway'}
                  </Button>
                  <Button variant="outline" onClick={() => setSelectedPath(null)}>
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearningPathways;
