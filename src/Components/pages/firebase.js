// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore"; // Import Firestore

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAr2yPfP8VSDhbQkMjyyVpYQcjgixXEWYc",
//   authDomain: "veteranwebsite-1bb3e.firebaseapp.com",
//   projectId: "veteranwebsite-1bb3e",
//   storageBucket: "veteranwebsite-1bb3e.firebasestorage.app",
//   messagingSenderId: "113120700099",
//   appId: "1:113120700099:web:70bf0115b448582dc4e476",
//   measurementId: "G-JG80FNZ3RM"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// // Initialize Firestore
// const db = getFirestore(app); // Initialize Firestore instance

// export { db }; // Export Firestore db













// // firebase.js
// import { initializeApp } from 'firebase/app';
// import 'firebase/database';

// const firebaseConfig = {
//   apiKey: "AIzaSyArSZ1HrISRXxYMDX23GPchwMIzCUx2wsY",
//   authDomain: "spotlessguru-ea64e.firebaseapp.com",
//   databaseURL: "https://spotlessguru-ea64e-default-rtdb.firebaseio.com",
//   projectId: "spotlessguru-ea64e",
//   storageBucket: "spotlessguru-ea64e.appspot.com",
//   messagingSenderId: "506667893385",
//   appId: "1:506667893385:web:f77cf4a229dfe32d0a7c58",
//   measurementId: "G-4ML0NF2VTV"
// };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export default app;
// firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyC5dZflHmiBVa0OdOkqmdYh7ggqeul22dk",
  authDomain: "hospital-cca55.firebaseapp.com",
  projectId: "hospital-cca55",
  storageBucket: "hospital-cca55.firebasestorage.app",
  messagingSenderId: "82791187476",
  appId: "1:82791187476:web:5cbbcc54b559bbbab29301"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Realtime Database
const db = getDatabase(app);

export { db, app }; // Export both app and db instances