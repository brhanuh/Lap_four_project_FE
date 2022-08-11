import React from 'react';
import { subclip } from 'three/src/animation/AnimationUtils';
import { Button, ThreeDBrain } from '../../components';
import styles from './styles.module.css';

const Landing = () => {
  return (
    <>
      <div className={styles.container}>
        {/* possibly typewritten h1 */}
        <h1 className={styles.landing1} role="h1">
          Your new mental health journey
        </h1>

        {/*  <div className={styles.brainDiv}>
        </div> */}
        <div className={styles.sun}>
          <div className={styles.brainDiv}>
            <ThreeDBrain />

            <div className={styles.mainDiv}>
              <Button type="button" value="to insctructions/ about app " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
