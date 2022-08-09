import React from 'react'
import './styles.css'
import {NavLink} from 'react-router-dom'

const HubButton = () => {
  return (
    <>
      <div className="hub-btn">
        <NavLink to="/hub" className="text1">Hub</NavLink>
        <img className="stats-Icon"></img>
      </div>
    </>
  );
};

export default HubButton;