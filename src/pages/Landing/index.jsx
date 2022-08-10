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
        <div className={styles.mainDiv}>
          <h4> prototype text: best selling app of 2022 </h4>

          <div>TESTING LAYOUT </div>
          <Button type="button" value="test: about" />
        </div>
      </div>
    </>
  );
};

export default Landing;
