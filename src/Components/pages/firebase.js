// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr2yPfP8VSDhbQkMjyyVpYQcjgixXEWYc",
  authDomain: "veteranwebsite-1bb3e.firebaseapp.com",
  projectId: "veteranwebsite-1bb3e",
  storageBucket: "veteranwebsite-1bb3e.firebasestorage.app",
  messagingSenderId: "113120700099",
  appId: "1:113120700099:web:70bf0115b448582dc4e476",
  measurementId: "G-JG80FNZ3RM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app); // Initialize Firestore instance

export { db }; // Export Firestore db
