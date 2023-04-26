import React from 'react';
import Star from './Star';

const Raiting = ({ num }) => {

	return (
		<div>
			{
				[...Array(num).keys()].map(i => {
					return <Star color="black"/>
				})
				
			}
			{
				[...Array(5-num).keys()].map(i => {
					return <Star color="grey"/>
				})
			}
		</div>
	);
};

export default Raiting;