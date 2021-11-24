import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import Heading from './components/Heading';
import SearchBar from './components/SearchBar'

const App = () => {
  const [movies, setMovies] = useState([
        {
            "Title": "The Simpsons Movie",
            "Year": "2007",
            "imdbID": "tt0462538",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTgxMDczMTA5N15BMl5BanBnXkFtZTcwMzk1MzMzMw@@._V1_SX300.jpg"
        },
        {
            "Title": "Scary Movie",
            "Year": "2000",
            "imdbID": "tt0175142",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMGEzZjdjMGQtZmYzZC00N2I4LThiY2QtNWY5ZmQ3M2ExZmM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
            "Title": "Bee Movie",
            "Year": "2007",
            "imdbID": "tt0389790",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjE1MDYxOTA4MF5BMl5BanBnXkFtZTcwMDE0MDUzMw@@._V1_SX300.jpg"
        },
        {
            "Title": "Scary Movie 3",
            "Year": "2003",
            "imdbID": "tt0306047",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDE2NTIyMjg2OF5BMl5BanBnXkFtZTYwNDEyMTg3._V1_SX300.jpg"
        },
        {
            "Title": "The Lego Batman Movie",
            "Year": "2017",
            "imdbID": "tt4116284",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"
        },
        {
            "Title": "Scary Movie 4",
            "Year": "2006",
            "imdbID": "tt0362120",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZmFkMzc2NTctN2U1Ni00MzE5LWJmMzMtYWQ4NjQyY2MzYmM1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
            "Title": "Epic Movie",
            "Year": "2007",
            "imdbID": "tt0799949",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTA3NDM5ODU3NzleQTJeQWpwZ15BbWU3MDgyMjgyNDE@._V1_SX300.jpg"
        }
      ])

  return (
    <div className='container-fluid movie-app'>
      <div className='d-flex align-items-center w-100 mt-4 mb-4'>
        <img src='./clapperboard.png' alt='logo' width="100" height="100"/>
        <Heading className='row' heading='MovieCave'/>
        <SearchBar className='row '/>
      </div>
      <div className="row">
        <MovieList movies={movies}/>
      </div>
    </div>
  )

}

export default App;
