import React from 'react';
import { Component, PropTypes } from 'react';
import Link from 'react-router/lib/Link'

// Utils
import { getAvg } from '@/utils';

// Boostrap
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

// Components
import Rating from '@/components/common/rating';
import SvgComponent from '@/components/common/svg';
import ProtectedButton from '@/components/auth/protectedButton';
import IsAuthenticated from '@/containers/auth/isAuth';
import IsAdmin from '@/containers/auth/isAdmin';
import { truncate } from '@/utils';

//
//	Render button according to app status
//
const renderProtected = (obj, target, props) => {
	if (!props.el.exclusive || props.isAuthenticated){
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

//
//	Render option buttons
//
const optionsRender = (el, isAuthenticated, addscript, viewmore) => {
	if (addscript && isAuthenticated){
		return (
			<span className="list__element--buttons">
	  			<Link to={"/descobrir/detalhes-recurso/" + el.slug} className="cta primary outline no-border">Ver Recurso</Link>
	  			<Link to={"/gerirguioes/" + el.slug } className="cta primary outline no-border">Adicionar Guião</Link>
			</span>
		)
	}

	if ((viewmore || addscript) && (!el.exclusive || isAuthenticated)){
		return (
			<span className="list__element--buttons">
				<Link to={"/descobrir/detalhes-recurso/" + el.slug} className="cta primary outline no-border">Ver Recurso</Link>
			</span>
		)
	}else {
		return (
			<span className="list__element--buttons">
				<ProtectedButton className="cta primary outline no-border action-btn" target={"/descobrir/detalhes-recurso/" + el.slug}>Ver Recurso</ProtectedButton>
			</span>
		)
	}
}

//
//	Render favorite and highlight button
//
const renderAuthOptions = (el, isAuthenticated, setHighlight, setFavorite, hideOptions) => {
	if (!hideOptions){
		return (
			<IsAuthenticated>
				<div className="list__element--topicons">
					<i className={"clickable fa fa-" + ((el.isFavorite) ? "heart" : "heart-o")} title="Favorito" onClick={()=> setFavorite(el.id)}></i>
					<IsAdmin>
						<i className={"clickable fa fa-" + ((el.highlight) ? "star" : "star-o")} title="Recurso do Mês" onClick={()=> setHighlight(el.id)}></i>
					</IsAdmin>
				</div>
			</IsAuthenticated>
		)
	}

	return null;
}

//
//	Render locked icon
//
const renderLocked = (exclusive, isAuthenticated) => {
	if (exclusive && !isAuthenticated){
		return (
			<div className="list__element--topicons disabled">
				<i className="fa fa-lock" title="Exclusivo a docentes"></i>
			</div>
		)
	}

	return null;
}

export const ResourceElement = (props) => {

	if (!props.el){
		return null
	}

	const { 
		addscript, 
		viewmore, 
		isAuthenticated, 
		el, 
		classColCount, 
		index, 
		maxcol, 
		config, 
		setHighlight, 
		setFavorite,
		hideOptions
	} = props;

	// Clearfix classes
	let breaker = "";
	breaker = (index)%maxcol == 0 ? ' floatnone floatnone__lg' : "";
	breaker = (index)%maxcol == 0 ? breaker + ' floatnone__md' : breaker;
	breaker = (index)%3 == 0 ? breaker + ' floatnone__sm' : breaker;


	// Type tooltip
	const tooltip = (
		<Tooltip id={"resource_" + el.id}>{el.Format.title}</Tooltip>
	);

	return(		
      	<article className={"col-xs-12 col-sm-4 col-md-" + classColCount + " col-lg-" + classColCount + breaker} >
      		<div className="list__element">
      			{renderAuthOptions(el, isAuthenticated, setHighlight, setFavorite, hideOptions)}
      			{renderLocked(el.exclusive, isAuthenticated)}
	      		{
	      			renderProtected(
		      			<header>
			      			<h1 title={el.title}>{truncate(el.title, 10)}</h1>
				      		<p>{truncate(el.description, 40)}</p>
			      		</header>
			      	,"/descobrir/detalhes-recurso/" + el.slug, props)
		      	}

		      	{optionsRender(el, isAuthenticated, addscript, viewmore)}	

		      	{
	      			renderProtected(
		      			<footer>
			      			<div className="rating">
			      				<Rating readonly initialRate={el.ratingAvg}/>
			      			</div>
			      			
			      			<div className="type">
			      				<OverlayTrigger placement="left" overlay={tooltip}>
				      				<span>
				      					<SvgComponent element={config.formatIcons+"/"+el.Format.Image.name+"."+el.Format.Image.extension} color="#6a696a"/>
			      					</span>
			      				</OverlayTrigger>
			      			</div>			      			
			      		</footer>
			      	,"/descobrir/detalhes-recurso/" + el.slug, props)
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
	classColCount: PropTypes.number,
	config: PropTypes.object
}