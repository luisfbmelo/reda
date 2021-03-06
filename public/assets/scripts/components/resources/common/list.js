import React from 'react';
import { Component, PropTypes } from 'react';
import Link from 'react-router/lib/Link'

// Boostrap
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

// Components
import { ResourceElement } from './resource';

var renderList = (list, props) => {	
	// Set maximum columns
	let maxcol = props.maxcol || 4;
	let classColCount = Math.floor(12/maxcol);

	const { addscript, viewmore, isAuthenticated, setHighlight, setFavorite, hideOptions } = props;

	return list.map((el, index) => {
		return <ResourceElement 
			maxcol={maxcol} 
			classColCount={classColCount} 
			addscript={addscript} 
			viewmore={viewmore} 
			isAuthenticated={isAuthenticated} 
			el={el} 
			index={index} 
			key={index} 
			config={props.config}
			setHighlight={setHighlight}
			setFavorite={setFavorite}
			hideOptions={hideOptions}
		/>
    });
}

export const ResourcesList = (props) => {	
	if (!props.list || !props.list.data || props.list.fetching || props.list.data.length==0){
		return <p className="text-center">Ainda não existem recursos na plataforma.</p>;
	}

	return(
		<section className="row">
			{renderList(props.list.data, props)}
		</section>
	);
}

ResourcesList.propTypes = {
	list: PropTypes.object.isRequired,
	maxcol: PropTypes.number,
	addscript: PropTypes.bool,
	viewmore: PropTypes.bool,
	isAuthenticated: PropTypes.bool.isRequired,
	hideOptions: PropTypes.bool
}