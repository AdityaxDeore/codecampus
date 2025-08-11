import { supabase } from '../lib/supabaseClient';

export async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
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

export async function signOut() {
  await supabase.auth.signOut();
}

export async function getSession() {
  const { data: { session } } = await supabase.auth.getSession();
  return session;
}
