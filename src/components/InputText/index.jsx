import React from 'react';

const InputText = ({ type, value, name, id }) => {
  return (
    <div>
      <label htmlFor="">{name}</label>
      <input type={type} placeholder={value} name={name} id={id} required />
    </div>
  );
};

export default InputText;
