// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8S_7m_tZM12_eVE2jL_yJDrjTnlHU9S0",
  authDomain: "afgnews-72501.firebaseapp.com",
  projectId: "afgnews-72501",
  storageBucket: "afgnews-72501.appspot.com",
  messagingSenderId: "32916401454",
  appId: "1:32916401454:web:231dc88aa69d281d17debf",
  measurementId: "G-0YFWYWT13F",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
