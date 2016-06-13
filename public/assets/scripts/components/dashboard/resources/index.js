import React, { PropTypes } from 'react';
import { Component } from 'react';
import Link from 'react-router/lib/Link'
import MyResourcesContainer from '@/containers/dashboard/myResources';
import DashboardMenuContainer from '@/containers/dashboard/menu';

import { Pagination, Alert, Button } from 'react-bootstrap';

export default (props) => {
	return (
		<div className="light__page">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-md-3">
						<DashboardMenuContainer location={props.location}/>
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