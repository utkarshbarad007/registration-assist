// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Add this import

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2JkbDDvJdqlkc2Ak9bX5S7NUlHVO9xO0",
  authDomain: "biz-with-ease.firebaseapp.com",
  projectId: "biz-with-ease",
  storageBucket: "biz-with-ease.firebasestorage.app",
  messagingSenderId: "252219241546",
  appId: "1:252219241546:web:7f28d688b0767a5c2d22b3",
  measurementId: "G-EKMPPDTVDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app); // Add this line to initialize and export auth
