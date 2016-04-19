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
			    var rect = doc.querySelector("path");		    
			    rect.setAttribute("class", "");
			    rect.setAttribute("fill", elColor);
			});		
		}		
	}

	render() {
		if (!this.props.element){
			return "";
		}

		return (
			<object ref="svgElement" className="svg-element" data={this.props.element} type="image/svg+xml"></object>
		);
	}
}