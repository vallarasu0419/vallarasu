import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLqTrYAUK9bnLhrUGUyydNb2bH-lptjto",
  authDomain: "vallarasu-e4138.firebaseapp.com",
  projectId: "vallarasu-e4138",
  storageBucket: "vallarasu-e4138.appspot.com",
  messagingSenderId: "177828501839",
  appId: "1:177828501839:web:6ac95d4e88b59678f70d3a",
  measurementId: "G-22Z7FZP1TR",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
