import React from 'react'

const TextArea = ({
    text,
    type,
    placeholder = text,
    handleChange,
    name,
    id = name,
    required = false
}) => {
    return (
        <textarea
            className="textarea"
            required={required}
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={handleChange}/>
    )
}

export default TextArea
