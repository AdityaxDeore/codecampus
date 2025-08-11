import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ValueProposition from './components/ValueProposition';
import ActivityFeed from './components/ActivityFeed';
import FeaturedProjects from './components/FeaturedProjects';
import UniversityPartnerships from './components/UniversityPartnerships';
import TestimonialSection from './components/TestimonialSection';
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

      <div className="min-h-screen bg-white">
        <Header />
        
        <main className="pt-16">
          <HeroSection />
          <ValueProposition />
          <ActivityFeed />
          <FeaturedProjects />
          <UniversityPartnerships />
          <TestimonialSection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Homepage;