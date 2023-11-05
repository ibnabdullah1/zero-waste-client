// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2HJiNAegD3T7luWfsxswRguZmRQoACPw",
  authDomain: "zero-waste-5fb87.firebaseapp.com",
  projectId: "zero-waste-5fb87",
  storageBucket: "zero-waste-5fb87.appspot.com",
  messagingSenderId: "632058837905",
  appId: "1:632058837905:web:4f1a92ab62e9d1cf33f830",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
