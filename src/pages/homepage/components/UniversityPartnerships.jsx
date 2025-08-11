import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import { useNavigate } from 'react-router-dom';

const UniversityPartnerships = () => {
  const navigate = useNavigate();
  const universities = [
    {
      name: "Massachusetts Institute of Technology",
      shortName: "MIT",
      logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=200",
      students: "2,847",
      ranking: "#1",
      established: "2019"
    },
    {
      name: "Stanford University",
      shortName: "Stanford",
      logo: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=200",
      students: "3,156",
      ranking: "#2",
      established: "2019"
    },
    {
      name: "University of California, Berkeley",
      shortName: "UC Berkeley",
      logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200",
      students: "2,934",
      ranking: "#3",
      established: "2020"
    },
    {
      name: "Carnegie Mellon University",
      shortName: "CMU",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=200",
      students: "1,823",
      ranking: "#4",
      established: "2020"
    },
    {
      name: "Harvard University",
      shortName: "Harvard",
      logo: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=200",
      students: "1,567",
      ranking: "#5",
      established: "2021"
    },
    {
      name: "Georgia Institute of Technology",
      shortName: "Georgia Tech",
      logo: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=200",
      students: "2,445",
      ranking: "#6",
      established: "2021"
    }
  ];

  const stats = [
    {
      icon: "GraduationCap",
      value: "150+",
      label: "Partner Universities",
      description: "Top-ranked institutions worldwide"
    },
    {
      icon: "Users",
      value: "50K+",
      label: "Active Students",
      description: "Coding together daily"
    },
    {
      icon: "MapPin",
      value: "45",
      label: "Countries",
      description: "Global academic network"
    },
    {
      icon: "Award",
      value: "98%",
      label: "Satisfaction Rate",
      description: "From partner institutions"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Shield" size={16} />
            <span>Trusted by Leading Universities</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Academic Excellence
            <span className="text-blue-600"> Recognized Worldwide</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join students from the world's most prestigious universities who trust CodeCampus for their coding education and career preparation.
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
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={stat?.icon} size={24} className="text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat?.value}</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">{stat?.label}</div>
              <div className="text-xs text-gray-600">{stat?.description}</div>
            </div>
          ))}
        </motion.div>

        {/* University Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {universities?.map((university, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{university?.shortName?.charAt(0)}</span>
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="font-bold text-gray-900 text-sm truncate">{university?.shortName}</h3>
                    <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
                      {university?.ranking}
                    </span>
                  </div>
                  
                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">{university?.name}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">Active Students</span>
                      <span className="font-semibold text-gray-900">{university?.students}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">Partner Since</span>
                      <span className="font-semibold text-gray-900">{university?.established}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <button onClick={() => navigate('/partners')} className="w-full text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center justify-center space-x-2 py-2 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                  <span>View Campus Stats</span>
                  <Icon name="ArrowRight" size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partnership Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Why Universities Choose CodeCampus
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our platform seamlessly integrates with academic curricula while providing real-world industry preparation that helps students transition from classroom to career.
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    icon: "BookOpen",
                    title: "Curriculum Integration",
                    description: "Seamlessly aligns with computer science coursework and academic standards"
                  },
                  {
                    icon: "BarChart3",
                    title: "Progress Analytics",
                    description: "Detailed insights into student engagement and skill development"
                  },
                  {
                    icon: "Users",
                    title: "Peer Learning",
                    description: "Collaborative environment that enhances traditional classroom learning"
                  },
                  {
                    icon: "Briefcase",
                    title: "Career Readiness",
                    description: "Industry-relevant challenges and professional portfolio building"
                  }
                ]?.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={benefit?.icon} size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">{benefit?.title}</div>
                      <div className="text-sm text-gray-600">{benefit?.description}</div>
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
                    <Icon name="Check" size={16} className="text-emerald-300" />
                    <span className="text-sm">Free for educational institutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Check" size={16} className="text-emerald-300" />
                    <span className="text-sm">Dedicated academic support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Check" size={16} className="text-emerald-300" />
                    <span className="text-sm">Custom branding options</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Check" size={16} className="text-emerald-300" />
                    <span className="text-sm">Analytics and reporting tools</span>
                  </div>
                </div>
                
                <button onClick={() => navigate('/contact')} className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center space-x-2">
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