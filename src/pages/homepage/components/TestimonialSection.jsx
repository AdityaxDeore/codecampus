import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialSection = () => {
  const navigate = useNavigate();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Software Engineer",
      company: "Google",
      university: "MIT",
      graduationYear: "2023",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
      quote: `CodeCampus transformed my coding journey from struggling with algorithms to landing my dream job at Google. The collaborative environment and real-world projects gave me the confidence and skills I needed to excel in technical interviews.`,
      achievement: "Landed Google SWE role",
      beforeAfter: {
        before: "Struggled with data structures",
        after: "Aced Google technical interviews"
      },
      skills: ["Algorithms", "System Design", "Python", "JavaScript"],
      rating: 5
    },
    {
      id: 2,
      name: "Alex Rodriguez",
      role: "Full Stack Developer",
      company: "Meta",
      university: "Stanford",
      graduationYear: "2022",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      quote: `The peer learning aspect of CodeCampus is incredible. I learned more from collaborating with classmates on projects than I did in traditional lectures. The platform's project showcase feature helped me build a portfolio that impressed recruiters.`,
      achievement: "Meta internship → Full-time offer",
      beforeAfter: {
        before: "No portfolio projects",
        after: "5 impressive full-stack projects"
      },
      skills: ["React", "Node.js", "MongoDB", "AWS"],
      rating: 5
    },
    {
      id: 3,
      name: "Maya Patel",
      role: "Machine Learning Engineer",
      company: "OpenAI",
      university: "UC Berkeley",
      graduationYear: "2023",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      quote: `CodeCampus's AI and ML problem sets were perfectly aligned with industry needs. The community discussions helped me understand complex concepts, and the achievement system kept me motivated throughout my learning journey.`,
      achievement: "OpenAI ML Engineer position",
      beforeAfter: {
        before: "Basic ML knowledge",
        after: "Advanced AI model development"
      },
      skills: ["Python", "TensorFlow", "PyTorch", "MLOps"],
      rating: 5
    },
    {
      id: 4,
      name: "David Kim",
      role: "Senior Software Engineer",
      company: "Microsoft",
      university: "Carnegie Mellon",
      graduationYear: "2021",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      quote: `What sets CodeCampus apart is how it bridges the gap between academic learning and industry requirements. The platform's emphasis on clean code, documentation, and collaboration prepared me for real-world software development.`,
      achievement: "Microsoft Senior SWE promotion",
      beforeAfter: {
        before: "Academic coding only",
        after: "Industry-ready development skills"
      },
      skills: ["C#", ".NET", "Azure", "DevOps"],
      rating: 5
    }
  ];

  const companyLogos = [
    { name: "Google", students: 89 },
    { name: "Meta", students: 67 },
    { name: "Microsoft", students: 134 },
    { name: "Amazon", students: 156 },
    { name: "Apple", students: 78 },
    { name: "Netflix", students: 45 },
    { name: "Uber", students: 92 },
    { name: "Airbnb", students: 34 }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Star" size={16} />
            <span>Success Stories</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            From Students to
            <span className="text-emerald-600"> Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from CodeCampus alumni who transformed their coding skills into successful tech careers at top companies.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          key={activeTestimonial}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-12"
        >
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Testimonial Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quote */}
              <div className="relative">
                <Icon name="Quote" size={48} className="text-blue-200 absolute -top-4 -left-2" />
                <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed pl-8">
                  "{testimonials?.[activeTestimonial]?.quote}"
                </blockquote>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1">
                {[...Array(testimonials?.[activeTestimonial]?.rating)]?.map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Before/After */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Transformation Journey</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-600">Before</span>
                    </div>
                    <p className="text-sm text-gray-700 pl-5">{testimonials?.[activeTestimonial]?.beforeAfter?.before}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-600">After</span>
                    </div>
                    <p className="text-sm text-gray-700 pl-5">{testimonials?.[activeTestimonial]?.beforeAfter?.after}</p>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Key Skills Developed</h4>
                <div className="flex flex-wrap gap-2">
                  {testimonials?.[activeTestimonial]?.skills?.map((skill, index) => (
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
                  src={testimonials?.[activeTestimonial]?.avatar}
                  alt={testimonials?.[activeTestimonial]?.name}
                  className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover mx-auto lg:mx-0"
                />
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                  <Icon name="CheckCircle" size={20} className="text-white" />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{testimonials?.[activeTestimonial]?.name}</h3>
                  <p className="text-gray-600">{testimonials?.[activeTestimonial]?.role}</p>
                  <p className="text-blue-600 font-semibold">{testimonials?.[activeTestimonial]?.company}</p>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <Icon name="GraduationCap" size={16} />
                    <span>{testimonials?.[activeTestimonial]?.university}</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <Icon name="Calendar" size={16} />
                    <span>Class of {testimonials?.[activeTestimonial]?.graduationYear}</span>
                  </div>
                </div>

                <div className="bg-emerald-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Trophy" size={16} className="text-emerald-600" />
                    <span className="text-sm font-semibold text-emerald-800">Achievement</span>
                  </div>
                  <p className="text-sm text-emerald-700">{testimonials?.[activeTestimonial]?.achievement}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center space-x-2 mb-16">
          {testimonials?.map((_, index) => (
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
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Our Students Work At
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {companyLogos?.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">{company?.name?.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{company?.name}</div>
                    <div className="text-xs text-gray-600">{company?.students} alumni</div>
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
      </div>
    </section>
  );
};

export default TestimonialSection;