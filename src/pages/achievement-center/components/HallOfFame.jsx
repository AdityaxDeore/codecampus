import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HallOfFame = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('current-semester');

  const hallOfFameData = {
    'current-semester': [
      {
        id: 1,
        name: "Sarah Johnson",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
        university: "Stanford University",
        branch: "Computer Science",
        achievement: "Top Problem Solver",
        description: "Solved 847 problems with 98% accuracy rate. Specialized in dynamic programming and graph algorithms.",
        stats: {
          problemsSolved: 847,
          accuracy: 98,
          streak: 156,
          mentored: 23
        },
        careerOutcome: "Software Engineer Intern at Google",
        period: "Fall 2024",
        badges: ["algorithm-master", "consistency-champion", "mentor-pro"],
        socialLinks: {
          linkedin: "https://linkedin.com/in/sarahjohnson",
          github: "https://github.com/sarahjohnson"
        }
      },
      {
        id: 2,
        name: "Michael Rodriguez",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
        university: "MIT",
        branch: "Computer Science",
        achievement: "Community Leader",
        description: "Led 15 study groups and mentored 45+ students. Created comprehensive tutorial series for data structures.",
        stats: {
          problemsSolved: 634,
          accuracy: 94,
          streak: 89,
          mentored: 45
        },
        careerOutcome: "Full-time offer from Microsoft",
        period: "Fall 2024",
        badges: ["community-champion", "mentor-master", "knowledge-sharer"],
        socialLinks: {
          linkedin: "https://linkedin.com/in/michaelrodriguez",
          github: "https://github.com/mrodriguez"
        }
      },
      {
        id: 3,
        name: "Emily Chen",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
        university: "UC Berkeley",
        branch: "Information Technology",
        achievement: "Innovation Champion",
        description: "Developed 8 innovative projects including an AI-powered code reviewer and collaborative coding platform.",
        stats: {
          problemsSolved: 456,
          accuracy: 96,
          streak: 67,
          mentored: 12
        },
        careerOutcome: "Startup Co-founder",
        period: "Fall 2024",
        badges: ["project-innovator", "creative-genius", "tech-leader"],
        socialLinks: {
          linkedin: "https://linkedin.com/in/emilychen",
          github: "https://github.com/emilychen"
        }
      }
    ],
    'previous-semester': [
      {
        id: 4,
        name: "David Kim",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
        university: "Carnegie Mellon",
        branch: "Computer Science",
        achievement: "Algorithm Virtuoso",
        description: "Achieved perfect scores in 15 consecutive contests. Specialized in competitive programming and optimization.",
        stats: {
          problemsSolved: 923,
          accuracy: 99,
          streak: 203,
          mentored: 18
        },
        careerOutcome: "Research Scientist at DeepMind",
        period: "Spring 2024",
        badges: ["algorithm-virtuoso", "contest-champion", "perfectionist"],
        socialLinks: {
          linkedin: "https://linkedin.com/in/davidkim",
          github: "https://github.com/davidkim"
        }
      },
      {
        id: 5,
        name: "Lisa Wang",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
        university: "Stanford University",
        branch: "Computer Science",
        achievement: "Collaboration Master",
        description: "Organized 25+ hackathons and coding bootcamps. Built the largest student coding community on campus.",
        stats: {
          problemsSolved: 567,
          accuracy: 92,
          streak: 134,
          mentored: 78
        },
        careerOutcome: "Product Manager at Meta",
        period: "Spring 2024",
        badges: ["collaboration-master", "event-organizer", "community-builder"],
        socialLinks: {
          linkedin: "https://linkedin.com/in/lisawang",
          github: "https://github.com/lisawang"
        }
      }
    ],
    'annual-champions': [
      {
        id: 6,
        name: "Alex Thompson",
        avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=200&h=200&fit=crop&crop=face",
        university: "MIT",
        branch: "Computer Science",
        achievement: "Student of the Year 2024",
        description: "Unprecedented achievement across all categories. Led multiple successful projects while maintaining top academic performance.",
        stats: {
          problemsSolved: 1247,
          accuracy: 97,
          streak: 365,
          mentored: 89
        },
        careerOutcome: "Founder of TechStart (Valued at $2M)",
        period: "2024",
        badges: ["legend", "all-rounder", "inspiration"],
        socialLinks: {
          linkedin: "https://linkedin.com/in/alexthompson",
          github: "https://github.com/alexthompson"
        }
      }
    ]
  };

  const periods = [
    { id: 'current-semester', name: 'Current Semester', icon: 'Calendar' },
    { id: 'previous-semester', name: 'Previous Semester', icon: 'Clock' },
    { id: 'annual-champions', name: 'Annual Champions', icon: 'Crown' }
  ];

  const getBadgeIcon = (badge) => {
    const badgeIcons = {
      'algorithm-master': 'Brain',
      'consistency-champion': 'Target',
      'mentor-pro': 'GraduationCap',
      'community-champion': 'Users',
      'mentor-master': 'Heart',
      'knowledge-sharer': 'Share',
      'project-innovator': 'Lightbulb',
      'creative-genius': 'Sparkles',
      'tech-leader': 'Rocket',
      'algorithm-virtuoso': 'Cpu',
      'contest-champion': 'Trophy',
      'perfectionist': 'CheckCircle',
      'collaboration-master': 'UserCheck',
      'event-organizer': 'Calendar',
      'community-builder': 'Building',
      'legend': 'Crown',
      'all-rounder': 'Star',
      'inspiration': 'Flame'
    };
    return badgeIcons?.[badge] || 'Award';
  };

  const getBadgeColor = (badge) => {
    const badgeColors = {
      'algorithm-master': 'text-purple-500',
      'consistency-champion': 'text-green-500',
      'mentor-pro': 'text-blue-500',
      'community-champion': 'text-green-600',
      'mentor-master': 'text-pink-500',
      'knowledge-sharer': 'text-cyan-500',
      'project-innovator': 'text-yellow-500',
      'creative-genius': 'text-purple-600',
      'tech-leader': 'text-red-500',
      'algorithm-virtuoso': 'text-indigo-600',
      'contest-champion': 'text-yellow-600',
      'perfectionist': 'text-green-600',
      'collaboration-master': 'text-orange-500',
      'event-organizer': 'text-blue-600',
      'community-builder': 'text-teal-500',
      'legend': 'text-yellow-500',
      'all-rounder': 'text-purple-500',
      'inspiration': 'text-red-500'
    };
    return badgeColors?.[badge] || 'text-gray-500';
  };

  const currentData = hallOfFameData?.[selectedPeriod] || [];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full">
            <Icon name="Crown" size={24} className="text-yellow-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Hall of Fame</h2>
            <p className="text-gray-600">Celebrating exceptional achievements and inspiring success stories</p>
          </div>
        </div>
      </div>
      {/* Period Selector */}
      <div className="bg-white rounded-lg border border-gray-200 academic-shadow p-4">
        <div className="flex flex-wrap gap-2">
          {periods?.map((period) => (
            <button
              key={period?.id}
              onClick={() => setSelectedPeriod(period?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium academic-transition ${
                selectedPeriod === period?.id
                  ? 'bg-yellow-100 text-yellow-700 border border-yellow-200' :'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Icon name={period?.icon} size={16} />
              <span>{period?.name}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Hall of Fame Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {currentData?.map((student, index) => (
          <div key={student?.id} className="bg-white rounded-lg border border-gray-200 academic-shadow overflow-hidden hover:shadow-lg academic-transition">
            {/* Rank Badge */}
            {index < 3 && (
              <div className="absolute top-4 left-4 z-10">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  index === 0 ? 'bg-yellow-100 text-yellow-600' :
                  index === 1 ? 'bg-gray-100 text-gray-600': 'bg-amber-100 text-amber-600'
                }`}>
                  <Icon 
                    name={index === 0 ? 'Crown' : index === 1 ? 'Medal' : 'Award'} 
                    size={16} 
                  />
                </div>
              </div>
            )}

            {/* Header */}
            <div className="relative bg-gradient-to-r from-blue-50 to-purple-50 p-6 pb-4">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Image
                    src={student?.avatar}
                    alt={student?.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white academic-shadow"
                  />
                  {index === 0 && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Icon name="Star" size={12} className="text-yellow-800" />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">{student?.name}</h3>
                  <p className="text-sm text-gray-600">{student?.university}</p>
                  <p className="text-xs text-gray-500">{student?.branch}</p>
                </div>
              </div>
            </div>

            {/* Achievement */}
            <div className="px-6 py-4">
              <div className="flex items-center space-x-2 mb-3">
                <Icon name="Trophy" size={16} className="text-yellow-600" />
                <span className="font-semibold text-yellow-700">{student?.achievement}</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">{student?.description}</p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="text-center p-2 bg-blue-50 rounded-lg">
                  <div className="text-lg font-bold text-blue-600">{student?.stats?.problemsSolved}</div>
                  <div className="text-xs text-blue-500">Problems</div>
                </div>
                <div className="text-center p-2 bg-green-50 rounded-lg">
                  <div className="text-lg font-bold text-green-600">{student?.stats?.accuracy}%</div>
                  <div className="text-xs text-green-500">Accuracy</div>
                </div>
                <div className="text-center p-2 bg-orange-50 rounded-lg">
                  <div className="text-lg font-bold text-orange-600">{student?.stats?.streak}</div>
                  <div className="text-xs text-orange-500">Day Streak</div>
                </div>
                <div className="text-center p-2 bg-purple-50 rounded-lg">
                  <div className="text-lg font-bold text-purple-600">{student?.stats?.mentored}</div>
                  <div className="text-xs text-purple-500">Mentored</div>
                </div>
              </div>

              {/* Badges */}
              <div className="flex space-x-2 mb-4">
                {student?.badges?.map((badge, badgeIndex) => (
                  <div
                    key={badgeIndex}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 academic-transition"
                    title={badge?.replace('-', ' ')?.replace(/\b\w/g, l => l?.toUpperCase())}
                  >
                    <Icon
                      name={getBadgeIcon(badge)}
                      size={14}
                      className={getBadgeColor(badge)}
                    />
                  </div>
                ))}
              </div>

              {/* Career Outcome */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Briefcase" size={16} className="text-green-600" />
                  <span className="text-sm font-medium text-green-800">Career Outcome</span>
                </div>
                <p className="text-sm text-green-700 mt-1">{student?.careerOutcome}</p>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{student?.period}</span>
                <div className="flex space-x-2">
                  <a
                    href={student?.socialLinks?.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-blue-600 academic-transition"
                  >
                    <Icon name="Linkedin" size={16} />
                  </a>
                  <a
                    href={student?.socialLinks?.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-gray-800 academic-transition"
                  >
                    <Icon name="Github" size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {currentData?.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Trophy" size={48} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Champions Yet</h3>
          <p className="text-gray-500">Be the first to make it to the Hall of Fame!</p>
        </div>
      )}
    </div>
  );
};

export default HallOfFame;