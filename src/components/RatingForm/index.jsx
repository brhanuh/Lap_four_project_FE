import React, { useState } from 'react';
import styles from './range.module.css';
const RatingForm = ({ label, funct, value }) => {
  const [] = useState(0);
  return (
    <div className="rating-q-container">
      <div className="rating-q">
        <h2>{label}: </h2>
        {/* <span>{value}</span> */}
        <input
          className={styles.range}
          onChange={funct}
          type="range"
          defaultValue="0"
          min="0"
          max="5"
          oninput="rangeValue.innerText = this.value"
        />
      </div>
    </div>
  );
};

export default RatingForm;
