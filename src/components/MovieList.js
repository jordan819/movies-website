import React from 'react';
import './MovieList.css';

const MovieList = (props) => {
  return(
    <>
      {props.movies.map((movie, index) => (
        <div className="d-flex justify-content-center m-3 col">

          <div class="img__wrap">
            <img class="img__img" src={movie.Poster} alt='movie' width="300" height="400"/>
            <p class="img__description">After Homer pollutes the town's water supply, Springfield is encased in a gigantic dome by the EPA and the Simpsons are declared fugitives.</p>
          </div>

        </div>
      ))}
    </>
  );
};

export default MovieList;
