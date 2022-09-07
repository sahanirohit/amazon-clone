import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0LI90xPas4oi4NlYXQ3AoNqp550WI9QI",
  authDomain: "fir-be85c.firebaseapp.com",
  projectId: "fir-be85c",
  storageBucket: "fir-be85c.appspot.com",
  messagingSenderId: "958244528254",
  appId: "1:958244528254:web:0f923b3d32463fd9e1f82f",
  measurementId: "G-2Q15L40N81",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
