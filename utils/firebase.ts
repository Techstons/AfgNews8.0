// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, doc, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyD8S_7m_tZM12_eVE2jL_yJDrjTnlHU9S0",
  authDomain: "afgnews-72501.firebaseapp.com",
  projectId: "afgnews-72501",
  storageBucket: "afgnews-72501.appspot.com",
  messagingSenderId: "32916401454",
  appId: "1:32916401454:web:231dc88aa69d281d17debf",
  measurementId: "G-0YFWYWT13F",
};

export const app = initializeApp(firebaseConfig);
export const useAuth = getAuth(app);
export const db = getFirestore(app);

// Firestore
const articlesName = "articles";
const messagesName = "messages";
export const articleCollection = collection(db, articlesName);
export const messagesCollection = collection(db, messagesName);
export const articleRefById = (id: string) => {
  return doc(db, articlesName, id);
};
