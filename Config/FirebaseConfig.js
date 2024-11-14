// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "vaidyavani-drive.firebaseapp.com",
    projectId: "vaidyavani-drive",
    storageBucket: "vaidyavani-drive.firebasestorage.app",
    messagingSenderId: "49444690579",
    appId: "1:49444690579:web:46e4464b2b420cd4660b66",
    measurementId: "G-RKP59ZQ67C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);