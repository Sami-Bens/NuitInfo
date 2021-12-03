import { useState } from 'react';
import firebase from "firebase/compat";
import { getDateTime } from './utils';
import { doc, getFirestore, setDoc, deleteDoc, updateDoc, collection, getDocs, query } from "firebase/firestore";

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

    await updateDoc(docRef, {
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

    await updateDoc(docRef, {
        description: description,
        name: name
    });
}

export async function Recherche(id) {
    initFirebase();
    let db = getFirestore();
    let listSauveteur = []

    const sauveteurs = await getDocs(collection(db, "sauveteurs"));
    sauveteurs.docs.map((doc) => {
        if (doc.id === id) {
            listSauveteur.push({ firstName: doc.data().firstName, lastName: doc.data().lastName, info: doc.data().info })
        }

    })
    return listSauveteur;
}

/* ----- Marche pas ------


export async function RechercheID() {
    initFirebase();
    let db = getFirestore();
    let listSauveteur = []

    const snapshot = await firebase.firestore().collection('events').get()
    console.log(snapshot.docs.map(doc => doc.data()));

     return null;
}
*/