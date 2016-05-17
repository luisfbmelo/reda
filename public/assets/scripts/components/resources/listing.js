import React, { PropTypes } from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import { ResourcesList } from './common/list';
import ResourcesOrdering from './common/order';
import SearchBar from '../search/searchBar';
import ResourcesFilters from '../../containers/filters';
import LoginButton from '../auth/loginButton';
import ProtectedButton from '../auth/protectedButton';

import { Pagination, Alert, Button } from 'react-bootstrap';

export default class ResourcesListing extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			activePage: 1,
			keywords: [],
			order: 0
		}

		//
		//	Event Handlers
		//
		this.onChangePage = this.onChangePage.bind(this);
		this.onSearchSubmit = this.onSearchSubmit.bind(this);
		this.onListOrder = this.onListOrder.bind(this);
		this.onFilterChange = this.onFilterChange.bind(this);

		//
		//	Handle all changes
		//
		this.requestNewResources = this.requestNewResources.bind(this);
	}

	componentDidMount(){
		this.props.fetchResources('search')
		.then(() => {
			this.setState({activePage: this.props.resources.curPage || 1 });
		})
		this.props.fetchConfig();		
	}

	componentDidUpdate(prevProps, prevState) {
		const { activePage, keywords, order } = this.state;

		// If there are any changes, get new resources
	 	if(((prevState.activePage && prevState.activePage != activePage) 
	 		|| (prevState.keywords && prevState.keywords!=keywords) 
	 		|| (prevState.order && prevState.order!=order))){
	 		this.requestNewResources();
	 	}    
	}

	//
	//	REQUEST NEW RESOURCES
	//
	requestNewResources(){
		console.log(this.state);
	}

	// When filters change
	onFilterChange(filters){
		console.log(filters);
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
			order
		});
    }

    // Search resources by keyword
    onSearchSubmit(keywords){
    	this.setState({
			keywords
		});
    }

    // Alert that user is not authenticated
    renderAlert(){
    	return(
    		<section className="row">
    			<div className="col-xs-12">
		    		<Alert bsStyle="warning" className="alert">
		    			<p>Esta listagem pode conter resultados restritos ao utilizador não registado, pelo que aconselhamos que realize a sua autenticação.</p>
						<div className="text-center">
							<LoginButton className="btn btn-warning" location={this.props.location.pathname}>
								Entrar na REDA
							</LoginButton>
						</div>
		    		</Alert>
	    		</div>
    		</section>
    	);
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
							{/* Filters */}
							<ResourcesFilters onFilterChange={this.onFilterChange}/>
							
							{/* Contribute */}
							<section>
								<h6>Comece a contribuir</h6>
								{this.renderNewResourceBtn("Introduzir Recursos","novorecurso")}
							</section>
							
						</div>
						<div className="col-xs-12 col-md-9">
							{/* Search bar */}
							<SearchBar onSubmit={this.onSearchSubmit} className="resources-search" />

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
							{!this.props.auth.isAuthenticated ? this.renderAlert() : ""}

							{/* Resources List */}
							<ResourcesList list={this.props.resources} config={this.props.config.data} maxcol={3} addscript isAuthenticated={isAuthenticated} />

							{/* Pagination */}
							<Pagination
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