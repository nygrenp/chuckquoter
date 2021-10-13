import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDeZIN2fYLwlRRzQP7IFBlIbIa-5J9ybAk",
  authDomain: "chuck-norris-nextjs.firebaseapp.com",
  projectId: "chuck-norris-nextjs",
  storageBucket: "chuck-norris-nextjs.appspot.com",
  messagingSenderId: "599249877596",
  appId: "1:599249877596:web:d559c7b6c2c331f8934499",
};

const app  = !firebase.apps.length ? 
  firebase.initializeApp(firebaseConfig) : firebase.app();
  const db = app.firestore();

export { db };
