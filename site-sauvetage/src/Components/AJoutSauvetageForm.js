import React, { useState } from "react";
import Form from "./Form";
import { addSauveteur, addBateau } from "../database/firestore";

const AjoutDataForm = props => {
  const [formData, setFormData] = useState({});

  const action = () => {
    switch (props.action) {
      case "sauveteur":
        return sauveteur();
        case "bateau":
          return bateau();
      default:
        console.log("Unexpected action");
    }
  };

  const sauveteur = () => {
    addSauveteur("sauveteurs", formData.firstName, formData.lastName, formData.description);
  };

  const bateau = () => {
    addBateau(formData.lastName, formData.description)
  };

  const onSubmit = e => {
    e.preventDefault();
    action()
  };

  return (
    <Form
      onSubmit={onSubmit}
      formTitle={props.formTitle}
      setFormData={setFormData}
      formStructure={props.formStructure}
      formData={formData}
      buttonText={props.buttonText}
    />
  );
};

export default AjoutDataForm;