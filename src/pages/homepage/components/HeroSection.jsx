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
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 flex items-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 lg:px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                <Icon name="Sparkles" size={16} />
                <span>Join 12,000+ Students Coding Together</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                Your Code,
                <br />
                <span className="text-blue-600">Your Community,</span>
                <br />
                <span className="text-emerald-600">Your Career</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 leading-relaxed max-w-lg"
              >
                Transform your coding journey from individual struggle to collaborative success. Build skills, showcase projects, and launch your tech career with your campus community.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-6"
            >
              {stats?.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon name={stat?.icon} size={20} className="text-blue-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat?.value}</div>
                  <div className="text-sm text-gray-600">{stat?.label}</div>
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
                className="flex-1 sm:flex-none"
                onClick={() => navigate('/login')}
              >
                Join Your Campus
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Code"
                iconPosition="left"
                className="flex-1 sm:flex-none"
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
            className="relative"
          >
            <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden">
              {/* Terminal Header */}
              <div className="bg-gray-800 px-4 py-3 flex items-center space-x-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-gray-400 text-sm font-medium">
                    {codeExamples?.[currentCode]?.problem} - {codeExamples?.[currentCode]?.language}
                  </span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 h-80 overflow-hidden">
                <pre className="text-green-400 font-mono text-sm leading-relaxed">
                  <code>{typedText}</code>
                  {isTyping && <span className="animate-pulse">|</span>}
                </pre>
              </div>

              {/* Terminal Footer */}
              <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-gray-400 text-xs">
                  <Icon name="CheckCircle" size={14} className="text-green-500" />
                  <span>Solution Accepted</span>
                </div>
                <div className="flex space-x-4 text-gray-400 text-xs">
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
              className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border border-gray-200"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Icon name="Trophy" size={20} className="text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Problem Solved!</div>
                  <div className="text-xs text-gray-600">+50 XP earned</div>
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