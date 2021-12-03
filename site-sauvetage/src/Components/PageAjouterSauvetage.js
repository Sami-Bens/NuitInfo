import React from 'react';
import AjoutDataForm from './AJoutSauvetageForm';
import './stylesComponents/sauvetageForm.css'

const PageAjouterSauvetage = () => {

    const fieldsSauvetage = {
		names: { type: "textarea", name: "names", text: "nom des sauveteurs", placeholder: 'nom des sauveteurs', required: false },
        boatNames: { type: "textarea", name: "boatNames", text: "nom des bateux", placeholder: 'nom', required: true },
        victimNames: { type: "textarea", name: "victimNames", text: "nom des victimes", placeholder: 'nom des victimes', required: false },
        description: { type: "textarea", name: "description", text: "description", placeholder: 'description', required: true },
	};

    const ajoutSauvetageForm = [
        fieldsSauvetage.names,
        fieldsSauvetage.boatNames,
        fieldsSauvetage.victimNames,
        fieldsSauvetage.description
    ];

    return (
        <div className="container-sauvetage-form">
           
            <AjoutDataForm 
            action="sauvetage"
            formTitle="Ajouter un sauvetage"
            buttonText="Ajouter"
            formStructure={ajoutSauvetageForm}
            />
        </div>
    )
}

export default PageAjouterSauvetage;
