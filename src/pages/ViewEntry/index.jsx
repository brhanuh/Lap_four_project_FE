import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const ViewEntry = ({ data }) => {
  const location = useLocation();
  console.log("location", location);
  return (
    <>
      <div>
        <div className="content">
          <h2>Hello World</h2>
          <p>I am now here</p>
        </div>
      </div>
    </>
  );
};

export default ViewEntry;
