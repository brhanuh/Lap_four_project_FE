import React, { useContext } from 'react';
import AppContext from '../../HelperContext/Context';

const CheckInQuestions = ({
  className,
  cols,
  rows,
  id,
  name,
  question,
  funct,
  value,
}) => {
  return (
    <div>
      <h1 htmlFor={id} id={name + 1}>
        {name}:
      </h1>
      <p>{question} ?</p>
      <textarea
        className={className}
        onChange={funct}
        name={name}
        id={id}
        cols={cols}
        rows={rows}
        value={value}
      ></textarea>
    </div>
  );
};

export default CheckInQuestions;
