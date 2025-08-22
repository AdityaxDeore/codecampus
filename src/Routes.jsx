import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import ProtectedRoute from "components/ProtectedRoute";
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
import LearningPathways from './pages/learning-pathways';
import GoalsHomework from './pages/goals-homework';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Public routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about-code-campus" element={<AboutCodeCampus />} />
        <Route path="/status" element={<StatusPage />} />
        
        {/* Protected routes */}
        <Route path="/student-dashboard" element={<ProtectedRoute><StudentDashboard /></ProtectedRoute>} />
        <Route path="/campus-forums" element={<ProtectedRoute><CampusForums /></ProtectedRoute>} />
        <Route path="/achievement-center" element={<ProtectedRoute><AchievementCenter /></ProtectedRoute>} />
        <Route path="/problems" element={<ProtectedRoute><Problems /></ProtectedRoute>} />
        <Route path="/learning-pathways" element={<ProtectedRoute><LearningPathways /></ProtectedRoute>} />
        <Route path="/goals-homework" element={<ProtectedRoute><GoalsHomework /></ProtectedRoute>} />
        <Route path="/problem-workspace" element={<ProtectedRoute><ProblemWorkspace /></ProtectedRoute>} />
        <Route path="/problem-history" element={<ProtectedRoute><ProblemHistory /></ProtectedRoute>} />
        <Route path="/projects" element={<ProtectedRoute><Projects /></ProtectedRoute>} />
        <Route path="/coming-soon" element={<ProtectedRoute><ComingSoon /></ProtectedRoute>} />
        
        {/* Placeholder routes - Protected */}
        <Route path="/settings" element={<ProtectedRoute><ComingSoon /></ProtectedRoute>} />
        <Route path="/help" element={<ProtectedRoute><ComingSoon /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><ComingSoon /></ProtectedRoute>} />
        <Route path="/success-stories" element={<ProtectedRoute><ComingSoon /></ProtectedRoute>} />
        <Route path="/events" element={<ProtectedRoute><ComingSoon /></ProtectedRoute>} />
        <Route path="/study-groups" element={<ProtectedRoute><ComingSoon /></ProtectedRoute>} />
        <Route path="/mentorship" element={<ProtectedRoute><ComingSoon /></ProtectedRoute>} />
        <Route path="/tutorials" element={<ProtectedRoute><ComingSoon /></ProtectedRoute>} />
        
        {/* Public placeholder routes */}
        <Route path="/blog" element={<ComingSoon />} />
        <Route path="/getting-started" element={<ComingSoon />} />
        <Route path="/docs" element={<ComingSoon />} />
        <Route path="/api" element={<ComingSoon />} />
        <Route path="/careers" element={<ComingSoon />} />
        <Route path="/press" element={<ComingSoon />} />
        <Route path="/partners" element={<ComingSoon />} />
        <Route path="/contact" element={<ComingSoon />} />
        <Route path="/privacy" element={<ComingSoon />} />
        <Route path="/terms" element={<ComingSoon />} />
        <Route path="/cookies" element={<ComingSoon />} />
        
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
