import React from 'react';
import './Heading.css'

const Heading = (props) => {

  return (
		<div className='d-flex align-items-center w-100 mt-4 mb-4'>
      <img src='./logo.png' alt='logo' width="100" height="100"/>
			<h1>{props.heading}</h1>
		</div>
	);
}

export default Heading;
