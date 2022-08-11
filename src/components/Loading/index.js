import React, { useEffect } from "react";
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
        <p className="load">Take a deep breath...</p>
        <div>
        <img className="loadingimg" src={require('./loadingg.gif')} alt="loading..." />
        {/* <PacmanLoader color={"#ffe737"} size={20} /> */}
        </div>
      </div>
    </>
  );
};

export default Loading;
