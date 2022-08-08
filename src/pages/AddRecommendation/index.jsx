import React from "react";
const AddRecommendation = () => {
  return (
    <>
      <div className="addContainer">
        <form>
          <label for="type">Type e.g. music, book</label>
          <input type="text" id="type" name="type"></input>
          <label for="source">Source e.g. url, title</label>
          <input type="text" id="source" name="source"></input>
          <textarea id="comment"></textarea>
          <input type="submit"></input>
        </form>
      </div>
    </>
  );
};

export default AddRecommendation;
