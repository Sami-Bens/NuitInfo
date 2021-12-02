import firebase from "firebase/compat";
import getDateTime from './utils';

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

export function addSauveteur(firstName, lastName, info) {
    initFirebase();
    let db = getFirestore();
    try {
        setDoc(doc(db, "sauveteur", id), {
            id: getDateTime() + "_" + firstName + "_" + lastName,
            firstName: firstName,
            lastName: lastName,
            info: info
        })
    } catch(e) {
        console.error("Error adding document: ", e);
    }  
};