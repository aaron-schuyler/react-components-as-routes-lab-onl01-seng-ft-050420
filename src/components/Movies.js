import React from 'react';
import { movies } from '../data';

const Movies = () => {
  function renderMovies() {
    return movies.map((movie, index) => {
      return (
        <div key={index}>
          {movie.title}
          {movie.time}
          <ul>
            {movie.genres.map((movie, index) => <li key={index}>{movie}</li>)}
          </ul>
        </div>
      )
    })
  }
  return (
    <div>
      <h1>Movies Page</h1>
      {renderMovies()}
    </div>
  );
};

export default Movies;
