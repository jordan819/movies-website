import React from 'react';

const SearchBar = (props) => {
  return (
      <div className='col col-sm-4'>
        <input
          className='form-control'
          placeholder='Search a movie'
          value={props.value}
          onChange={(event) => props.setSearchValue(event.target.value)}
        ></input>
      </div>

  );
}

export default SearchBar;
