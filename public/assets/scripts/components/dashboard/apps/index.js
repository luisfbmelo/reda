import React, { PropTypes } from 'react';
import { Component } from 'react';
import Link from 'react-router/lib/Link';

// Components
import { Pagination, Alert, Button } from 'react-bootstrap';
import AppsList from '@/containers/dashboard/apps';
import DashboardMenuContainer from '@/containers/dashboard/menu';

export default (props) => {
	return (
		<div className="light__page">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-md-3">
						<DashboardMenuContainer location={props.location}/>							
					</div>
					<div className="col-xs-12 col-md-9">
						{/* Apps List */}
						<AppsList />
					</div>
				</div>
			</div>
		</div>
	);
}