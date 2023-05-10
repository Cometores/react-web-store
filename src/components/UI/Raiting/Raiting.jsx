import React from 'react';
import { ReactComponent as Star } from '../../../img/star.svg';

const Raiting = ({ num }) => {

	return (
		<div>
			{
				[...Array(num).keys()].map(i => {
					return <Star fill="black"/>
				})
			}
			{
				[...Array(5-num).keys()].map(i => {
					return <Star fill="none"/>
				})
			}
		</div>
	);
};

export default Raiting;