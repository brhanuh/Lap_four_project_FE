import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { subclip } from 'three/src/animation/AnimationUtils';
import { Button, ThreeDBrain } from '../../components';
import styles from './styles.module.css';
import AppContext from '../../HelperContext/Context';
import './landing.css'

const Landing = () => {
  const navigate = useNavigate();

  const {class1} = useContext(AppContext);

  return (
    <>
      <div className={styles.container}>
        {/* possibly typewritten h1 */}
        <h1 className={styles.landing1} role="h1">
          Your new mental health journey
        </h1>

        <div className={class1}>
          <div className={styles.brainDiv}>
            <ThreeDBrain />
            <div>
              <div className={styles.yolo}>
              <Button className={styles.reg}
                  funct={() => {
                    navigate('/register');
                  }}
                  type="button"
                  value="Start your journey now"
                />
                <Button className={styles.aboutt}
                  funct={() => {
                    navigate('/about');
                  }}
                  type="button"
                  value="What we do"
                />
                {console.log(class1)}
              </div>
            </div>

            <div className={styles.mainDiv}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
