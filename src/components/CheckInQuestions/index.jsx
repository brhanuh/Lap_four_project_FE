import React from 'react';

const CheckInQuestions = ({
  className,
  cols,
  rows,
  id,
  name,
  question,
  funct,
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
      ></textarea>
    </div>
  );
};

export default CheckInQuestions;
