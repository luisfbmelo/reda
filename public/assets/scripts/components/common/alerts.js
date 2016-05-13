'use strict';

import React from 'react';
import { Component } from 'react';


export default class AlertsBox extends Component {
	constructor(props) {
	    super(props);

	    this.setTimer = this.setTimer.bind(this);

	    this.state = {
	    	visible: false
	    }
	}

	componentDidMount(){
		this.setTimer();
	}

	componentWillReceiveProps(nextProps) {
		const { message, resultType } = this.props.alerts;

	    if (nextProps.alerts.message!=message && nextProps.alerts.resultType!=resultType){	    	
	    	this.setTimer();
	    	this.setState({visible: true});
	    }
	}

	// Set timer to hide alert box
	setTimer() {

	    // clear any existing timer
	    this._timer != null ? clearTimeout(this._timer) : null;

	    // hide after `delay` milliseconds
	    this._timer = setTimeout(function(){
	      this.setState({visible: false});
	      this._timer = null;
	      this.props.removeAlert();
	    }.bind(this), this.props.delay);
	  }

	render(){
		const { message, resultType } = this.props.alerts;
		const { visible } = this.state;

		return(
			<div className={"alert" + (resultType ? " alert-"+resultType : "") + (!message || !visible ? " hide" : "") + (message && visible ? " animate-show" : "")}>
				{message}
			</div>
		);
	}
}

AlertsBox.propTypes = {
	alerts: React.PropTypes.object.isRequired
}

AlertsBox.defaultProps = {
	delay: 5000
}