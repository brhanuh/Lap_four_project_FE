import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>APP NAME & Logo</div>
      <h1 role="h1">This is the home page</h1>

      <h1>My Check In: </h1>

      <div
        id="capture-day-btn"
        onClick={() => {
          navigate('/check-in');
        }}
      >
        Capture your day ➡
      </div>

      <div
        id="timeline-btn"
        onClick={() => {
          navigate('/timeline');
        }}
      >
        Timeline ➡
      </div>

      <div>
        <div
          id="hub-btn"
          onClick={() => {
            navigate('/hub');
          }}
        >
          HUB
        </div>
        <div
          id="stats-btn"
          onClick={() => {
            navigate('/statistics');
          }}
        >
          Stats
        </div>
      </div>
    </>
  );
};

export default Home;
