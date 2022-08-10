
import React, { useRef, useState } from 'react';
import { Recommend } from '../../components';
import './styles.css';
import "./recommendations.css";

import { useNavigate } from "react-router-dom";

const Recommendations = () => {
  const css = { border: 'solid 0.3rem purple', borderRadius: '9px' };
  const [dragItem, setDragItem] = useState();
  const [style, setStyle] = useState('');

  // dummy data that we will replace with database data
  const [list, setList] = useState([
    {
      title: 'fruits',
      date: '16/05/2022',
      comment: 'i love travelling and fruits',
      user: 'Aaron',
    },
    {
      title: 'Fitness',
      date: '16/05/2022',
      comment: 'i enjoy going gym!',
      user: 'Ayoub',
    },
    {
      title: 'Literature',
      date: '16/05/2022',
      comment: 'i love writting & poetry',
      user: 'Aleks',
    },
    {
      title: 'nature',
      date: '16/05/2022',
      comment: 'i  love mountain climbing',
      user: 'Hanibal',
    },
    {
      title: 'the unknown',
      date: '16/05/2022',
      comment: 'i love the mystery of being hidden',
      user: 'Dakz',
    },
  ]);
  const handleDragStart = (index) => {
    setDragItem(index);
  };

  const handleDragEnter = (e, index) => {
    setStyle(css);

    const newList = [...list];
    const item = newList[dragItem];
    newList.splice(dragItem, 1);
    newList.splice(index, 0, item);
    setDragItem(index);
    setList(newList);
    console.log(e.target);
  };

  const handleDragLeave = (e) => {
    e.target.style.opacity = 1;
    // e.target.style.backgroundColor = '';
  };

  const handleDrop = (e) => {
    e.target.style.opacity = 1;
  };

  let navigate = useNavigate();


  function handleRecommend(e) {
    e.preventDefault();
    navigate("/recommend");
    console.log("hello world");
  }
  return (
    <>
    <div className='card1'>
      <div className="container">
        <h1 className="Rec" role="h1">Recommendations</h1>
      </div>
      <button className="recc" onClick={handleRecommend}>Recommend</button>


      <ul className="">
        {list &&
          list.map((item, index) => (
            <div
              className="dragDiv"
              draggable
              key={index}
              onDragStart={() => handleDragStart(index)}
              onDragEnter={(e) => handleDragEnter(e, index)}
              onDragLeave={(e) => handleDragLeave(e)}
              onDrop={(e) => handleDrop(e)}
              onDragOver={(e) => e.preventDefault()}
            >
              <Recommend
                comment={item.comment}
                user={item.user}
                date={item.date}
                title={item.title}
              />
            </div>
          ))}
      </ul>
      </div>

    </>
  );
};

export default Recommendations;
