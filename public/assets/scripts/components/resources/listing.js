import React, { PropTypes } from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

// Components
import { ResourcesList } from './common/list';
import ResourcesOrdering from './common/order';
import SearchBar from '@/components/search/searchBar';
import ResourcesFilters from '@/containers/filters';
import IsNotAuthenticated from '@/containers/auth/isNotAuth';
import LoginButton from '@/components/auth/loginButton';
import ProtectedButton from '@/components/auth/protectedButton';
import AlertLogin from './common/alertLogin';
import { Pagination, Alert, Button } from 'react-bootstrap';

export default class ResourcesListing extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			activePage: 1,
			tags: [],
			order: "recent",
			filters: {}
		}

		//
		//	Event Handlers
		//
		this.onChangePage = this.onChangePage.bind(this);
		this.onChangeTags = this.onChangeTags.bind(this);
		this.onSearchSubmit = this.onSearchSubmit.bind(this);
		this.onListOrder = this.onListOrder.bind(this);
		this.onFilterChange = this.onFilterChange.bind(this);
		this.setHighlight = this.setHighlight.bind(this);
		this.setFavorite = this.setFavorite.bind(this);

		//
		//	Handle all changes
		//
		this.requestNewResources = this.requestNewResources.bind(this);
	}

	componentDidMount(){
		// If there is any search, don't search again.
		// Else, do!
		if (!this.props.resources.fetched || this.props.resources.total==null || this.props.resources.total==undefined){
			this.props.fetchResources('search')
			.then(() => {
				// Reset all filters and set current page if new request
				this.props.resetFilters();
				this.setState({activePage: this.props.resources.curPage || 1 });
			})
		}else{
			this.setState({
				activePage: 1,
				tags: this.props.filters.filters && this.props.filters.filters.tags ? this.props.filters.filters.tags : []
			});
		}

		// Get configurations
		this.props.fetchConfig();		
	}

	// Clear resources on unmount
	componentWillUnmount() {
	 	this.props.resetResources();     
	}

	componentDidUpdate(prevProps, prevState) {
		const { activePage, tags, order } = this.state;

		// Request new resources if there is any change AND tags didn't change.
		// This avoids request new resources each time adding a new tag in the input. It is required to press the button
	 	if (JSON.stringify(prevState) !== JSON.stringify(this.state) && prevState.tags==tags){
	 		this.requestNewResources();
	 	}
	}

	//
	//	REQUEST NEW RESOURCES
	//
	requestNewResources(){
		this.props.searchResources(this.state);
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

    // Handle list ordering
    onListOrder(order){
    	this.setState({
			order,
			activePage: 1
		});
    }

    // Search resources by keyword
    onSearchSubmit(){
    	this.requestNewResources();
    }

    // Handle tags change to search by tag
    onChangeTags(tags){
    	this.setState({
			tags,
			activePage: 1
		});
    }

    // Set as highlighted
    setHighlight(resourceId){
    	this.props.setHighlight(resourceId);
    }

    // Set as favorite
    setFavorite(resourceId){
    	this.props.setFavorite(resourceId);
    }

    // Alert that user is not authenticated
    renderAlert(){
    	return <AlertLogin location={this.props.location}></AlertLogin>
    }

    // Render new resource button according to auth
    renderNewResourceBtn(obj, target){
		if (this.props.auth.isAuthenticated){
			return (
				<Link to={target} className="cta primary">
		      		{obj}
		      	</Link>
	      	)
	  	}

	  	return(
			<ProtectedButton target={target} className="cta primary">
	      		{obj}
	      	</ProtectedButton>
	  	);
	}

	render() {
		const { resources } = this.props;

		if (!resources.data)
			return null;
		
		const { isAuthenticated } = this.props.auth;

		return (
			<div className="resources__page">
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-md-3">
							{/* Filters and search */}							
							<SearchBar onSubmit={this.onSearchSubmit} onChangeTags={this.onChangeTags} tags={this.state.tags} className="filter-search-container" />
							<ResourcesFilters onFilterChange={this.onFilterChange}/>

							{/* Contribute */}
							<section className="contribute-button">
								<h6>Comece a contribuir</h6>
								{this.renderNewResourceBtn("Introduzir Recursos","novorecurso")}
							</section>
							
						</div>
						<div className="col-xs-12 col-md-9">
							{/* Search bar */}
							<SearchBar onSubmit={this.onSearchSubmit} onChangeTags={this.onChangeTags} tags={this.state.tags} className="resources-search" />

							<section className="row">
								<div className="col-xs-6">
									{/* Total Results */}
									<h4><strong>{resources.total}</strong> <span className="de-emphasize">Resultados</span></h4>
								</div>
								<div className="col-xs-6">
									{/* Ordering Options */}
									<ResourcesOrdering onChange={this.onListOrder} />
								</div>
							</section>

							{/* Warnings */}
							<IsNotAuthenticated>
								{this.renderAlert()}
							</IsNotAuthenticated>

							{/* Resources List */}
							<ResourcesList 
								list={resources} 
								config={this.props.config.data} 
								maxcol={3} 
								addscript 
								isAuthenticated={isAuthenticated} 
								setHighlight={this.setHighlight} 
								setFavorite={this.setFavorite}
								/>

							{/* Pagination */}
							{(() => {
								if (resources.data && resources.data.length>0){
									return <Pagination
									        prev
									        next
									        first
									        last
									        ellipsis
									        boundaryLinks
									        items={resources.totalPages}
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

ResourcesListing.propTypes = {
	resources: PropTypes.object.isRequired,
	config: PropTypes.object.isRequired
}