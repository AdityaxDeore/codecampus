import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FeaturedProjects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "AI-Powered Study Assistant",
      description: "A machine learning application that helps students optimize their study schedules based on learning patterns and performance analytics.",
      author: "Sarah Chen",
      university: "MIT",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
      technologies: ["Python", "TensorFlow", "React", "Node.js"],
      stars: 234,
      forks: 67,
      category: "Machine Learning",
      difficulty: "Advanced",
      completionTime: "3 months",
      githubUrl: "https://github.com/sarahchen/ai-study-assistant"
    },
    {
      id: 2,
      title: "Campus Event Management System",
      description: "Full-stack web application for managing university events with real-time notifications, RSVP tracking, and social features.",
      author: "Alex Rodriguez",
      university: "Stanford",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      technologies: ["React", "Express.js", "MongoDB", "Socket.io"],
      stars: 189,
      forks: 45,
      category: "Web Development",
      difficulty: "Intermediate",
      completionTime: "2 months",
      githubUrl: "https://github.com/alexrod/campus-events"
    },
    {
      id: 3,
      title: "Blockchain Voting System",
      description: "Secure and transparent voting system using blockchain technology for student government elections with smart contract integration.",
      author: "Maya Patel",
      university: "UC Berkeley",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
      stars: 312,
      forks: 89,
      category: "Blockchain",
      difficulty: "Advanced",
      completionTime: "4 months",
      githubUrl: "https://github.com/mayapatel/blockchain-voting"
    },
    {
      id: 4,
      title: "Mobile Fitness Tracker",
      description: "Cross-platform mobile app for tracking workouts, nutrition, and health metrics with social challenges and progress sharing.",
      author: "David Kim",
      university: "Carnegie Mellon",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
      technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
      stars: 156,
      forks: 34,
      category: "Mobile Development",
      difficulty: "Intermediate",
      completionTime: "2.5 months",
      githubUrl: "https://github.com/davidkim/fitness-tracker"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects?.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects?.length) % projects?.length);
  };

  const getDifficultyColor = (difficulty) => {
    const colorMap = {
      Beginner: "text-green-600 bg-green-100",
      Intermediate: "text-amber-600 bg-amber-100",
      Advanced: "text-red-600 bg-red-100"
    };
    return colorMap?.[difficulty] || "text-gray-600 bg-gray-100";
  };

  const getCategoryColor = (category) => {
    const colorMap = {
      "Machine Learning": "text-purple-600 bg-purple-100",
      "Web Development": "text-blue-600 bg-blue-100",
      "Blockchain": "text-indigo-600 bg-indigo-100",
      "Mobile Development": "text-emerald-600 bg-emerald-100"
    };
    return colorMap?.[category] || "text-gray-600 bg-gray-100";
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Sparkles" size={16} />
            <span>Student Showcase</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured Student Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing projects built by your peers. Get inspired, learn new technologies, and showcase your own work.
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Project Display */}
          <motion.div
            key={currentProject}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Project Image */}
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <Image
                  src={projects?.[currentProject]?.image}
                  alt={projects?.[currentProject]?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(projects?.[currentProject]?.category)}`}>
                    {projects?.[currentProject]?.category}
                  </span>
                </div>

                {/* GitHub Stats */}
                <div className="absolute bottom-4 left-4 flex items-center space-x-4 text-white">
                  <div className="flex items-center space-x-1">
                    <Icon name="Star" size={16} />
                    <span className="text-sm font-medium">{projects?.[currentProject]?.stars}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="GitFork" size={16} />
                    <span className="text-sm font-medium">{projects?.[currentProject]?.forks}</span>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  {/* Author Info */}
                  <div className="flex items-center space-x-4">
                    <Image
                      src={projects?.[currentProject]?.avatar}
                      alt={projects?.[currentProject]?.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{projects?.[currentProject]?.author}</div>
                      <div className="text-sm text-gray-600">{projects?.[currentProject]?.university}</div>
                    </div>
                  </div>

                  {/* Project Title & Description */}
                  <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                      {projects?.[currentProject]?.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {projects?.[currentProject]?.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <div className="text-sm font-semibold text-gray-900">Technologies Used:</div>
                    <div className="flex flex-wrap gap-2">
                      {projects?.[currentProject]?.technologies?.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Meta */}
                  <div className="grid grid-cols-2 gap-4 py-4">
                    <div>
                      <div className="text-sm text-gray-600">Difficulty</div>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(projects?.[currentProject]?.difficulty)}`}>
                        {projects?.[currentProject]?.difficulty}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Completion Time</div>
                      <div className="text-sm font-semibold text-gray-900">{projects?.[currentProject]?.completionTime}</div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2">
                      <Icon name="Github" size={20} />
                      <span>View on GitHub</span>
                    </button>
                    <button className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center space-x-2">
                      <Icon name="ExternalLink" size={20} />
                      <span>Live Demo</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevProject}
              className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 shadow-sm"
            >
              <Icon name="ChevronLeft" size={20} className="text-gray-600" />
            </button>

            {/* Project Indicators */}
            <div className="flex items-center space-x-2">
              {projects?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentProject ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextProject}
              className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 shadow-sm"
            >
              <Icon name="ChevronRight" size={20} className="text-gray-600" />
            </button>
          </div>

          {/* Browse All Projects CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center space-x-2">
              <Icon name="FolderOpen" size={20} />
              <span>Browse All Projects</span>
              <Icon name="ArrowRight" size={16} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;