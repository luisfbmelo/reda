import React from 'react';
import Breadcrumbs from 'react-breadcrumbs';

export default (props) => {
	return (
		<div className="light-background">
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