// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKWHMMn_UcByOIs3Rdr_riZaJ7E417T88",
  authDomain: "doccare-dab07.firebaseapp.com",
  projectId: "doccare-dab07",
  storageBucket: "doccare-dab07.firebasestorage.app",
  messagingSenderId: "951227152308",
  appId: "1:951227152308:web:06e96ee8ca56fcb2f064e1",
  measurementId: "G-4QEGBW2HBR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app); // Pass the app instance to `getAuth`
export const db = getFirestore(app); // Firestore requires the app instance

// Export the initialized app
export default app;
