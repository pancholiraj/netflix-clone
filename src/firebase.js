// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1xjDgYdWmt1jEex72akaKSwofod_GEpc",
  authDomain: "netflix-clone-21a36.firebaseapp.com",
  projectId: "netflix-clone-21a36",
  storageBucket: "netflix-clone-21a36.appspot.com",
  messagingSenderId: "669014579432",
  appId: "1:669014579432:web:5a4ae88d31dc5a092c115d",
  measurementId: "G-5NW6JDX9XM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
