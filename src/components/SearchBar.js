import React from 'react';

const SearchBar = (props) => {
  return (
    <div className='row'>
      <div className='col-md-auto'>
        <input className='form-control' placeholder='Search a movie'/>

      </div>
      <div className='col-md-auto'>
        <button type="submit" class="btn btn-secondary"><i class="bi-search"/> Search</button>
      </div>
    </div>
  );
}

export default SearchBar;
