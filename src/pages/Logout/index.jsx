import React from "react";
import './styles.css'

const Logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user_id");
  localStorage.removeItem("username");
  return (
    <>
    <div className="goodbye-div">
    <h1 className="goodbye" role="h1">Come back again soon!</h1>
    </div>
      <div className="container3">
        <img className="logoutani" src={require('./Logout.gif')} alt="loading..." />
      </div>
    </>
  );
};

export default Logout;
