import React from 'react';
import './recommend.css';
const Recommend = ({ style, title, date, comment, user }) => {
  return (
    <>
      <div className="recommendContainer">
        <div className="recommendContent">
          <h2>{title}</h2>
          <h5>{date}</h5>
          <p>{comment}</p>
          <h5>{user}</h5>
        </div>
      </div>
    </>
  );
};

export default Recommend;
