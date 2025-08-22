import React from 'react';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "Dashboard", href: "/student-dashboard" },
        { name: "Problems", href: "/problem-workspace" },
        { name: "Forums", href: "/campus-forums" },
        { name: "Achievements", href: "/achievement-center" },
        { name: "Projects", href: "/projects" }
      ]
    },
    {
      title: "Community",
      links: [
        { name: "Student Stories", href: "/success-stories" },
        { name: "Campus Events", href: "/events" },
        { name: "Study Groups", href: "/study-groups" },
        { name: "Mentorship", href: "/mentorship" },
        { name: "Blog", href: "/blog" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Getting Started", href: "/getting-started" },
        { name: "Documentation", href: "/docs" },
        { name: "API Reference", href: "/api" },
        { name: "Tutorials", href: "/tutorials" },
        { name: "Help Center", href: "/help" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about-code-campus" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Partners", href: "/partners" },
        { name: "Contact", href: "/contact" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Twitter", icon: "Twitter", href: "https://twitter.com/codecampus" },
    { name: "LinkedIn", icon: "Linkedin", href: "https://linkedin.com/company/codecampus" },
    { name: "GitHub", icon: "Github", href: "https://github.com/codecampus" },
    { name: "Discord", icon: "MessageSquare", href: "https://discord.gg/codecampus" },
    { name: "YouTube", icon: "Youtube", href: "https://youtube.com/codecampus" }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <svg
                    width="40"
                    height="40"
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
                  <h3 className="text-2xl font-bold">CodeCampus</h3>
                  <p className="text-blue-300 text-sm">Academic Excellence</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed max-w-md">
                Empowering the next generation of developers through collaborative learning, 
                real-world projects, and industry connections. Your code, your community, your career.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Icon name="Mail" size={18} />
                  <span>hello@codecampus.edu</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Icon name="MapPin" size={18} />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks?.map((social, index) => (
                  <a
                    key={index}
                    href={social?.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                    aria-label={social?.name}
                  >
                    <Icon name={social?.icon} size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections?.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="text-lg font-semibold text-white">{section?.title}</h4>
                <ul className="space-y-3">
                  {section?.links?.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link?.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link?.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-gray-800">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-2">
              <h4 className="text-xl font-semibold">Stay Updated</h4>
              <p className="text-gray-300">
                Get the latest coding challenges, success stories, and platform updates.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your .edu email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button onClick={() => window.location.assign('/getting-started')} className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Icon name="Send" size={18} />
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <span>&copy; {currentYear} CodeCampus. All rights reserved.</span>
              <div className="flex items-center space-x-6">
                <a href="/privacy" className="hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="/terms" className="hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="/cookies" className="hover:text-white transition-colors duration-200">
                  Cookie Policy
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </div>
              <a
                href="/status"
                className="hover:text-white transition-colors duration-200 flex items-center space-x-1"
              >
                <Icon name="Activity" size={16} />
                <span>Status</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;