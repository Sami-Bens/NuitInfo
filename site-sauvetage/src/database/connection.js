import firebase from "firebase/compat";
import { doc, getFirestore, setDoc, getDocs, collection } from "firebase/firestore/lite";
import { initFirebase } from "./firestore";
import sha512 from 'js-sha512';
import { getDateTime } from "./utils";

export default function register(name, email, password) {
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
    accounts.docs.map((doc) => {
        let a_email = doc.data().email;
        let a_password = doc.data().password;
        return email === a_email && password === a_password ? true : false;
    })
}