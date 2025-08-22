// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCZHdT3iDPkzfjvUkTrJ1nGyatrWxI5COk",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "codecampus-355e8.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "codecampus-355e8",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "codecampus-355e8.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "602048149452",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:602048149452:web:298c2e3cf59d30b4bbcf69",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-K9RE1FMQCF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Initialize Analytics (only in browser environment)
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}
export { analytics };

export default app;
