import React, { useEffect, CSSProperties } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import "./loading.css";
const Loading = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="loadingContainer">
        <p></p>
        <PacmanLoader color={"#ffe737"} size={20} />
      </div>
    </>
  );
};

export default Loading;
