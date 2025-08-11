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
        <Route path="/problem-workspace" element={<ProblemWorkspace />} />
        <Route path="/about-code-campus" element={<AboutCodeCampus />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
