import React from 'react';
import Rating from 'react-rating';

export default (props) => {
	return (
		<Rating {...props} empty="fa fa-star-o" full="fa fa-star"/>
	);
}