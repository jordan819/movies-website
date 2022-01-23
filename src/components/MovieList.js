import React from 'react';
import './MovieList.css';

import { Link } from "react-router-dom";

const MovieList = (props) => {
  return(
    <>
      {props.movies.map((movie, index) => (
        <div className="d-flex justify-content-center m-3 col">

          <Link to={`/details/${movie.imdbID}`}>
            <div class="img__wrap">
              <img class="img__img" src={movie.image} alt='movie' width="300" height="400"/>
              <p class="img__description">{movie.content}</p>
            </div>
          </Link>

        </div>
      ))}
    </>
  );
};

export default MovieList;
