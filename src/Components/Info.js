import React, { useEffect, useState } from 'react';
import './Info.css';
import axios from 'axios';

function Info({ movie }) {
  const [genres, setGenres] = useState([]);

  // Fetch genre names based on genre IDs
  useEffect(() => {
    async function fetchGenres() {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/genre/movie/list',
          {
            params: {
              api_key: '2f1dc7c30536ed450e977434151a8479',
              language: 'en-US',
            },
          }
        );
        setGenres(response.data.genres);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    }
    fetchGenres();
  }, []);

  function renderGenre(genreIds) {
    const genreNames = genreIds
      .map((id) => {
        const genre = genres.find((genre) => genre.id === id);
        return genre ? genre.name : null;
      })
      .filter((genreName) => genreName !== null)
      .slice(0, 2); // Limit to a maximum of 3 genres

    if (genreNames.length === 0) {
      return <span className="pop__genre">Unknown</span>;
    }

    return <span className="pop__genre">{genreNames.join(', ')}</span>;
  }

  return (
    <div className="pop__info">
      <h3 className="pop__title">{movie.title || movie.name}</h3>
      <div className="banner_buttons">
            <button className="banner_button1 first__button"> <span className="pop__play-icon">▶</span> Play</button>
        </div>
      <div className="pop__rating-genre">
        <h3 className="pop__rating">Rating - {movie.vote_average.toFixed(1)}</h3>
        <h3 className="pop__genre"><span className='genre_name'>Genres -</span> {renderGenre(movie.genre_ids)}</h3>
      </div>
      <p className="pop__description">{movie.overview}</p>
    </div>
  );
}

export default Info;
