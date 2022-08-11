import React from 'react';
import {useNavigate} from 'react-router-dom';
import { subclip } from 'three/src/animation/AnimationUtils';
import { Button, ThreeDBrain } from '../../components';
import styles from './styles.module.css';

const Landing = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        {/* possibly typewritten h1 */}
        <h1 className={styles.landing1} role="h1">
          Your new mental health journey
        </h1>

        <div className={styles.sun}>
          <div className={styles.brainDiv}>
            <ThreeDBrain />

            <div className={styles.mainDiv}>
              
            <div className='capture'
        id="capture-day-btn"
        onClick={() => {
          navigate('/check-in');
        }}
      >
        Capture your whole day ➡
      </div>

      <div className='timeline1'
        id="timeline-btn"
        onClick={() => {
          navigate('/timeline');
        }}
      >
        Timeline ➡
      </div> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
