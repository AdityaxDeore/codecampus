import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const LeaderboardTable = ({ activeTab, filters }) => {
  const getLeaderboardData = () => {
    const baseData = {
      'problem-solvers': [
        {
          rank: 1,
          name: "Alex Chen",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
          university: "MIT",
          branch: "Computer Science",
          score: 2847,
          metric: "Problems Solved",
          change: "+12",
          badges: ["streak-master", "algorithm-expert", "speed-demon"]
        },
        {
          rank: 2,
          name: "Sarah Johnson",
          avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
          university: "Stanford",
          branch: "Computer Science",
          score: 2634,
          metric: "Problems Solved",
          change: "+8",
          badges: ["consistency-champion", "data-structures-pro"]
        },
        {
          rank: 3,
          name: "Michael Rodriguez",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
          university: "UC Berkeley",
          branch: "Information Technology",
          score: 2456,
          metric: "Problems Solved",
          change: "+15",
          badges: ["problem-hunter", "weekly-warrior"]
        },
        {
          rank: 4,
          name: "Emily Davis",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
          university: "Carnegie Mellon",
          branch: "Computer Science",
          score: 2298,
          metric: "Problems Solved",
          change: "+6",
          badges: ["algorithm-master", "consistency-pro"]
        },
        {
          rank: 5,
          name: "David Kim",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
          university: "MIT",
          branch: "Electronics & Communication",
          score: 2187,
          metric: "Problems Solved",
          change: "+9",
          badges: ["cross-domain-expert", "innovation-leader"]
        }
      ],
      'community-contributors': [
        {
          rank: 1,
          name: "Lisa Wang",
          avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
          university: "Stanford",
          branch: "Computer Science",
          score: 1847,
          metric: "Help Points",
          change: "+23",
          badges: ["mentor-master", "community-champion", "helpful-hero"]
        },
        {
          rank: 2,
          name: "James Wilson",
          avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
          university: "MIT",
          branch: "Information Technology",
          score: 1634,
          metric: "Help Points",
          change: "+18",
          badges: ["forum-legend", "knowledge-sharer"]
        },
        {
          rank: 3,
          name: "Anna Martinez",
          avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
          university: "UC Berkeley",
          branch: "Computer Science",
          score: 1456,
          metric: "Help Points",
          change: "+14",
          badges: ["peer-supporter", "discussion-leader"]
        }
      ],
      'project-innovators': [
        {
          rank: 1,
          name: "Ryan Thompson",
          avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
          university: "Carnegie Mellon",
          branch: "Computer Science",
          score: 1234,
          metric: "Innovation Score",
          change: "+45",
          badges: ["creative-genius", "project-master", "tech-innovator"]
        },
        {
          rank: 2,
          name: "Sophie Brown",
          avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
          university: "MIT",
          branch: "Information Technology",
          score: 1156,
          metric: "Innovation Score",
          change: "+32",
          badges: ["ui-designer", "full-stack-pro"]
        }
      ],
      'collaborative-leaders': [
        {
          rank: 1,
          name: "Kevin Lee",
          avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
          university: "Stanford",
          branch: "Computer Science",
          score: 987,
          metric: "Team Score",
          change: "+28",
          badges: ["team-captain", "collaboration-king", "leadership-pro"]
        }
      ]
    };

    return baseData?.[activeTab] || [];
  };

  const getBadgeIcon = (badge) => {
    const badgeIcons = {
      'streak-master': 'Flame',
      'algorithm-expert': 'Brain',
      'speed-demon': 'Zap',
      'consistency-champion': 'Target',
      'data-structures-pro': 'Database',
      'problem-hunter': 'Search',
      'weekly-warrior': 'Calendar',
      'algorithm-master': 'Cpu',
      'consistency-pro': 'CheckCircle',
      'cross-domain-expert': 'Layers',
      'innovation-leader': 'Lightbulb',
      'mentor-master': 'GraduationCap',
      'community-champion': 'Users',
      'helpful-hero': 'Heart',
      'forum-legend': 'MessageSquare',
      'knowledge-sharer': 'Share',
      'peer-supporter': 'HandHeart',
      'discussion-leader': 'MessageCircle',
      'creative-genius': 'Sparkles',
      'project-master': 'FolderOpen',
      'tech-innovator': 'Rocket',
      'ui-designer': 'Palette',
      'full-stack-pro': 'Layers',
      'team-captain': 'Crown',
      'collaboration-king': 'Users',
      'leadership-pro': 'Award'
    };
    return badgeIcons?.[badge] || 'Award';
  };

  const getBadgeColor = (badge) => {
    const badgeColors = {
      'streak-master': 'text-red-500',
      'algorithm-expert': 'text-purple-500',
      'speed-demon': 'text-yellow-500',
      'consistency-champion': 'text-green-500',
      'data-structures-pro': 'text-blue-500',
      'problem-hunter': 'text-indigo-500',
      'weekly-warrior': 'text-orange-500',
      'algorithm-master': 'text-purple-600',
      'consistency-pro': 'text-green-600',
      'cross-domain-expert': 'text-teal-500',
      'innovation-leader': 'text-yellow-600',
      'mentor-master': 'text-blue-600',
      'community-champion': 'text-green-600',
      'helpful-hero': 'text-pink-500',
      'forum-legend': 'text-indigo-600',
      'knowledge-sharer': 'text-cyan-500',
      'peer-supporter': 'text-rose-500',
      'discussion-leader': 'text-violet-500',
      'creative-genius': 'text-yellow-500',
      'project-master': 'text-blue-500',
      'tech-innovator': 'text-red-500',
      'ui-designer': 'text-pink-500',
      'full-stack-pro': 'text-indigo-500',
      'team-captain': 'text-yellow-600',
      'collaboration-king': 'text-green-500',
      'leadership-pro': 'text-purple-500'
    };
    return badgeColors?.[badge] || 'text-gray-500';
  };

  const leaderboardData = getLeaderboardData();

  const getRankIcon = (rank) => {
    if (rank === 1) return { icon: 'Crown', color: 'text-yellow-500' };
    if (rank === 2) return { icon: 'Medal', color: 'text-gray-400' };
    if (rank === 3) return { icon: 'Award', color: 'text-amber-600' };
    return { icon: null, color: '' };
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 academic-shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rank
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Student
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                University
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Score
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Badges
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Change
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {leaderboardData?.map((student) => {
              const rankIcon = getRankIcon(student?.rank);
              return (
                <tr key={student?.rank} className="hover:bg-gray-50 academic-transition">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {rankIcon?.icon ? (
                        <Icon name={rankIcon?.icon} size={20} className={rankIcon?.color} />
                      ) : (
                        <span className="text-lg font-bold text-gray-600">#{student?.rank}</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <Image
                          src={student?.avatar}
                          alt={student?.name}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{student?.name}</div>
                        <div className="text-sm text-gray-500">{student?.branch}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{student?.university}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{student?.score?.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">{student?.metric}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-1">
                      {student?.badges?.slice(0, 3)?.map((badge, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 academic-transition"
                          title={badge?.replace('-', ' ')?.replace(/\b\w/g, l => l?.toUpperCase())}
                        >
                          <Icon
                            name={getBadgeIcon(badge)}
                            size={12}
                            className={getBadgeColor(badge)}
                          />
                        </div>
                      ))}
                      {student?.badges?.length > 3 && (
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-xs text-gray-600">
                          +{student?.badges?.length - 3}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      student?.change?.startsWith('+') 
                        ? 'bg-green-100 text-green-800' :'bg-red-100 text-red-800'
                    }`}>
                      <Icon 
                        name={student?.change?.startsWith('+') ? 'TrendingUp' : 'TrendingDown'} 
                        size={12} 
                        className="mr-1"
                      />
                      {student?.change}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {leaderboardData?.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Trophy" size={48} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Data Available</h3>
          <p className="text-gray-500">No students found for the selected filters.</p>
        </div>
      )}
    </div>
  );
};

export default LeaderboardTable;