import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import { universities, partnershipBenefits, stats } from '../data/universityData';

const UniversityPartnerships = ({ 
  variant = 'homepage', // or 'about'
  className = '' 
}) => {
  const navigate = useNavigate();
  
  const themeClasses = {
    homepage: {
      section: 'bg-gradient-to-br from-blue-50 via-white to-emerald-50',
      card: 'bg-white',
      heading: 'text-gray-900',
      text: 'text-gray-600',
      primary: 'text-blue-600',
      accent: 'text-emerald-300'
    },
    about: {
      section: 'bg-background',
      card: 'bg-card',
      heading: 'text-foreground',
      text: 'text-muted-foreground',
      primary: 'text-primary',
      accent: 'text-secondary'
    }
  };

  const theme = themeClasses[variant];

  return (
    <section className={`py-20 ${theme.section} ${className}`}>
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {variant === 'homepage' && (
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Shield" size={16} />
              <span>Trusted by Leading Universities</span>
            </div>
          )}
          
          <h2 className={`text-4xl lg:text-5xl font-bold ${theme.heading} mb-6`}>
            {variant === 'homepage' ? (
              <>
                Academic Excellence
                <span className={theme.primary}> Recognized Worldwide</span>
              </>
            ) : (
              'University Partnerships'
            )}
          </h2>
          <p className={`text-xl ${theme.text} max-w-3xl mx-auto`}>
            Join students from the world's most prestigious universities who trust CodeCampus 
            for their coding education and career preparation.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats?.map((stat, index) => (
            <div key={index} className={`${theme.card} rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300`}>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={stat?.icon} size={24} className={theme.primary} />
              </div>
              <div className={`text-3xl font-bold ${theme.heading} mb-2`}>{stat?.value}</div>
              <div className={`text-sm font-semibold ${theme.heading} mb-1`}>{stat?.label}</div>
              <div className={`text-xs ${theme.text}`}>{stat?.description}</div>
            </div>
          ))}
        </motion.div>

        {/* University Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {universities?.map((university, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${theme.card} rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Image
                    src={university?.logo}
                    alt={`${university?.name} logo`}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className={`font-bold ${theme.heading} text-sm truncate`}>
                      {university?.shortName}
                    </h3>
                    <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
                      {university?.ranking}
                    </span>
                  </div>
                  <p className={`text-xs ${theme.text} mb-3 line-clamp-2`}>{university?.name}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className={theme.text}>Active Students</span>
                      <span className={`font-semibold ${theme.heading}`}>{university?.students}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className={theme.text}>Partner Since</span>
                      <span className={`font-semibold ${theme.heading}`}>{university?.established}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`mt-4 pt-4 border-t ${variant === 'homepage' ? 'border-gray-100' : 'border-border'}`}>
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} className={theme.accent} />
                  <span className={`text-sm font-medium ${theme.heading}`}>
                    {university?.integration}
                  </span>
                </div>
                <p className={`mt-2 text-sm ${theme.text} leading-relaxed`}>
                  {university?.successStory}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className={`${variant === 'homepage' ? 'bg-white' : 'bg-gradient-to-r from-primary/5 to-secondary/5'} rounded-2xl p-8 lg:p-12 ${variant === 'homepage' ? 'shadow-lg' : ''}`}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className={`text-3xl font-bold ${theme.heading}`}>
                Why Universities Choose CodeCampus
              </h3>
              <p className={theme.text}>
                Our platform seamlessly integrates with academic curricula while providing 
                real-world industry preparation that helps students transition from classroom to career.
              </p>
              
              <div className="space-y-4">
                {partnershipBenefits?.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-10 h-10 ${variant === 'homepage' ? 'bg-blue-100' : 'bg-primary/10'} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon name={benefit?.icon} size={20} className={theme.primary} />
                    </div>
                    <div>
                      <div className={`font-semibold ${theme.heading} mb-1`}>{benefit?.title}</div>
                      <div className={`text-sm ${theme.text}`}>{benefit?.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl p-8 text-white">
              <div className="space-y-6">
                <div className="text-center">
                  <Icon name="Award" size={48} className="mx-auto mb-4 opacity-80" />
                  <h4 className="text-2xl font-bold mb-2">Become a Partner</h4>
                  <p className="text-blue-100">
                    Join leading universities in providing world-class coding education to your students.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="Check" size={16} className={theme.accent} />
                    <span className="text-sm">Free for educational institutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Check" size={16} className={theme.accent} />
                    <span className="text-sm">Dedicated academic support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Check" size={16} className={theme.accent} />
                    <span className="text-sm">Custom branding options</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Check" size={16} className={theme.accent} />
                    <span className="text-sm">Analytics and reporting tools</span>
                  </div>
                </div>

                <button 
                  onClick={() => navigate('/contact')} 
                  className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Icon name="Mail" size={20} />
                  <span>Contact Partnership Team</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UniversityPartnerships;
