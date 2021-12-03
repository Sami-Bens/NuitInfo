import React, { useState } from "react";
import Form from "./Form";
import { addSauveteur, addBateau } from "../database/firestore";
import { signInWithEmailAndPassword } from "../database/connection";

const AjoutDataForm = props => {
  const [formData, setFormData] = useState({});

  const action = () => {
    switch (props.action) {
      case "sauveteur":
        return sauveteur();
      case "bateau":
        return bateau();
      case "login":
        return login()
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

  const afterLogin = () => {
    console.log("ta mere")
  }

  const login = () => {
    signInWithEmailAndPassword(formData.email, formData.password, afterLogin);
  }

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