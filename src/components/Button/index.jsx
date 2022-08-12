import React from "react";

const Button = ({ type, value, id, funct, className }) => {
  return (
    <div>
      <button
        role="button"
        className={className}
        onClick={funct}
        type={type}
        id={id}
      >
        {value}
      </button>
    </div>
  );
};

export default Button;
