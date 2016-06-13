import React, { PropTypes } from 'react';
import { Component } from 'react';
import Link from 'react-router/lib/Link'

// Components
import { List } from '@/components/dashboard/common/list';
import DeleteCollective from '@/components/common/deleteCollective';

// Bootstrap
import { Pagination, Alert, Button } from 'react-bootstrap';

export default class MyResources extends Component {
	constructor(props){
		super(props);
		
		//
		//	Event handlers
		//
		this.onChangePage = this.onChangePage.bind(this);
		this.onListOrder = this.onListOrder.bind(this);

		//
		// Resources actions
		// 
		this.checkAll = this.checkAll.bind(this);
		this.checkEl = this.checkEl.bind(this);
		this.deleteList = this.deleteList.bind(this);
		this.deleteSingle = this.deleteSingle.bind(this);

		//
		//	Helpers
		//
		this.requestNewData = this.requestNewData.bind(this);

		//
		//	Set state
		//
		this.state = {
			activePage: 1,
			order: "recent",
			checked: [],
			checkAll: false,
			systems: []
		}
	}

	componentDidMount(){
		// Get apps of all systems
		this.props.fetchSystems()
		.then(() => {
				return this.props.searchApps({
					activePage: 1,
					system: this.props.systems.data.map(item => item.id)
				})
			}
		)
		.then(() => {
			this.setState({
				activePage: 1,
				system: this.props.systems.data.map(item => item.id) || []
			});
		});

	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.apps.fetched;
	}

	componentDidUpdate(prevProps, prevState) {
		const { activePage, order } = this.state;

		// Request new resources if there is any change AND tags didn't change.
		// This avoids request new resources each time adding a new tag in the input. It is required to press the button
	 	if (prevState.activePage !== activePage ||
		 	prevState.order !== order){
	 		this.requestNewData();
	 	}
	}

	componentWillUnmount() {
	    this.props.resetApps();
	}

	//	Request new resources
	requestNewData(){
		const { activePage, system, order } = this.state;

    	this.props.searchApps({activePage, system, order});
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

    //	Delete list
	deleteList(list){
		this.setState({
			checked: [],
			checkAll: false
		});
		console.log(list);
		//this.props.deleteApps(list);
		this.requestNewData();
	}

	 //	Delete single
	deleteSingle(el){
		this.setState({
			checked: [],
			checkAll: false
		});
		console.log(el);
		//this.props.deleteApp(el);
		this.requestNewData();
	}

    // Check elements
    checkAll(){
    	if (!this.state.checkAll){
    		let totalIds = [];
    		for (let item of this.props.apps.data){
	    		totalIds.push(item.id);
	    	} 
	    	
	    	this.setState({
	    		checked: totalIds,
	    		checkAll: !this.state.checkAll
	    	});

    	}else{
    		this.setState({
    			checked: [],
	    		checkAll: !this.state.checkAll
	    	});
    	}
    }

    // Add or remove element from checked array
    checkEl(id){
    	let {checked} = this.state;
    	let index = checked.indexOf(id);
    	let allChecked = false;

    	// If exists, remove item and set as 
    	if (index>=0){
    		checked.splice(index,1);

    	}else{
    		checked.push(id);
    		allChecked = this.state.checkAll;
    	}

    	this.setState({
    		checked: checked,
    		checkAll: allChecked
    	})
    }

	render() {
		const { apps } = this.props;

		if (!apps.data)
			return null;
		

		return (
			<div className="apps__page">
				<div className="row">
					<div className="col-xs-12">
						<h2 className="pannel-title">Aplicações</h2>
					</div>
				</div>
				<div className="row">
				{this.props.apps && this.props.apps.data && this.props.apps.data.length > 0 ?
					<div className="col-xs-12">		
	
						<section className="row">
							<div className="col-xs-6">
								<input type="checkbox" name="selected-apps" id="selected-apps" checked={this.state.checkAll}/>
								<label htmlFor="selected-apps" onClick={this.checkAll}></label>
								<DeleteCollective className="btn btn-danger" deleteList={this.deleteList} items={this.state.checked}><i className="fa fa-trash"></i></DeleteCollective>
							</div>
							
							<div className="col-xs-6">
								{/* Ordering Options */}
							</div>
						</section>


						{/* List */}
						<List
							targetEdit={'/editarapp/'}
							list={this.props.apps} 
							checkedList={this.state.checked} 
							checkEl={this.checkEl} 
							allChecked={this.state.checkAll}
							deleteSingle={this.deleteSingle}
							/>

						{/* Pagination */}
						{(() => {
							if (apps.data && apps.data.length>0 && apps.totalPages>1){
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
	apps: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
	config: PropTypes.object.isRequired
}