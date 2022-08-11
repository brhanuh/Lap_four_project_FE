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
        <h3>{stepHeadings[step]}</h3>
      </div>
    </>
  );
};

export default About;
