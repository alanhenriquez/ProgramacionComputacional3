// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3XsEcKm0n1Xi2g1dBpqbZirRkw6e_-KU",
  authDomain: "reconocimiento-facial-f2e6f.firebaseapp.com",
  projectId: "reconocimiento-facial-f2e6f",
  storageBucket: "reconocimiento-facial-f2e6f.appspot.com",
  messagingSenderId: "528609095461",
  appId: "1:528609095461:web:00aae5471078d268bcf4cc",
  measurementId: "G-MLV7HWJTPZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);