import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

var renderList = (list) => {
	return list.map((format) => {
      return (
      	<article className="col-xs-6 col-sm-3 col-md-2 formats__element" key={format.id}>
      		<Link to={`descobrir?formato=${format.id}`}>
				<img src={format.image.src} alt={format.image.alt} className="img-responsive" />
				<span>{format.title}</span>
			</Link>
		</article>
      );
    });
}

export const FormatsList = (props) => {
	if (!props.formats || !props.formats.data || props.formats.fetching){
		return <div className="loading">Loading...</div>
	}

	return (
		<div className="container">
			<div className="row">
				{renderList(props.formats.data)}
			</div>
		</div>
	);
}

FormatsList.propTypes = {
	formats: React.PropTypes.object.isRequired
}