import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TestResults = ({ results, isVisible, onToggle }) => {
  const [activeTab, setActiveTab] = useState('results');

  if (!isVisible) {
    return (
      <div className="border-t border-border bg-background">
        <button
          onClick={onToggle}
          className="w-full p-3 flex items-center justify-center space-x-2 text-muted-foreground hover:text-foreground academic-transition"
        >
          <Icon name="ChevronUp" size={16} />
          <span className="text-sm font-medium">Show Test Results</span>
        </button>
      </div>
    );
  }

  const tabs = [
    { id: 'results', label: 'Test Results', icon: 'CheckCircle' },
    { id: 'console', label: 'Console', icon: 'Terminal' },
    { id: 'performance', label: 'Performance', icon: 'Zap' }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'passed': return { icon: 'CheckCircle', color: 'text-green-600' };
      case 'failed': return { icon: 'XCircle', color: 'text-red-600' };
      case 'timeout': return { icon: 'Clock', color: 'text-amber-600' };
      case 'error': return { icon: 'AlertCircle', color: 'text-red-600' };
      default: return { icon: 'Circle', color: 'text-gray-400' };
    }
  };

  const renderTestResults = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h3 className="font-semibold text-foreground">Test Cases</h3>
          {results && (
            <div className="flex items-center space-x-2">
              <span className={`text-sm font-medium ${
                results?.passed === results?.total ? 'text-green-600' : 'text-red-600'
              }`}>
                {results?.passed}/{results?.total} Passed
              </span>
              {results?.status === 'accepted' && (
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                  Accepted
                </span>
              )}
            </div>
          )}
        </div>
        <Button variant="ghost" onClick={onToggle} iconName="ChevronDown" />
      </div>

      {results?.testCases && (
        <div className="space-y-3">
          {results?.testCases?.map((testCase, index) => {
            const statusInfo = getStatusIcon(testCase?.status);
            return (
              <div key={index} className="border border-border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Icon name={statusInfo?.icon} size={16} className={statusInfo?.color} />
                    <span className="font-medium text-foreground">Test Case {index + 1}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span>Runtime: {testCase?.runtime}ms</span>
                    <span>Memory: {testCase?.memory}MB</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground">Input:</label>
                    <pre className="mt-1 p-2 bg-muted rounded text-xs font-mono text-foreground overflow-x-auto">
                      {testCase?.input}
                    </pre>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground">Expected:</label>
                    <pre className="mt-1 p-2 bg-muted rounded text-xs font-mono text-foreground overflow-x-auto">
                      {testCase?.expected}
                    </pre>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground">Output:</label>
                    <pre className={`mt-1 p-2 rounded text-xs font-mono overflow-x-auto ${
                      testCase?.status === 'passed' ?'bg-green-50 text-green-800' :'bg-red-50 text-red-800'
                    }`}>
                      {testCase?.output}
                    </pre>
                  </div>
                </div>
                {testCase?.error && (
                  <div className="mt-3">
                    <label className="text-xs font-medium text-red-600">Error:</label>
                    <pre className="mt-1 p-2 bg-red-50 border border-red-200 rounded text-xs font-mono text-red-800 overflow-x-auto">
                      {testCase?.error}
                    </pre>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );

  const renderConsole = () => (
    <div className="space-y-4">
      <h3 className="font-semibold text-foreground">Console Output</h3>
      <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm min-h-32">
        {results?.console ? (
          <pre className="whitespace-pre-wrap">{results?.console}</pre>
        ) : (
          <div className="text-gray-500 italic">No console output</div>
        )}
      </div>
    </div>
  );

  const renderPerformance = () => (
    <div className="space-y-6">
      <h3 className="font-semibold text-foreground">Performance Metrics</h3>
      
      {results?.performance && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">Runtime</span>
                <span className="text-lg font-bold text-foreground">{results?.performance?.runtime}ms</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full" 
                  style={{ width: `${Math.min(results?.performance?.runtimePercentile, 100)}%` }}
                ></div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Beats {results?.performance?.runtimePercentile}% of submissions
              </p>
            </div>

            <div className="border border-border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">Memory Usage</span>
                <span className="text-lg font-bold text-foreground">{results?.performance?.memory}MB</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-secondary h-2 rounded-full" 
                  style={{ width: `${Math.min(results?.performance?.memoryPercentile, 100)}%` }}
                ></div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Beats {results?.performance?.memoryPercentile}% of submissions
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <h4 className="font-medium text-foreground mb-3">Complexity Analysis</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Time Complexity:</span>
                  <span className="text-sm font-mono text-foreground">{results?.performance?.timeComplexity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Space Complexity:</span>
                  <span className="text-sm font-mono text-foreground">{results?.performance?.spaceComplexity}</span>
                </div>
              </div>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h4 className="font-medium text-foreground mb-3">Submission Stats</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Total Attempts:</span>
                  <span className="text-sm text-foreground">{results?.performance?.attempts}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Success Rate:</span>
                  <span className="text-sm text-foreground">{results?.performance?.successRate}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="border-t border-border bg-background">
      <div className="border-b border-border">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex space-x-1">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium academic-transition ${
                  activeTab === tab?.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={tab?.icon} size={14} />
                <span>{tab?.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="p-4 max-h-80 overflow-y-auto">
        {activeTab === 'results' && renderTestResults()}
        {activeTab === 'console' && renderConsole()}
        {activeTab === 'performance' && renderPerformance()}
      </div>
    </div>
  );
};

export default TestResults;