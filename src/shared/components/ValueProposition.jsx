import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/AppIcon';

const ValueProposition = ({ variant = 'homepage', className = '' }) => {
  const navigate = useNavigate();

  const homepageValues = [
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

  const aboutValues = [
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
      feature: "Project Experience",
      traditional: "Limited to problem-solving",
      codecampus: "Real-world applications",
      icon: "Code"
    },
    {
      feature: "Recognition System",
      traditional: "Speed-based ranking",
      codecampus: "Multi-faceted achievements",
      icon: "Trophy"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-50 dark:bg-blue-900/10",
        icon: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
        title: "text-blue-900 dark:text-blue-100",
        accent: "text-blue-600 dark:text-blue-400"
      },
      emerald: {
        bg: "bg-emerald-50 dark:bg-emerald-900/10",
        icon: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
        title: "text-emerald-900 dark:text-emerald-100",
        accent: "text-emerald-600 dark:text-emerald-400"
      },
      amber: {
        bg: "bg-amber-50 dark:bg-amber-900/10",
        icon: "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400",
        title: "text-amber-900 dark:text-amber-100",
        accent: "text-amber-600 dark:text-amber-400"
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  const renderHomepageContent = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Why Choose CodeCampus?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 dark:text-gray-300"
        >
          More than just another coding platform. We're building a community of student developers who learn, grow, and succeed together.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {homepageValues.map((value, index) => {
          const colors = getColorClasses(value.color);
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${colors.bg} rounded-2xl p-8 relative overflow-hidden group`}
            >
              <div className={`${colors.icon} w-12 h-12 rounded-xl flex items-center justify-center mb-6`}>
                <Icon name={value.icon} size={24} />
              </div>

              <h3 className={`${colors.title} text-xl font-bold mb-4`}>{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{value.description}</p>

              <ul className="space-y-3">
                {value.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <Icon name="CheckCircle" size={16} className={colors.accent} />
                    <span className="text-gray-700 dark:text-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.div
                initial={false}
                whileHover={{
                  scale: 1.2,
                  rotate: 15,
                  opacity: 0.1
                }}
                className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-current opacity-0 group-hover:opacity-[0.07] transition-opacity"
              />
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <button
          onClick={() => navigate('/about-code-campus')}
          className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
        >
          <span>Learn more about our mission</span>
          <Icon name="ArrowRight" size={16} />
        </button>
      </motion.div>
    </div>
  );

  const renderAboutContent = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Unique Features */}
      <div className="mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <Icon name="Sparkles" size={16} />
            <span>What Makes Us Different</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
          >
            Our Unique Approach to Coding Education
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutValues.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 relative group hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                <Icon name={feature.icon} size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
              <div className="inline-flex items-center space-x-2 text-sm font-medium text-primary">
                <Icon name="Star" size={16} />
                <span>{feature.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      <div>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
          >
            The CodeCampus Difference
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground"
          >
            See how our approach revolutionizes coding education compared to traditional platforms
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl overflow-hidden border border-border">
            <div className="grid grid-cols-3 gap-4 p-6 bg-muted/50 border-b border-border">
              <div className="font-semibold text-foreground">Feature</div>
              <div className="font-semibold text-foreground">Traditional Platforms</div>
              <div className="font-semibold text-foreground">CodeCampus</div>
            </div>

            <div className="divide-y divide-border">
              {comparisonPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-3 gap-4 p-6"
                >
                  <div className="flex items-center space-x-2">
                    <Icon name={point.icon} size={20} className="text-primary" />
                    <span className="font-medium text-foreground">{point.feature}</span>
                  </div>
                  <div className="text-muted-foreground">{point.traditional}</div>
                  <div className="text-primary font-medium">{point.codecampus}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className={`relative w-full overflow-hidden ${className}`}>
      {variant === 'homepage' ? renderHomepageContent() : renderAboutContent()}
    </section>
  );
};

export default ValueProposition;
