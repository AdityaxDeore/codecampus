import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Co-Founder & CEO",
      background: "Former Stanford CS Professor",
      description: "PhD in Computer Science with 15 years of experience in educational technology and student engagement.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      linkedin: "sarah-chen-codecampus",
      expertise: ["Educational Technology", "Computer Science", "Student Engagement"]
    },
    {
      name: "Alex Rodriguez",
      role: "Co-Founder & CTO",
      background: "Ex-Google Senior Engineer",
      description: "Former competitive programmer turned educator, passionate about making coding accessible to all students.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      linkedin: "alex-rodriguez-codecampus",
      expertise: ["Full-Stack Development", "System Architecture", "Competitive Programming"]
    },
    {
      name: "Dr. Priya Patel",
      role: "Head of Academic Partnerships",
      background: "Former MIT CS Department",
      description: "Specializes in curriculum integration and building bridges between academia and industry.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      linkedin: "priya-patel-codecampus",
      expertise: ["Academic Partnerships", "Curriculum Design", "Industry Relations"]
    },
    {
      name: "Marcus Johnson",
      role: "Head of Community",
      background: "Former GitHub Community Lead",
      description: "Expert in building developer communities and fostering collaborative learning environments.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      linkedin: "marcus-johnson-codecampus",
      expertise: ["Community Building", "Developer Relations", "Student Success"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A diverse group of educators, engineers, and community builders united by the vision 
            of transforming computer science education through collaborative learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers?.map((member, index) => (
            <div key={index} className="bg-card rounded-xl p-6 academic-shadow hover:academic-shadow-lg academic-transition group">
              <div className="text-center mb-6">
                <div className="relative inline-block mb-4">
                  <Image
                    src={member?.image}
                    alt={member?.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="User" size={16} className="text-primary-foreground" />
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {member?.name}
                </h3>
                
                <p className="text-primary font-medium text-sm mb-1">
                  {member?.role}
                </p>
                
                <p className="text-muted-foreground text-xs">
                  {member?.background}
                </p>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {member?.description}
              </p>

              <div className="space-y-3">
                <div className="flex flex-wrap gap-1">
                  {member?.expertise?.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-center pt-2">
                  <a
                    href={`https://linkedin.com/in/${member?.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary academic-transition"
                  >
                    <Icon name="Linkedin" size={16} />
                    <span className="text-xs">Connect</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
            <Icon name="Users" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">Join Our Mission</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for passionate educators, engineers, and community builders 
              who share our vision of transforming computer science education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 academic-transition"
              >
                <Icon name="Briefcase" size={16} />
                <span>View Open Positions</span>
              </a>
              <a
                href="mailto:team@codecampus.edu"
                className="inline-flex items-center space-x-2 bg-card text-foreground border border-border px-6 py-3 rounded-lg hover:bg-muted academic-transition"
              >
                <Icon name="Mail" size={16} />
                <span>Get In Touch</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;