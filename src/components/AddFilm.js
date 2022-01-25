import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Heading from './Heading';
const axios = require('axios');

const AddFilm = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  // const navigate = useNavigate();

  const addFilm = () => {

    if(title.trim() === '' || description.trim() === '' || imageUrl === '') {
      console.log('Missing movie info!');
      return;
    };

    console.log('title: ' + title);
    console.log('description: ' + description);
    console.log('imageUrl: ' + imageUrl);


    axios({
      method: 'post',
      url: 'https://pr-movies.herokuapp.com/api/movies',
      data: {
        title: title,
        image: imageUrl,
        content: description
      }
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log('Mam Error: ' + error);
    })

  };

  return (
    <div>

      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} className='d-flex align-items-center w-100 mt-4 mb-4'>
        <Heading/>
      </Link>

      <div style={{padding: '50px'}}>
        <div style={{textAlign: 'center'}}>
          <h2> Dodawanie filmu </h2>
        </div>

        <form>
          <div class="form-group w-50 mt-4 mb-4">
            <label for="titleInput">Tytuł filmu</label>
            <input type="text" class="form-control" id="titleInput" placeholder="Tytuł" onChange={(event) => setTitle(event.target.value)} value={title}/>
          </div>

          <div class="form-group w-50  mt-4 mb-4">
            <label for="directorInput">Opis</label>
            <input type="text" class="form-control" id="descriptionInput" placeholder="Opis" onChange={(event) => setDescription(event.target.value)} value={description}/>
          </div>

          <div class="form-group w-50  mt-4 mb-4">
            <label for="actorsInput">Zdjęcie</label>
            <input type="text" class="form-control" id="imageUrlInput" placeholder="Link do zdjęcia" onChange={(event) => setImageUrl(event.target.value)} value={imageUrl}/>
          </div>
        </form>
        <button onClick={addFilm} style={{backgroundColor: '#d30f0f', color: '#fff', marginTop: '20px'}} type="submit" class="btn">Dodaj</button>

        <Link to="/">
          <button style={{marginTop: '20px', marginLeft: '20px'}} type="button" class="btn btn-secondary">Powrót</button>
        </Link>

      </div>

    </div>
  );
}

export default AddFilm;
