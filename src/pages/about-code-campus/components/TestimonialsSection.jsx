import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [activeTab, setActiveTab] = useState('students');

  const studentTestimonials = [
    {
      name: "Emily Zhang",
      role: "CS Senior, Stanford University",
      company: "Now at Google",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      quote: "CodeCampus transformed my approach to competitive programming. Instead of struggling alone, I found a community that helped me grow. The collaborative environment prepared me perfectly for my Google internship interviews.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "CS Junior, MIT",
      company: "Intern at Microsoft",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      quote: "The peer learning aspect is incredible. I\'ve learned more from discussing solutions with classmates than I ever did studying alone. CodeCampus made coding feel like a team sport rather than a solo challenge.",
      rating: 5
    },
    {
      name: "Aisha Patel",
      role: "CS Graduate, UC Berkeley",
      company: "Software Engineer at Meta",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      quote: "The portfolio feature helped me showcase my projects to recruiters. Having a platform where I could demonstrate both my coding skills and collaboration abilities was a game-changer for my job search.",
      rating: 5
    }
  ];

  const facultyTestimonials = [
    {
      name: "Dr. Robert Chen",
      role: "Professor of Computer Science",
      company: "Stanford University",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      quote: "CodeCampus has revolutionized how our students engage with competitive programming. The collaborative features align perfectly with our pedagogical goals of peer learning and knowledge sharing.",
      rating: 5
    },
    {
      name: "Prof. Lisa Rodriguez",
      role: "CS Department Head",
      company: "Carnegie Mellon University",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
      quote: "The analytics dashboard provides invaluable insights into student progress. We can identify struggling students early and provide targeted support. It's transformed our approach to CS education.",
      rating: 5
    },
    {
      name: "Dr. James Wilson",
      role: "Associate Professor",
      company: "University of Washington",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      quote: "Integration with our curriculum was seamless. Students are more engaged, collaborative, and better prepared for industry challenges. CodeCampus bridges the gap between academic learning and real-world application.",
      rating: 5
    }
  ];

  const tabs = [
    { id: 'students', label: 'Students', icon: 'Users' },
    { id: 'faculty', label: 'Faculty', icon: 'GraduationCap' }
  ];

  const activeTestimonials = activeTab === 'students' ? studentTestimonials : facultyTestimonials;

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            What Our Community Says
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from students and faculty who have experienced the transformative power 
            of collaborative learning on CodeCampus.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted p-1 rounded-lg">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-md text-sm font-medium academic-transition ${
                  activeTab === tab?.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name={tab?.icon} size={16} />
                <span>{tab?.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {activeTestimonials?.map((testimonial, index) => (
            <div key={index} className="bg-card p-6 rounded-xl academic-shadow hover:academic-shadow-lg academic-transition">
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial?.rating)]?.map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="text-accent fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial?.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <Image
                  src={testimonial?.image}
                  alt={testimonial?.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial?.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial?.role}
                  </div>
                  <div className="text-sm text-primary font-medium">
                    {testimonial?.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Community Satisfaction
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence is reflected in the feedback from our community members.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Student Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Would Recommend</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">4.8/5</div>
              <div className="text-sm text-muted-foreground">Faculty Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Career Success</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;