import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import Heading from './components/Heading';
import SearchBar from './components/SearchBar'

const App = () => {
  const [movies, setMovies] = useState([]);
  const [moviesDescription, setMoviesDescription] = useState([]);
  const [searchValue, setSearchValue] = useState('movie');

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

  const getMoviesDescriptionRequest = async (movies) => {
    let descriptions = [];

    for (let i=0; i<movies.length; i++) {
      let id = movies[i].imdbID;
      let url = 'http://www.omdbapi.com/?i=' + id + '&apikey=88693566';
      let response = await fetch(url);
      let responseJson = await response.json();
      descriptions.push(responseJson.Plot);
    }

    //movies.forEach(async (movie, i) => {
    //  let id = movie.imdbID;
    //  let url = 'http://www.omdbapi.com/?i=' + id + '&apikey=88693566';
    //  let response = await fetch(url);
    //  let responseJson = await response.json();
    //  descriptions.push(responseJson.Plot);
    // });
    // console.log(descriptions);
    setMoviesDescription(descriptions);
  };

  useEffect(() => {
    getMoviesRequest(searchValue);
  }, [searchValue])

  return (
    <div className='container-fluid movie-app'>
      <div className='d-flex align-items-center w-100 mt-4 mb-4'>
        <img src='./clapperboard.png' alt='logo' width="100" height="100"/>
        <Heading heading='MovieCave'/>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
        <button type="submit" class="btn btn-secondary"><i className="bi-search"/> Search</button>
      </div>
      <div className="row">
        <MovieList movies={movies} descriptions={moviesDescription}/>
      </div>
      <div>

      </div>
    </div>
  )

}

export default App;
