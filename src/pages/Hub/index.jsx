import React from "react";
import { NavLink } from "react-router-dom";
import Quotes from "../../components/Quotes";
import "./styles.css";

const Hub = () =>{
 
    return ( <>
    <div className='container'>
    <h1 role="h1"></h1>
         <h1 className='text2'> </h1>
        <NavLink to="/recommendations" className="navlinks">Reccomendations</NavLink>
        <Quotes/>
        <NavLink to="/statistics" className="navlinks">Statistics</NavLink>
    </div>
    </>
  );
};

export default Hub;
