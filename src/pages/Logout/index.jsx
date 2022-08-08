import React from "react";

const Logout = () => {
  localStorage.removeItem("token");
  return (
    <>
      <div className="container">
        <h1 role="h1">This is the logout page</h1>
      </div>
    </>
  );
};

export default Logout;
