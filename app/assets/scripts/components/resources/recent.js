import React from 'react';
import { Component } from 'react';
import ResourcesList from './common/list';

export default class RecentResources extends Component {

	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.fetchResources();		
	}

	render() {
		if (!this.props.resources)
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
					<ResourcesList list={this.props.resources} maxcol={4} viewmore isAuthenticated={isAuthenticated} />
				</div>
			</section>
		);
	}
}

RecentResources.propTypes = {
	resources: React.PropTypes.object.isRequired
}