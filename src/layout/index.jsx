import React from 'react'
import {NavLink, Outlet } from 'react-router-dom'

const Layout = () =>{
    return <>
        <header>
            <nav>
                <NavLink to="/">Landing</NavLink>
                <NavLink to="/login">Login</NavLink>
            </nav>
        </header>
        <Outlet />
        <footer></footer>
    </>
}

export default Layout;