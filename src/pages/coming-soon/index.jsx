import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';

const humanize = (path) => {
  const slug = path.replace(/^\/+|\/+$/g, '');
  if (!slug) return 'Home';
  return slug
    .split('/')
    .pop()
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ');
};

const ComingSoon = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const title = humanize(location?.pathname || '');

  return (
    <section className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center academic-shadow">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
            <Icon name="Rocket" size={28} className="text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{title} — Coming Soon</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We're building this page right now. In the meantime, explore Problems, Forums, Achievements, or your Dashboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={() => navigate('/student-dashboard')} iconName="LayoutDashboard" iconPosition="left">Go to Dashboard</Button>
            <Button variant="outline" onClick={() => navigate('/problem-workspace')} iconName="Code" iconPosition="left">Explore Problems</Button>
            <Button variant="ghost" onClick={() => navigate('/campus-forums')} iconName="MessageSquare" iconPosition="left">Open Forums</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
