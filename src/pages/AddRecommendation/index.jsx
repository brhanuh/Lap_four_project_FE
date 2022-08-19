import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './addRecommendation.module.css';
const AddRecommendation = () => {
  let navigate = useNavigate();
  const token = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  function handleExit(e) {
    e.preventDefault();
    navigate(-1);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log('posting recomendation');
    const type = e.target.type.value;
    const source = e.target.source.value;
    const comment = e.target.comment.value;
    const data = {
      type: type,
      source: source,
      text: comment,
    };
    const response = axios.post(
      'https://fp-mental-health.herokuapp.com/recommendations/post',
      data,
      config
    );
    console.log(response);
    navigate('/recommendations');
  }
  return (
    <>
      <div className={styles.mainDiv}>
        <h1>Recommend Something</h1>
        <h3 className={styles.h3rec}>What helps you feel better?</h3>
        <div className="addContainer">
          <form onSubmit={handleSubmit}>
            <label for="type">Type e.g. music, book</label>
            <br />
            <input
              type="text"
              id="type"
              name="type"
              className={styles.recSrcInput}
            ></input>
            <br></br>
            <br />
            <label for="source">Source e.g. url, title</label>
            <br />
            <input
              type="text"
              className={styles.recSrcInput}
              id="source"
              name="source"
            ></input>
            <br />
            <br />
            <label for="comment">Details about recommendation</label>
            <textarea id="comment"></textarea>
            <div className={styles.buttonDiv}>
              <input type="submit" className={styles.recsom}></input>
              <button className={styles.button1} id="exit" onClick={handleExit}>
                Exit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddRecommendation;
