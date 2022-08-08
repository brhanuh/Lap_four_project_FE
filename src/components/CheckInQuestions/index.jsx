import React from 'react';

const CheckInQuestions = ({ cols, rows, id, name, question, funct }) => {
  return (
    <>
      <h1 htmlFor={id} id={name + 1}>
        {name}:
      </h1>
      <p>{question} ?</p>
      <textarea
        onChange={funct}
        name={name}
        id={id}
        cols={cols}
        rows={rows}
      ></textarea>
    </>
  );
};

export default CheckInQuestions;
