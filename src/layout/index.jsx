import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { NavLink, Outlet } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./styles.css";
import "../index.css";
import MoodMode from "../components/MoodMode";
import { Login } from "../pages";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const token = localStorage.getItem("token");
  if (!token) {
    return <Login />;
  }
  return (
    <>
      <div className="navbar">
        <NavLink to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </NavLink>
        <div className="container">
          <h1>Mental Health app</h1>
        </div>
        <MoodMode />
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
    </>
  );
}

export default Navbar;
