import React from "react";
import { Entry } from "../index";

const Timeline = () => {
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
      <div className="timelinePage">
        <div className="timelineBody">
          <div className="timeline">
            {testData.map((entry, index) => (
              <Entry
                year={entry.year}
                text={entry.text}
                cssClass={entry.class}
                testData={testData}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
