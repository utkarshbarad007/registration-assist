
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY || "AIzaSyD2JkbDDvJdqlkc2Ak9bX5S7NUlHVO9xO0",
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN || "biz-with-ease.firebaseapp.com",
  projectId: process.env.VITE_FIREBASE_PROJECT_ID || "biz-with-ease",
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET || "biz-with-ease.firebasestorage.app",
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "252219241546",
  appId: process.env.VITE_FIREBASE_APP_ID || "1:252219241546:web:7f28d688b0767a5c2d22b3",
  measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID || "G-EKMPPDTVDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
export const auth = getAuth(app);

export default app;
