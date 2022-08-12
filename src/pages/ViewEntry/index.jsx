import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./viewEntry.css";
const ViewEntry = ({ data }) => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location", location.state);
  function handleBack() {
    navigate(-1);
  }
  return (
    <>
      <button role="back" onClick={handleBack}>
        Back
      </button>
      <div className="viewEntryBody">
        <div className="contents">
          <h2 role="heading">Entry details</h2>
          <p role="energy">Energy: {location.state.entry.energy}</p>
          <p>Depression: {location.state.entry.depression}</p>
          <p>Irritability: {location.state.entry.irritability}</p>
          <p>Motivation: {location.state.entry.motivation}</p>
          <p>Stress: {location.state.entry.stress}</p>
          <p>Appetite: {location.state.entry.appetite}</p>
          <p>Concentratio: {location.state.entry.concentration}</p>
          <p>Diet: {location.state.entry.diet}</p>
          <p>Entertainment: {location.state.entry.entertainment}</p>
          <p>Social: {location.state.entry.social}</p>
        </div>
      </div>
    </>
  );
};

export default ViewEntry;
