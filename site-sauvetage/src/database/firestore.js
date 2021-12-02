import firebase from "firebase/compat";
import {getDateTime} from './utils';
import {doc, getFirestore, setDoc} from "firebase/firestore/lite";

export function initFirebase(){
    if (!firebase._isInitialized){
        firebase.initializeApp({
            apiKey: "AIzaSyD1bMuPfFbi_cIyOTFdBd4eqJSMDh8-7FA",
            authDomain: "ziziteurs.firebaseapp.com",
            projectId: "ziziteurs",
            storageBucket: "ziziteurs.appspot.com",
            messagingSenderId: "275711303080",
            appId: "1:275711303080:web:a3cd7147aa407b4c90919d",
            measurementId: "G-M723CGTE16"
        })
    }
};

export function addSauveteur(firstName, lastName, description) {
    initFirebase();
    let db = getFirestore();
    try {
        let id = getDateTime() + "_" + firstName + "_" + lastName;
        setDoc(doc(db, "sauveteurs", id), {
            firstName: firstName,
            lastName: lastName,
            description: description
        })
    } catch(e) {
        console.error("Error adding document: ", e);
    }
    console.log("done")
};

export function addBateau(name, description) {
    initFirebase();
    let db = getFirestore();
    try {
        let id = getDateTime() + "_" + name;
        setDoc(doc(db, "bateaux", id), {
            name: name,
            description: description
        })
    } catch(e) {
        console.error("Error adding document: ", e);
    }
    console.log("done")
};