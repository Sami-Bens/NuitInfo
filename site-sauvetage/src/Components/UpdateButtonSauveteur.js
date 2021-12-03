import React from 'react'
import './stylesComponents/Header.css';
import { updateSauveteur } from '../database/firestore.js';

function UpdateButtonSauveteur() {

    return(<button type='submit' onClick={() =>updateSauveteur("TestJeremy2", "caravane", "zizi", "Melvin")}>
        Mettre à jour
    </button>)
    
}

export default UpdateButtonSauveteur