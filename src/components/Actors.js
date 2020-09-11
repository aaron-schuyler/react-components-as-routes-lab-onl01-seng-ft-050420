import React from 'react';
import { actors } from '../data';

const Actors = () => {
  function renderActors() {
    return actors.map((actor, index) => {
      return (
        <div key={index}>
          {actor.name}
          <ul>
            {actor.movies.map((movie, index) => <li key={index}>{movie}</li>)}
          </ul>
        </div>
      )
    })
  }
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
