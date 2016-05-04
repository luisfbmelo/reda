'user strict';


import React from 'react';
import { Component } from 'react';

export default class SvgComponent extends Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){		
		if (this.props.color){
			let elColor = this.props.color;
			this.refs.svgElement.addEventListener("load", function(){
				var doc = this.getSVGDocument();
			    var els = doc.querySelectorAll("path");		
			    for (var i=0; i < els.length; i++) {
				    els[i].setAttribute("class", "");
			    	els[i].setAttribute("fill", elColor);
				} 
			});		
		}		
	}

	render() {
		if (!this.props.element){
			return null;
		}

		return (
			<object ref="svgElement" className="svg-element" data={this.props.element} type="image/svg+xml"></object>
		);
	}
}

SvgComponent.propTypes = {
	color: React.PropTypes.string,
	element: React.PropTypes.string.isRequired
}