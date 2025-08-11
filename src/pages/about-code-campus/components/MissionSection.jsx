import React from 'react';
import Icon from '../../../components/AppIcon';

const MissionSection = () => {
  const missionPoints = [
    {
      icon: "Target",
      title: "Empowered Belonging",
      description: "Creating an inclusive space where every student can find their coding identity, whether they're algorithm enthusiasts, project builders, or community contributors."
    },
    {
      icon: "Zap",
      title: "Academic Rigor + Startup Energy",
      description: "Professional enough for career preparation, approachable enough for daily learning, and exciting enough to make coding feel like an adventure."
    },
    {
      icon: "Users",
      title: "Collaborative Achievement",
      description: "Transforming competitive programming from an individual pursuit into a collaborative academic experience where skills flourish through community engagement."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We believe that the future of computer science education lies in community-driven learning. 
            Our mission is to transform how students learn, collaborate, and prepare for their careers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {missionPoints?.map((point, index) => (
            <div key={index} className="bg-card p-8 rounded-xl academic-shadow hover:academic-shadow-lg academic-transition">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Icon name={point?.icon} size={24} className="text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {point?.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {point?.description}
              </p>
            </div>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12">
          <div className="text-center">
            <Icon name="Eye" size={48} className="text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              "To create the digital campus where computer science students don't just solve problems in isolation, 
              but build reputations, share discoveries, and create lasting professional networks that propel them 
              into successful tech careers."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;