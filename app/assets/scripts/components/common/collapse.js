'use strict';

import React from 'react';
import { Component } from 'react';
import { Collapse } from 'react-bootstrap';


export default class Collapsible extends Component {
	constructor(props) {
	    super(props);

	    this.state = {open: false};
	}
	render(){
		return(
			<div className="collapse-container">
				<button onClick={ ()=> this.setState({ open: !this.state.open })}>
					<span>
						{this.props.title}
					</span>
					<i className={(this.state.open) ? this.props.iconOpen : this.props.iconClosed}></i>
		        </button>
				<Collapse in={this.state.open}>
					<div>
						{this.props.children}
					</div>
				</Collapse>
			</div>
		);
	}
}

Collapsible.propTypes = {
	title: React.PropTypes.string.isRequired,
	children: React.PropTypes.object.isRequired,
	iconOpen: React.PropTypes.string.isRequired,
	iconClosed: React.PropTypes.string.isRequired
}