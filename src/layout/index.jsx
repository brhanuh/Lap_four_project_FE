import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { NavLink, Outlet } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './styles.css'
import '../index.css'

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [isActive, setIsActive] = useState(false);


  const showSidebar = () => setSidebar(!sidebar);

  const handleClick = () => {
    setIsActive(current => !current);

  }

  return (
    <>
        <div className='navbar'>
          <NavLink to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavLink>
          <div>
          <button>Calm</button>
          <button>Happy</button>
          <button>Mellow</button>
          <button>Down</button>
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' id='link' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <NavLink to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </NavLink>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <NavLink to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <Outlet/>
    </>
  );
}

export default Navbar;
