'use strict';

import React from 'react';
import { Component } from 'react';
import { Collapse } from 'react-bootstrap';


export default class Collapsible extends Component {
	constructor(props) {
	    super(props);

	    this.state = {open: false};
	}

	componentDidMount(){
		this.setState({
			open: this.props.isOpen || false
		})
	}

	render(){
		return(
			<div className="collapse-container">
				<div className={"buttons " + this.props.className + (this.state.open ? " open" : " outline")}>
					{(() => {
						if (this.props.deleteEl){
							return <i className={this.props.deleteIcon || null} onClick={() => this.props.deleteEl()} title="Remover Guião"></i>
						}
					})()}
					<button onClick={ ()=> this.setState({ open: !this.state.open })}>
						<span>
							{this.props.title}
						</span>
						<i className={(this.state.open) ? this.props.iconOpen : this.props.iconClosed}></i>
			        </button>
		        </div>
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
	className: React.PropTypes.string,
	iconOpen: React.PropTypes.string.isRequired,
	iconClosed: React.PropTypes.string.isRequired,
	deleteEl: React.PropTypes.func,
	deleteIcon: React.PropTypes.string,
	isOpen: React.PropTypes.bool
}