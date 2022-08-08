import React, { useState } from "react";
import '../../index.css'
import './styles.css'
import { Helmet } from "react-helmet";


const data = [
  {
    id: "1",
    key: "1",
    title: "Calm",
    className: "image-1",
    backgroundImage: "https://i.pinimg.com/originals/32/b8/77/32b877ed4aa7778cc7d43ebb7d95a6f1.png"
  },
  {
    id: "2",
    key: "2",
    title: "Happy",
    className: "image-2",
    backgroundImage: "https://wallpaperaccess.com/full/1092658.jpg"
  },
  {
    id: "3",
    key: "3",
    title: "Mellow",
    className: "image-3",
    backgroundImage: "https://img.freepik.com/premium-vector/abstract-pastel-colorful-gradient-background_29865-2081.jpg?w=2000"
  },
  {
    id: "4",
    key: "4",
    title: "Down",
    text: "Text4",
    backgroundImage: "https://wallpaperaccess.com/full/1092603.jpg"
  }
];


export default function MoodMode() {
  const [toggle, setToggle] = useState("1");
  return (
    
    <div className="MoodMode">
      {data.map(({ title, key, backgroundImage }) => {
        return (
          <>
            <div className="main">
              <div className="tooltip">
                <button className="background-btn" onClick={() => setToggle(key)}> <span class="tooltiptext">{title}</span> </button>
                {toggle === key ? (
                  <>
                    <Helmet>
                    <style>{`body{background-image: url(${backgroundImage});}`}</style>
                    </Helmet>
                  </>
                ) : null}
              </div>
              </div>
          </>
        );
      })}
    </div>
  );
}
