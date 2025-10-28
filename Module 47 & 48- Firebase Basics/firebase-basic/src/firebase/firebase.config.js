// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ77rwdS1gWiHVeLvUFvA0D5x3EAd2rmk",
  authDomain: "fir-basic-80561.firebaseapp.com",
  projectId: "fir-basic-80561",
  storageBucket: "fir-basic-80561.firebasestorage.app",
  messagingSenderId: "802540910919",
  appId: "1:802540910919:web:78f29c63bf73fe71bf7462",
  measurementId: "G-6WEY048PV9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);