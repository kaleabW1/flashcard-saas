// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirebase} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKhMm7qo4FYA_xr3h-tx2MdYn4INjPB_E",
  authDomain: "flashcard-project-959bc.firebaseapp.com",
  projectId: "flashcard-project-959bc",
  storageBucket: "flashcard-project-959bc.appspot.com",
  messagingSenderId: "750376269377",
  appId: "1:750376269377:web:2e2eae44b61bd9dd7c78c0",
  measurementId: "G-QY899290X0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirebase(app);

export {db}