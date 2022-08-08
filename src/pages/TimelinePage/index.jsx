import React, { useState } from "react";
import { Timeline, Loading } from "../../components";
import "./timeline.css";

const TimelinePage = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Loading setLoading={setLoading} />
      ) : (
        <>
          <Timeline />
        </>
      )}
    </>
  );
};
export default TimelinePage;
