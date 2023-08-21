import React, { useState, useEffect } from 'react';
import axios from '../axios';
import Pop from './Pop';
import './Row.css';

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const base_url = 'https://image.tmdb.org/t/p/original/';

  const openPop = (movie) => {
    setSelectedMovie(movie);
  };

  async function fetchData() {
    try {
      const response = await axios.get(fetchUrl);
      return response.data.results;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }

  const getData = async () => {
    const movieData = await fetchData();
    setMovies(movieData);
  };

  useEffect(() => {
    getData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="title_name">{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          (movie.backdrop_path && 
            <div className="row__posterContainer" key={movie.id}>
                  <img
                  className="row__poster"
                  src={`${base_url}${movie.backdrop_path}`}
                  alt={movie.title}
                  onClick={() => openPop(movie)}
                />
                <p className="row__posterTitle">{movie.title && movie.title.includes(':') ? movie.title.split(':')[0] : movie.title}</p>
                <h3 className="row__posterTitle" id='rating'> ⭐️ {movie.vote_average.toFixed(1)}</h3>
             </div> 
            )
        ))}
      </div>
      {selectedMovie && <Pop movie={selectedMovie} onClose={() => setSelectedMovie(null)} />}
    </div>
  );
}

export default Row;
