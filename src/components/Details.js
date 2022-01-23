import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import Heading from './Heading';

const Details = () => {

  const {id} = useParams();

  const [title, setTitle] = useState();
  const [released, setReleased] = useState();
  const [runtime, setRuntime] = useState();
  const [genre, setGenre] = useState();
  const [director, setDirector] = useState();
  const [actors, setActors] = useState();
  const [plot, setPlot] = useState();
  const [language, setLanguage] = useState();
  const [country, setCountry] = useState();
  const [awards, setAwards] = useState();
  const [poster, setPoster] = useState();
  const [metascore, setMetascore] = useState();
  const [imdbRating, setImdbRating] = useState();
  const [boxOffice, setBoxOffice] = useState();

  const fetchMovie = async (id) => {
    const url = 'https://pr-movies.herokuapp.com/api/movies/'+id;// 'http://www.omdbapi.com/?i=' + id + '&apikey=88693566';
    let response = await fetch(url);
    let responseJson = await response.json();
/*
    setTitle(responseJson.Title);
    setReleased(responseJson.Released);
    setRuntime(responseJson.Runtime);
    setGenre(responseJson.Genre);
    setDirector(responseJson.Director);
    setActors(responseJson.Actors);
    setPlot(responseJson.Plot);
    setLanguage(responseJson.Language);
    setCountry(responseJson.Country);
    setAwards(responseJson.Awards);
    setPoster(responseJson.Poster);
    setMetascore(responseJson.Metascore);
    setImdbRating(responseJson.imdbRating);
    setBoxOffice(responseJson.BoxOffice);
*/

  setPoster(responseJson.image);

  }

  useEffect(() => {
    fetchMovie(id);
  }, [id]);

  return(
    <div style={{textAlign: 'center'}}>

      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} className='d-flex align-items-center w-100 mt-4 mb-4'>
        <Heading/>
      </Link>

      <h2>Details</h2>

      <img src={poster} alt='movie'/>
      <h2>Tytuł: {title}</h2>

    </div>
  );
}

export default Details;
