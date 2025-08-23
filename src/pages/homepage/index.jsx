import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from '../../shared/components/HeroSection';
import ValueProposition from '../../shared/components/ValueProposition';
import StatsSection from '../../shared/components/StatsSection';
import ActivityFeed from './components/ActivityFeed';
import FeaturedProjects from './components/FeaturedProjects';
import UniversityPartnerships from '../../shared/components/UniversityPartnerships';
import TestimonialSection from '../../shared/components/TestimonialSection';
import Footer from './components/Footer';

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>CodeCampus - Your Code, Your Community, Your Career</title>
        <meta 
          name="description" 
          content="Transform your coding journey with CodeCampus. Join 12,000+ students from top universities in collaborative learning, project building, and career preparation." 
        />
        <meta name="keywords" content="coding platform, programming education, university students, collaborative learning, tech careers" />
        <meta property="og:title" content="CodeCampus - Academic Coding Platform & Community Hub" />
        <meta property="og:description" content="Where computer science students build skills, showcase projects, and launch tech careers together." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://codecampus.edu/homepage" />
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        
        <main>
          <HeroSection variant="homepage" />
          <ValueProposition variant="homepage" />
          <StatsSection variant="homepage" />
          <ActivityFeed />
          <FeaturedProjects />
          <UniversityPartnerships variant="homepage" />
          <TestimonialSection variant="homepage" />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Homepage;