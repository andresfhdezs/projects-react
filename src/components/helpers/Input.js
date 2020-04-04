import React from 'react'

const Input = ({ callback, type = 'text', disabled = false, readOnly = false, placeholder = '' }) => {
    return (
        <input
            type={type}
            disabled={disabled}
            readOnly={readOnly}
            placeholder={placeholder}
            onChange={({ target: { value } }) => callback(value)}
        />
    );
}

export default Input
{/* <Input type='text' placeholder='Insert some text here...' callback={(val) => console.log(val)}/> */}