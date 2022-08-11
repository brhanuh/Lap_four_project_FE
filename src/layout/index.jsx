import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { NavLink, Outlet } from "react-router-dom";
import { SidebarData, SidebarDataNotLogged } from "./SidebarData";
import "./layout.css";
import "../index.css";
import MoodMode from "../components/MoodMode";
import MoodBoard from "../components/MoodBoard";
import { Login } from "../pages";
import HubButton from "../components/HubButton";
function Layout({ updateNav }) {
  const [sidebar, setSidebar] = useState(1);
  const [bottomNav, setBottomNav] = useState(SidebarData);
  const showSidebar = () => setSidebar(!sidebar);

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      setBottomNav(SidebarData);
    } else {
      setBottomNav(SidebarDataNotLogged);
    }
  }, [updateNav]);

  // if (!token) {
  //   return <Login />;
  // }
  function handleNav(e) {
    e.preventDefault();
    setSidebar((prev) => prev + 1);
  }
  return (
    <>
      <div className="navbar">
        {/* <NavLink to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavLink> */}
       
          <h1 className="main-name">Brighter Minds</h1>

        <MoodBoard />
      </div>
      {/* <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" id="link" onClick={showSidebar}>
          <li className="navbar-toggle">
            <NavLink to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </NavLink> */}
      {/*   </li>
          {token
            ? SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <NavLink to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </NavLink>
                  </li>
                );
              })
            : SidebarDataNotLogged.map((item, index) => {
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
      </nav> */}
      <Outlet />
      <footer>
        <div className="bottomNav">
        <nav className="bottom">
          {token
            ? bottomNav.map((item, index) => {
                return (
                  <li key={index} className={item.cName} onClick={handleNav}>
                    <NavLink className="navlinkz" to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </NavLink>
                  </li>
                );
              })
            : bottomNav.map((item, index) => {
                return (
                  <li key={index} className={item.cName} onClick={handleNav}>
                    <NavLink className="navlinkz" to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </NavLink>
                  </li>
                );
              })}
        </nav>
        </div>
        {/*   <HubButton/> */}
      </footer>
    </>
  );
}

export default Layout;
