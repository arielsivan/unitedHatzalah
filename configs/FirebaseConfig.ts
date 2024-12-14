// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACpRkqgy8JFw9AlJjkhf7C8R_kcgEXgmE",
  authDomain: "united-db8c8.firebaseapp.com",
  projectId: "united-db8c8",
  storageBucket: "united-db8c8.firebasestorage.app",
  messagingSenderId: "593421103178",
  appId: "1:593421103178:web:59f4f13fe5ae69a5a476b3",
  measurementId: "G-FCMT2CWLB6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);