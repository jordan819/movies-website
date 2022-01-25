import React from 'react';
import './MovieList.css';

import { Link } from "react-router-dom";

const MovieList = (props) => {
  return(
    <>
      {props.movies.map((movie, index) => (
        <div className="d-flex justify-content-center m-3 col">

          <Link to={`/details/${movie.id}`}>
            <div class="img__wrap">
              <img class="img__img" src={movie.image} onError={({ currentTarget }) => {
    currentTarget.onerror = null; // prevents looping
    currentTarget.src="https://image.shutterstock.com/image-vector/photo-coming-soon-vector-image-600w-1809858361.jpg";
  }} alt='movie' width="300" height="400"/>
              <p class="img__description">{movie.content}</p>
            </div>
          </Link>

        </div>
      ))}
    </>
  );
};

export default MovieList;
