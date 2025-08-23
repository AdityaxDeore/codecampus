import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import { studentTestimonials, facultyTestimonials, companyPlacements } from '../data/testimonialData';

const TestimonialSection = ({ 
  variant = 'homepage', // or 'about'
  className = '' 
}) => {
  const navigate = useNavigate();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeTab, setActiveTab] = useState('students');

  const themeClasses = {
    homepage: {
      section: 'bg-gray-50',
      card: 'bg-white',
      heading: 'text-gray-900',
      text: 'text-gray-600',
      primary: 'text-blue-600',
      accent: 'text-emerald-600'
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
  const testimonials = activeTab === 'students' ? studentTestimonials : facultyTestimonials;

  const tabs = [
    { id: 'students', label: 'Students', icon: 'Users' },
    { id: 'faculty', label: 'Faculty', icon: 'GraduationCap' }
  ];

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
          <div className={`inline-flex items-center space-x-2 ${variant === 'homepage' ? 'bg-emerald-100 text-emerald-700' : 'bg-primary/10 text-primary'} px-4 py-2 rounded-full text-sm font-medium mb-6`}>
            <Icon name="Star" size={16} />
            <span>Success Stories</span>
          </div>
          
          <h2 className={`text-4xl lg:text-5xl font-bold ${theme.heading} mb-6`}>
            {variant === 'homepage' ? (
              <>
                From Students to
                <span className={theme.accent}> Industry Leaders</span>
              </>
            ) : (
              'What Our Community Says'
            )}
          </h2>
          <p className={`text-xl ${theme.text} max-w-3xl mx-auto`}>
            {variant === 'homepage' 
              ? 'Hear from CodeCampus alumni who transformed their coding skills into successful tech careers at top companies.'
              : 'Hear from students and faculty who have experienced the transformative power of collaborative learning on CodeCampus.'
            }
          </p>
        </motion.div>

        {variant === 'about' && (
          <div className="flex justify-center mb-12">
            <div className="bg-muted p-1 rounded-lg">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon name={tab.icon} size={16} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {variant === 'homepage' ? (
          // Homepage Layout
          <motion.div
            key={activeTestimonial}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`${theme.card} rounded-2xl shadow-xl p-8 lg:p-12 mb-12`}
          >
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Testimonial Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Quote */}
                <div className="relative">
                  <Icon name="Quote" size={48} className="text-blue-200 absolute -top-4 -left-2" />
                  <blockquote className={`text-lg lg:text-xl ${theme.text} leading-relaxed pl-8`}>
                    "{testimonials[activeTestimonial]?.quote}"
                  </blockquote>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(testimonials[activeTestimonial]?.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Before/After */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className={`font-semibold ${theme.heading} mb-4`}>Transformation Journey</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-600">Before</span>
                      </div>
                      <p className="text-sm text-gray-700 pl-5">
                        {testimonials[activeTestimonial]?.beforeAfter?.before}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-600">After</span>
                      </div>
                      <p className="text-sm text-gray-700 pl-5">
                        {testimonials[activeTestimonial]?.beforeAfter?.after}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-3">
                  <h4 className={`font-semibold ${theme.heading}`}>Key Skills Developed</h4>
                  <div className="flex flex-wrap gap-2">
                    {testimonials[activeTestimonial]?.skills?.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Author Info */}
              <div className="text-center lg:text-left space-y-6">
                <div className="relative inline-block">
                  <Image
                    src={testimonials[activeTestimonial]?.avatar}
                    alt={testimonials[activeTestimonial]?.name}
                    className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover mx-auto lg:mx-0"
                  />
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                    <Icon name="CheckCircle" size={20} className="text-white" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className={`text-xl font-bold ${theme.heading}`}>
                      {testimonials[activeTestimonial]?.name}
                    </h3>
                    <p className={theme.text}>{testimonials[activeTestimonial]?.role}</p>
                    <p className={theme.primary}>{testimonials[activeTestimonial]?.company}</p>
                  </div>

                  <div className={`space-y-2 text-sm ${theme.text}`}>
                    <div className="flex items-center justify-center lg:justify-start space-x-2">
                      <Icon name="GraduationCap" size={16} />
                      <span>{testimonials[activeTestimonial]?.university}</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start space-x-2">
                      <Icon name="Calendar" size={16} />
                      <span>Class of {testimonials[activeTestimonial]?.graduationYear}</span>
                    </div>
                  </div>

                  <div className="bg-emerald-50 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="Trophy" size={16} className="text-emerald-600" />
                      <span className="text-sm font-semibold text-emerald-800">Achievement</span>
                    </div>
                    <p className="text-sm text-emerald-700">
                      {testimonials[activeTestimonial]?.achievement}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          // About Page Layout
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`${theme.card} p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300`}>
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-accent fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className={`${theme.text} leading-relaxed mb-6`}>
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className={`font-semibold ${theme.heading}`}>
                      {testimonial.name}
                    </div>
                    <div className={`text-sm ${theme.text}`}>
                      {testimonial.role}
                    </div>
                    <div className={`text-sm ${theme.primary} font-medium`}>
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {variant === 'homepage' && (
          <>
            {/* Testimonial Navigation */}
            <div className="flex justify-center space-x-2 mb-16">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === activeTestimonial ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Company Placements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className={`text-2xl font-bold ${theme.heading} mb-8`}>
                Our Students Work At
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {companyPlacements.map((company, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`${theme.card} rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 group`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-sm">{company.name.charAt(0)}</span>
                      </div>
                      <div>
                        <div className={`font-semibold ${theme.heading} text-sm`}>{company.name}</div>
                        <div className={`text-xs ${theme.text}`}>{company.students} alumni</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12">
                <button 
                  onClick={() => navigate('/login')}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center space-x-2"
                >
                  <Icon name="GraduationCap" size={20} />
                  <span>Join Your Campus</span>
                  <Icon name="ArrowRight" size={16} />
                </button>
              </div>
            </motion.div>
          </>
        )}

        {variant === 'about' && (
          <div className={`mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12`}>
            <div className="text-center mb-8">
              <h3 className={`text-2xl font-bold ${theme.heading} mb-4`}>
                Community Satisfaction
              </h3>
              <p className={`${theme.text} max-w-2xl mx-auto`}>
                Our commitment to excellence is reflected in the feedback from our community members.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className={`text-3xl font-bold ${theme.primary} mb-2`}>4.9/5</div>
                <div className={`text-sm ${theme.text}`}>Student Rating</div>
              </div>
              <div className="text-center">
                <div className={`text-3xl font-bold ${theme.accent} mb-2`}>98%</div>
                <div className={`text-sm ${theme.text}`}>Would Recommend</div>
              </div>
              <div className="text-center">
                <div className={`text-3xl font-bold ${theme.accent} mb-2`}>4.8/5</div>
                <div className={`text-sm ${theme.text}`}>Faculty Rating</div>
              </div>
              <div className="text-center">
                <div className={`text-3xl font-bold ${theme.primary} mb-2`}>95%</div>
                <div className={`text-sm ${theme.text}`}>Career Success</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialSection;
