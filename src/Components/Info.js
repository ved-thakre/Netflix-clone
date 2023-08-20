import React from 'react';
import './Info.css';

function Info({ movie }) {
  return (
    <div className="pop__info">
      <h3 className="pop__title">{movie.title || movie.name}</h3>
      <p className="pop__description">{movie.overview.slice(0, 250) + "..." }</p>
    </div>
  );
}

export default Info;
