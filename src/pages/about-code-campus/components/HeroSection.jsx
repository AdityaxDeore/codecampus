import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-mesh opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="Sparkles" size={16} />
                <span>Transforming Computer Science Education</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                About{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  CodeCampus
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Where academic excellence meets collaborative innovation. We're bridging the gap between computer science education and real-world career success through community-driven learning.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-foreground">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-sm font-medium">50,000+ Active Students</span>
              </div>
              <div className="flex items-center space-x-2 text-foreground">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm font-medium">200+ University Partners</span>
              </div>
              <div className="flex items-center space-x-2 text-foreground">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">95% Career Success Rate</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-card rounded-2xl p-8 academic-shadow-lg">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Code" size={32} className="text-primary" />
              </div>
              
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Students collaborating on coding projects"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  Collaborative Learning Environment
                </h3>
                <p className="text-muted-foreground text-sm">
                  Students working together on real-world projects, sharing knowledge, and building lasting professional networks.
                </p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg academic-shadow">
              <div className="flex items-center space-x-2">
                <Icon name="Trophy" size={16} />
                <span className="text-sm font-medium">Top Ranked Platform</span>
              </div>
            </div>
            
            <div className="absolute -top-6 -left-6 bg-accent text-accent-foreground px-4 py-2 rounded-lg academic-shadow">
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} />
                <span className="text-sm font-medium">Active Community</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;