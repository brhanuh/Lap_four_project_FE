import React from 'react';

const Button = ({ type, value, id, funct }) => {
  return (
    <div>
      <button onClick={funct} type={type} id={id}>
        {value}
      </button>
    </div>
  );
};

export default Button;
