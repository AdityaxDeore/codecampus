import React from 'react';
import Icon from '../../../components/AppIcon';

const ValuePropositionSection = () => {
  const uniqueFeatures = [
    {
      icon: "Users",
      title: "University-Centric Communities",
      description: "Unlike traditional coding platforms, we create academic communities where students compete and collaborate within their university context.",
      highlight: "Academic Focus"
    },
    {
      icon: "Portfolio",
      title: "Portfolio Building",
      description: "Transform your coding journey into a professional portfolio that showcases both technical skills and collaborative achievements.",
      highlight: "Career Ready"
    },
    {
      icon: "MessageSquare",
      title: "Knowledge Sharing",
      description: "Learn from peers through detailed solution explanations, project discussions, and academic forum participation.",
      highlight: "Collaborative Learning"
    },
    {
      icon: "Trophy",
      title: "Multi-Dimensional Recognition",
      description: "Celebrate diverse contributions beyond just problem-solving speed - community help, project innovation, and peer mentoring.",
      highlight: "Inclusive Achievement"
    }
  ];

  const comparisonPoints = [
    {
      feature: "Community Focus",
      traditional: "Individual competition",
      codecampus: "Collaborative learning",
      icon: "Users"
    },
    {
      feature: "Academic Integration",
      traditional: "Separate from curriculum",
      codecampus: "Seamlessly integrated",
      icon: "BookOpen"
    },
    {
      feature: "Career Preparation",
      traditional: "Algorithm focus only",
      codecampus: "Holistic skill development",
      icon: "Briefcase"
    },
    {
      feature: "Recognition System",
      traditional: "Speed-based rankings",
      codecampus: "Multi-dimensional achievements",
      icon: "Award"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            What Makes CodeCampus Different
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another coding platform. CodeCampus transforms competitive programming 
            from an isolating individual pursuit into a collaborative academic experience.
          </p>
        </div>

        {/* Unique Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {uniqueFeatures?.map((feature, index) => (
            <div key={index} className="bg-card p-8 rounded-xl academic-shadow hover:academic-shadow-lg academic-transition">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name={feature?.icon} size={24} className="text-primary" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      {feature?.title}
                    </h3>
                    <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full">
                      {feature?.highlight}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-muted/30 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Traditional Platforms vs CodeCampus
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how our approach to competitive programming education differs from traditional platforms.
            </p>
          </div>

          <div className="space-y-6">
            {comparisonPoints?.map((point, index) => (
              <div key={index} className="bg-card rounded-lg p-6 academic-shadow">
                <div className="grid md:grid-cols-4 gap-4 items-center">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={point?.icon} size={16} className="text-primary" />
                    </div>
                    <span className="font-semibold text-foreground">
                      {point?.feature}
                    </span>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-1">Traditional Platforms</div>
                    <div className="text-foreground">{point?.traditional}</div>
                  </div>
                  
                  <div className="flex justify-center">
                    <Icon name="ArrowRight" size={20} className="text-muted-foreground" />
                  </div>
                  
                  <div className="text-center">
                    <div className="text-sm text-primary mb-1 font-medium">CodeCampus</div>
                    <div className="text-foreground font-medium">{point?.codecampus}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Value Proposition Summary */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12">
            <Icon name="Target" size={48} className="text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Our Core Value Proposition
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              "CodeCampus is the only platform that combines the rigor of competitive programming 
              with the collaborative spirit of academic learning, preparing students not just to solve 
              algorithms, but to build careers, communities, and lasting professional relationships."
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="Code" size={20} className="text-primary" />
                </div>
                <div className="font-semibold text-foreground">Technical Excellence</div>
                <div className="text-sm text-muted-foreground">Master algorithms & data structures</div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="Users" size={20} className="text-secondary" />
                </div>
                <div className="font-semibold text-foreground">Community Building</div>
                <div className="text-sm text-muted-foreground">Build lasting professional networks</div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="Briefcase" size={20} className="text-accent" />
                </div>
                <div className="font-semibold text-foreground">Career Success</div>
                <div className="text-sm text-muted-foreground">Prepare for industry challenges</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;