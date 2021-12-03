import React from 'react'
import './stylesComponents/Header.css';
import { updateSauveteur } from '../database/firestore.js';

function UpdateButton() {

    return(<button onClick={() =>updateSauveteur("TestJeremy2", "caravane", "zizi", "Melvin")}>
        Test modification
    </button>)
    
}

export default UpdateButton