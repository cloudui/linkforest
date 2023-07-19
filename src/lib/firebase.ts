// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq6CiHTC9c_KKr-Zqh1-A0ue4_yxnMRHg",
  authDomain: "svelte-project-b5c21.firebaseapp.com",
  projectId: "svelte-project-b5c21",
  storageBucket: "svelte-project-b5c21.appspot.com",
  messagingSenderId: "945379727657",
  appId: "1:945379727657:web:e413ce575ac4e8d6a6ff38",
  measurementId: "G-Q4Y7F2XJY1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();