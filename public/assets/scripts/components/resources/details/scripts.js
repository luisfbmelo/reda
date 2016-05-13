import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';

export default (props) => {
	return(
		<section className="scripts-detail">
			<div className="container">
				<Tabs defaultActiveKey={1}>
					<Tab eventKey={1} title="Guião 1">
						<h4 className="text-center">Guião 1</h4>
						<div className="row">
							<div className="col-xs-12 col-sm-4">
								/* Author */
							</div>
							<div className="col-xs-12 col-sm-4">
								/* email */
							</div>
							<div className="col-xs-12 col-sm-4">
								/* organization */
							</div>
						</div>

						<div className="row">
							<div className="col-xs-12">
								/* Op Proposal*/
							</div>
						</div>

						<div className="row">
							<div className="col-xs-6 col-sm-3">
								/* More details */
							</div>
						</div>
					</Tab>
				    <Tab eventKey={2} title="Guião 2">Tab 2 content</Tab>
				    <Tab eventKey={3} title="Guião 3">Tab 3 content</Tab>
				</Tabs>
			</div>
		</section>
	);
}