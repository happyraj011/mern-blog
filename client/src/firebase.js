// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-21a55.firebaseapp.com",
  projectId: "mern-blog-21a55",
  storageBucket: "mern-blog-21a55.appspot.com",
  messagingSenderId: "759661226481",
  appId: "1:759661226481:web:224134fb89d1f97478bc50"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
