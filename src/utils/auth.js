import { supabase } from '../lib/supabaseClient';
import { 
  signInWithGoogle as firebaseSignInWithGoogle,
  signInWithGitHub as firebaseSignInWithGitHub,
  signInWithEmail as firebaseSignInWithEmail,
  signUpWithEmail as firebaseSignUpWithEmail,
  logOut as firebaseLogOut,
  getCurrentUser as firebaseGetCurrentUser,
  onAuthStateChange as firebaseOnAuthStateChange
} from '../lib/firebaseAuth';

// Auth provider preference (can be switched between 'supabase' and 'firebase')
const AUTH_PROVIDER = import.meta.env.VITE_AUTH_PROVIDER || 'supabase';

// Supabase Auth Functions
export async function signInWithGoogle() {
  if (AUTH_PROVIDER === 'firebase') {
    return await firebaseSignInWithGoogle();
  }
  
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: window.location.origin + '/student-dashboard',
    },
  });
  if (error) throw error;
  return data;
}

export async function signInWithGitHub() {
  if (AUTH_PROVIDER === 'firebase') {
    return await firebaseSignInWithGitHub();
  }
  
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: window.location.origin + '/student-dashboard',
    },
  });
  if (error) throw error;
  return data;
}

export async function signInWithMicrosoft() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'azure',
    options: {
      redirectTo: window.location.origin + '/student-dashboard',
    },
  });
  if (error) throw error;
  return data;
}

export async function signInWithEmail(email, password) {
  if (AUTH_PROVIDER === 'firebase') {
    return await firebaseSignInWithEmail(email, password);
  }
  
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data;
}

export async function signUpWithEmail(email, password, userData = {}) {
  if (AUTH_PROVIDER === 'firebase') {
    return await firebaseSignUpWithEmail(email, password, userData.full_name);
  }
  
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: userData,
    },
  });
  if (error) throw error;
  return data;
}

export async function signOut() {
  if (AUTH_PROVIDER === 'firebase') {
    return await firebaseLogOut();
  }
  
  await supabase.auth.signOut();
}

export async function getSession() {
  if (AUTH_PROVIDER === 'firebase') {
    const user = firebaseGetCurrentUser();
    return user ? { user } : null;
  }
  
  const { data: { session } } = await supabase.auth.getSession();
  return session;
}

export async function getCurrentUser() {
  if (AUTH_PROVIDER === 'firebase') {
    return firebaseGetCurrentUser();
  }
  
  const session = await getSession();
  return session?.user || null;
}

export function onAuthStateChange(callback) {
  if (AUTH_PROVIDER === 'firebase') {
    return firebaseOnAuthStateChange(callback);
  }
  
  return supabase.auth.onAuthStateChange((event, session) => {
    callback(session?.user || null);
  });
}
