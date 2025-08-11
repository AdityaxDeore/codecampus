import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProblemPanel = ({ problem, onToggleHints, showHints }) => {
  const [activeTab, setActiveTab] = useState('problem');

  const tabs = [
    { id: 'problem', label: 'Problem', icon: 'FileText' },
    { id: 'examples', label: 'Examples', icon: 'Code2' },
    { id: 'discussion', label: 'Discussion', icon: 'MessageSquare' }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case 'easy': return 'text-green-600 bg-green-50';
      case 'medium': return 'text-amber-600 bg-amber-50';
      case 'hard': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const renderProblemContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">{problem?.title}</h1>
        <div className="flex items-center space-x-3">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(problem?.difficulty)}`}>
            {problem?.difficulty}
          </span>
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <Icon name="Users" size={16} />
            <span>{problem?.successRate}% success</span>
          </div>
        </div>
      </div>

      <div className="prose prose-sm max-w-none">
        <p className="text-foreground leading-relaxed">{problem?.description}</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Constraints</h3>
        <ul className="space-y-2">
          {problem?.constraints?.map((constraint, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-start space-x-2">
              <Icon name="Dot" size={16} className="mt-1 flex-shrink-0" />
              <span>{constraint}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2">
        {problem?.tags?.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>

      <div className="border-t border-border pt-4">
        <Button
          variant="outline"
          onClick={onToggleHints}
          iconName={showHints ? "EyeOff" : "Eye"}
          iconPosition="left"
          className="w-full"
        >
          {showHints ? 'Hide Hints' : 'Show Hints'}
        </Button>
        
        {showHints && (
          <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <h4 className="font-medium text-amber-800 mb-2">Community Hints</h4>
            <div className="space-y-2">
              {problem?.hints?.map((hint, index) => (
                <div key={index} className="text-sm text-amber-700 flex items-start space-x-2">
                  <Icon name="Lightbulb" size={14} className="mt-0.5 flex-shrink-0" />
                  <span>{hint}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderExamples = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-foreground">Examples</h3>
      {problem?.examples?.map((example, index) => (
        <div key={index} className="border border-border rounded-lg p-4">
          <h4 className="font-medium text-foreground mb-3">Example {index + 1}</h4>
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Input:</label>
              <pre className="mt-1 p-3 bg-muted rounded text-sm font-mono text-foreground overflow-x-auto">
                {example?.input}
              </pre>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Output:</label>
              <pre className="mt-1 p-3 bg-muted rounded text-sm font-mono text-foreground overflow-x-auto">
                {example?.output}
              </pre>
            </div>
            {example?.explanation && (
              <div>
                <label className="text-sm font-medium text-muted-foreground">Explanation:</label>
                <p className="mt-1 text-sm text-foreground">{example?.explanation}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  const renderDiscussion = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Discussion</h3>
        <Button variant="outline" iconName="Plus" iconPosition="left">
          New Post
        </Button>
      </div>
      
      <div className="space-y-4">
        {problem?.discussions?.map((discussion, index) => (
          <div key={index} className="border border-border rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-medium text-primary-foreground">
                  {discussion?.author?.charAt(0)?.toUpperCase()}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-medium text-foreground">{discussion?.author}</span>
                  <span className="text-xs text-muted-foreground">{discussion?.timestamp}</span>
                </div>
                <p className="text-sm text-foreground">{discussion?.content}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <button className="flex items-center space-x-1 text-xs text-muted-foreground hover:text-primary">
                    <Icon name="ThumbsUp" size={14} />
                    <span>{discussion?.likes}</span>
                  </button>
                  <button className="text-xs text-muted-foreground hover:text-primary">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="h-full flex flex-col bg-background">
      <div className="flex-shrink-0 border-b border-border">
        <div className="flex space-x-1 p-2">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium academic-transition ${
                activeTab === tab?.id
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-6">
        {activeTab === 'problem' && renderProblemContent()}
        {activeTab === 'examples' && renderExamples()}
        {activeTab === 'discussion' && renderDiscussion()}
      </div>
    </div>
  );
};

export default ProblemPanel;