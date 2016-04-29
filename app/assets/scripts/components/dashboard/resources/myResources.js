import React, { PropTypes } from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import { ResourcesList } from './common/list';
import ResourcesOrdering from '../../resources/common/order';
import SearchBar from '../../search/searchBar';

import { Pagination, Alert, Button } from 'react-bootstrap';

export default class MyResources extends Component {
	constructor(props){
		super(props);
		
		this.onChangePage = this.onChangePage.bind(this);
		this.setHighlight = this.setHighlight.bind(this);

		this.state = {
			activePage: 1
		}
	}

	componentDidMount(){
		this.props.fetchResources();
		this.onChangePage(1);		
	}

	// Handle pagination
	onChangePage(event, selectedEvent) {
		if (selectedEvent){
			this.setState({
				activePage: selectedEvent.eventKey
			});
		}		
    }

    // Handle list ordering
    onListOrder(order){
    	console.log(order);
    }

    // Search resources by keyword
    onSearchSubmit(keyword){
    	console.log(keyword);
    }

    setHighlight(resourceId){
    	/* REQUEST UPDATE AS HIGHLIGHT AND GET THE NEW ITEM IN THE REDUCER IN ORDER TO RE-RENDER */
    	//console.log(this.props);
    	this.props.setHighlight(resourceId);
    }


	render() {
		if (!this.props.resources)
			return null;
		
		const { isAuthenticated } = this.props.auth;

		return (
			<div className="resources__page">
				<div className="row">
					<div className="col-xs-12">
						<h2>Os meus recursos</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">						
						<section className="row">
							<div className="col-xs-12 text-center">
								{/* Search bar */}
								<SearchBar onSubmit={this.onSearchSubmit} className="resources-search" />
							</div>
						</section>
						<section className="row resources-actions">
							<div className="col-xs-6">
								Eliminar
							</div>
							
							<div className="col-xs-6">
								{/* Ordering Options */}
								<ResourcesOrdering onChange={this.onListOrder} />
							</div>
						</section>


						{/* Resources List */}
						<ResourcesList list={this.props.resources} user={this.props.auth.data} setHighlight={this.setHighlight}/>

						{/* Pagination */}
						<Pagination
					        prev
					        next
					        first
					        last
					        ellipsis
					        boundaryLinks
					        items={20}
					        maxButtons={5}
					        activePage={this.state.activePage}
					        onSelect={this.onChangePage} />
					</div>
				</div>					
			</div>
		);
	}
}

MyResources.propTypes = {
	resources: PropTypes.object.isRequired
}