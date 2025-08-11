import React from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';

const checks = [
  { name: 'Website', status: 'operational', icon: 'Globe' },
  { name: 'Auth', status: 'operational', icon: 'Shield' },
  { name: 'Database', status: 'operational', icon: 'Database' },
  { name: 'Realtime', status: 'degraded', icon: 'Activity' },
  { name: 'Storage', status: 'operational', icon: 'HardDrive' },
];

const pill = (s) => {
  if (s === 'operational') return 'bg-green-100 text-green-700';
  if (s === 'degraded') return 'bg-amber-100 text-amber-700';
  return 'bg-red-100 text-red-700';
};

const StatusPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">System Status</h1>
            <p className="text-sm text-gray-600">Live health for key services</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {checks.map((c) => (
              <div key={c.name} className="bg-white rounded-xl border border-gray-200 p-5 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                    <Icon name={c.icon} size={18} className="text-gray-700" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{c.name}</div>
                    <div className="text-xs text-gray-500">Updated a moment ago</div>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${pill(c.status)}`}>{c.status}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white rounded-xl border border-gray-200 p-5">
            <div className="font-semibold text-gray-900 mb-2">Recent Incidents</div>
            <p className="text-sm text-gray-600">No incidents reported.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StatusPage;
