import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

var renderList = (list, config) => {
	return _.sortBy(list, 'priority').map((format, index) => {
		if (index <=5){
			return (
		      	<article className="col-xs-6 col-sm-3 col-md-2 formats__element" key={format.id}>
		      		<Link to={`descobrir?formato=${format.id}`}>
						<img src={config.formatIcons+"/"+format.Image.name+"."+format.Image.extension} alt={format.Image.alt} className="img-responsive" />
						<span>{format.title}</span>
					</Link>
				</article>
		      );
		  }      
    });
}

export const FormatsList = (props) => {
	if (!props.formats || !props.formats.data || props.formats.fetching){
		return <div></div>
	}

	return (
		<div className="container">
			<div className="row">
				{renderList(props.formats.data, props.config.data)}
			</div>
		</div>
	);
}

FormatsList.propTypes = {
	formats: React.PropTypes.object.isRequired
}