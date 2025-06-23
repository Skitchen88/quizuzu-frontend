// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7cLQ9HpRF6OdMi8PTctI-aDw5UJ-5TWU",
  authDomain: "quizuzu-bff8a.firebaseapp.com",
  projectId: "quizuzu-bff8a",
  storageBucket: "quizuzu-bff8a.appspot.com",
  messagingSenderId: "1053198002880",
  appId: "1:1053198002880:web:2d610614d02acc6cd51b25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth, Firestore, and auth state observer
export const auth = getAuth(app);
export const db = getFirestore(app);
export { onAuthStateChanged };
