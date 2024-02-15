// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {GoogleAuthProvider, getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBauZIrWd_mt-n9K-JlyiTD_NxS2Y161-I",
  authDomain: "project-auth-4abad.firebaseapp.com",
  projectId: "project-auth-4abad",
  storageBucket: "project-auth-4abad.appspot.com",
  messagingSenderId: "745101552316",
  appId: "1:745101552316:web:95712351f9f5fba1303eb9",
  measurementId: "G-8HGLBZE3XE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const goggleAuth =new GoogleAuthProvider();