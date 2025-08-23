import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from '../../shared/components/HeroSection';
import MissionSection from './components/MissionSection';
import TimelineSection from './components/TimelineSection';
import ValueProposition from '../../shared/components/ValueProposition';
import TeamSection from '../../shared/components/TeamSection';
import UniversityPartnerships from '../../shared/components/UniversityPartnerships';
import StatsSection from '../../shared/components/StatsSection';
import TestimonialSection from '../../shared/components/TestimonialSection';
import Icon from '../../components/AppIcon';

const AboutCodeCampus = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <HeroSection variant="about" />

        {/* Mission Section */}
        <MissionSection />

        {/* Timeline Section */}
        <TimelineSection />

        {/* Value Proposition */}
        <ValueProposition variant="about" />

        {/* Team Section */}
        <TeamSection variant="about" />

        {/* University Partnerships */}
        <UniversityPartnerships variant="about" />

        {/* Stats Section */}
        <StatsSection variant="about" />

        {/* Testimonials */}
        <TestimonialSection variant="about" />

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Icon name="Rocket" size={48} className="text-primary-foreground mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Coding Journey?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Join 50,000+ students from 200+ universities who are building their careers 
              through collaborative learning on CodeCampus.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/student-dashboard"
                className="inline-flex items-center space-x-2 bg-background text-primary px-8 py-4 rounded-lg hover:bg-background/90 academic-transition font-semibold"
              >
                <Icon name="Play" size={16} />
                <span>Start Your Journey</span>
              </a>
              <a
                href="/campus-forums"
                className="inline-flex items-center space-x-2 bg-transparent text-primary-foreground border-2 border-primary-foreground px-8 py-4 rounded-lg hover:bg-primary-foreground hover:text-primary academic-transition font-semibold"
              >
                <Icon name="MessageSquare" size={16} />
                <span>Join Community</span>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-card border-t border-border py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="32"
                        height="32"
                        rx="8"
                        fill="var(--color-primary)"
                      />
                      <path
                        d="M8 12L16 8L24 12V20C24 21.1046 23.1046 22 22 22H10C8.89543 22 8 21.1046 8 20V12Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 16L16 14L20 16"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary">CodeCampus</h3>
                    <p className="text-xs text-muted-foreground">Academic Excellence</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  Transforming computer science education through collaborative learning and community building.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Platform</h4>
                <div className="space-y-2">
                  <a href="/student-dashboard" className="block text-muted-foreground hover:text-primary text-sm academic-transition">Dashboard</a>
                  <a href="/problem-workspace" className="block text-muted-foreground hover:text-primary text-sm academic-transition">Problems</a>
                  <a href="/campus-forums" className="block text-muted-foreground hover:text-primary text-sm academic-transition">Forums</a>
                  <a href="/achievement-center" className="block text-muted-foreground hover:text-primary text-sm academic-transition">Achievements</a>
                </div>
              </div>

              {/* Company */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Company</h4>
                <div className="space-y-2">
                  <a href="/about-code-campus" className="block text-muted-foreground hover:text-primary text-sm academic-transition">About Us</a>
                  <a href="/careers" className="block text-muted-foreground hover:text-primary text-sm academic-transition">Careers</a>
                  <a href="/partnerships" className="block text-muted-foreground hover:text-primary text-sm academic-transition">Partnerships</a>
                  <a href="/contact" className="block text-muted-foreground hover:text-primary text-sm academic-transition">Contact</a>
                </div>
              </div>

              {/* Connect */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Connect</h4>
                <div className="space-y-4">
                  <div className="flex space-x-3">
                    <a href="#" className="text-muted-foreground hover:text-primary academic-transition">
                      <Icon name="Twitter" size={20} />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary academic-transition">
                      <Icon name="Linkedin" size={20} />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary academic-transition">
                      <Icon name="Github" size={20} />
                    </a>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>support@codecampus.edu</p>
                    <p>partnerships@codecampus.edu</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-border mt-8 pt-8 text-center">
              <p className="text-muted-foreground text-sm">
                © {new Date()?.getFullYear()} CodeCampus. All rights reserved. Empowering the next generation of developers.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default AboutCodeCampus;