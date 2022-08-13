import React, { useEffect, useState } from 'react';
import { Entry } from '../index';

const Timeline = ({ data }) => {
  const testData = [
    { year: 2022, text: 'Lorem ipsum..' },
    { year: 2021, text: 'Lorem ipsum..' },
    { year: 2019, text: 'Lorem ipsum..' },
    { year: 2018, text: 'Lorem ipsum..' },
    { year: 2015, text: 'Lorem ipsum..' },
  ];
  // for (let i = 0; i < data.length; i++) {
  //   if (i % 2 == 0) {
  //     data[i].class = "timelineContainer right";
  //   } else {
  //     data[i].class = "timelineContainer left";
  //   }
  // }

  return (
    <>
      <div className="timelinePage">
        <div className="timelineBody">
          <div className="timeline">
            {data.map((entry, index) => (
              <Entry
                text={entry.day}
                cssClass={entry.class}
                entry={entry}
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
