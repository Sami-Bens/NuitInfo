import firebase from "firebase/compat";
import { getFirestore } from "firebase/firestore/lite";

const log = {
    apiKey: "AIzaSyCbtfmxzOlcmhZPsYHkC6eFknQD7QSAA9U",
    authDomain: "ziziteurs-b6b0b.firebaseapp.com",
    projectId: "ziziteurs-b6b0b",
    storageBucket: "ziziteurs-b6b0b.appspot.com",
    messagingSenderId: "105856732388",
    appId: "1:105856732388:web:e2454e48bae45555e9f0f1",
    measurementId: "G-VE2K7BRB1C"
}
const app = firebase.initializeApp(log);

const auth = app.auth();
const db = getFirestore();

export const signInWithEmailAndPassword = async (email, password, handleConnection) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      handleConnection();
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
};

export const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      const user = res.user;
      await db.collection("users").add({
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      //alert(err.message);
    }
  };
