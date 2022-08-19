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
          defaultValue="1"
          min="1"
          max="5"
        />
      </div>
    </div>
  );
};

export default RangeInput;
