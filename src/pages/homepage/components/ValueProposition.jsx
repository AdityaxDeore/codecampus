import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ValueProposition = () => {
  const values = [
    {
      icon: "Users",
      title: "Solve Together",
      description: "Collaborate with peers on challenging problems. Share solutions, learn from others, and build lasting study partnerships.",
      features: ["Peer Code Reviews", "Study Groups", "Real-time Collaboration", "Discussion Forums"],
      color: "blue"
    },
    {
      icon: "FolderOpen",
      title: "Build Your Portfolio",
      description: "Showcase your best work with integrated project galleries. Document your coding journey and impress future employers.",
      features: ["GitHub Integration", "Project Showcase", "Skill Tracking", "Achievement Badges"],
      color: "emerald"
    },
    {
      icon: "Briefcase",
      title: "Launch Your Career",
      description: "Connect with industry professionals and access exclusive internship opportunities through our university partnerships.",
      features: ["Industry Mentors", "Job Placements", "Interview Prep", "Company Challenges"],
      color: "amber"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-50",
        icon: "bg-blue-100 text-blue-600",
        title: "text-blue-900",
        accent: "text-blue-600"
      },
      emerald: {
        bg: "bg-emerald-50",
        icon: "bg-emerald-100 text-emerald-600",
        title: "text-emerald-900",
        accent: "text-emerald-600"
      },
      amber: {
        bg: "bg-amber-50",
        icon: "bg-amber-100 text-amber-600",
        title: "text-amber-900",
        accent: "text-amber-600"
      }
    };
    return colorMap?.[color];
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose CodeCampus?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            More than just a coding platform - we're your complete academic and career development ecosystem
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {values?.map((value, index) => {
            const colors = getColorClasses(value?.color);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`${colors?.bg} rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group`}
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${colors?.icon} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={value?.icon} size={28} />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className={`text-2xl font-bold ${colors?.title}`}>
                      {value?.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {value?.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    {value?.features?.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-5 h-5 ${colors?.icon} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <Icon name="Check" size={12} />
                        </div>
                        <span className="text-gray-700 text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <button className={`${colors?.accent} font-semibold text-sm hover:underline flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-300`}>
                      <span>Learn More</span>
                      <Icon name="ArrowRight" size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Coding Journey?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of students who are already building their future in tech. Start with your .edu email today.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 inline-flex items-center space-x-2">
              <Icon name="GraduationCap" size={20} />
              <span>Get Started Free</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;