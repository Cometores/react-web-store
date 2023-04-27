import React from 'react';
import { ReactComponent as StarIcon } from '../../../img/star.svg';

const Star = ({color}) => {
	return (
		<StarIcon width="20" heigth="20" fill={color} />
	);
};

export default Star;