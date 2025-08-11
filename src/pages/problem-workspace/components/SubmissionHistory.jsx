import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SubmissionHistory = ({ submissions, isVisible, onToggle, onViewSubmission }) => {
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  if (!isVisible) {
    return null;
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Accepted': return 'text-green-600 bg-green-50';
      case 'Wrong Answer': return 'text-red-600 bg-red-50';
      case 'Time Limit Exceeded': return 'text-amber-600 bg-amber-50';
      case 'Runtime Error': return 'text-red-600 bg-red-50';
      case 'Compilation Error': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Accepted': return 'CheckCircle';
      case 'Wrong Answer': return 'XCircle';
      case 'Time Limit Exceeded': return 'Clock';
      case 'Runtime Error': return 'AlertCircle';
      case 'Compilation Error': return 'AlertTriangle';
      default: return 'Circle';
    }
  };

  return (
    <div className="w-80 border-l border-border bg-background flex flex-col">
      <div className="flex-shrink-0 border-b border-border p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-foreground">Submission History</h3>
          <Button variant="ghost" onClick={onToggle} iconName="X" />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {submissions?.length === 0 ? (
          <div className="p-6 text-center">
            <Icon name="FileText" size={48} className="mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No submissions yet</p>
            <p className="text-sm text-muted-foreground mt-1">
              Submit your solution to see history
            </p>
          </div>
        ) : (
          <div className="p-4 space-y-3">
            {submissions?.map((submission, index) => (
              <div
                key={submission?.id}
                className={`border border-border rounded-lg p-4 cursor-pointer academic-transition hover:border-primary ${
                  selectedSubmission?.id === submission?.id ? 'border-primary bg-primary/5' : ''
                }`}
                onClick={() => setSelectedSubmission(submission)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Icon 
                      name={getStatusIcon(submission?.status)} 
                      size={16} 
                      className={getStatusColor(submission?.status)?.split(' ')?.[0]} 
                    />
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusColor(submission?.status)}`}>
                      {submission?.status}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    #{submissions?.length - index}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Language:</span>
                    <span className="text-foreground font-medium">{submission?.language}</span>
                  </div>
                  
                  {submission?.runtime && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Runtime:</span>
                      <span className="text-foreground">{submission?.runtime}ms</span>
                    </div>
                  )}
                  
                  {submission?.memory && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Memory:</span>
                      <span className="text-foreground">{submission?.memory}MB</span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Submitted:</span>
                    <span className="text-foreground">{submission?.timestamp}</span>
                  </div>
                </div>

                {submission?.status === 'Accepted' && submission?.performance && (
                  <div className="mt-3 pt-3 border-t border-border">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Beats:</span>
                      <span className="text-green-600 font-medium">
                        {submission?.performance?.runtimePercentile}% runtime, {submission?.performance?.memoryPercentile}% memory
                      </span>
                    </div>
                  </div>
                )}

                <div className="mt-3 flex items-center justify-between">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e?.stopPropagation();
                      onViewSubmission(submission);
                    }}
                    iconName="Eye"
                    iconPosition="left"
                  >
                    View Code
                  </Button>
                  
                  {submission?.status === 'Accepted' && (
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="Share"
                      iconPosition="left"
                    >
                      Share
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {selectedSubmission && (
        <div className="flex-shrink-0 border-t border-border p-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-foreground">Submission Details</h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedSubmission(null)}
                iconName="X"
              />
            </div>
            
            <div className="text-sm space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status:</span>
                <span className={`font-medium ${getStatusColor(selectedSubmission?.status)?.split(' ')?.[0]}`}>
                  {selectedSubmission?.status}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-muted-foreground">Test Cases:</span>
                <span className="text-foreground">
                  {selectedSubmission?.testCasesPassed}/{selectedSubmission?.totalTestCases}
                </span>
              </div>
              
              {selectedSubmission?.errorMessage && (
                <div className="mt-3">
                  <span className="text-muted-foreground text-xs">Error:</span>
                  <p className="text-red-600 text-xs mt-1 p-2 bg-red-50 rounded">
                    {selectedSubmission?.errorMessage}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubmissionHistory;