import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

export default (props) => {
	const { page, header } = props;

	if (!header){
		return <div></div>
	}

	return(
		<div className="container text-center white-text">
			<div className="col-xs-12 col-sm-8 col-sm-offset-2">
				<h1>{header.title}</h1>				
				<p>{header.description}</p>
			</div>
		</div>
	)
}