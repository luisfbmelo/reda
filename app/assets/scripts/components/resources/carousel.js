import React from 'react';
import { Component } from 'react';
import { Carousel } from 'react-bootstrap';

var renderList = (list) => {
	return list.map((highlight) => {
      return (
      	<Carousel.Item key={highlight.id}>
	        <div className="media col-xs-9 col-sm-8 col-xs-offset-2 col-sm-offset-2">
			  <div className="media-left media__img">
			    <a href="#" className="highlights__img">
			      <img className="media-object img-responsive" src={highlight.image.src} alt={highlight.image.alt} />
			    </a>
			  </div>
			  <div className="media-body">
			    <a href="#"><h1 className="media-heading">{highlight.title}</h1></a>
			    <div className="highlights__text">
			    	{highlight.text}
			    </div>
			    <a href="#" className="cta secundary no-bg pull-right">Ler mais...</a>
			  </div>
			</div>
		</Carousel.Item>
      );
    });
}

export default (props) => {
	const settings = props.settings;
	if (!props.highlights || !props.highlights.data || props.highlights.fetching){
		return <div className="loading">Loading...</div>
	}

	return (
		<div className="container highlights">
			<Carousel interval={settings.interval} nextIcon={settings.nextIcon} prevIcon={settings.prevIcon} indicators={settings.indicators}>
				{renderList(props.highlights.data)}
			</Carousel>
		</div>
	);
}