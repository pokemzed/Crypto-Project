// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCgY0-Hpr-nBHKN5Gy4EUAskB9CwD57AEE",
    authDomain: "auth-crypto-nextjs.firebaseapp.com",
    projectId: "auth-crypto-nextjs",
    storageBucket: "auth-crypto-nextjs.appspot.com",
    messagingSenderId: "1000579642667",
    appId: "1:1000579642667:web:5034d598d9b9d06484816e",
    measurementId: "G-28FR6EKBRS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth, provider}