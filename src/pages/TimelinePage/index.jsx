import React, { useState, useEffect } from "react";
import axios from "axios";

import { Timeline, Loading } from "../../components";
import "./timeline.css";

const TimelinePage = () => {
  const [loading, setLoading] = useState();
  const token = localStorage.getItem("token");
  const [entries, setEntries] = useState([]);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  useEffect(() => {
    setLoading(true);
    async function fetchEntries() {
      const result = await axios.get(
        "https://fp-mental-health.herokuapp.com/entries",
        config
      );

      for (let i = 0; i < result.data.length; i++) {
        if (i % 2 == 0) {
          result.data[i].class = "timelineContainer right";
        } else {
          result.data[i].class = "timelineContainer left";
        }
      }
      console.log("result", result.data);
      setEntries(result.data);
    }
    fetchEntries();
  }, []);

  return (
    <>
      {loading ? (
        
        <Loading setLoading={setLoading} />
      ) : (
        <>
          <Timeline data={entries} />
        </>
      )}
    </>
  );
};
export default TimelinePage;
