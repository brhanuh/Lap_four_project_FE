import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { subclip } from 'three/src/animation/AnimationUtils';
import { Button, ThreeDBrain } from '../../components';
import home from './home.module.css';
import AppContext from '../../HelperContext/Context';


const Home = () => {
  const navigate = useNavigate();

  const {class1} = useContext(AppContext);

  return (
    <>
      <div className={home.container}>
        {/* possibly typewritten h1 */}
        <h1 className={home.landing1} role="h1">
          Your new mental health journey
        </h1>

        <div className={class1}>
          <div className={home.brainDiv}>
            <ThreeDBrain />
            <div>
              <div className={home.yolo}>
              <Button className={home.reg}
                  funct={() => {
                    navigate('/register');
                  }}
                  type="button"
                  value="I'm feeling.."
                />
                <Button className={home.aboutt}
                  funct={() => {
                    navigate('/timeline');
                  }}
                  type="button"
                  value="My Timeline"
                />
                {console.log(class1)}
              </div>
            </div>

            <div className={home.mainDiv}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;



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





{/* <Button className={styles.reg}
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
              </div> */}