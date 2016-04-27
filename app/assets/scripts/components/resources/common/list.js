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

var renderList = (list, props) => {	
	// Set maximum columns
	let maxcol = props.maxcol || 4;
	let classColCount = Math.floor(12/maxcol);

	return list.map((el, index) => {

		// Clearfix classes
		let breaker = "";
		breaker = (index)%maxcol == 0 ? ' floatnone floatnone__lg' : "";
		breaker = (index)%maxcol == 0 ? breaker + ' floatnone__md' : breaker;
		breaker = (index)%3 == 0 ? breaker + ' floatnone__sm' : breaker;

		// Type tooltip
		const tooltip = (
			<Tooltip id={"resource_" + el.id}>{el.format.title}</Tooltip>
		);

		return (
	      	<article className={"col-xs-12 col-sm-4 col-md-" + classColCount + " col-lg-" + classColCount + breaker} key={index}>
	      		<div className="list__element">
		      		<Link to={"/descobrir/detalhes-recurso/" + el.id}>
			      		<h1>{el.title}</h1>
			      		<p>{el.text}</p>
			      	</Link>
			      	{(() => {
			      		if (props.addscript){
			      			return <Link to={"/novoguiao/" + el.id } className="cta primary outline small">Adicionar Guião</Link>
			      		}
			      	})()}
			      	{(() => {
			      		if (props.viewmore){
			      			return <Link to={"/descobrir/detalhes-recurso/" + el.id } className="cta primary outline small">Ver Recurso</Link>
			      		}
			      	})()}		      		
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

export const ResourcesList = (props) => {

	if (!props.list || !props.list.data || props.list.fetching){
		return <div className="loading">Loading...</div>
	}

	return (
		<section className="row">
			{renderList(props.list.data, props)}
		</section>
	);
}

ResourcesList.propTypes = {
	list: React.PropTypes.object.isRequired,
	maxcol: React.PropTypes.number,
	addscript: React.PropTypes.bool,
	viewmore: React.PropTypes.bool
}