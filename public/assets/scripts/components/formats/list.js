import React from 'react';
import { Component } from 'react';
import Link from 'react-router/lib/Link'

var renderList = (list, config, onFilter) => {
	return _.sortBy(list, 'priority').map((format, index) => {
		if (index <=5){
			return (
		      	<article className="col-xs-6 col-sm-3 col-md-2 formats__element" key={format.id} onClick={() => onFilter(format)}>
					<img src={config.formatIcons+"/"+format.Image.name+"."+format.Image.extension} alt={format.Image.alt} className="img-responsive" />
					<span>{format.title}</span>
				</article>
		      );
		  }      
    });
}

export const FormatsList = (props) => {
	const { formats, config, onFilter} = props;

	if (!formats || !formats.data || formats.fetching){
		return <div></div>
	}

	return (
		<div className="container">
			<div className="row">
				{renderList(formats.data, config.data, onFilter)}
			</div>
		</div>
	);
}

FormatsList.propTypes = {
	formats: React.PropTypes.object.isRequired,
	config: React.PropTypes.object.isRequired,
	onFilter: React.PropTypes.func.isRequired
}