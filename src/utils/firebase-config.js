// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD6KjoecZCWS3XbFU_TgViDNWhRi5CnrD0",
  authDomain: "netflix-clone-d4ef8.firebaseapp.com",
  projectId: "netflix-clone-d4ef8",
  storageBucket: "netflix-clone-d4ef8.appspot.com",
  messagingSenderId: "773065922577",
  appId: "1:773065922577:web:6adcc4e54e074a785439b0",
  measurementId: "G-N773SN3BQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);