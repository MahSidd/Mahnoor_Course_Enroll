// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAvuMH4U5dcohlCOqgs6qDl-8GMp_OXlw",
  authDomain: "login-course-ae957.firebaseapp.com",
  projectId: "login-course-ae957",
  storageBucket: "login-course-ae957.appspot.com",
  messagingSenderId: "858720945442",
  appId: "1:858720945442:web:fa43c77a7c1cf98d64517b",
  measurementId: "G-R90KTBB0X1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth();
export const db= getFirestore(app);

export default app;