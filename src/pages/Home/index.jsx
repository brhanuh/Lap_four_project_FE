import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChartIcon from '../../components/ChartIcon';
import styles from './home.module.css';
import './styles.css'


const Home = () => {

  const navigate = useNavigate();



  return (
    <>
      <video className='animationzza' loop autoPlay muted controls={false}>
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
      </div> 
    </>
  );
};


export default Home;


    