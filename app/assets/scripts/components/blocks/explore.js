'use strict';

import React from 'react';
import { Component } from 'react';
import fetch from 'isomorphic-fetch';
import { Link } from 'react-router';

export default class ExploreBlock extends Component {
	constructor(props){
		super(props);

		this.state = {};
	}

	componentDidMount(){
		return fetch('/assets/scripts/dummy.json')
			.then(response => {
				if (response.status >= 400) {
		          throw new Error('Bad response');
		        }

		        return response.json();
		        
			})
			.then(json => {
				if (!json.explore)
		        	throw new Error('No data');

		        this.setState(json.explore);
			})
			.catch(message => {
				console.log(message);
			});
	}

	render() {
		if (Object.keys(this.state).length<=0){
			return null
		}

		return (
			<div className="block__explore">
				<div className="block__side block__side--left">
					<div className="bg-container" style={{"backgroundImage": `url(${this.state.image.src})`}}>&nbsp;</div>
				</div>
				<div className="block__side block__side--right block__side--text">
					<h1>{this.state.title}</h1>
					<span dangerouslySetInnerHTML={{__html: this.state.text}}></span>
					<Link to="experimenta" className="cta primary outline">{this.state.button}</Link>
				</div>
				
			</div>
		);
	}
}