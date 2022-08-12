import React, {useState} from 'react'
import * as SiIcons from 'react-icons/si';
import * as AiIcons from 'react-icons/ai';
import { NavLink, Outlet } from 'react-router-dom';
import './styles.css'
import MoodMode from '../MoodMode';
import MusicPlayer from '../MusicPlayer';
import Quotes from '../Quotes';



//the music player and the moodboard will render here 

function MoodBoard() {
    const [moodBar, setMoodBar] = useState(false);
  
    const showMoodbar = () => setMoodBar(!moodBar);
  
    
  
    return (
        <>
          <div className='moodbar'>
            <NavLink to='#' className='mood-bars'>
              <SiIcons.SiMusicbrainz onClick={showMoodbar} />
            </NavLink>
            </div>
            <div className='container4'>
          <nav className={moodBar ? 'mood-menu active' : 'mood-menu'}>
            <ul className='mood-menu-items' id='link' onClick={showMoodbar}>
              <li className='moodbar-toggle'>
                <NavLink to='#' className='mood-bars'>
                  <AiIcons.AiOutlineClose />
                </NavLink>
              </li>
              <div className='card1'>
              <h1 className='moodtitle'>Mood Board</h1>
                <div className='moodcont'>
                  <h3 className='custom'>Customise:</h3>
                  <MoodMode/>
                  {/* <h3>Music Player</h3>
                 <MusicPlayer/>  */}
                  </div>
                  <Quotes/>
                  </div>
            </ul>
          </nav>
          </div> 
      </>
    );
} 

  
  export default MoodBoard;
  
  
  