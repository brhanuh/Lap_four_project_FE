import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Quotes from '../../components/Quotes';
import './styles.css';
import { ChartIcon } from '../../components';

const Hub = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 role="h1"></h1>

      <div className="card1" onClick={() => navigate('/recommendations')}>
        <h1 className="text2"> </h1>
        <NavLink to="/recomendations" className="navlinks">
          Reccomendations
        </NavLink>
        <div className="phone">
          <img
            className="phoneAni"
            src={require('./Ani2-unscreen.gif')}
            alt="loading..."
          />
        </div>
      </div>
      <div className="card1" onClick={() => navigate('/statistics')}>
        <NavLink to="/statistics" className="navlinks">
          Statistics
        </NavLink>
        <ChartIcon />
      </div>
    </>
  );
};

export default Hub;
