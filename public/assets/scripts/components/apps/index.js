import React, { PropTypes } from 'react';
import { Component } from 'react';
import Link from 'react-router/lib/Link'
import _ from 'lodash';

// Components
//import ResourcesFilters from '@/containers/filters';
import { Pagination, Alert, Button } from 'react-bootstrap';
import { AppsList } from './common/list';
import SystemsTabs from './systems';

export default class AppsListing extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			activePage: 1,
			filters: {},
			system: null
		}

		//
		//	Event Handlers
		//
		this.onChangePage = this.onChangePage.bind(this);
		this.onSearchSubmit = this.onSearchSubmit.bind(this);
		this.onFilterChange = this.onFilterChange.bind(this);
		this.onSystemChange = this.onSystemChange.bind(this);

		//
		//	Handle all changes
		//
		this.requestNewApps = this.requestNewApps.bind(this);
	}

	componentDidMount(){
		this.props.resetFilters();

		// If there is any search, don't search again.
		// Else, do!
		if (!this.props.apps.fetched || this.props.apps.total==null || this.props.apps.total==undefined){
			this.props.fetchSystems()
			.then(() => {
				this.setState({
					system: this.props.systems.data[0].id || null
				})
				return this.props.searchApps(this.state);
			})
			.then(() => {
				this.setState({
					activePage: this.props.apps.curPage || 1
				})					
			})
		}

		// Get configurations
		this.props.fetchConfig();		
	}

	// Clear resources on unmount
	componentWillUnmount() {
		this.props.setFilters(this.state);
		localStorage.setItem('app_filters', null);

	 	this.props.resetApps();     
	}

	componentDidUpdate(prevProps, prevState) {
		// Request new resources if there is any change AND tags didn't change.
		// This avoids request new resources each time adding a new tag in the input. It is required to press the button
	 	if (JSON.stringify(prevState) !== JSON.stringify(this.state)){
	 		this.requestNewApps();
	 	}
	}

	//
	//	REQUEST NEW RESOURCES
	//
	requestNewApps(){
		this.props.setFilters(this.state);
		this.props.searchApps(this.state);
	}

	// When system change
	onSystemChange(system){
		this.setState({system, activePage: 1});
	}

	// When filters change
	onFilterChange(filters){
		this.setState({filters, activePage: 1});
	}

	// Handle pagination
	onChangePage(event, selectedEvent) {
		if (selectedEvent){
			this.setState({
				activePage: selectedEvent.eventKey
			});
		}		
    }

    // Search resources by keyword
    onSearchSubmit(){
    	this.requestNewApps();
    }


	render() {
		const { apps } = this.props;

		if (!apps.data)
			return null;
		
		const { isAuthenticated } = this.props.auth;

		return (
			<div className="apps__page light-background">
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-md-3">

						</div>

						<div className="col-xs-12 col-md-9">
							<SystemsTabs setTab={this.onSystemChange} tabs={this.props.systems.data} curTab={this.state.system}/>

							{/* Apps List */}
							<AppsList 
								list={apps} 
								config={this.props.config.data} 
								maxcol={3}
								/>
								

							{/* Pagination */}
							{(() => {
								if (apps.data && apps.data.length>0){
									return <Pagination
									        prev
									        next
									        first
									        last
									        ellipsis
									        boundaryLinks
									        items={apps.totalPages}
									        maxButtons={5}
									        activePage={this.state.activePage}
									        onSelect={this.onChangePage} />
								}
							})()}
							
						</div>
					</div>
					
				</div>
			</div>
		);
	}
}

AppsListing.propTypes = {
	apps: PropTypes.object.isRequired,
	config: PropTypes.object.isRequired
}

AppsListing.contextTypes = {
  router: PropTypes.object
}