import React, { Component, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

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
    const url = 'http://www.omdbapi.com/?i=' + id + '&apikey=88693566';
    let response = await fetch(url);
    let responseJson = await response.json();

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

  }

  useEffect(() => {
    fetchMovie(id);
  }, [id]);

  return(
    <div style={{textAlign: 'center'}}>
      <h2>Details</h2>

      <img src={poster} alt='movie'/>
      <h2>Tytuł: {title}</h2>
      <h2>Wydano: {released}</h2>
      <h2>Czas trwania: {runtime}</h2>
      <h2>Reżyser: {director}</h2>
      <h2>Aktorzy: {actors}</h2>
      <h2>Fabuła: {plot}</h2>
      <h2>Język: {language}</h2>
      <h2>Kraj: {country}</h2>
      <h2>Nagrody: {awards}</h2>
      <h2>Ocena Metacritic: {metascore}</h2>
      <h2>Ocena Imdb: {imdbRating}</h2>
      <h2>Przychód: {boxOffice}</h2>

    </div>
  );
}

export default Details;
