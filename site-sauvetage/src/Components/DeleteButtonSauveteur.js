import React from 'react'
import './stylesComponents/Header.css';
import { delSauveteur } from '../database/firestore.js';

function DeleteButtonSauveteur() {
    return(<button onClick={() =>delSauveteur("TestJeremy2")}>
        Test suppression
    </button>)    
}

export default DeleteButtonSauveteur