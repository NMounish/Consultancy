
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {  getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAtT1qd7uWlUPWvAIAoGbmmbxkuC7zNV-M",
  authDomain: "leather-52627.firebaseapp.com",
  projectId: "leather-52627",
  storageBucket: "leather-52627.appspot.com",
  messagingSenderId: "199612279969",
  appId: "1:199612279969:web:7f3cb46737a971ffb994e0"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Initialize Firestore
const firestore = getFirestore(app);


export { firestore ,auth}; // Export the firestore object if you need it
