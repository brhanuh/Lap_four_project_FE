import React from 'react';
import { subclip } from 'three/src/animation/AnimationUtils';
import { Button, ThreeDBrain } from '../../components';
import styles from './styles.module.css';

const Landing = () => {
  return (
    <>
    
      <div className={styles.container}>
        {/* possibly typewritten h1 */}
        <h1 className={styles.landing1} role="h1">Your new mental health journey</h1>

       {/*  <div className={styles.brainDiv}>
          <ThreeDBrain />
        </div> */}
        <div className={styles.sun}>
          <div className={styles.img}>
        <img className={styles.brainz} src={require('./mainPageBrain-unscreen.gif')} alt="loading..." />
        </div>
        <div className={styles.mainDiv}>
          {/* <Button type="button" value="test: about" /> */}
          <h4>An app to promote healthy lifestyle choices</h4>
          <button className={styles.sub} type="submit">Start my journey</button>
        </div>
      </div>
      </div>
  </>
  );
};

export default Landing;
