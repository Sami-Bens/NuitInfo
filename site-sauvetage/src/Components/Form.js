import React from "react";
import './stylesComponents/form.css'
import Input from './Input';
import ButtonForm from "./ButtonForm";
import Select from "./Select";
import TextArea from "./TextArea";

const Form = ({
    formStructure,
    formData,
    setFormData,
    formTitle,
    buttonText,
    onSubmit
}) => {
    const handleChange = event => {
        const formDataCopy = { ...formData };
        formDataCopy[event.target.name] = event.target.value;
        setFormData(formDataCopy);
    };
  	return (
		<form className="form" onSubmit={onSubmit}>
			<h2>{formTitle}</h2>
			{formStructure.map(f => {
                if (f.type === "select") {
                    return <Select 
                        key={f.name}
                        name={f.name}
                        selectData={f.select}
                        handleChange={handleChange}
                    />
                } else if (f.type === "textarea") {
                    return <TextArea
                        key={f.name}
                        type={f.type}
                        name={f.name}
                        id={f.id}
                        text={f.text}
                        handleChange={handleChange}
                        placeholder={f.placeholder}
                        required={f.required} />
                }
			return <Input
				key={f.name}
				type={f.type}
				name={f.name}
				id={f.id}
				text={f.text}
				handleChange={handleChange}
				placeholder={f.placeholder}
				required={f.required}
			/>
            })}
			<ButtonForm buttonType='primary' text={buttonText} />
		</form>
  	);
};

export default Form;
