import React, { PropTypes } from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import MyResourcesContainer from '@/containers/dashboard/myResources';
import DashboardMenuContainer from '@/containers/dashboard/menu';

import { Pagination, Alert, Button } from 'react-bootstrap';

export default class DashboardContent extends Component {
	constructor(props){
		super(props);
		this.onChangePage = this.onChangePage.bind(this);

		this.state = {
			activePage: 1
		}
	}

	componentDidMount(){
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

	render() {
		return (
			<div className="light__page">
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-md-3">
							<DashboardMenuContainer location={this.props.location}/>
							
						</div>
						<div className="col-xs-12 col-md-9">
							{/* Resources List */}
							<MyResourcesContainer />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

DashboardContent.propTypes = {
	//resources: PropTypes.object.isRequired
}