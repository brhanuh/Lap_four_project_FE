import React, { useState } from 'react';
import './styles.css';
import screenshot1 from '../../dummy.png';
import screenshot2 from '../../dummy2.png';
import { useNavigate } from 'react-router-dom';
import { Button, SwiperJs } from '../../components';
import AboutStep1 from '../AboutStep1/AboutStep1';
import AboutCreators from '../AboutCreators/AboutCreators';

const About = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const stepHeadings = [
    'About us.... We are an app that deals with .....',
    'instructions, tutorial etc',
    ' lets get you signed up',
  ];

  const showSteps = () => {
    return step === 0 ? (
      <AboutStep1 />
    ) : step === 1 ? (
      <SwiperJs img1={screenshot1} img2={screenshot2} />
    ) : (
      <AboutCreators />
    );
  };

  return (
    <>
      <div>
        <h3>{stepHeadings[step]}</h3>
      </div>
      <div className="container1">
        {/* <h1 className="phoneline" role="h1"></h1> */}

        <div className="">{showSteps()}</div>
        <div
        //  className={.nextPrevDiv}
        >
          {step > 0 && (
            <Button
              // className={}
              type="button"
              funct={(e) => {
                e.preventDefault();
                setStep((step) => step - 1);
              }}
              value="Previous"
            />
          )}
        </div>
        {step !== stepHeadings.length - 1 ? (
          <Button
            // className={}
            type="button"
            funct={(e) => {
              e.preventDefault();

              setStep((step) => step + 1);
            }}
            value="Next"
          />
        ) : (
          <Button
            funct={(e) => {}}
            //  className={.log}
            value="Sign Up"
            type="button"
          />
        )}
      </div>
    </>
  );
};

export default About;
