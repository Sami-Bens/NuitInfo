import React from 'react';
import './stylesComponents/LoginForm.css';
import UpdateButtonSauveteur from './UpdateButtonSauveteur';


export default function UpdateForm() {
    return (
        <div className='LoginForm'>
            <form className='Login'>
                <h2>Mise à jour </h2>
                <div className='form-grp'>
                    <label>Prénom : </label>
                    <input type='text' name='prenomUpd'/>
                </div>
                <div className='form-grp'>
                    <label>Nom : </label>
                    <input type='text' name='nomUpd'/>
                </div>
                <div className='form-grp'>
                    <label>Info : </label>
                    <input type='text' name='infoUpd'/>
                </div>
                <UpdateButtonSauveteur/>
            </form>
        </div>
    );
}