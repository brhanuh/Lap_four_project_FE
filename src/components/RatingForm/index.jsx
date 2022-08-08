import React from 'react';

const RatingForm = ({ label, funct }) => {
  return (
    <div className="rating-q-container">
      <div className="rating-q">
        <h2>{label}: </h2>
        <input
          type="radio"
          value="1"
          name={label}
          onChange={funct}
          id="radio-input"
        />
        <label htmlFor="">1</label>
        <input
          type="radio"
          value="2"
          onChange={funct}
          name={label}
          id="radio-input"
        />
        <label htmlFor="">2</label>
        <input
          type="radio"
          value="3"
          onChange={funct}
          name={label}
          id="radio-input"
        />
        <label htmlFor="">3</label>
        <input
          type="radio"
          value="4"
          onChange={funct}
          name={label}
          id="radio-input"
        />
        <label htmlFor="">4</label>
        <input
          type="radio"
          value="5"
          onChange={funct}
          name={label}
          id={label}
        />
        <label htmlFor="">5</label>
      </div>
    </div>
  );
};

export default RatingForm;
