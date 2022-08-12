<<<<<<< HEAD
import React from "react";
import { useNavigate } from "react-router-dom";
import ChartIcon from "../../components/ChartIcon";
import styles from "./home.module.css";
import "./styles.css";
=======
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChartIcon from '../../components/ChartIcon';
import './styles.css'
import { Button, ThreeDBrain } from '../../components';
import styles from '../Landing/styles.module.css';

>>>>>>> 92d407d945755bc0ac236f18f9283e5cf700086e

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
<<<<<<< HEAD
      <video className="animationzza" loop autoPlay muted controls={false}>
        <source src={require("./Feed2.mp4")} type="video/mp4" />
      </video>
      <div
        role="day"
        className="capture"
        id="capture-day-btn"
        onClick={() => {
          navigate("/check-in");
        }}
      >
        Capture your whole day ➡
      </div>

      <div
        className="timeline1"
        id="timeline-btn"
        onClick={() => {
          navigate("/timeline");
        }}
      >
        Timeline ➡
=======
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
              <Button className={styles.reg}
                  funct={() => {
                    navigate('/check-in');
                  }}
                  type="button"
                  value="I'm feeling..."
                />
                <Button className={styles.aboutt}
                  funct={() => {
                    navigate('/about');
                  }}
                  type="button"
                  value="My timeline"
                />
              </div>
            </div>

            <div className={styles.mainDiv}></div>
          </div>
        </div>
>>>>>>> 92d407d945755bc0ac236f18f9283e5cf700086e
      </div>
    </>
  );
};

export default Home;
<<<<<<< HEAD
=======



{/* <video className='animationzza' loop autoPlay muted controls={false}>
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
</div>  */}
>>>>>>> 92d407d945755bc0ac236f18f9283e5cf700086e
