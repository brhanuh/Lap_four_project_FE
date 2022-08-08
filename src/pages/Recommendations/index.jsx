import React from "react";
import { Recommend } from "../../components";
import "./styles.css";

const Recommendations = () => {
  function handleRecommend(e) {
    e.preventDefault();
  }
  return (
    <>
      <div className="container">
        <h1 role="h1">This is the Recommendations page</h1>
      </div>
      <button onClick={handleRecommend}>Recommend</button>
      <Recommend />
      <Recommend />
    </>
  );
};

export default Recommendations;
