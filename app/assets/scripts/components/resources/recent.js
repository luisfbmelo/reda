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
			return <div>Loading...</div>;

		return (
			<div className="resources__recent">
				<div className="container">
					<div className="row">
						<div className="col-xs-12">
							<h1 className="resources__title">Últimos Recursos</h1>
						</div>
					</div>
					<ResourcesList list={this.props.resources} />
				</div>
			</div>
		);
	}
}