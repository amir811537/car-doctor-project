// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_API_KEY,
  authDomain: "cars-doctors-auth.firebaseapp.com",
  projectId: "cars-doctors-auth",
  storageBucket: "cars-doctors-auth.appspot.com",
  messagingSenderId: "785057271976",
  appId: "1:785057271976:web:971d3ae1a063c6443e729d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;