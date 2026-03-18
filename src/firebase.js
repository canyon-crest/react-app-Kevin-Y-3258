// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkoEv18jAj6GHg72eqhTclAIM0lz-EAtU",
  authDomain: "react-firebase-app-5a31f.firebaseapp.com",
  projectId: "react-firebase-app-5a31f",
  storageBucket: "react-firebase-app-5a31f.firebasestorage.app",
  messagingSenderId: "481760383849",
  appId: "1:481760383849:web:00225969883f094e42e3f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();