import React from 'react'
import './stylesComponents/Header.css';
import { updateBateau } from '../database/firestore.js';

function UpdateButtonBateau() {

    return(<button onClick={() =>updateBateau("RMS TITANIC", "bruh", "flip")}>
        Test modification
    </button>)
    
}

export default UpdateButtonBateau