import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChartIcon from '../../components/ChartIcon';
import './styles.css';
import { Button, ThreeDBrain } from '../../components';
import styles from '../Landing/styles.module.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        {/* possibly typewritten h1 */}
        <h1 className={styles.landing1} role="h1">
          Your mental health buddy
        </h1>

        <div className={styles.sun}>
          <div className={styles.brainDiv}>
            <ThreeDBrain />
            <div>
              <div className={styles.yolo}>
                <Button
                  className={styles.reg}
                  funct={() => {
                    navigate('/check-in');
                  }}
                  type="button"
                  value="I'm feeling..."
                />
                <Button
                  className={styles.aboutt}
                  funct={() => {
                    navigate('/timeline');
                  }}
                  type="button"
                  value="My timeline"
                />
              </div>
            </div>

            <div className={styles.mainDiv}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

{
  /* <video className='animationzza' loop autoPlay muted controls={false}>
<source src={require('./Feed2.mp4')} type="video/mp4" />
 </video>
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
</div>  */
}
