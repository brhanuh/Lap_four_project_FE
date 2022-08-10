import React from "react";
import { Recommend } from "../../components";
import "./recommendations.css";

const Recommendations = () => {
  function handleRecommend(e) {
    e.preventDefault();
  }
  return (
    <>
      <div className="container">
        <h1 className="Rec" role="h1">Recommendations</h1>
      </div>
      <Recommend />
      <Recommend />
      <button className="recbtn" onClick={handleRecommend}>Recommend</button>
    <footer className="addRec">
      <input className="Recinput" type="text" placeholder="Add a Recommendation"></input>
    </footer>
    </>
  );
};

export default Recommendations;
