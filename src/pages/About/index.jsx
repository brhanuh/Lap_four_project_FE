import React, { useState } from 'react';
import './styles.css';
import screenshot1 from '../../dummy.png';
import screenshot2 from '../../dummy2.png';
import { useNavigate } from 'react-router-dom';
import { Button, SwiperJs } from '../../components';

const About = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const stepHeadings = [
    'About us.... We are an app that deals with .....',
    'instructions, tutorial etc',
    ' lets get you signed up',
  ];

  return (
    <>
      <div>
        <h3 className='aboutpage1'>What do we do?</h3>
        <h4>Brighter Minds is a safe space you can return too in a busy lifestyle: </h4>
        <h4>You can:</h4>
        {/* <img
            className="arrow"
            src={require('./finalArrowgif.gif')}
            alt="loading..."
          /> */}

        <span>Track how you feel using the check in</span><br></br>
        <span>Use the moodboard in the top right to tailor this space to you</span>
        <h4>Most importantly, you are not alone</h4>
        <span>Recommend and see recommendations what can make you feel better </span>
        <span>See statistics of other users and their moods</span>
        <h4>Welcome to Brighter Minds a united journey
        </h4>
      </div>
    </>
  );
};

export default About;
