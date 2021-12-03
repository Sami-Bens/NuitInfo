import React, { useState } from 'react';
import './stylesComponents/LoginForm.css';
import { updateSauveteur } from '../database/firestore.js';

export default function UpdateForm() {
    const [prenom, setPrenom] = useState('');
    const [nom, setNom] = useState('');
    const [info, setInfo] = useState('');
    return (
        <div className='LoginForm'>
            <form className='Login'>
                <h2>Mise à jour </h2>
                <div className='form-grp'>
                    <label>Prénom : </label>
                    <input type='text' name='prenomUpd' onChange={event => setPrenom(event.target.value)}/>
                </div>
                <div className='form-grp'>
                    <label>Nom : </label>
                    <input type='text' name='nomUpd' onChange={event => setNom(event.target.value)}/>
                </div>
                <div className='form-grp'>
                    <label>Info : </label>
                    <input type='text' name='infoUpd' onChange={event => setInfo(event.target.value)}/>
                </div>
                <button type='submit' onClick={() =>updateSauveteur("id", prenom , nom, info)}>Mettre à jour</button>
            </form>
        </div>
    );
}