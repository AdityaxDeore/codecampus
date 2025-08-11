import React from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';

const sampleProjects = [
  { id: 'ai-study-assistant', title: 'AI-Powered Study Assistant', tech: ['Python', 'TensorFlow', 'React'] },
  { id: 'campus-events', title: 'Campus Event Management System', tech: ['React', 'Express', 'MongoDB'] },
  { id: 'blockchain-voting', title: 'Blockchain Voting System', tech: ['Solidity', 'Web3', 'React'] },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
            <a href="#" className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50">
              <Icon name="Plus" size={16} />
              <span>New Project</span>
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleProjects.map((p) => (
              <a key={p.id} href={`/projects/${p.id}`} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-sm transition">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Icon name="FolderOpen" size={18} className="text-blue-600" />
                  </div>
                  <Icon name="ArrowRight" size={16} className="text-gray-400" />
                </div>
                <div className="font-semibold text-gray-900 mb-2">{p.title}</div>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-full text-xs bg-gray-100 text-gray-700">{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
