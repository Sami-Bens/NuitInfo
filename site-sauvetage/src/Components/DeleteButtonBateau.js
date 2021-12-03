import React from 'react'
import './stylesComponents/Header.css';
import { delBateau } from '../database/firestore.js';

function DeleteButtonBateau() {

    return(<button onClick={() =>delBateau("RMS TITANIC")}>
        Test suppression bateau
    </button>)
    
    
}

export default DeleteButtonBateau