import React from 'react';
import './Pop.css';
import Info from './Info';

function Pop({ movie, onClose }) {
  const base_url = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="pop__overlay">
      <div className="pop__content">
        <button className="pop__close" onClick={onClose}>
          <span className="pop__close-icon">✕</span>
        </button>
        <Info movie={movie} />
        <div className="pop__poster-wrapper">
          <img
            src={`${base_url}${movie.backdrop_path}`}
            alt={movie.name || movie.title}
            className="pop__poster"
          />
        </div>
      </div>
    </div>
  );
}

export default Pop;
