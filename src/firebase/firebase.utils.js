import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAADAAKObpMbuAxBjaUaq8_kdz9IdzNeLk",
    authDomain: "crwn-db-976b7.firebaseapp.com",
    databaseURL: "https://crwn-db-976b7.firebaseio.com",
    projectId: "crwn-db-976b7",
    storageBucket: "",
    messagingSenderId: "557372555973",
    appId: "1:557372555973:web:a7c2339790e271b34ee6ac"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
