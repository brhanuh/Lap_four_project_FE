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
<<<<<<< HEAD
=======
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
>>>>>>> 55a4b7b1e55fc771d4bec45264506273c3370472
    </>
  );
};

export default About;
