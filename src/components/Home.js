import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './MovieList';
import Heading from './Heading';
import SearchBar from './SearchBar';

import { Link } from "react-router-dom";

const Home = () => {

  const [movies, setMovies] = useState([]);
  // const [moviesDescription, setMoviesDescription] = useState([]);
  const [searchValue, setSearchValue] = useState('movie');
/*
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
*/


  useEffect(() => {
    const getMoviesRequest = async (searchValue) => {
      const url = 'https://pr-movies.herokuapp.com/api/movies'; //`http://www.omdbapi.com/?s=${searchValue}&apikey=88693566`;
      const response = await fetch(url);
      const responseJson = await response.json();

      if (responseJson) {

        let validatedJson = [];

        // TODO: sprawdzanie czy link do zdjęcia faktycznie zawiera zdjęcie
        // films with no poster available will not be displayed
        for (let i=0; i<responseJson.length; i++) {
          if (responseJson[i].image) {
            validatedJson.push(responseJson[i]);
          }
        }

        //getMoviesDescriptionRequest(validatedJson);

        setMovies(validatedJson);
      }

    };
    getMoviesRequest(searchValue);
  }, [searchValue]);

  return (
    <div>
      <div style={{paddingLeft: '40px', paddingRight: '50px'}} className='d-flex align-items-center w-100 mt-4'>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} className='d-flex align-items-center w-100 mt-4 mb-4'>
          <Heading/>
        </Link>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
        <Link to="/add">
          <button style={{backgroundColor: '#d30f0f', color: '#fff'}} type="submit" class="btn"><i class="bi bi-plus"></i></button>
        </Link>
      </div>
      <div className="d-flex flex-row-reverse mb-6 me-5">
      <Link to="/signin">
        <button style={{backgroundColor: '#d30f0f', color: '#fff'}} type="submit" class="btn">Logowanie</button>
      </Link>
      <Link to="/signup">
          <button style={{backgroundColor: '#d30f0f', color: '#fff'}} type="submit" class="btn">Rejestracja</button>
        </Link>
      </div>
      <div className="row">
        <MovieList movies={movies}/>
      </div>
    </div>
  );
}

export default Home;
