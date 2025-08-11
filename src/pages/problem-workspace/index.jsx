import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import ProblemPanel from './components/ProblemPanel';
import CodeEditor from './components/CodeEditor';
import TestResults from './components/TestResults';
import SubmissionHistory from './components/SubmissionHistory';
import CollaborativeMode from './components/CollaborativeMode';
import SuccessAnimation from './components/SuccessAnimation';

import Button from '../../components/ui/Button';

const ProblemWorkspace = () => {
  const [showHints, setShowHints] = useState(false);
  const [showTestResults, setShowTestResults] = useState(false);
  const [showSubmissionHistory, setShowSubmissionHistory] = useState(false);
  const [showCollaborativeMode, setShowCollaborativeMode] = useState(false);
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [testResults, setTestResults] = useState(null);
  const [submissions, setSubmissions] = useState([]);

  // Mock problem data
  const problem = {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    successRate: 87,
    description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.`,
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists."
    ],
    tags: ["Array", "Hash Table", "Two Pointers"],
    hints: [
      "A really brute force way would be to search for all possible pairs of numbers but that would be too slow.",
      "Again, the best way to maintain a mapping of each element in the array to its index is a hash table.",
      "The best time complexity that we can achieve is O(n) where n is the number of elements in the array."
    ],
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
        explanation: "Because nums[1] + nums[2] == 6, we return [1, 2]."
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 6, we return [0, 1]."
      }
    ],
    discussions: [
      {
        id: 1,
        author: "Alex Chen",
        content: "Has anyone tried using a hash map approach? I\'m getting the right answer but wondering about the time complexity.",
        timestamp: "2 hours ago",
        likes: 12
      },
      {
        id: 2,
        author: "Sarah Kim",
        content: "The hash map approach is O(n) time and O(n) space. Much better than the brute force O(n²) solution!",
        timestamp: "1 hour ago",
        likes: 8
      },
      {
        id: 3,
        author: "Mike Rodriguez",
        content: "Don\'t forget to handle the edge case where the same element can\'t be used twice. Check the indices!",
        timestamp: "45 minutes ago",
        likes: 15
      }
    ]
  };

  // Mock submission history
  const mockSubmissions = [
    {
      id: 1,
      status: "Accepted",
      language: "JavaScript",
      runtime: 68,
      memory: 42.1,
      timestamp: "2 minutes ago",
      testCasesPassed: 57,
      totalTestCases: 57,
      performance: {
        runtimePercentile: 85,
        memoryPercentile: 92
      }
    },
    {
      id: 2,
      status: "Wrong Answer",
      language: "JavaScript",
      timestamp: "5 minutes ago",
      testCasesPassed: 45,
      totalTestCases: 57,
      errorMessage: "Expected [0,1] but got [1,0]"
    },
    {
      id: 3,
      status: "Time Limit Exceeded",
      language: "Python",
      timestamp: "8 minutes ago",
      testCasesPassed: 23,
      totalTestCases: 57
    }
  ];

  useEffect(() => {
    setSubmissions(mockSubmissions);
  }, []);

  const handleRunCode = async (code, language) => {
    setIsRunning(true);
    setShowTestResults(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockResults = {
        status: "success",
        passed: 3,
        total: 3,
        console: `Running test cases...\nTest case 1: PASSED\nTest case 2: PASSED\nTest case 3: PASSED\n\nAll tests passed!`,
        testCases: [
          {
            status: "passed",
            input: "[2,7,11,15], target = 9",
            expected: "[0,1]",
            output: "[0,1]",
            runtime: 68,
            memory: 42.1
          },
          {
            status: "passed",
            input: "[3,2,4], target = 6",
            expected: "[1,2]",
            output: "[1,2]",
            runtime: 72,
            memory: 41.8
          },
          {
            status: "passed",
            input: "[3,3], target = 6",
            expected: "[0,1]",
            output: "[0,1]",
            runtime: 65,
            memory: 42.3
          }
        ],
        performance: {
          runtime: 68,
          memory: 42.1,
          runtimePercentile: 85,
          memoryPercentile: 92,
          timeComplexity: "O(n)",
          spaceComplexity: "O(n)",
          attempts: 3,
          successRate: 100
        }
      };
      
      setTestResults(mockResults);
      setIsRunning(false);
    }, 2000);
  };

  const handleSubmitCode = async (code, language) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      const newSubmission = {
        id: submissions?.length + 1,
        status: "Accepted",
        language: language?.charAt(0)?.toUpperCase() + language?.slice(1),
        runtime: 68,
        memory: 42.1,
        timestamp: "Just now",
        testCasesPassed: 57,
        totalTestCases: 57,
        performance: {
          runtimePercentile: 85,
          memoryPercentile: 92
        }
      };
      
      setSubmissions(prev => [newSubmission, ...prev]);
      setIsSubmitting(false);
      setShowSuccessAnimation(true);
    }, 3000);
  };

  const handleViewSubmission = (submission) => {
    console.log('Viewing submission:', submission);
    // Implementation for viewing submission code
  };

  const handleInviteUser = async (email) => {
    // Simulate invite API call
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Invited user:', email);
        resolve();
      }, 1000);
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-16 h-screen flex flex-col">
        {/* Collaborative Mode */}
        <CollaborativeMode
          isActive={showCollaborativeMode}
          onToggle={() => setShowCollaborativeMode(!showCollaborativeMode)}
          onInviteUser={handleInviteUser}
        />

        {/* Main Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Problem Panel */}
          <div className="w-1/2 border-r border-border">
            <ProblemPanel
              problem={problem}
              onToggleHints={() => setShowHints(!showHints)}
              showHints={showHints}
            />
          </div>

          {/* Code Editor */}
          <div className="flex-1 flex flex-col">
            <div className="flex-1">
              <CodeEditor
                onRunCode={handleRunCode}
                onSubmitCode={handleSubmitCode}
                isRunning={isRunning}
                isSubmitting={isSubmitting}
              />
            </div>

            {/* Test Results Panel */}
            <TestResults
              results={testResults}
              isVisible={showTestResults}
              onToggle={() => setShowTestResults(!showTestResults)}
            />
          </div>

          {/* Submission History Sidebar */}
          {showSubmissionHistory && (
            <SubmissionHistory
              submissions={submissions}
              isVisible={showSubmissionHistory}
              onToggle={() => setShowSubmissionHistory(!showSubmissionHistory)}
              onViewSubmission={handleViewSubmission}
            />
          )}
        </div>

        {/* Floating Action Buttons */}
        <div className="fixed bottom-6 right-6 flex flex-col space-y-3">
          <Button
            variant={showSubmissionHistory ? "default" : "outline"}
            onClick={() => setShowSubmissionHistory(!showSubmissionHistory)}
            iconName="History"
            className="rounded-full w-12 h-12 p-0"
          />
          <Button
            variant={showCollaborativeMode ? "default" : "outline"}
            onClick={() => setShowCollaborativeMode(!showCollaborativeMode)}
            iconName="Users"
            className="rounded-full w-12 h-12 p-0"
          />
        </div>

        {/* Success Animation */}
        <SuccessAnimation
          isVisible={showSuccessAnimation}
          onClose={() => setShowSuccessAnimation(false)}
          submissionData={{
            runtime: 68,
            memory: 42.1,
            runtimePercentile: 85,
            memoryPercentile: 92
          }}
        />
      </div>
    </div>
  );
};

export default ProblemWorkspace;