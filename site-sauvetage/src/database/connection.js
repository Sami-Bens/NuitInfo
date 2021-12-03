import firebase from "firebase/compat";
import {doc, getFirestore, setDoc} from "firebase/firestore/lite";
import { initFirebase } from "./firestore";
import sha512 from 'js-sha512';

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
    } catch(e) {
        console.error("Error adding document: ", e);
    }
    console.log("done");
};