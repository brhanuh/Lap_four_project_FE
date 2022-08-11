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
        </div> */}
        <div className={styles.sun}>
        {/* <div className={styles.mainDiv}> */}
          {/* <Button type="button" value="test: about" /> */}
       {/*    <h4>An app to promote healthy lifestyle choices</h4>
          <button className={styles.sub} type="submit">Start my journey</button>
        </div> */}
        {/* <div> */}
          {/* i figured out how to change color <br></br>of brain so lets discuss
          that too{' '} */}
          <ThreeDBrain />
        <div className={styles.mainDiv}>
      {/*     <h4> prototype text or something ..... </h4>
          <h4> suggestion: </h4>
          <h4>
            i also think bottom navbar should be empty on this page <br />
            so the only route is to click for instructions/about app/about us
            ... then register
          </h4>
 */}
          <Button type="button" value="to insctructions/ about app " />
        </div>
      </div>
      </div>
  </>
  );
};

export default Landing;
