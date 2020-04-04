import React, { useState } from 'react'

const Select = ({ values, callback, disabled = false, readonly = false, selected }) => {
    return (
        <select
            disabled={disabled}
            readOnly={readonly}
            onChange={({ target: { value } }) => callback(value)}
        >
            {values.map(([value, text]) => <option selected={selected === value} value={value}>{text}</option>)}
        </select>
    );
}

export default Select

// let choices = [
//     ['grapefruit', 'Grapefruit'],
//     ['lime', 'Lime'],
//     ['coconut', 'Coconut'],
//     ['mango', 'Mango']
// ];

/* <Select values={choices} selected='lime' callback={(val) => console.log(val)}/> */