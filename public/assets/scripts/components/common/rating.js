'use strict';

import React from 'react';
import Rating from 'react-rating';

export default (props) => {
	return (
		<Rating {...props} onClick={props.setRating} empty="fa fa-star-o" full="fa fa-star"/>
	);
}