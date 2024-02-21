// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFyRQsECpzVx5JKuHWjq4Ql5Yn8kpi65I",
  authDomain: "mah-mudul.firebaseapp.com",
  projectId: "mah-mudul",
  storageBucket: "mah-mudul.appspot.com",
  messagingSenderId: "58481872496",
  appId: "1:58481872496:web:18450b79d06a97beab6eb5",
  measurementId: "G-D607BL35BY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);
export default auth;