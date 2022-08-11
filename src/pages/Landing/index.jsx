import React from 'react';
import { Button, ThreeDBrain } from '../../components';
import styles from './styles.module.css';

const Landing = () => {
  return (
    <>
      <div className={styles.container}>
        {/* possibly typewritten h1 */}
        <h1 role="h1">Welcome to Brighter Minds</h1>

        <div className={styles.brainDiv}>
          <ThreeDBrain />
        </div>
        <div>
          i figured out how to change color <br></br>of brain so lets discuss
          that too{' '}
        </div>
        <div className={styles.mainDiv}>
          <h4> prototype text or something ..... </h4>
          <h4> suggestion: </h4>
          <h4>
            i also think bottom navbar should be empty on this page <br />
            so the only route is to click for instructions/about app/about us
            ... then register
          </h4>

          <Button type="button" value="to insctructions/ about app " />
        </div>
      </div>
    </>
  );
};

export default Landing;
