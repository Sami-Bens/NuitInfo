import React from 'react'
import './stylesComponents/Header.css';
import { delSauveteur } from '../database/firestore.js';

function DeleteButton() {

    return(<button onClick={() =>delSauveteur("TestJeremy2")}>
        Test suppression
    </button>)
    
    
}

export default DeleteButton