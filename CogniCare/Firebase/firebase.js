// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//import "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXwPzH4w20jsPiImL4v4J4oJtyZ9ZvzA0",
  authDomain: "cognicaredb.firebaseapp.com",
  databaseURL: "https://cognicaredb-default-rtdb.firebaseio.com",
  projectId: "cognicaredb",
  storageBucket: "cognicaredb.appspot.com",
  messagingSenderId: "381161245730",
  appId: "1:381161245730:web:c1ddc4a6f97baf26bfce7b",
  measurementId: "G-YHRPLY6KYZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const auth = getAuth(app);


export {auth};