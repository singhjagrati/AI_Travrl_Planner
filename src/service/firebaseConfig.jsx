// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaPLwmQJTS63JDJOzUaG0iAvVCW9Q3yyw",
  authDomain: "ai-travel-planner-1212.firebaseapp.com",
  projectId: "ai-travel-planner-1212",
  storageBucket: "ai-travel-planner-1212.firebasestorage.app",
  messagingSenderId: "264252884596",
  appId: "1:264252884596:web:88d9ccb16822efcaeab321",
  measurementId: "G-CXF98HFGMS"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db= getFirestore(app);
// const analytics = getAnalytics(app);