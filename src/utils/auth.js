import {
  signInWithGoogle,
  signInWithGitHub,
  signInWithEmail as firebaseSignInWithEmail,
  signUpWithEmail as firebaseSignUpWithEmail,
  logOut,
  getCurrentUser as firebaseGetCurrentUser,
  onAuthStateChange as firebaseOnAuthStateChange
} from '../lib/firebaseAuth';

export { signInWithGoogle, signInWithGitHub };

export async function signInWithEmail(email, password) {
  return await firebaseSignInWithEmail(email, password);
}

export async function signUpWithEmail(email, password, userData = {}) {
  return await firebaseSignUpWithEmail(email, password, userData.full_name);
}

export async function signOut() {
  return await logOut();
}

export async function getSession() {
  const user = firebaseGetCurrentUser();
  return user ? { user } : null;
}

export async function getCurrentUser() {
  return firebaseGetCurrentUser();
}

export function onAuthStateChange(callback) {
  return firebaseOnAuthStateChange(callback);
}
