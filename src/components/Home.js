import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './MovieList';
import Heading from './Heading';
import SearchBar from './SearchBar';

import { Link } from "react-router-dom";

const Home = () => {

  const [movies, setMovies] = useState([]);
  const [moviesDescription, setMoviesDescription] = useState([]);
  const [searchValue, setSearchValue] = useState('movie');

  const getMoviesDescriptionRequest = async (movies) => {
    let descriptions = [];

    for (let i=0; i<movies.length; i++) {
      let id = movies[i].imdbID;
      let url = 'http://www.omdbapi.com/?i=' + id + '&apikey=88693566';
      let response = await fetch(url);
      let responseJson = await response.json();
      descriptions.push(responseJson.Plot);
    }

    setMoviesDescription(descriptions);
  };

  useEffect(() => {
    const getMoviesRequest = async (searchValue) => {
      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=88693566`;
      const response = await fetch(url);
      const responseJson = await response.json();

      if (responseJson.Search) {

        let validatedJson = [];

        // films with no poster available will not be displayed
        for (let i=0; i<responseJson.Search.length; i++) {
          if (responseJson.Search[i].Poster !== 'N/A') {
            validatedJson.push(responseJson.Search[i]);
          }
        }

        getMoviesDescriptionRequest(validatedJson);

        setMovies(validatedJson);
      }

    };
    getMoviesRequest(searchValue);
  }, [searchValue]);

  return (
    <div>
      <div className='d-flex align-items-center w-100 mt-4 mb-4'>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} className='d-flex align-items-center w-100 mt-4 mb-4'>

          <Heading heading='MovieCave'/>
        </Link>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className="row">
        <MovieList movies={movies} descriptions={moviesDescription}/>
      </div>
    </div>
  );
}

export default Home;
