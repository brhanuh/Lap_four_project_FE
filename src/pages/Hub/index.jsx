import React from "react";
import { NavLink } from "react-router-dom";
import Quotes from "../../components/Quotes";
import "./styles.css";
import { ChartIcon } from "../../components";

const Hub = () =>{
 
    return ( <>
    <h1 role="h1"></h1>
      
      <div className="card1">
         <h1 className='text2'> </h1>
        <NavLink to="/recommendations" className="navlinks">Reccomendations</NavLink>
        <div className="phone">
         <img className="phoneAni" src={require('./Ani2-unscreen.gif')} alt="loading..." />
         </div>
         </div>
         <div className="card1">
        <NavLink to="/statistics" className="navlinks">Statistics</NavLink>
        <ChartIcon />
        </div>
    </>
  );
};

export default Hub;
