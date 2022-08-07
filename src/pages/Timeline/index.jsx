import React, { useEffect, useState } from "react";
import "./timeline.css";

import { Entry, Loading } from "../../components";
const Timeline = () => {
  const [containerClass, setContainerClass] = useState(
    "timelineContainer right"
  );
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const testData = [
    { year: 2022, text: "Lorem ipsum.." },
    { year: 2021, text: "Lorem ipsum.." },
    { year: 2019, text: "Lorem ipsum.." },
    { year: 2018, text: "Lorem ipsum.." },
    { year: 2015, text: "Lorem ipsum.." },
  ];
  for (let i = 0; i < testData.length; i++) {
    if (i % 2 == 0) {
      testData[i].class = "timelineContainer right";
    } else {
      testData[i].class = "timelineContainer left";
    }
  }

  return (
    <>
      {loading ? (
        <Loading setLoading={setLoading} />
      ) : (
        <>
          <div className="timelinePage">
            <div className="timelineBody">
              <div className="timeline">
                {testData.map((entry, index) => (
                  <Entry
                    year={entry.year}
                    text={entry.text}
                    cssClass={entry.class}
                    testData={testData}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Timeline;
