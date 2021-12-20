import React from 'react';
import './Heading.css';
import logo from '../img/logo.png';

const Heading = () => {

  return (
		<div className='d-flex align-items-center w-100 mt-4 mb-4'>
      <img src={logo} alt='logo' width="100" height="100"/>
			<h1>MovieCave</h1>
		</div>
	);
}

export default Heading;
