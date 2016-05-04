'use strict';

import React from 'react';
import Breadcrumbs from 'react-breadcrumbs';

export const AppBreadcrumbs = (props) => {
	return (
		<div className="breadcrumbs-container">
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<Breadcrumbs {...props} customClass={"breadcrumbs" + (props.customClass ? " "+props.customClass : "")} separator=" > "/>
					</div>
				</div>
			</div>
		</div>
	);	
}

AppBreadcrumbs.propTypes = {
	customClass: React.PropTypes.string
}