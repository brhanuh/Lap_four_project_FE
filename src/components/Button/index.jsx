import React from 'react';

const Button = ({ type, name, id }) => {
  return (
    <div>
      <button type={type} id={id}>
        {name}
      </button>
    </div>
  );
};

export default Button;
