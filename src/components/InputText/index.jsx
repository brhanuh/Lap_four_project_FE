import React from 'react';

const InputText = ({ type, name, funct, id, label, placeholder }) => {
  return (
    <div>
      <label htmlFor={id}>{}</label>
      <input
        onChange={funct}
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        required
        // style={styles}
      />
    </div>
  );
};

export default InputText;
