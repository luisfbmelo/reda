import React from 'react';
import { Component, PropTypes } from 'react';
import { Link } from 'react-router';

// Boostrap
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

// Components
import Rating from '../../common/rating';
import SvgComponent from '../../common/svg';
import ProtectedButton from '../../auth/protectedButton';

var renderProtected = (obj, target, props) => {
	if (!props.el.protected || props.isAuthenticated){
		return (
			<Link to={target}>
	      		{obj}
	      	</Link>
      	)
  	}

  	return(
		<ProtectedButton target={target}>
      		{obj}
      	</ProtectedButton>
  	);
}

export const ResourceElement = (props) => {

	if (!props.el){
		return null
	}

	const { addscript, viewmore, isAuthenticated, el, classColCount, index, maxcol } = props;

	// Clearfix classes
	let breaker = "";
	breaker = (index)%maxcol == 0 ? ' floatnone floatnone__lg' : "";
	breaker = (index)%maxcol == 0 ? breaker + ' floatnone__md' : breaker;
	breaker = (index)%3 == 0 ? breaker + ' floatnone__sm' : breaker;


	// Type tooltip
	const tooltip = (
		<Tooltip id={"resource_" + el.id}>{el.format.title}</Tooltip>
	);

	return(		
      	<article className={"col-xs-12 col-sm-4 col-md-" + classColCount + " col-lg-" + classColCount + breaker} >
      		<div className="list__element">
	      		{
	      			renderProtected(
		      			<header>
			      			<h1>{el.title}</h1>
				      		<p>{el.text}</p>
			      		</header>
			      	,"/descobrir/detalhes-recurso/" + el.id, props)
		      	}

		      	{(() => {
		      		if (addscript && isAuthenticated){
		      			return <Link to={"/novoguiao/" + el.id } className="cta primary outline small">Adicionar Guião</Link>
		      		}

		      		if ((viewmore || addscript) && (!el.protected || isAuthenticated)){
		      			return <Link to={"/descobrir/detalhes-recurso/" + el.id} className="cta primary outline small">Ver Recurso</Link>
		      		}else {
		      			return <ProtectedButton className="cta primary outline small action-btn" target={"/descobrir/detalhes-recurso/" + el.id}>Ver Recurso</ProtectedButton>
		      		}
		      	})()}	
		      	{
	      			renderProtected(
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
			      	,"/descobrir/detalhes-recurso/" + el.id, props)
		      	}
      		</div>
		</article>		
		
	);	
}

ResourceElement.propTypes = {
	el: PropTypes.object.isRequired,
	maxcol: PropTypes.number,
	addscript: PropTypes.bool,
	viewmore: PropTypes.bool,
	isAuthenticated: PropTypes.bool.isRequired,
	classColCount: PropTypes.number
}