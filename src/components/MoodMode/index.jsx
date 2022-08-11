import React, { useContext, useState } from 'react';
import '../../index.css';
import './styles.css';
import { Helmet } from 'react-helmet';
import '../../layout/layout.css';
import '../MoodBoard/styles.css';
import AppContext from '../../HelperContext/Context';

const data = [
  {
    id: '1',
    key: '1',
    title: 'Mellow',
    className: 'image-1',
    backgroundImage:
      'https://img.freepik.com/premium-vector/abstract-pastel-colorful-gradient-background_29865-2081.jpg?w=2000',
    color2: '#FADCD2',
    color3: '#FADCD2',
    color4: '#F8ABFF',
    color5: '#F8ABFF',
    //test brain colorPinkYellow
    brain: 'ColorPinkYellow',
    // brain: 'mellowBrain',
  },
  {
    id: '2',
    key: '2',
    title: 'Happy',
    className: 'image-2',
    backgroundImage:
      'https://img.freepik.com/free-vector/soft-yellow-watercolor-texture-background_1055-10236.jpg?w=2000',
    color2: '#FFFFE0',
    color3: '#FFFFE0',
    color4: '#FEFCD3',
    color5: '#FEFCD3',
    brain: 'happyBrain',
  },
  {
    id: '3',
    key: '3',
    title: 'Calm',
    className: 'image-3',
    backgroundImage:
      'https://i.pinimg.com/736x/a4/b6/17/a4b617ec11ee6c855efbe849c77e3728.jpg',
    color2: '#add8e6',
    color3: '#add8e6',
    color4: '#D6F9E9',
    color5: '#D6F9E9',
    brain: 'calmBrain',
  },
  {
    id: '4',
    key: '4',
    title: 'Down',
    text: 'Text4',
    className: 'image-4',
    backgroundImage: 'https://wallpaperaccess.com/full/1092603.jpg',
    color2: '#DBC3C8',
    color3: '#DBC3C8',
    color4: '#CBC3E3',
    color5: '#CBC3E3',
    // text brain multi color Brain toogles are working
    brain: 'brain multi color',
    // brain: 'brain multi color',
  },
];

export default function MoodMode() {
  const [toggle, setToggle] = useState('1');
  const { brainColor, setBrainColor } = useContext(AppContext);
  return (
    <>
      <div className="MoodMode">
        {data.map(
          ({
            title,
            key,
            backgroundImage,
            className,
            color2,
            color3,
            color4,
            color5,
            brain,
          }) => {
            return (
              <>
                <div className="main">
                  <div className="tooltip">
                    <button
                      className={className}
                      onClick={() => setToggle(key)}
                    >
                      {' '}
                      <span class="tooltiptext">{title}</span>{' '}
                    </button>
                    {toggle === key ? (
                      <>
                        {setBrainColor(`${brain}`)}
                        <Helmet>
                          <style>{`body{background-image: url(${backgroundImage});}`}</style>
                        </Helmet>
                        <style>{`.navbar{background-color: ${color2}`}</style>
                        <style>{`.nav-menu{background-color: ${color3}`}</style>
                        <style>{`.navbar-toggle{background-color: ${color4}`}</style>
                        <style>{`.mood-menu{background-image: url(${backgroundImage});}`}</style>
                        <style>{`.bottom{background-color: ${color2}`}</style>
                      </>
                    ) : null}
                  </div>
                </div>
              </>
            );
          }
        )}
      </div>
    </>
  );
}
