import React from 'react';
import { Component, PropTypes } from 'react';
import Link from 'react-router/lib/Link'


// Boostrap
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

// Components
import SvgComponent from '@/components/common/svg';
import { truncate, setUrl } from '@/utils';

export const AppElement = (props) => {

	if (!props.el){
		return null
	}

	const { 
		el, 
		classColCount, 
		index, 
		maxcol, 
		config
	} = props;

	// Clearfix classes
	let breaker = "";
	breaker = (index)%maxcol == 0 ? ' floatnone floatnone__lg' : "";
	breaker = (index)%maxcol == 0 ? breaker + ' floatnone__md' : breaker;
	breaker = (index)%3 == 0 ? breaker + ' floatnone__sm' : breaker;


	// Type tooltip
	const tooltip = (
		<Tooltip id={"app_" + el.id}>{el.title}</Tooltip>
	);

	return(		
      	<article className={"col-xs-12 col-sm-4 col-md-" + classColCount + " col-lg-" + classColCount + breaker} >
      		<div className="app__element">
      			<header>
	      			<h1 title={el.title}>{truncate(el.title, 10)}</h1>		      		
	      		</header>

	      		<p>{truncate(el.description, 40)}</p>

	      		<footer className="text-center">
	      			<a href={setUrl(el.link)} className="cta primary outline" target="_blank">Download</a>
	      		</footer>	
      		</div>
		</article>		
		
	);	
}

AppElement.propTypes = {
	el: PropTypes.object.isRequired,
	maxcol: PropTypes.number,
	classColCount: PropTypes.number,
	config: PropTypes.object
}