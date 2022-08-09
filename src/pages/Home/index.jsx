import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChartIcon from '../../components/ChartIcon';
import styles from './home.module.css';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
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
          className={styles.logo}
        >
          HUB
        </div>
        <div className={styles.chartDiv} id="stats-btn">
          <ChartIcon
            funct={() => {
              navigate('/statistics');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
