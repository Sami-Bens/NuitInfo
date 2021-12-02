import React from "react";

const Input = ({
    text,
    type,
    placeholder = text,
    handleChange,
    name,
    id = name,
    required = false
}) => {
    return (
        <input
            className="input"
            required={required}
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={handleChange}
        />
    );
};

//<label htmlFor={id}>{text}</label>

export default Input;