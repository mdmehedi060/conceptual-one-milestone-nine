// Import the functions you need from the SDKs you needimport { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyA6BdBrGvrce2MksHz1_O1UQImlHi5LSR8",
  authDomain: "conceptual-one-milestone-nine.firebaseapp.com",
  projectId: "conceptual-one-milestone-nine",
  storageBucket: "conceptual-one-milestone-nine.appspot.com",
  messagingSenderId: "868218326797",
  appId: "1:868218326797:web:2c1c640a2f38cf62312a44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
