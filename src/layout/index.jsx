import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { NavLink, Outlet } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./layout.css";
import "../index.css";
import MoodMode from "../components/MoodMode";
import MoodBoard from "../components/MoodBoard";
import { Login } from "../pages";
import HubButton from "../components/HubButton";

function Layout() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  // const token = localStorage.getItem("token");
  // if (!token) {
  //   return <Login />;
  // }
  return (
    <>
        <div className='navbar'>
          <NavLink to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavLink>
          <div className='container'>
          <h1 className="main-name">Brighter Minds</h1>
          </div>
          <MoodBoard/>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" id="link" onClick={showSidebar}>
          <li className="navbar-toggle">
            <NavLink to="#" className="menu-bars">
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
      <Outlet />
      <footer>
      <HubButton/>
      </footer>
    </>
  );
}

export default Layout;
