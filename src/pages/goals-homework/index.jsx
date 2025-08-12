import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Icon from '../../components/AppIcon';

const GoalsHomework = () => {
  const [activeTab, setActiveTab] = useState('goals');
  const [clipboardText, setClipboardText] = useState('');
  const [shareCode, setShareCode] = useState('');
  const [receiveCode, setReceiveCode] = useState('');
  const [receivedText, setReceivedText] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [clipboardHistory, setClipboardHistory] = useState([]);

  // Mock data for goals
  const [goals, setGoals] = useState([
    { id: 1, title: "Complete 3 Easy problems", progress: 2, total: 3, type: "daily", completed: false, deadline: "Today" },
    { id: 2, title: "Join a study group", progress: 0, total: 1, type: "social", completed: false, deadline: "This week" },
    { id: 3, title: "Solve Binary Search Tree", progress: 0, total: 1, type: "challenge", completed: false, deadline: "Today" },
    { id: 4, title: "Review Data Structures", progress: 5, total: 8, type: "weekly", completed: false, deadline: "Friday" },
    { id: 5, title: "Practice Dynamic Programming", progress: 3, total: 5, type: "learning", completed: false, deadline: "Next week" }
  ]);

  // Mock data for homework
  const [homework, setHomework] = useState([
    {
      id: 1,
      title: "Algorithm Analysis Assignment",
      teacher: "Prof. Smith",
      subject: "Data Structures",
      dueDate: "2025-08-15",
      description: "Analyze time and space complexity of sorting algorithms",
      status: "pending",
      priority: "high",
      attachments: ["sorting_algorithms.pdf", "template.docx"]
    },
    {
      id: 2,
      title: "Database Design Project",
      teacher: "Dr. Johnson",
      subject: "Database Systems",
      dueDate: "2025-08-20",
      description: "Design a relational database for a library management system",
      status: "in_progress",
      priority: "medium",
      attachments: ["requirements.pdf"]
    },
    {
      id: 3,
      title: "Web Development Portfolio",
      teacher: "Ms. Davis",
      subject: "Web Technologies",
      dueDate: "2025-08-25",
      description: "Create a responsive portfolio website using React",
      status: "completed",
      priority: "low",
      attachments: []
    }
  ]);

  // Mock clipboard storage (in real app, this would be a backend)
  const [clipboardStorage, setClipboardStorage] = useState({});

  // Generate random 4-digit code
  const generateCode = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();
  };

  // Handle clipboard send
  const handleSendClipboard = () => {
    if (!clipboardText.trim()) return;
    
    const code = generateCode();
    const newEntry = {
      code,
      text: clipboardText,
      timestamp: new Date().toISOString(),
      id: Date.now()
    };
    
    // Store in mock storage
    setClipboardStorage(prev => ({
      ...prev,
      [code]: newEntry
    }));
    
    // Add to history
    setClipboardHistory(prev => [newEntry, ...prev.slice(0, 9)]);
    
    setGeneratedCode(code);
    setClipboardText('');
  };

  // Handle clipboard receive
  const handleReceiveClipboard = () => {
    if (!receiveCode.trim()) return;
    
    const entry = clipboardStorage[receiveCode];
    if (entry) {
      setReceivedText(entry.text);
      // Remove from storage after retrieval
      setClipboardStorage(prev => {
        const newStorage = { ...prev };
        delete newStorage[receiveCode];
        return newStorage;
      });
    } else {
      setReceivedText('Code not found or expired');
    }
    setReceiveCode('');
  };

  // Clear codes when changing tabs
  useEffect(() => {
    setGeneratedCode('');
    setReceivedText('');
    setReceiveCode('');
  }, [activeTab]);

  const getGoalTypeColor = (type) => {
    switch (type) {
      case 'daily': return 'from-blue-500 to-blue-600';
      case 'social': return 'from-green-500 to-green-600';
      case 'challenge': return 'from-purple-500 to-purple-600';
      case 'weekly': return 'from-amber-500 to-amber-600';
      case 'learning': return 'from-pink-500 to-pink-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getHomeworkPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getHomeworkStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'in_progress': return 'text-blue-600 bg-blue-100';
      case 'pending': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-16">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-50 via-white to-purple-50 border-b border-border">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-foreground mb-4">🎯 Goals & Homework Hub</h1>
            <p className="text-muted-foreground">Manage your academic goals, homework assignments, and share content seamlessly</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="container mx-auto px-4 py-6">
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-6 max-w-md">
            <button
              onClick={() => setActiveTab('goals')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                activeTab === 'goals'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              🎯 Goals
            </button>
            <button
              onClick={() => setActiveTab('homework')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                activeTab === 'homework'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              📚 Homework
            </button>
            <button
              onClick={() => setActiveTab('clipboard')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                activeTab === 'clipboard'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              📋 Clipboard
            </button>
          </div>

          {/* Goals Tab */}
          {activeTab === 'goals' && (
            <div className="space-y-6">
              {/* Goals Overview */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 border border-border shadow-sm">
                  <div className="text-2xl font-bold text-green-600">4/5</div>
                  <div className="text-sm text-gray-600">Goals in Progress</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-border shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">23</div>
                  <div className="text-sm text-gray-600">Day Streak</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-border shadow-sm">
                  <div className="text-2xl font-bold text-purple-600">1,250</div>
                  <div className="text-sm text-gray-600">XP Earned</div>
                </div>
              </div>

              {/* Goals List */}
              <div className="grid gap-4">
                {goals.map((goal) => (
                  <div key={goal.id} className="bg-white rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${getGoalTypeColor(goal.type)} rounded-lg flex items-center justify-center`}>
                          <Icon name={goal.type === 'daily' ? 'Target' : goal.type === 'social' ? 'Users' : goal.type === 'challenge' ? 'Zap' : goal.type === 'weekly' ? 'Calendar' : 'BookOpen'} size={20} className="text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{goal.title}</h3>
                          <p className="text-sm text-gray-600">Due: {goal.deadline}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900">{goal.progress}/{goal.total}</div>
                        <div className="text-xs text-gray-600">{Math.round((goal.progress / goal.total) * 100)}%</div>
                      </div>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                      <div 
                        className={`bg-gradient-to-r ${getGoalTypeColor(goal.type)} h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${(goal.progress / goal.total) * 100}%` }}
                      ></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        goal.type === 'daily' ? 'bg-blue-100 text-blue-800' :
                        goal.type === 'social' ? 'bg-green-100 text-green-800' :
                        goal.type === 'challenge' ? 'bg-purple-100 text-purple-800' :
                        goal.type === 'weekly' ? 'bg-amber-100 text-amber-800' :
                        'bg-pink-100 text-pink-800'
                      }`}>
                        {goal.type.charAt(0).toUpperCase() + goal.type.slice(1)}
                      </span>
                      <Button size="sm" variant={goal.progress === goal.total ? "default" : "outline"}>
                        {goal.progress === goal.total ? 'Completed' : 'Continue'}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Homework Tab */}
          {activeTab === 'homework' && (
            <div className="space-y-6">
              {/* Homework Overview */}
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 border border-border shadow-sm">
                  <div className="text-2xl font-bold text-red-600">2</div>
                  <div className="text-sm text-gray-600">Pending</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-border shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">1</div>
                  <div className="text-sm text-gray-600">In Progress</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-border shadow-sm">
                  <div className="text-2xl font-bold text-green-600">1</div>
                  <div className="text-sm text-gray-600">Completed</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-border shadow-sm">
                  <div className="text-2xl font-bold text-amber-600">3</div>
                  <div className="text-sm text-gray-600">This Week</div>
                </div>
              </div>

              {/* Homework List */}
              <div className="grid gap-4">
                {homework.map((hw) => (
                  <div key={hw.id} className="bg-white rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-gray-900">{hw.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getHomeworkPriorityColor(hw.priority)}`}>
                            {hw.priority}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getHomeworkStatusColor(hw.status)}`}>
                            {hw.status.replace('_', ' ')}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{hw.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center">
                            <Icon name="User" size={14} className="mr-1" />
                            {hw.teacher}
                          </span>
                          <span className="flex items-center">
                            <Icon name="BookOpen" size={14} className="mr-1" />
                            {hw.subject}
                          </span>
                          <span className="flex items-center">
                            <Icon name="Calendar" size={14} className="mr-1" />
                            Due: {new Date(hw.dueDate).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>

                    {hw.attachments.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Attachments:</h4>
                        <div className="flex flex-wrap gap-2">
                          {hw.attachments.map((file, index) => (
                            <div key={index} className="flex items-center space-x-2 bg-gray-50 rounded-lg px-3 py-2 text-sm">
                              <Icon name="Paperclip" size={14} className="text-gray-400" />
                              <span className="text-gray-700">{file}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Icon name="Eye" size={14} className="mr-1" />
                          View Details
                        </Button>
                        {hw.status !== 'completed' && (
                          <Button size="sm">
                            <Icon name="Upload" size={14} className="mr-1" />
                            Submit
                          </Button>
                        )}
                      </div>
                      <div className="text-sm text-gray-500">
                        {Math.ceil((new Date(hw.dueDate) - new Date()) / (1000 * 60 * 60 * 24))} days left
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Clipboard Tab */}
          {activeTab === 'clipboard' && (
            <div className="max-w-4xl space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Send Clipboard */}
                <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Icon name="Send" size={20} className="mr-2 text-blue-600" />
                    Send Content
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Content to Share
                      </label>
                      <textarea
                        value={clipboardText}
                        onChange={(e) => setClipboardText(e.target.value)}
                        placeholder="Paste or type content here..."
                        className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      />
                    </div>
                    <Button 
                      onClick={handleSendClipboard} 
                      disabled={!clipboardText.trim()}
                      className="w-full"
                    >
                      <Icon name="Send" size={16} className="mr-2" />
                      Generate Share Code
                    </Button>
                    
                    {generatedCode && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-green-800">Code Generated!</p>
                            <p className="text-2xl font-bold text-green-900 font-mono">{generatedCode}</p>
                            <p className="text-xs text-green-600">Share this code with your friend</p>
                          </div>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => navigator.clipboard.writeText(generatedCode)}
                          >
                            <Icon name="Copy" size={14} className="mr-1" />
                            Copy
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Receive Clipboard */}
                <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Icon name="Download" size={20} className="mr-2 text-green-600" />
                    Receive Content
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Enter 4-Digit Code
                      </label>
                      <Input
                        type="text"
                        value={receiveCode}
                        onChange={(e) => setReceiveCode(e.target.value.replace(/\D/g, '').slice(0, 4))}
                        placeholder="0000"
                        className="text-center text-lg font-mono tracking-widest"
                        maxLength={4}
                      />
                    </div>
                    <Button 
                      onClick={handleReceiveClipboard} 
                      disabled={receiveCode.length !== 4}
                      className="w-full"
                      variant="outline"
                    >
                      <Icon name="Download" size={16} className="mr-2" />
                      Retrieve Content
                    </Button>
                    
                    {receivedText && (
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-sm font-medium text-blue-800 mb-2">Received Content:</p>
                        <div className="bg-white rounded border p-3 text-sm text-gray-900 whitespace-pre-wrap">
                          {receivedText}
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="mt-2 w-full"
                          onClick={() => navigator.clipboard.writeText(receivedText)}
                        >
                          <Icon name="Copy" size={14} className="mr-1" />
                          Copy to Clipboard
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Clipboard History */}
              {clipboardHistory.length > 0 && (
                <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Icon name="History" size={20} className="mr-2 text-purple-600" />
                    Recent Shares
                  </h3>
                  <div className="space-y-3">
                    {clipboardHistory.map((entry) => (
                      <div key={entry.id} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                        <div className="flex-1">
                          <div className="text-sm font-mono font-bold text-gray-900">Code: {entry.code}</div>
                          <div className="text-xs text-gray-600 truncate pr-4">
                            {entry.text.substring(0, 50)}{entry.text.length > 50 ? '...' : ''}
                          </div>
                          <div className="text-xs text-gray-500">
                            {new Date(entry.timestamp).toLocaleString()}
                          </div>
                        </div>
                        <div className="text-xs text-gray-500">
                          {entry.code in clipboardStorage ? 'Active' : 'Claimed'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GoalsHomework;
