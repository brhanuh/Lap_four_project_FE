import React, { useContext, useState } from 'react';
import '../../index.css';
import './styles.css';
import '../../layout/layout.css'
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
    class1: 'sun',
    backgroundImage:'https://Aleopaa.github.io/finalfinalmello.png',
    color2: 'rgb(249, 222, 250)',
    color3: '#FADCD2',
    color4: '#F8ABFF',
    color5: '#F8ABFF',
    tabletop: '#F8ABFF',
    textcolor: 'rgb(161, 105, 159)',
    brain: 'mellowBrain',
  },
  {
    id: '2',
    key: '2',
    title: 'Calm',
    className: 'image-2',
    class1: 'sun-2',
    backgroundImage:'https://Aleopaa.github.io/calm_sea.png',
      // 'https://img.freepik.com/free-vector/soft-yellow-watercolor-texture-background_1055-10236.jpg?w=2000',
    color2: 'rgb(195, 216, 250)',
    color3: '#FFFFE0',
    color4: '#FEFCD3',
    color5: '#FEFCD3',
    tabletop: 'rgb(195, 216, 250)',
    textcolor: 'rgb(14, 53, 117)',
    brain: 'calmBrain',
  },
  {
    id: '3',
    key: '3',
    title: 'Happy',
    className: 'image-3',
    class1: 'sun-3',
    backgroundImage:'https://Aleopaa.github.io/happysunshine.png',
    color2: 'rgb(245, 188, 135)',
    color3: '#add8e6',
    color4: '#D6F9E9',
    color5: 'rgb(245, 219, 135)',
    tabletop: 'rgb(252, 250, 210)',
    textcolor: 'rgb(92, 56, 22)',
    brain: 'calmBrain',
  },
  {
    id: '4',
    key: '4',
    title: 'Down',
    text: 'Text4',
    className: 'image-4',
    class1: 'sun-4',
    backgroundImage: 'https://Aleopaa.github.io/purplemisty.png',
    color2: '#DBC3C8',
    color3: '#DBC3C8',
    color4: '#CBC3E3',
    color5: '#CBC3E3',
    tabletop: '#CBC3E3',
    textcolor: 'rgb(59, 17, 105)',
    // text brain multi color Brain toogles are working
    brain: 'brain multi color',
    // brain: 'brain multi color',
  },
];

export default function MoodMode() {
  const [toggle, setToggle] = useState('1');
  const { brainColor, setBrainColor, class1, setClass } = useContext(AppContext);


            return (
              <>
                <div className="MoodMode">
                  {data.map(
                    ({
                      title,
                      key,
                      backgroundImage,
                      className,
                      class1,
                      color2,
                      color3,
                      color4,
                      color5,
                      tabletop,
                      textcolor,
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
                                  {setClass(`${class1}`)}
                                  <Helmet>
                                    <style>{`body{background-image: url(${backgroundImage}); background-repeat: no-repeat; background-size: cover;}`}</style>
                                    <style>{`body > background-image{opacity: 0.2;}`}</style>
                                  </Helmet>
                                  <style>{`.navbar{background-color: ${color2}`}</style>
                                  <style>{`.nav-menu{background-color: ${color3}`}</style>
                                  <style>{`.navbar-toggle{background-color: ${color4}`}</style>
                                  <style>{`.mood-menu{background-image: url(${backgroundImage});}`}</style>
                                  <style>{`.bottom{background-color: ${color2}`}</style>
                                  <style>{`.main-name{color: ${textcolor}`}</style>
                                  <style>{`#helplines th{background-color: ${tabletop}`}</style>
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