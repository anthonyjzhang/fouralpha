import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCJQUBbzDEklDNaLBjN5AoS08OKVVx979Y",
  authDomain: "fouralpha-b77bd.firebaseapp.com",
  projectId: "fouralpha-b77bd",
  storageBucket: "fouralpha-b77bd.appspot.com",
  messagingSenderId: "1050407983113",
  appId: "1:1050407983113:web:49f2e19412d4bfc00f00d8",
  measurementId: "G-8PXEJKNPWJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
