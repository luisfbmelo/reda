import React from 'react';
import { Component } from 'react';
import { Carousel } from 'react-bootstrap';

// Components
import { Link } from 'react-router';
import ProtectedButton from '../auth/protectedButton';

var renderProtected = (obj, target, el, isAuth) => {
	if (!el.protected || isAuth){
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

var renderList = (list, isAuth) => {
	return list.map((element) => {
      return (
      	<Carousel.Item key={element.id}>
	        <div className="media col-xs-9 col-sm-8 col-xs-offset-2 col-sm-offset-2">
			  <div className="media-left media__img">
			  	{
	      			renderProtected(
		      			<span className="app-carousel__img" style={{"backgroundImage": `url(${element.image.src})`}} />
			      	,"/descobrir/detalhes-recurso/" + element.id, element, isAuth)
		      	}
			  </div>
			  <div className="media-body">
			  	{
	      			renderProtected(
		      			<h1 className="media-heading">{element.title}</h1>
			      	,"/descobrir/detalhes-recurso/" + element.id, element, isAuth)
		      	}
			    <div className="app-carousel__text">
			    	{element.text}
			    </div>
			    {renderProtected(<span className="cta secundary no-bg pull-right">Ler mais...</span>, "/descobrir/detalhes-recurso/"+element.id, element, isAuth)}
			  </div>
			</div>
		</Carousel.Item>
      );
    });
}

export const AppCarousel = (props) => {
	const settings = props.settings;
	if (!props.data || !props.data.data || props.data.fetching){
		return <div></div>
	}

	return (
		<div className="container app-carousel">
			<Carousel interval={settings.interval} nextIcon={settings.nextIcon} prevIcon={settings.prevIcon} indicators={settings.indicators}>
				{renderList(props.data.data, props.isAuthenticated)}
			</Carousel>
		</div>
	);
}

AppCarousel.propTypes = {
	data: React.PropTypes.object.isRequired,
	settings: React.PropTypes.object.isRequired
}