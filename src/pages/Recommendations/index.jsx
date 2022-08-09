import React from "react";
import { useNavigate } from "react-router-dom";

import { Recommend } from "../../components";
import "./styles.css";

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
        <h1 role="h1">This is the Recommendations page</h1>
        <Recommend />
        <Recommend />
      </div>
      <button onClick={handleRecommend}>Recommend</button>
    </>
  );
};

export default Recommendations;
