import React, { PropTypes } from 'react';
import { Component } from 'react';
import Link from 'react-router/lib/Link'

// Components
import { ResourcesList } from './common/list';
import ResourcesOrdering from '@/components/resources/common/order';
import SearchBar from '@/components/search/searchBar';
import ResourcesFilters from '@/containers/search';
import DeleteCollectiveResources from '@/containers/resources/deleteCollective';

// Bootstrap
import { Pagination, Alert, Button } from 'react-bootstrap';

export default class MyResources extends Component {
	constructor(props){
		super(props);
		
		//
		//	Event handlers
		//
		this.onChangePage = this.onChangePage.bind(this);
		this.onChangeTags = this.onChangeTags.bind(this);
		this.onListOrder = this.onListOrder.bind(this);
		this.onSearchSubmit = this.onSearchSubmit.bind(this);
		this.setHighlight = this.setHighlight.bind(this);
		this.setFavorite = this.setFavorite.bind(this);
		this.filterList = this.filterList.bind(this);		

		//
		// Resources actions
		// 
		this.checkAllResources = this.checkAllResources.bind(this);
		this.checkEl = this.checkEl.bind(this);
		this.deleteCb = this.deleteCb.bind(this);

		//
		//	Helpers
		//
		this.requestMyResources = this.requestMyResources.bind(this);

		//
		//	Set state
		//
		this.state = {
			activePage: 1,
			tags: [],
			order: "recent",
			checkedResources: [],
			checkAll: false
		}
	}

	componentDidMount(){
		this.props.fetchMyResources()
		.then(() => {
			this.setState({activePage: this.props.resources.curPage || 1 });
		});
		this.props.fetchConfig();

		this.onChangePage(1);		
	}

	componentDidUpdate(prevProps, prevState) {
		const { activePage, tags, order } = this.state;

		// Request new resources if there is any change AND tags didn't change.
		// This avoids request new resources each time adding a new tag in the input. It is required to press the button
	 	if ((prevState.activePage !== activePage ||
		 	prevState.order !== order)
		 	&& prevState.tags==tags){
	 		this.requestMyResources();
	 	}
	}

	componentWillUnmount() {
	    this.props.resetFilters();
	    this.props.resetResources();
	}

	//	Request new resources
	requestMyResources(){
		const { activePage, tags, order } = this.state;

    	this.props.fetchMyResources({activePage, tags, order});
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
    	this.requestMyResources();
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

    //	After delete
	deleteCb(){
		this.setState({
			checkedResources: [],
			checkAll: false
		})
		this.requestMyResources();
	}

    // Check elements
    checkAllResources(){
    	if (!this.state.checkAll){
    		let totalIds = [];
    		for (let item of this.props.resources.data){
	    		totalIds.push(item.id);
	    	} 
	    	
	    	this.setState({
	    		checkedResources: totalIds,
	    		checkAll: !this.state.checkAll
	    	});

    	}else{
    		this.setState({
    			checkedResources: [],
	    		checkAll: !this.state.checkAll
	    	});
    	}
    }

    // Add or remove element from checked array
    checkEl(id){
    	let {checkedResources} = this.state;
    	let index = checkedResources.indexOf(id);
    	let allChecked = false;

    	// If exists, remove item and set as 
    	if (index>=0){
    		checkedResources.splice(index,1);

    	}else{
    		checkedResources.push(id);
    		allChecked = this.state.checkAll;
    	}

    	this.setState({
    		checkedResources: checkedResources,
    		checkAll: allChecked
    	})
    }

    // Apply Filters
    filterList(){
    	console.log("Filter");
    }

	render() {
		const { resources } = this.props;

		if (!resources.data)
			return null;
		
		const { isAuthenticated } = this.props.auth;

		return (
			<div className="resources__page my-resources">
				<div className="row">
					<div className="col-xs-12">
						<h2 className="pannel-title">Os meus recursos</h2>
					</div>
				</div>
				<div className="row">
				{this.props.resources && this.props.resources.data && this.props.resources.data.length > 0 ?
					<div className="col-xs-12">		
						<section className="row resources__page--filter">
							<div className="col-xs-12 filter-container">
								{/* Filter List */}
								<ResourcesFilters searchTags={false} buttonText="Filtrar" iconClass="fa fa-filter" onSubmit={this.filterList}/>
							</div>
						</section>				
						<section className="row resources-search">
							<div className="col-xs-12 text-center">
								{/* Search bar */}
								<SearchBar onSubmit={this.onSearchSubmit} onChangeTags={this.onChangeTags} tags={this.state.tags}/>
							</div>
						</section>
						<section className="row resources-actions">
							<div className="col-xs-6">
								<input type="checkbox" name="selected-resources" id="selected-resources" checked={this.state.checkAll}/>
								<label htmlFor="selected-resources" onClick={this.checkAllResources}></label>
								<DeleteCollectiveResources className="btn btn-danger" cb={this.deleteCb} items={this.state.checkedResources}><i className="fa fa-trash"></i></DeleteCollectiveResources>
							</div>
							
							<div className="col-xs-6">
								{/* Ordering Options */}
								<ResourcesOrdering onChange={this.onListOrder} />
							</div>
						</section>


						{/* Resources List */}
						<ResourcesList 
							config={this.props.config.data}
							list={this.props.resources} 
							user={this.props.auth.data} 
							setHighlight={this.setHighlight} 
							setFavorite={this.setFavorite}
							checkedList={this.state.checkedResources} 
							checkEl={this.checkEl} 
							allChecked={this.state.checkAll}
							deleteCb={this.deleteCb}
						/>

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
					:
					<div className="col-xs-12 text-center">
						<p>Parece que ainda não adicionou recursos na REDA.</p>
					</div>
				}
				</div>					
			</div>
		);
	}
}

MyResources.propTypes = {
	resources: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
	config: PropTypes.object.isRequired
}