import React, { useContext } from 'react';
// import AppContext from '../../HelperContext/Context';

const CheckInQuestions = ({
  className,
  cols,
  rows,
  id,
  name,
  question,
  funct,
}) => {
  // const [textAreaValue, setTextValue] = useContext(AppContext);
  return (
    <div>
      <h1 htmlFor={id} id={name + 1}>
        {name}:
      </h1>
      <p>{question} ?</p>
      <textarea
        placeholder="type here ..."
        className={className}
        onChange={funct}
        name={name}
        id={id}
        cols={cols}
        rows={rows}
        //
      ></textarea>
    </div>
  );
};

export default CheckInQuestions;
