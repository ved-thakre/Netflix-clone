import React, { useState, useEffect } from 'react';
import axios from '../axios';
import Pop from './Pop';
import './Frow.css';

function Frow({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const base_url = "https://image.tmdb.org/t/p/original/";

  const openPop = (movie) => {
    setSelectedMovie(movie);
  };

  async function fetchData() {
    return new Promise(function (resolve, reject) {
      axios
        .get(fetchUrl)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  useEffect(() => {
    async function getData() {
      try {
        const request = await fetchData();
        setMovies(request.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getData();
  }, [fetchUrl]);

  return (
    <div className='overlapping_row'>
      <h2 className='overlapping_name'>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className="row__posterLarge"
            key={movie.id}
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
            onClick={() => openPop(movie)}
          />
        ))}
      </div>
      {selectedMovie && <Pop movie={selectedMovie} onClose={() => setSelectedMovie(null)} />}
    </div>
  );
}

export default Frow;
