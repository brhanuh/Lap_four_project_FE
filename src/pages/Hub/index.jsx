import React from 'react'
import { NavLink } from 'react-router-dom';
import './styles.css'

const Hub = () =>{
    return <>
    <div className='container'>
         <h1 role="h1">This is the hub page</h1>
         <span> Where do you want to go?</span>
        <NavLink to="/recommendations">Reccomendations</NavLink>
        <NavLink to="/statistics">Statistics</NavLink>
    </div>
    </>
}

export default Hub;