import React, { PropTypes, Component } from 'react';

// Components
import {Tabs, Tab} from 'react-bootstrap';

export default (props) => {
	const { tabs } = props;

	return(
		<div className="tabs-container">
			<ul class="nav nav-tabs">
			  <li role="presentation" class="active"><a href="#">Home</a></li>
			  <li role="presentation"><a href="#">Profile</a></li>
			  <li role="presentation"><a href="#">Messages</a></li>
			</ul>
		</div>
	)
}