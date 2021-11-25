import React from 'react';
import './Heading.css'

const Heading = (props) => {

  return (
		<div className='col-6'>
			<h1>{props.heading}</h1>
		</div>
	);
}

export default Heading;
