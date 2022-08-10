import React, {useState} from 'react'
import './styles.css'

const MusicPlayer = () => {


    const [songs, setSongs] = useState([]);
    const [song, setSong] = useState({});

    var accessToken= "?access_token=CXyFeSBw2lAdG41xkuU3LS6a_nwyxwwCz2dCkUohw-rw0C49x2HqP__6_4is5RPx";
      var APISong = "https://api.genius.com/songs/";
      var songID = "2471960";
      var maxSong= 2471960; 

      function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      const renderRows = () => {
        return <div className='playerz' ><span className='song-name'>{song.name} {song.releaseDate}</span><embed className='music-player' src={song.songURL}  allow="encrypted-media" /></div>
      }

    async function getaSong(){
        try{
          songID = getRandomInt(0, maxSong);
          console.log(APISong+songID+accessToken)
           await fetch(APISong+songID+accessToken)
           .then(response => response.json())
           .then(data => {
            if (data.meta.status === 200){
                console.log(data.response.song)
                 //setSongs([ ...songs, {name : data.response.song.artist_names, img : data.response.song.header_image_thumbnail_url}])
                setSong({name : data.response.song.artist_names, img : data.response.song.header_image_thumbnail_url, releaseDate: data.response.song.release_date ,id : songID, songURL: data.response.song.apple_music_player_url})
                console.log(song);
           }})
    
        }catch(err){
          console.log(err);
        }
        
      }
    

  return (
    <>
      <div className="container1">
        { renderRows() }
        <button className="music-btn" onClick={getaSong}>Get Songs</button>
      </div>
    </>
  );
};

export default MusicPlayer;
