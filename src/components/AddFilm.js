import React from 'react';
import { Link } from "react-router-dom";
import Heading from './Heading';

const AddFilm = () => {
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
            <input type="text" class="form-control" id="titleInput" placeholder="Tytuł"/>
          </div>

          <div class="form-group w-50  mt-4 mb-4">
            <label for="directorInput">Reżyser</label>
            <input type="text" class="form-control" id="directorInput" placeholder="Reżyser"/>
          </div>

          <div class="form-group w-50  mt-4 mb-4">
            <label for="actorsInput">Aktorzy</label>
            <input type="text" class="form-control" id="actorsInput" placeholder="Aktorzy"/>
          </div>

          <div class="form-group w-50  mt-4 mb-4">
            <label for="languageInput">Język</label>
            <input type="text" class="form-control" id="languageInput" placeholder="Język"/>
          </div>

          <p>Kategoria</p>
          <div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="genre1" value="action"/>
              <label class="form-check-label" for="inlineCheckbox1">Akcja</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="genre2" value="animation"/>
              <label class="form-check-label" for="inlineCheckbox2">Animacja</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="genre3" value="biography"/>
              <label class="form-check-label" for="inlineCheckbox2">Biografia</label>
            </div>
          </div>
          <div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="genre4" value="document"/>
              <label class="form-check-label" for="inlineCheckbox2">Dokument</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="genre5" value="drama"/>
              <label class="form-check-label" for="inlineCheckbox2">Dramat</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="genre6" value="comedy"/>
              <label class="form-check-label" for="inlineCheckbox2">Komedia</label>
            </div>
          </div>
          <div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="genre7" value="criminal"/>
              <label class="form-check-label" for="inlineCheckbox2">Kryminał</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="genre8" value="thriller"/>
              <label class="form-check-label" for="inlineCheckbox2">Thriller</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="genre9" value="western"/>
              <label class="form-check-label" for="inlineCheckbox2">Western</label>
            </div>
          </div>

          <button style={{backgroundColor: '#d30f0f', color: '#fff', marginTop: '20px'}} type="submit" class="btn">Submit</button>

          <Link to="/">
            <button style={{marginTop: '20px', marginLeft: '20px'}} type="button" class="btn btn-secondary">Back</button>
          </Link>



        </form>
      </div>

    </div>
  );
}

export default AddFilm;
