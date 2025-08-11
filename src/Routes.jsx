import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import CampusForums from './pages/campus-forums';
import AchievementCenter from './pages/achievement-center';
import ProblemWorkspace from './pages/problem-workspace';
import AboutCodeCampus from './pages/about-code-campus';
import Homepage from './pages/homepage';
import Login from './pages/login';
import StudentDashboard from './pages/student-dashboard';
import ComingSoon from './pages/coming-soon';
import Projects from './pages/projects';
import StatusPage from './pages/status';
import ProblemHistory from './pages/problem-history';
import Problems from './pages/problems';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/campus-forums" element={<CampusForums />} />
        <Route path="/achievement-center" element={<AchievementCenter />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/problem-workspace" element={<ProblemWorkspace />} />
        <Route path="/problem-history" element={<ProblemHistory />} />
        <Route path="/about-code-campus" element={<AboutCodeCampus />} />
        <Route path="/homepage" element={<Homepage />} />
  {/* Placeholder routes */}
  <Route path="/settings" element={<ComingSoon />} />
  <Route path="/help" element={<ComingSoon />} />
  <Route path="/profile" element={<ComingSoon />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/success-stories" element={<ComingSoon />} />
  <Route path="/events" element={<ComingSoon />} />
  <Route path="/study-groups" element={<ComingSoon />} />
  <Route path="/mentorship" element={<ComingSoon />} />
  <Route path="/blog" element={<ComingSoon />} />
  <Route path="/getting-started" element={<ComingSoon />} />
  <Route path="/docs" element={<ComingSoon />} />
  <Route path="/api" element={<ComingSoon />} />
  <Route path="/tutorials" element={<ComingSoon />} />
  <Route path="/careers" element={<ComingSoon />} />
  <Route path="/press" element={<ComingSoon />} />
  <Route path="/partners" element={<ComingSoon />} />
  <Route path="/contact" element={<ComingSoon />} />
  <Route path="/privacy" element={<ComingSoon />} />
  <Route path="/terms" element={<ComingSoon />} />
  <Route path="/cookies" element={<ComingSoon />} />
  <Route path="/status" element={<StatusPage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
