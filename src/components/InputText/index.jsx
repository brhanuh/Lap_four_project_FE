import React from 'react';

const InputText = ({ type, value, name, funct, id, label, placeholder }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        onChange={funct}
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        required
      />
    </div>
  );
};

export default InputText;
