import React from 'react';
import { Component } from 'react';
import ResourcesList from './common/list';
import ResourcesFilters from '../../containers/filters';


export default class ResourcesListing extends Component {
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
			<div className="resources__page">
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-4">
							<ResourcesFilters />
						</div>
						<div className="col-xs-12 col-sm-8">
							<h1 className="resources__title">Últimos Recursos</h1>
							<ResourcesList list={this.props.resources} maxcol="3" addscript/>
						</div>
					</div>
					
				</div>
			</div>
		);
	}
}