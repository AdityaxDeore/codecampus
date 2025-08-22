import { logEvent } from 'firebase/analytics';
import { analytics } from './firebase';

// Track page views
export const trackPageView = (pageName, pageTitle = null) => {
  if (analytics) {
    logEvent(analytics, 'page_view', {
      page_title: pageTitle || pageName,
      page_location: window.location.href,
      page_path: window.location.pathname
    });
  }
};

// Track user actions
export const trackEvent = (eventName, parameters = {}) => {
  if (analytics) {
    logEvent(analytics, eventName, parameters);
  }
};

// Track problem solving
export const trackProblemSolved = (problemId, difficulty, timeTaken, language) => {
  if (analytics) {
    logEvent(analytics, 'problem_solved', {
      problem_id: problemId,
      difficulty,
      time_taken: timeTaken,
      programming_language: language
    });
  }
};

// Track code submission
export const trackCodeSubmission = (problemId, result, language) => {
  if (analytics) {
    logEvent(analytics, 'code_submission', {
      problem_id: problemId,
      result, // 'success', 'failed', 'timeout'
      programming_language: language
    });
  }
};

// Track forum interactions
export const trackForumInteraction = (action, postId = null) => {
  if (analytics) {
    logEvent(analytics, 'forum_interaction', {
      action, // 'post_created', 'comment_added', 'like', 'share'
      post_id: postId
    });
  }
};

// Track login method
export const trackLogin = (method) => {
  if (analytics) {
    logEvent(analytics, 'login', {
      method // 'email', 'google', 'github'
    });
  }
};

// Track sign up
export const trackSignUp = (method) => {
  if (analytics) {
    logEvent(analytics, 'sign_up', {
      method // 'email', 'google', 'github'
    });
  }
};
