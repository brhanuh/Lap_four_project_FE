import React from "react";
import { useNavigate } from "react-router-dom";

import { Recommend } from "../../components";
import "./recommendations.css";

const Recommendations = () => {
  let navigate = useNavigate();

  function handleRecommend(e) {
    e.preventDefault();
    navigate("/recommend");
    console.log("hello world");
  }
  return (
    <>
      <div className="container">
        <h1 className="Rec" role="h1">Recommendations</h1>
      </div>
      <Recommend />
      <Recommend />
      <button className="recbtn" onClick={handleRecommend}>Recommend</button>
 
    </>
  );
};

export default Recommendations;
