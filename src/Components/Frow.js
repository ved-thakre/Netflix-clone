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
          (movie.poster_path && 
              <div className="increase_len" key={movie.id}>
                  <img
                  className="row__posterLarge"
                  src={`${base_url}${movie.poster_path}`}
                  alt={movie.name}
                  onClick={() => openPop(movie)}
                />
                <p className="row__posterTitle1" onClick={() => openPop(movie)}>{movie.title && movie.title.includes(':') ? movie.title.split(':')[0] : movie.title}</p>
                  <button className='button__play1'  onClick={() => openPop(movie)} >▶</button>
                  <button className='button__add1'>+</button>
                <h3 className="row__posterTitle1" id='rating1'> {movie.vote_average.toFixed(1)}</h3>
              </div>
            )
        ))}
      </div>
      {selectedMovie && <Pop movie={selectedMovie} onClose={() => setSelectedMovie(null)} />}
    </div>
  );
}

export default Frow;


