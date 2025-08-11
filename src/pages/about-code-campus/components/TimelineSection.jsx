import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const TimelineSection = () => {
  const [visibleMilestones, setVisibleMilestones] = useState(0);

  const milestones = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Founded by CS students who believed competitive programming should be collaborative, not isolating.",
      icon: "Lightbulb",
      stats: "3 Founders"
    },
    {
      year: "2021",
      title: "First University Partnership",
      description: "Partnered with Stanford University to pilot our academic-centric coding platform.",
      icon: "GraduationCap",
      stats: "1 University"
    },
    {
      year: "2022",
      title: "Community Growth",
      description: "Reached 10,000 active students across 50 universities with our collaborative learning approach.",
      icon: "Users",
      stats: "10K Students"
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Recognized as \'Best Educational Platform\' and established partnerships with major tech companies.",
      icon: "Award",
      stats: "25 Partners"
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Expanded to 200+ universities worldwide with 50,000+ students building their coding careers.",
      icon: "Globe",
      stats: "200+ Universities"
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Continuing to innovate with AI-powered learning paths and enhanced collaboration tools.",
      icon: "Rocket",
      stats: "Unlimited Potential"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleMilestones(prev => {
        if (prev < milestones?.length) {
          return prev + 1;
        }
        return prev;
      });
    }, 500);

    return () => clearInterval(timer);
  }, [milestones?.length]);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Our Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From a simple idea to transform competitive programming into collaborative learning, 
            here's how CodeCampus has evolved to serve the global student community.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border"></div>

          <div className="space-y-12">
            {milestones?.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                } academic-transition ${
                  index < visibleMilestones ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Content card */}
                <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-card p-6 rounded-xl academic-shadow hover:academic-shadow-lg academic-transition">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name={milestone?.icon} size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">{milestone?.year}</div>
                        <div className="text-sm text-muted-foreground">{milestone?.stats}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {milestone?.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {milestone?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;