import React, { useEffect, useState } from "react";

const Entry = ({ year, text, cssClass, testData }) => {
  console.log(cssClass);
  return (
    <>
      <div className={cssClass}>
        <div className="content">
          <h2>{year}</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default Entry;
