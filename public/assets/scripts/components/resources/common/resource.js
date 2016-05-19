import React from 'react';
import { Component, PropTypes } from 'react';
import { Link } from 'react-router';

// Utils
import { getAvg } from '../../../utils';

// Boostrap
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

// Components
import Rating from '../../common/rating';
import SvgComponent from '../../common/svg';
import ProtectedButton from '../../auth/protectedButton';
import IsAuthenticated from '../../../containers/auth/isAuth';
import IsAdmin from '../../../containers/auth/isAdmin';

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
  			<Link to={"/descobrir/detalhes-recurso/" + el.slug} className="cta primary outline small">Ver Recurso</Link>
  			<Link to={"/gerirguioes/" + el.id } className="cta primary outline small">Adicionar Guião</Link>
			</span>
		)
	}

	if ((viewmore || addscript) && (!el.exclusive || isAuthenticated)){
		return <Link to={"/descobrir/detalhes-recurso/" + el.slug} className="cta primary outline small">Ver Recurso</Link>
	}else {
		return <ProtectedButton className="cta primary outline small action-btn" target={"/descobrir/detalhes-recurso/" + el.slug}>Ver Recurso</ProtectedButton>
	}
}

//
//	Render favorite button
//
const renderAuthOptions = (el, isAuthenticated, setHighlight, setFavorite) => {
	return (
		<IsAuthenticated>
			<div className="list__element--fav">
				<i className={"fa fa-" + ((el.isFavorite) ? "heart" : "heart-o")} title="Favorito" onClick={()=> setFavorite(el.id)}></i>
				<IsAdmin>
					<i className={"fa fa-" + ((el.highlight) ? "star" : "star-o")} title="Recurso do Mês" onClick={()=> setHighlight(el.id)}></i>
				</IsAdmin>
			</div>
		</IsAuthenticated>
	)
}


export const ResourceElement = (props) => {

	if (!props.el){
		return null
	}

	const { addscript, viewmore, isAuthenticated, el, classColCount, index, maxcol, config, setHighlight, setFavorite } = props;

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
      			{renderAuthOptions(el, isAuthenticated, setHighlight, setFavorite)}
	      		{
	      			renderProtected(
		      			<header>
			      			<h1>{el.title}</h1>
				      		<p>{el.description}</p>
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