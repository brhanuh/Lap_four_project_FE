import React from 'react';

const InputText = ({ type, value, name, id }) => {
  return (
    <div>
      <label htmlFor="">{name}</label>
      <input type={type} value={value} name={name} id={id} />
    </div>
  );
};

export default InputText;
