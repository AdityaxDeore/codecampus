import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import ProtectedRoute from "components/ProtectedRoute";
import Loading from "components/Loading";

// Eagerly loaded components
import NotFound from "pages/NotFound";
import Homepage from './pages/homepage';
import Login from './pages/login';

// Lazily loaded components
const CampusForums = lazy(() => import('./pages/campus-forums'));
const AchievementCenter = lazy(() => import('./pages/achievement-center'));
const ProblemWorkspace = lazy(() => import('./pages/problem-workspace'));
const AboutCodeCampus = lazy(() => import('./pages/about-code-campus'));
const StudentDashboard = lazy(() => import('./pages/student-dashboard'));
const ComingSoon = lazy(() => import('./pages/coming-soon'));
const Projects = lazy(() => import('./pages/projects'));
const StatusPage = lazy(() => import('./pages/status'));
const ProblemHistory = lazy(() => import('./pages/problem-history'));
const Problems = lazy(() => import('./pages/problems'));
const LearningPathways = lazy(() => import('./pages/learning-pathways'));
const GoalsHomework = lazy(() => import('./pages/goals-homework'));

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
        <Route path="/about-code-campus" element={
          <Suspense fallback={<Loading />}>
            <AboutCodeCampus />
          </Suspense>
        } />
        <Route path="/status" element={
          <Suspense fallback={<Loading />}>
            <StatusPage />
          </Suspense>
        } />
        
        {/* Protected routes */}
        <Route path="/student-dashboard" element={
          <ProtectedRoute>
            <Suspense fallback={<Loading />}>
              <StudentDashboard />
            </Suspense>
          </ProtectedRoute>
        } />
        <Route path="/campus-forums" element={
          <ProtectedRoute>
            <Suspense fallback={<Loading />}>
              <CampusForums />
            </Suspense>
          </ProtectedRoute>
        } />
        <Route path="/achievement-center" element={
          <ProtectedRoute>
            <Suspense fallback={<Loading />}>
              <AchievementCenter />
            </Suspense>
          </ProtectedRoute>
        } />
        <Route path="/problems" element={
          <ProtectedRoute>
            <Suspense fallback={<Loading />}>
              <Problems />
            </Suspense>
          </ProtectedRoute>
        } />
        <Route path="/learning-pathways" element={
          <ProtectedRoute>
            <Suspense fallback={<Loading />}>
              <LearningPathways />
            </Suspense>
          </ProtectedRoute>
        } />
        <Route path="/goals-homework" element={
          <ProtectedRoute>
            <Suspense fallback={<Loading />}>
              <GoalsHomework />
            </Suspense>
          </ProtectedRoute>
        } />
        <Route path="/problem-workspace" element={
          <ProtectedRoute>
            <Suspense fallback={<Loading />}>
              <ProblemWorkspace />
            </Suspense>
          </ProtectedRoute>
        } />
        <Route path="/problem-history" element={
          <ProtectedRoute>
            <Suspense fallback={<Loading />}>
              <ProblemHistory />
            </Suspense>
          </ProtectedRoute>
        } />
        <Route path="/projects" element={
          <ProtectedRoute>
            <Suspense fallback={<Loading />}>
              <Projects />
            </Suspense>
          </ProtectedRoute>
        } />
        <Route path="/coming-soon" element={
          <ProtectedRoute>
            <Suspense fallback={<Loading />}>
              <ComingSoon />
            </Suspense>
          </ProtectedRoute>
        } />
        
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
