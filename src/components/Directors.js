import React from 'react';
import { directors } from '../data';

const Directors = () => {
  function renderDirectors() {
    return directors.map((director, index) => {
      return (
        <div key={index}>
          {director.name}
          <ul>
            {director.movies.map((movie, index) => <li key={index}>{movie}</li>)}
          </ul>
        </div>
      )
    })
  }
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors
