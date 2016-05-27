'use strict';

import React from 'react';
import { Component } from 'react';
import fetch from 'isomorphic-fetch';
import { Link } from 'react-router';

import LoginButton from '@/components/auth/loginButton';
import SvgComponent from '@/components/common/svg';

export default class ContributeBlock extends Component {
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

		        this.setState(json.contribute);
			})
			.catch(message => {
				console.log(message);
			});
	}

	renderSections(){
		return this.state.sections.map((section, index) => {
	
			return(
				<div className={"col-xs-12 col-sm-6 col-md-4 block__contribute--col" + ((index==0) ? " col-md-offset-2" : null)} key={index}>
					<h2>{section.title}</h2>
					<SvgComponent element={section.icon} color="#ffffff"/>
					<p>{section.text}</p>
					{(() => {
						if (section.button.type=="login"){
							return !this.props.auth.isAuthenticated ?
								<LoginButton className="cta white outline">
									{section.button.text}
								</LoginButton>							
							: 
							<Link to="/painel" className="cta white outline">
								{section.button.text}
							</Link>
						}else if(section.button.type=="feedback"){
							return<button className="cta white outline">{section.button.text}</button>
						}
					})()}
					
				</div>
			);
		});
	}

	render() {
		if (Object.keys(this.state).length<=0){
			return null
		}

		return (
			<div className="block__contribute">
				<div className="container">
					<div className="row">
						<h1>{this.state.title}</h1>
					</div>
					<div className="row">
						{this.renderSections()}
					</div>				
				</div>
			</div>
		);
	}
}