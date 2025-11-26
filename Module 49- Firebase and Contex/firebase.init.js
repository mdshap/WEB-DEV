// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEpIPYTeAmPhF9s1_R8lsT5qlO7LfOxkE",
  authDomain: "react-firebase-auth-module-49.firebaseapp.com",
  projectId: "react-firebase-auth-module-49",
  storageBucket: "react-firebase-auth-module-49.firebasestorage.app",
  messagingSenderId: "302155388519",
  appId: "1:302155388519:web:c4495ee7d3f219f4dca6c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
