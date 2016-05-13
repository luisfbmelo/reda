import React, { PropTypes } from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

// Components
import { ResourcesList } from './common/list';
import ResourcesOrdering from '../../resources/common/order';
import SearchBar from '../../search/searchBar';
import ResourcesFilters from '../../../containers/search';

// Bootstrap
import { Pagination, Alert, Button } from 'react-bootstrap';

export default class MyResources extends Component {
	constructor(props){
		super(props);
		
		this.onChangePage = this.onChangePage.bind(this);
		this.setHighlight = this.setHighlight.bind(this);
		this.filterList = this.filterList.bind(this);

		// Resources actions
		this.checkAllResources = this.checkAllResources.bind(this);
		this.checkEl = this.checkEl.bind(this);
		this.delList = this.delList.bind(this);
		this.delEl = this.delEl.bind(this);

		this.state = {
			activePage: 1,
			checkedResources: [],
			checkAll: false
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

    // Set as highlighted
    setHighlight(resourceId){
    	/* REQUEST UPDATE AS HIGHLIGHT AND GET THE NEW ITEM IN THE REDUCER IN ORDER TO RE-RENDER */
    	//console.log(this.props);
    	this.props.setHighlight(resourceId);
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

    delList(){
    	console.log(this.state.checkedResources);
    }

    delEl(id){
    	console.log(id);
    }

    filterList(){
    	console.log("Filter");
    }

	render() {
		if (!this.props.resources)
			return null;
		
		const { isAuthenticated } = this.props.auth;

		return (
			<div className="resources__page">
				<div className="row">
					<div className="col-xs-12">
						<h2 className="pannel-title">Os meus recursos</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">		
						<section className="row">
							<div className="col-xs-12 filter-container">
								{/* Filter List */}
								<ResourcesFilters searchKeywords={false} buttonText="Filtrar" iconClass="fa fa-filter" onSubmit={this.filterList}/>
							</div>
						</section>				
						<section className="row">
							<div className="col-xs-12 text-center">
								{/* Search bar */}
								<SearchBar onSubmit={this.onSearchSubmit} className="resources-search" />
							</div>
						</section>
						<section className="row resources-actions">
							<div className="col-xs-6">
								<input type="checkbox" name="selected-resources" id="selected-resources" checked={this.state.checkAll}/>
								<label htmlFor="selected-resources" onClick={this.checkAllResources}></label>
								<button className="btn btn-danger"><i className="fa fa-trash"></i></button>
							</div>
							
							<div className="col-xs-6">
								{/* Ordering Options */}
								<ResourcesOrdering onChange={this.onListOrder} />
							</div>
						</section>


						{/* Resources List */}
						<ResourcesList 
							list={this.props.resources} 
							user={this.props.auth.data} 
							setHighlight={this.setHighlight} 
							checkedList={this.state.checkedResources} 
							checkEl={this.checkEl} 
							allChecked={this.state.checkAll}
							delEl={this.delEl}
						/>

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