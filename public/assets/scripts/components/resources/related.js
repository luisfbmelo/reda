import React from 'react';
import { Component } from 'react';
import { ResourcesList } from './common/list';

export default class RecentResources extends Component {

	constructor(props){
		super(props);
	}

	componentDidMount(){
		let { resource } = this.props;
		this.props.fetchRelatedResources(resource);		
	}

	render() {
		if (!this.props.relatedResources)
			return null;
		
		const { isAuthenticated } = this.props.auth;

		return (
			<section className="resources__recent">
				<div className="container">
					<div className="row">
						<div className="col-xs-12 text-left">
							<h2 className="resources__title">Outros recursos relacionados</h2>
						</div>
					</div>
					<ResourcesList list={this.props.relatedResources} maxcol={3} viewmore isAuthenticated={isAuthenticated}/>
				</div>
			</section>
		);
	}
}

RecentResources.propTypes = {
	relatedResources: React.PropTypes.object.isRequired,
	origin: React.PropTypes.object.isRequired
}