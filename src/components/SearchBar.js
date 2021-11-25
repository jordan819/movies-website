import React from 'react';

const SearchBar = (props) => {
  return (
      <div className='col col-sm-4'>
        <input
          className='form-control'
          placeholder='Search a movie'
        ></input>
      </div>

  );
}

export default SearchBar;
