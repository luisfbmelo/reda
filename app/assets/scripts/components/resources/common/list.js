import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

// Boostrap
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

// Components
import Rating from '../../common/rating';
import SvgComponent from '../../common/svg';

var renderBreaker = (classes) => {
	if (classes!=null){
		return <div className={classes}></div>
	}

	return null;
}

var renderList = (list) => {	
	return list.map((el, index) => {
		// Clearfix classes
		let breaker = "";
		breaker = (index)%4 == 0 ? ' floatnone floatnone__lg' : "";
		breaker = (index)%4 == 0 ? breaker + ' floatnone__md' : breaker;
		breaker = (index)%3 == 0 ? breaker + ' floatnone__sm' : breaker;

		// Type tooltip
		const tooltip = (
			<Tooltip id={"resource_" + el.id}>{el.format.title}</Tooltip>
		);

		return (
	      	<article className={"col-xs-12 col-sm-4 col-md-3 col-lg-3" + breaker} key={index}>
	      		<div className="list__element">
		      		<Link to="descobrir">
			      		<h1>{el.title}</h1>
			      		<p>{el.text}</p>
			      	</Link>
		      		<Link to="/" className="cta primary outline small">Adicionar Guião</Link>
		      		<Link to="descobrir">
			      		<footer>
			      			<div className="rating">
			      				<Rating readonly initialRate={el.rating_avg}/>
			      			</div>
			      			
			      			<div className="type">
			      				<OverlayTrigger placement="left" overlay={tooltip}>
				      				<span>
				      					<SvgComponent element={el.format.image.src} color="#b4b4b4"/>
			      					</span>
			      				</OverlayTrigger>
			      			</div>			      			
			      		</footer>
		      		</Link>
	      		</div>
			</article>			
		);
    });
}

export default (props) => {
	if (!props.list || !props.list.data || props.list.fetching){
		return <div className="loading">Loading...</div>
	}

	return (
		<div className="row">
			{renderList(props.list.data)}
		</div>
	);
}