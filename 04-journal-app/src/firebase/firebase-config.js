import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBWOPT46Liifn7JKmcJanHMoP8kpZO00-w",
    authDomain: "react-app-cursos-8c5ae.firebaseapp.com",
    projectId: "react-app-cursos-8c5ae",
    storageBucket: "react-app-cursos-8c5ae.appspot.com",
    messagingSenderId: "13439455342",
    appId: "1:13439455342:web:bae666aa42d56b7e98167f"
  };
  // Initialize Firebase

firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}