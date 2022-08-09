import React from "react";
import { useNavigate } from "react-router-dom";

const Entry = ({ year, text, cssClass, index }) => {
  let navigate = useNavigate();
  console.log(cssClass);
  console.log(index);
  function handleView(e) {
    e.preventDefault();
    console.log("hello world");
    console.log(index);
    navigate("/timeline/entry", { state: { index: index } });
    //use navigate to view more about the entry, use timeline
  }
  return (
    <>
      <div className={cssClass}>
        <div className="content">
          <h2>{year}</h2>
          <p role="log">{text}</p>
          <p>{index}</p>
          <button onClick={handleView}>View</button>
        </div>
      </div>
    </>
  );
};

export default Entry;
