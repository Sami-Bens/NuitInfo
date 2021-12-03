import firebase from "firebase/compat";
import { getDateTime } from './utils';
import { doc, getFirestore, setDoc, deleteDoc, updateDoc } from "firebase/firestore";

export function initFirebase() {
    if (!firebase._isInitialized) {
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

export function addSauveteur(firstName, lastName, info) {
    initFirebase();
    let db = getFirestore();
    try {
        let id = getDateTime() + "_" + firstName + "_" + lastName;
        setDoc(doc(db, "sauveteurs", id), {
            firstName: firstName,
            lastName: lastName,
            info: info
        })
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

export function delSauveteur(id) {
    initFirebase();
    let db = getFirestore();
    try {
        deleteDoc(doc(db, 'sauveteurs', id));
    } catch (e) {
        console.error("Error deleting document: ", e);
    }
};


export async function updateSauveteur(id, firstName, lastName, info) {
    initFirebase();
    let db = getFirestore();
    const docRef = doc(db, 'sauveteurs', id);

    // Update the timestamp field with the value from the server
    const updateSauveteur = await updateDoc(docRef, {
        firstName: firstName,
        lastName: lastName,
        info: info
    });
}



export function addBateau(name, description) {
    initFirebase();
    let db = getFirestore();
    try {
        let id = getDateTime() + "_" + name;
        setDoc(doc(db, "bateaux", id), {
            name: name,
            description: description
        })
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    console.log("done")
};  