import React from 'react';
import { Component } from 'react';

function getIcon(isHighlight){
	return (isHighlight) ? "fa-star" : "fa-star-o";
}

export default (props) => {
	return(
		<div className="media__action highlight" onClick={() => props.setHighlight(props.resourceId)} title="Recurso do Mês">
			<i className={"fa " + getIcon(props.isHighlight)}></i>
		</div>
	);
}