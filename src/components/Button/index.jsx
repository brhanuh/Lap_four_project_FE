import React from 'react';

const Button = ({ type, value, id }) => {
  return (
    <div>
      <button type={type} id={id}>
        {value}
      </button>
    </div>
  );
};

export default Button;
