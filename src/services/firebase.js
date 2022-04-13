import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCmw-Iuztxq0AmKCaiRm-G6uKjvpjpqBxg",
  authDomain: "backendjupiter.firebaseapp.com",
  projectId: "backendjupiter",
  storageBucket: "backendjupiter.appspot.com",
  messagingSenderId: "732674342478",
  appId: "1:732674342478:web:cbea9182e4b28fda3fcd1f"
};

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)