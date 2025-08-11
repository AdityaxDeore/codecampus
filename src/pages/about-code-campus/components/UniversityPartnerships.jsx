import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const UniversityPartnerships = () => {
  const partnerUniversities = [
    {
      name: "Stanford University",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=120&h=80&fit=crop",
      students: "2,500+",
      integration: "Full Curriculum Integration",
      successStory: "95% of CS students use CodeCampus for collaborative projects and career preparation."
    },
    {
      name: "MIT",
      logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=120&h=80&fit=crop",
      students: "1,800+",
      integration: "Research Collaboration",
      successStory: "Joint research on AI-powered educational tools and student engagement metrics."
    },
    {
      name: "UC Berkeley",
      logo: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=120&h=80&fit=crop",
      students: "3,200+",
      integration: "Competition Platform",
      successStory: "Hosts annual inter-university coding competitions with 10,000+ participants."
    },
    {
      name: "Carnegie Mellon",
      logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=120&h=80&fit=crop",
      students: "1,500+",
      integration: "Industry Bridge Program",
      successStory: "85% job placement rate for students active on CodeCampus platform."
    },
    {
      name: "University of Washington",
      logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=120&h=80&fit=crop",
      students: "2,100+",
      integration: "Peer Learning Initiative",
      successStory: "Reduced dropout rates by 30% through collaborative learning programs."
    },
    {
      name: "Georgia Tech",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=120&h=80&fit=crop",
      students: "2,800+",
      integration: "Alumni Network",
      successStory: "Strong alumni mentorship program connecting students with industry professionals."
    }
  ];

  const partnershipBenefits = [
    {
      icon: "BookOpen",
      title: "Curriculum Integration",
      description: "Seamlessly integrate CodeCampus into existing CS curricula with custom learning paths."
    },
    {
      icon: "Users",
      title: "Student Engagement",
      description: "Increase student participation and collaboration through gamified learning experiences."
    },
    {
      icon: "TrendingUp",
      title: "Performance Analytics",
      description: "Track student progress and identify areas for improvement with detailed analytics."
    },
    {
      icon: "Briefcase",
      title: "Career Preparation",
      description: "Bridge the gap between academic learning and industry requirements."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            University Partnerships
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Collaborating with leading universities worldwide to transform computer science education 
            and prepare students for successful tech careers.
          </p>
        </div>

        {/* Partnership Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {partnershipBenefits?.map((benefit, index) => (
            <div key={index} className="bg-card p-6 rounded-xl academic-shadow text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={benefit?.icon} size={20} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit?.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {benefit?.description}
              </p>
            </div>
          ))}
        </div>

        {/* Partner Universities */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partnerUniversities?.map((university, index) => (
            <div key={index} className="bg-card rounded-xl p-6 academic-shadow hover:academic-shadow-lg academic-transition">
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src={university?.logo}
                  alt={`${university?.name} logo`}
                  className="w-16 h-12 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {university?.name}
                  </h3>
                  <p className="text-primary text-sm font-medium">
                    {university?.students} Active Students
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} className="text-secondary" />
                  <span className="text-sm font-medium text-foreground">
                    {university?.integration}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {university?.successStory}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership CTA */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12 text-center">
          <Icon name="GraduationCap" size={48} className="text-primary mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Partner With CodeCampus
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join 200+ universities worldwide in transforming computer science education. 
            Let's work together to prepare the next generation of tech leaders.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:partnerships@codecampus.edu"
              className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 academic-transition"
            >
              <Icon name="Mail" size={16} />
              <span>Start Partnership</span>
            </a>
            <a
              href="/partnership-info"
              className="inline-flex items-center space-x-2 bg-card text-foreground border border-border px-8 py-3 rounded-lg hover:bg-muted academic-transition"
            >
              <Icon name="FileText" size={16} />
              <span>Partnership Info</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversityPartnerships;