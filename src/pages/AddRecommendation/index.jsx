import React from "react";
import { useNavigate } from "react-router-dom";
import "./addRecommendation.module.css";
const AddRecommendation = () => {
  let navigate = useNavigate();

  function handleExit(e) {
    e.preventDefault();
    navigate(-1);
  }
  return (
    <>
      <div className="card1">
        <h1>Recommend Something</h1>
        <h2>What helps you feel better?</h2>
        <div className="addContainer">
          <form>
            <label for="type">Type e.g. music, book</label>
            <input type="text" id="type" name="type"></input>
            <label for="source">Source e.g. url, title</label>
            <input type="text" id="source" name="source"></input>
            <textarea id="comment"></textarea>
            <input type="submit"></input>
            <button id="exit" onClick={handleExit}>
              Exit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddRecommendation;
