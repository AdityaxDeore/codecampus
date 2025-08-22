import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentCode, setCurrentCode] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const codeExamples = [
    {
      problem: "Two Sum",
      code: `def two_sum(nums, target):
    hash_map = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in hash_map:
            return [hash_map[complement], i]
        hash_map[num] = i
    return []`,
      language: "Python"
    },
    {
      problem: "Binary Search",
      code: `function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}`,
      language: "JavaScript"
    },
    {
      problem: "Fibonacci",
      code: `public class Fibonacci {
    public static int fib(int n) {
        if (n <= 1) return n;
        int a = 0, b = 1;
        for (int i = 2; i <= n; i++) {
            int temp = a + b;
            a = b;
            b = temp;
        }
        return b;
    }
}`,
      language: "Java"
    }
  ];

  const stats = [
    { label: "Active Students", value: "12,847", icon: "Users" },
    { label: "Problems Solved Today", value: "3,291", icon: "Code" },
    { label: "Career Placements", value: "1,456", icon: "Briefcase" }
  ];

  useEffect(() => {
    const currentExample = codeExamples?.[currentCode];
    let index = 0;
    setTypedText('');
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (index < currentExample?.code?.length) {
        setTypedText(currentExample?.code?.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
        
        setTimeout(() => {
          setCurrentCode((prev) => (prev + 1) % codeExamples?.length);
        }, 3000);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentCode]);

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-emerald-200 dark:bg-emerald-800 rounded-full opacity-20 animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 animate-pulse delay-1000"></div>
      
      <div className="w-full max-w-none px-4 sm:px-6 lg:px-8 py-20 pt-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 z-10 relative"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm"
              >
                <Icon name="Sparkles" size={16} />
                <span>Join 12,000+ Students Coding Together</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
              >
                Your Code,
                <br />
                <span className="text-blue-600 dark:text-blue-400">Your Community,</span>
                <br />
                <span className="text-emerald-600 dark:text-emerald-400">Your Career</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
              >
                Transform your coding journey from individual struggle to collaborative success. Build skills, showcase projects, and launch your tech career with your campus community.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {stats?.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="flex justify-center sm:justify-start mb-2">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <Icon name={stat?.icon} size={24} className="text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{stat?.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat?.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="default"
                size="lg"
                iconName="GraduationCap"
                iconPosition="left"
                className="flex-1 sm:flex-none bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white shadow-xl"
                onClick={() => navigate('/login')}
              >
                Join Your Campus
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Code"
                iconPosition="left"
                className="flex-1 sm:flex-none border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                onClick={() => navigate('/problem-workspace')}
              >
                Explore Problems
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="bg-gray-900 dark:bg-gray-950 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              {/* Terminal Header */}
              <div className="bg-gray-800 dark:bg-gray-900 px-4 py-3 flex items-center space-x-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-gray-400 dark:text-gray-500 text-sm font-medium">
                    {codeExamples?.[currentCode]?.problem} - {codeExamples?.[currentCode]?.language}
                  </span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 h-80 overflow-hidden">
                <pre className="text-green-400 dark:text-green-300 font-mono text-sm leading-relaxed">
                  <code>{typedText}</code>
                  {isTyping && <span className="animate-pulse">|</span>}
                </pre>
              </div>

              {/* Terminal Footer */}
              <div className="bg-gray-800 dark:bg-gray-900 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-gray-400 dark:text-gray-500 text-xs">
                  <Icon name="CheckCircle" size={14} className="text-green-500 dark:text-green-400" />
                  <span>Solution Accepted</span>
                </div>
                <div className="flex space-x-4 text-gray-400 dark:text-gray-500 text-xs">
                  <span>Runtime: 64ms</span>
                  <span>Memory: 14.2MB</span>
                </div>
              </div>
            </div>

            {/* Floating Achievement */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 border border-gray-200 dark:border-gray-700 backdrop-blur-sm"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center">
                  <Icon name="Trophy" size={20} className="text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">Problem Solved!</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">+50 XP earned</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;