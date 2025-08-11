import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const StatsSection = () => {
  const [counters, setCounters] = useState({
    students: 0,
    universities: 0,
    problems: 0,
    placements: 0
  });

  const finalStats = {
    students: 50000,
    universities: 200,
    problems: 15000,
    placements: 95
  };

  const statsData = [
    {
      key: 'students',
      label: 'Active Students',
      value: finalStats?.students,
      suffix: '+',
      icon: 'Users',
      color: 'text-primary'
    },
    {
      key: 'universities',
      label: 'Partner Universities',
      value: finalStats?.universities,
      suffix: '+',
      icon: 'GraduationCap',
      color: 'text-secondary'
    },
    {
      key: 'problems',
      label: 'Coding Problems',
      value: finalStats?.problems,
      suffix: '+',
      icon: 'Code',
      color: 'text-accent'
    },
    {
      key: 'placements',
      label: 'Career Success Rate',
      value: finalStats?.placements,
      suffix: '%',
      icon: 'TrendingUp',
      color: 'text-success'
    }
  ];

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      setCounters(prev => {
        const newCounters = { ...prev };
        let allComplete = true;

        Object.keys(finalStats)?.forEach(key => {
          if (newCounters?.[key] < finalStats?.[key]) {
            const increment = Math.ceil(finalStats?.[key] / steps);
            newCounters[key] = Math.min(newCounters?.[key] + increment, finalStats?.[key]);
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
  }, []);

  const achievements = [
    {
      title: "Industry Recognition",
      description: "Winner of \'Best Educational Platform 2024\' by EdTech Awards",
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
  ];

  return (
    <section className="py-20 bg-muted/30">
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
          {statsData?.map((stat, index) => (
            <div key={index} className="bg-card p-8 rounded-xl academic-shadow text-center group hover:academic-shadow-lg academic-transition">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 academic-transition">
                <Icon name={stat?.icon} size={24} className={stat?.color} />
              </div>
              
              <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                {counters?.[stat?.key]?.toLocaleString()}{stat?.suffix}
              </div>
              
              <p className="text-muted-foreground font-medium">
                {stat?.label}
              </p>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {achievements?.map((achievement, index) => (
            <div key={index} className="bg-card p-6 rounded-xl academic-shadow hover:academic-shadow-lg academic-transition">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={achievement?.icon} size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {achievement?.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {achievement?.description}
                  </p>
                </div>
              </div>
            </div>
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
    </section>
  );
};

export default StatsSection;