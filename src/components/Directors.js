import React from 'react';
import { directors } from '../data';

const renderDirectors = () => {
  return directors.map((director, index) => (
    <div key={index}>
      <h3>{director.name}</h3>
      <h4>Movies</h4>
        <ul>
          {director.movies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
    </div>
  ))
}

const Directors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {/* {console.log(directors)} */}
      {renderDirectors()}
    </div>
  );
}

export default Directors
