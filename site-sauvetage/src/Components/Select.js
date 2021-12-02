import React from 'react';
import Option from './Option';
import './stylesComponents/select.css';


const Select = ({ 
    name,
    selectData,
    handleChange
}) => {

    return (
        <select
        className="select"
        name={name}
        value=""
        onChange={handleChange}
        >
            {selectData.map(f => (
                <Option 
                    key={f.text}
                    value={f.value}
                    text={f.text}
                />
            ))};
        </select>
    )
}

export default Select;
