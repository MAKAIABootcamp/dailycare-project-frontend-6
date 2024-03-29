// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics"
import { getMessaging } from "firebase/messaging"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDHFrl4ZMMdc2dREdgON1splzuiUwart4",
  authDomain: "daily-care-504df.firebaseapp.com",
  projectId: "daily-care-504df",
  storageBucket: "daily-care-504df.appspot.com",
  messagingSenderId: "596409555335",
  appId: "1:596409555335:web:157644abefb30244db9b22",
  measurementId: "G-BYDFGL4KJK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication
export const auth = getAuth(app)

// Initialize Firebase Firestore (NoSQL data base)
export const firestore = getFirestore(app)

export const analytics = getAnalytics(app)
export const messaging = getMessaging(app)