import firebase from "firebase/compat";
import { getDateTime } from './utils';
import { doc, getFirestore, setDoc, deleteDoc, updateDoc } from "firebase/firestore";

export function initFirebase() {
    if (!firebase._isInitialized) {
        firebase.initializeApp({
            apiKey: "AIzaSyCbtfmxzOlcmhZPsYHkC6eFknQD7QSAA9U",
            authDomain: "ziziteurs-b6b0b.firebaseapp.com",
            projectId: "ziziteurs-b6b0b",
            storageBucket: "ziziteurs-b6b0b.appspot.com",
            messagingSenderId: "105856732388",
            appId: "1:105856732388:web:e2454e48bae45555e9f0f1",
            measurementId: "G-VE2K7BRB1C"
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
    const update = await updateDoc(docRef, {
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


export function delBateau(id) {
    initFirebase();
    let db = getFirestore();
    try {
        deleteDoc(doc(db, 'bateaux', id));
    } catch (e) {
        console.error("Error deleting document: ", e);
    }
};


export async function updateBateau(id, description, name) {
    initFirebase();
    let db = getFirestore();
    const docRef = doc(db, 'bateaux', id);

    // Update the timestamp field with the value from the server
    const update = await updateDoc(docRef, {
        description: description,
        name: name
    });
}

export function addSauvetage(sauveteurs, bateaux, victimes, description) {
    initFirebase();
    let db = getFirestore();
    try {
        let id = getDateTime();
        setDoc(doc(db, "sauvetages", id), {
            sauveteurs: sauveteurs,
            bateaux: bateaux,
            victimes: victimes,
            description: description
        })
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};