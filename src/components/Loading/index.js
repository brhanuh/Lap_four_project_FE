import React, { useEffect } from "react";
const Loading = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <h1>Loading</h1>
    </>
  );
};

export default Loading;
