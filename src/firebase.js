// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArDWweIuP1gvPJAau-j4tM1fShq01Aozk",
  authDomain: "ash-port.firebaseapp.com",
  projectId: "ash-port",
  storageBucket: "ash-port.appspot.com",
  messagingSenderId: "174485367328",
  appId: "1:174485367328:web:4e9d2444e63f9f911a6a45",
  measurementId: "G-RCXX8LW6P9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();