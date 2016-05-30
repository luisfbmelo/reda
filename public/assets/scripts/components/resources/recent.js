import React from 'react';
import { Component } from 'react';
import { ResourcesList }  from './common/list';

export default class RecentResources extends Component {

	constructor(props){
		super(props);

		//
		//	Event handlers
		//
		this.setHighlight = this.setHighlight.bind(this);
		this.setFavorite = this.setFavorite.bind(this);
	}

	componentDidMount(){
		this.props.fetchRecent();
		this.props.fetchConfig();		
	}

	componentWillUpdate(nextProps, nextState) {
	    if (nextProps.auth.isAuthenticated != this.props.auth.isAuthenticated){
	 		this.props.fetchRecent();
	 	}  
	}

	// Set as highlighted
    setHighlight(resourceId){
    	this.props.setHighlight(resourceId);
    }

    // Set as favorite
    setFavorite(resourceId){
    	this.props.setFavorite(resourceId);
    }

	render() {
		if (!this.props.resources.data || !this.props.resources.fetched)
			return null;
		
		const { isAuthenticated } = this.props.auth;

		return (
			<section className="resources__recent">
				<div className="container">
					<div className="row">
						<div className="col-xs-12">
							<h1 className="resources__title">Últimos Recursos</h1>
						</div>
					</div>
					{this.props.resources.data.length > 0 ?
						<ResourcesList 
							list={this.props.resources} 
							config={this.props.config.data} 
							maxcol={4} 
							viewmore 
							isAuthenticated={isAuthenticated}
							setHighlight={this.setHighlight}
							setFavorite={this.setFavorite}
							/>
						:
						<p className="text-center">Ainda não existem recursos na plataforma.</p>
				}
				</div>
			</section>
		);
	}
}

RecentResources.propTypes = {
	resources: React.PropTypes.object.isRequired,
	config: React.PropTypes.object.isRequired
}