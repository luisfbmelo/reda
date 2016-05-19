import React from 'react';
import { Component } from 'react';
import { AppCarousel as HighlightsCarousel } from './carousel';

export default class ResourceHighlights extends Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.fetchHighlights();		
	}

	render() {
		const { data, fetched, isFetching } = this.props.highlights;

		if (!fetched || !data || data.length==0 || isFetching){
			return (
				<div className="container no-highlights-header">
					<div className="col-xs-12 text-center">
						<h1>Bem vindo à plataforma REDA</h1>						
					</div>

					<div className="col-xs-12 col-sm-6 col-sm-offset-3 text-center">
						<p>
							REDA é uma plataforma dedicada à disponibilização rápida e fácil de conteúdos educativos para qualquer aluno, professor ou utilizador, sem restrições.
						</p>					
					</div>					
				</div>
			)
		}

		var settings = {
			interval: 5000,
			indicators: true,
			nextIcon: <i className="fa fa-chevron-right" aria-hidden="true"></i>,
			prevIcon: <i className="fa fa-chevron-left" aria-hidden="true"></i>
		}

		return (
			<HighlightsCarousel data={this.props.highlights} settings={settings} isAuthenticated={this.props.auth.isAuthenticated}/>
		);
	}
}

ResourceHighlights.propTypes = {
	highlights: React.PropTypes.object.isRequired,
	auth: React.PropTypes.object.isRequired
}