import React from 'react'
import './Banner.css'

function Banner() {

  function truncate(string, n){
     return string?.length > n ? string.substr(0,n-1) + '...' : string;
  }  

  return (
    <header className='banner'
    style={{
        backgroundSize : "cover",
        backgroundImage : `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABeA8XKAAFZcBBuAAAAAElFTkSuQmCC")`,
        backgroundPosition : "center center", //to maintain the img at center
    }}
    > 
    <div className="banner__content">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(`This is the test description of the movie which will include the information about movie and how the how the movie is the little bit of the plot or the story of the movie and the little bit introduction of the characters of the movie.`,100)}</h1>
    </div>
    <div className='banner--fadeBottom'/>
    </header>
  )
}

export default Banner
