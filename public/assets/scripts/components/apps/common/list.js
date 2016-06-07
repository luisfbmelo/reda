import React from 'react';
import { Component, PropTypes } from 'react';
import Link from 'react-router/lib/Link';

// Components
import SvgComponent from '@/components/common/svg';
import { AppElement } from './single';

var renderList = (list, props) => {	
	// Set maximum columns
	let maxcol = props.maxcol || 4;
	let classColCount = Math.floor(12/maxcol);

	return list.map((el, index) => {
		return <AppElement 
			maxcol={maxcol} 
			classColCount={classColCount} 
			el={el} 
			index={index} 
			key={index} 
			config={props.config}
		/>
    });
}

export const AppsList = (props) => {	
	if (!props.list || !props.list.data || !props.list.fetched){
		return <div></div>;
	}

	return(
		<section className="row">
			{renderList(props.list.data, props)}
		</section>
	);
}

AppsList.propTypes = {
	list: PropTypes.object.isRequired,
	maxcol: PropTypes.number
}