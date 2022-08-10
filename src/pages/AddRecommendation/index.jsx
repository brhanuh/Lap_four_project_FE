import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./addRecommendation.module.css";
const AddRecommendation = () => {
  let navigate = useNavigate();
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  function handleExit(e) {
    e.preventDefault();
    navigate(-1);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("posting recomendation");
    const type = e.target.type.value;
    const source = e.target.source.value;
    const comment = e.target.comment.value;
    const data = {
      type: type,
      source: source,
      text: comment,
    };
    const response = axios.post(
      "https://fp-mental-health.herokuapp.com/recommendations/post",
      data,
      config
    );
    console.log(response);
  }
  return (
    <>
      <div className="mainContainer">
        <h1>Recommend Something</h1>
        <div className="addContainer">
          <form onSubmit={handleSubmit}>
            <label for="type">Type e.g. music, book</label>
            <input type="text" id="type" name="type"></input>
            <label for="source">Source e.g. url, title</label>
            <input type="text" id="source" name="source"></input>
            <label for="comment">Details about recommendation</label>
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
