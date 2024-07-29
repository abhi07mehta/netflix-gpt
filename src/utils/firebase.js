// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3NFidIVYUmaoQ0YhhoCM_Hs_FXKi5Tlc",
  authDomain: "replay-gpt.firebaseapp.com",
  projectId: "replay-gpt",
  storageBucket: "replay-gpt.appspot.com",
  messagingSenderId: "534985347278",
  appId: "1:534985347278:web:1ec23a6599e24fa325009f",
  measurementId: "G-QWWBLS1HQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
