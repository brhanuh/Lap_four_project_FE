import React from 'react'
import { NavLink } from 'react-router-dom';
import Quotes from '../../components/Quotes';
import './styles.css'

const Hub = () =>{
 
    return <>
    <div className='container'>
    <h1 role="h1">This is the hub page</h1>
    <Quotes/>
         <h1> Where do you want to go?</h1>
        <NavLink to="/recommendations">Reccomendations</NavLink>
        <NavLink to="/statistics">Statistics</NavLink>
    </div>
    </>
}

export default Hub;