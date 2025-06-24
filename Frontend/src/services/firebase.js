// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCrxWymmAAXigD8o8JMAbSRiK1eJe2srM",
  authDomain: "arabic-question-generation.firebaseapp.com",
  projectId: "arabic-question-generation",
  storageBucket: "arabic-question-generation.firebasestorage.app",
  messagingSenderId: "565972011757",
  appId: "1:565972011757:web:e478966e30e85064139ae4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();