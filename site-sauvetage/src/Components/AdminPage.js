import React from 'react';
import AjoutDataForm from './AJoutSauvetageForm';

const AdminPage = () => {

    const fieldsSauveteur = {
		firstName: { type: "text", name: "firstName", text: "prénom", placeholder: 'prénom', required: true },
        lastName: { type: "text", name: "lastName", text: "nom", placeholder: 'nom', required: true },
        description: { type: "textarea", name: "description", text: "description", placeholder: 'description', required: true },
	};

    const fieldsBateau = {
        lastName: { type: "text", name: "lastName", text: "nom", placeholder: 'nom', required: true },
        description: { type: "textarea", name: "description", text: "description", placeholder: 'description', required: true },
	};

    const ajoutSauveteurForm = [
        fieldsSauveteur.firstName,
        fieldsSauveteur.lastName,
        fieldsSauveteur.description
    ];

    const ajoutBateauForm = [
        fieldsBateau.lastName,
        fieldsBateau.description
    ];

    return (
        <div>
            <AjoutDataForm 
            action="sauveteur"
            formTitle="Ajouter un sauveteur"
            buttonText="Ajouter"
            formStructure={ajoutSauveteurForm}
            />
            <AjoutDataForm 
            action="bateau"
            formTitle="Ajouter un bateau"
            buttonText="Ajouter"
            formStructure={ajoutBateauForm}
            />
        </div>
    )
}

export default AdminPage;
