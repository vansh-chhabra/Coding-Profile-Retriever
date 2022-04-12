// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import { getAuth,GoogleAuthProvider,signInWithPopup } from "firebase/auth" ;
import {Link,useHistory,Route} from "react-router-dom"
import Dashboard from "./pages/Dashboard";
import 'firebase/firestore'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzF63RccpOBZoPsG6I_-4rpMVHg6humPM",
  authDomain: "auth-dev-8280b.firebaseapp.com",
  projectId: "auth-dev-8280b",
  storageBucket: "auth-dev-8280b.appspot.com",
  messagingSenderId: "745590645770",
  appId: "1:745590645770:web:571a5a8b999e0768f66bf3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const db = getFirestore() ;

export const auth = getAuth(app) ;

export const provider = new GoogleAuthProvider() 




