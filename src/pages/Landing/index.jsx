import React from 'react';
import { ThreeDBrain, ThreeDPlant, ThreeDSmiley } from '../../components';
import './styles.css';

const Landing = () => {
  return (
    <>
      <div className="container">
        <h1 role="h1">This is the landing page!</h1>

        <div className="">
          <ThreeDBrain />
        </div>
      </div>
    </>
  );
};

export default Landing;
