import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";

var firebaseConfig = {
  apiKey: "AIzaSyCRZ_2VKxggW6AHmnYsgBCpsvGgrFL9oWE",
  authDomain: "chatapp-64c32.firebaseapp.com",
  projectId: "chatapp-64c32",
  storageBucket: "chatapp-64c32.appspot.com",
  messagingSenderId: "1033668835002",
  appId: "1:1033668835002:web:db821636e648509033f483",
  measurementId: "G-GG9ZNB75QZ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
export default firebase;
