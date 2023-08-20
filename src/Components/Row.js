import React, { useState, useEffect } from 'react';
import axios from '../axios';
import Pop from './Pop';
import './Row.css';

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const base_url = "https://image.tmdb.org/t/p/original/";

  const openPop = (movie) => {
    setSelectedMovie(movie);
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          ((isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow ? "row__posterLarge" : ""}`}
                key={movie.id}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.name}
                onClick={() => openPop(movie)}
              />
            )
        ))}
      </div>
      {selectedMovie && <Pop movie={selectedMovie} onClose={() => setSelectedMovie(null)} />}
    </div>
  );
}

export default Row;
