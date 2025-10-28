// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-2Ybe77IcnQjzrNtZQQvQxV6jwgN6K2k",
  authDomain: "practice-9365f.firebaseapp.com",
  projectId: "practice-9365f",
  storageBucket: "practice-9365f.firebasestorage.app",
  messagingSenderId: "622216759099",
  appId: "1:622216759099:web:8bc5de60b55ff84a8c591e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);