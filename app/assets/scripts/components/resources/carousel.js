import React from 'react';
import { Component } from 'react';
import { Carousel } from 'react-bootstrap';

var renderList = (list) => {
	return list.map((element) => {
      return (
      	<Carousel.Item key={element.id}>
	        <div className="media col-xs-9 col-sm-8 col-xs-offset-2 col-sm-offset-2">
			  <div className="media-left media__img">
			    <a href="#" className="app-carousel__img">
			      <img className="media-object img-responsive" src={element.image.src} alt={element.image.alt} />
			    </a>
			  </div>
			  <div className="media-body">
			    <a href="#"><h1 className="media-heading">{element.title}</h1></a>
			    <div className="app-carousel__text">
			    	{element.text}
			    </div>
			    <a href="#" className="cta secundary no-bg pull-right">Ler mais...</a>
			  </div>
			</div>
		</Carousel.Item>
      );
    });
}

export const AppCarousel = (props) => {
	const settings = props.settings;
	if (!props.data || !props.data.data || props.data.fetching){
		return <div className="loading">Loading...</div>
	}

	return (
		<div className="container app-carousel">
			<Carousel interval={settings.interval} nextIcon={settings.nextIcon} prevIcon={settings.prevIcon} indicators={settings.indicators}>
				{renderList(props.data.data)}
			</Carousel>
		</div>
	);
}

AppCarousel.propTypes = {
	data: React.PropTypes.object.isRequired,
	settings: React.PropTypes.object.isRequired
}