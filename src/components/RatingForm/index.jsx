import React from 'react';

const RatingForm = ({ label, funct }) => {
  return (
    <div className="rating-q-container">
      <div className="rating-q">
        <h2>{label}: </h2>

        <input
          onChange={funct}
          type="range"
          defaultValue="1"
          min="0"
          max="5"
          oninput="rangeValue.innerText = this.value"
        />
      </div>
    </div>
  );
};

export default RatingForm;
