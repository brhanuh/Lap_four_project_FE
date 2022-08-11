import React, { useContext, useState } from 'react';
import styles from './range.module.css';

const RangeInput = ({ label, funct }) => {
  return (
    <div className="rating-q-container">
      <div className="rating-q">
        <h4>{label}</h4>
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

export default RangeInput;
