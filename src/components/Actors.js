import React from 'react';
import { actors } from '../data';

const renderActors = () => {
  return actors.map((actor, index) => (
    <div key={index}>
      <h3>{actor.name}</h3>
      <h4>Movies</h4>
        <ul>
          {actor.movies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
    </div>
  ))
}

const Actors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
