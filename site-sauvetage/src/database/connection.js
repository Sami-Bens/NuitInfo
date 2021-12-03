import firebase from "firebase/compat";
import { doc, getFirestore, setDoc, getDocs, collection } from "firebase/firestore/lite";
//import { initFirebase } from "./firestore";
import sha512 from 'js-sha512';
import { getDateTime } from "./utils";

const log = {
    apiKey: "AIzaSyD1bMuPfFbi_cIyOTFdBd4eqJSMDh8-7FA",
    authDomain: "ziziteurs.firebaseapp.com",
    projectId: "ziziteurs",
    storageBucket: "ziziteurs.appspot.com",
    messagingSenderId: "275711303080",
    appId: "1:275711303080:web:a3cd7147aa407b4c90919d",
    measurementId: "G-M723CGTE16"
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
      alert(err.message);
    }
  };

//export default { signInWithEmailAndPassword, registerWithEmailAndPassword }
/*
export function register(name, email, password) {
    initFirebase();
    let db = getFirestore();
    try {
        let id = getDateTime() + "_" + name;
        setDoc(doc(db, "accounts", id), {
            name: name,
            email: email,
            password: sha512(password)
        })
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    console.log("done");
};

export async function login(email, password) {
    initFirebase();
    let db = getFirestore();
    const accounts = await getDocs(collection(db, "accounts"));
    password = sha512(password);
    let resp = []
    accounts.docs.map((doc) => {
        let a_email = doc.data().email;
        let a_password = doc.data().password;
        resp.push(email === a_email && password === a_password ? true : false);
    })
    return resp.includes(true)
}*/