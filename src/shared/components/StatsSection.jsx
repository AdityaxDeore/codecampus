import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../components/AppIcon';

const StatsSection = ({ variant = 'about', className = '' }) => {
  const [counters, setCounters] = useState({
    students: 0,
    universities: 0,
    problems: 0,
    placements: 0
  });

  const finalStats = {
    about: {
      students: 50000,
      universities: 200,
      problems: 15000,
      placements: 95
    },
    homepage: {
      students: 12847,
      universities: 150,
      problems: 2500,
      placements: 98
    }
  };

  const statsData = {
    about: [
      {
        key: 'students',
        label: 'Active Students',
        value: finalStats.about.students,
        suffix: '+',
        icon: 'Users',
        color: 'text-primary',
        description: 'Learning and growing together'
      },
      {
        key: 'universities',
        label: 'Partner Universities',
        value: finalStats.about.universities,
        suffix: '+',
        icon: 'GraduationCap',
        color: 'text-secondary',
        description: 'Top institutions worldwide'
      },
      {
        key: 'problems',
        label: 'Coding Problems',
        value: finalStats.about.problems,
        suffix: '+',
        icon: 'Code',
        color: 'text-accent',
        description: 'From beginner to expert'
      },
      {
        key: 'placements',
        label: 'Career Success Rate',
        value: finalStats.about.placements,
        suffix: '%',
        icon: 'TrendingUp',
        color: 'text-success',
        description: 'Students placed in tech companies'
      }
    ],
    homepage: [
      {
        key: 'students',
        label: 'Active Students',
        value: finalStats.homepage.students,
        suffix: '',
        icon: 'Users',
        color: 'text-blue-600 dark:text-blue-400',
        description: 'Coding together daily'
      },
      {
        key: 'universities',
        label: 'Partner Universities',
        value: finalStats.homepage.universities,
        suffix: '+',
        icon: 'GraduationCap',
        color: 'text-emerald-600 dark:text-emerald-400',
        description: 'Top-ranked institutions'
      },
      {
        key: 'problems',
        label: 'Problems Solved Today',
        value: finalStats.homepage.problems,
        suffix: '+',
        icon: 'Code',
        color: 'text-amber-600 dark:text-amber-400',
        description: 'Growing every day'
      },
      {
        key: 'placements',
        label: 'Satisfaction Rate',
        value: finalStats.homepage.placements,
        suffix: '%',
        icon: 'Star',
        color: 'text-purple-600 dark:text-purple-400',
        description: 'From our community'
      }
    ]
  };

  const achievements = {
    about: [
      {
        title: "Industry Recognition",
        description: "Winner of 'Best Educational Platform 2024' by EdTech Awards",
        icon: "Award"
      },
      {
        title: "Student Success",
        description: "Average 40% improvement in coding interview performance",
        icon: "TrendingUp"
      },
      {
        title: "Global Reach",
        description: "Students from 50+ countries actively learning together",
        icon: "Globe"
      },
      {
        title: "Community Impact",
        description: "Over 1 million collaborative coding sessions completed",
        icon: "Heart"
      }
    ],
    homepage: [
      {
        title: "Community Growth",
        description: "Join the fastest-growing student coding community",
        icon: "TrendingUp"
      },
      {
        title: "Learning Impact",
        description: "40% better interview performance for active users",
        icon: "Target"
      }
    ]
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;
    const currentStats = finalStats[variant];

    const timer = setInterval(() => {
      setCounters(prev => {
        const newCounters = { ...prev };
        let allComplete = true;

        Object.keys(currentStats).forEach(key => {
          if (newCounters[key] < currentStats[key]) {
            const increment = Math.ceil(currentStats[key] / steps);
            newCounters[key] = Math.min(newCounters[key] + increment, currentStats[key]);
            allComplete = false;
          }
        });

        if (allComplete) {
          clearInterval(timer);
        }

        return newCounters;
      });
    }, stepDuration);

    return () => clearInterval(timer);
  }, [variant]);

  const renderAboutContent = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
          Impact by Numbers
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Our platform's success is measured by the achievements of our student community and the partnerships we've built with leading educational institutions.
        </p>
      </div>

      {/* Main Stats */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {statsData[variant].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-xl academic-shadow text-center group hover:academic-shadow-lg academic-transition"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 academic-transition">
              <Icon name={stat.icon} size={24} className={stat.color} />
            </div>
            
            <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
              {counters[stat.key]?.toLocaleString()}{stat.suffix}
            </div>
            
            <p className="text-muted-foreground font-medium">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Achievements Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {achievements[variant].map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-card p-6 rounded-xl academic-shadow hover:academic-shadow-lg academic-transition"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={achievement.icon} size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Career Success Highlight */}
      <div className="bg-gradient-to-r from-secondary/5 to-primary/5 rounded-2xl p-8 lg:p-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Career Success Stories
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our students don't just learn to code – they build careers. With a 95% career success rate, 
              CodeCampus graduates are working at top tech companies worldwide.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Icon name="CheckCircle" size={20} className="text-secondary" />
                <span className="text-foreground">Average 35% salary increase post-graduation</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="CheckCircle" size={20} className="text-secondary" />
                <span className="text-foreground">85% receive job offers within 3 months</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="CheckCircle" size={20} className="text-secondary" />
                <span className="text-foreground">Students placed at Google, Microsoft, Amazon, and more</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card p-4 rounded-lg academic-shadow text-center">
              <div className="text-2xl font-bold text-primary mb-1">85%</div>
              <div className="text-sm text-muted-foreground">Job Offers Within 3 Months</div>
            </div>
            <div className="bg-card p-4 rounded-lg academic-shadow text-center">
              <div className="text-2xl font-bold text-secondary mb-1">35%</div>
              <div className="text-sm text-muted-foreground">Average Salary Increase</div>
            </div>
            <div className="bg-card p-4 rounded-lg academic-shadow text-center">
              <div className="text-2xl font-bold text-accent mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Partner Companies</div>
            </div>
            <div className="bg-card p-4 rounded-lg academic-shadow text-center">
              <div className="text-2xl font-bold text-primary mb-1">95%</div>
              <div className="text-sm text-muted-foreground">Student Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderHomepageContent = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData[variant].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name={stat.icon} size={24} className={stat.color} />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {counters[stat.key]?.toLocaleString()}{stat.suffix}
            </div>
            <div className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
              {stat.label}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {stat.description}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {achievements[variant].map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <Icon name={achievement.icon} size={20} className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {achievement.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {achievement.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const sectionClasses = {
    about: 'bg-muted/30 py-20',
    homepage: 'bg-white dark:bg-gray-900 py-16'
  };

  return (
    <section className={`${sectionClasses[variant]} ${className}`}>
      {variant === 'about' ? renderAboutContent() : renderHomepageContent()}
    </section>
  );
};

export default StatsSection;
