import React from 'react';

const InputText = ({ type, name, funct, id, className, placeholder }) => {
  return (
    <div>
      <label htmlFor={id}>{}</label>
      <input
        onChange={funct}
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        className={className}
        required
        // style={styles}
      />
    </div>
  );
};

export default InputText;
