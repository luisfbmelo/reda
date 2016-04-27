import React, {PropTypes} from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import { ResourcesList } from './common/list';
import ResourcesOrdering from './common/order';
import SearchBar from '../search/searchBar';
import ResourcesFilters from '../../containers/filters';
import LoginButton from '../auth/loginButton';

import { Pagination, Alert, Button } from 'react-bootstrap';

export default class ResourcesListing extends Component {
	constructor(props){
		super(props);
		this.onChangePage = this.onChangePage.bind(this);

		this.state = {
			activePage: 1
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

    renderAlert(){
    	return(
    		<section className="row">
    			<div className="col-xs-12">
		    		<Alert bsStyle="warning" className="alert">
		    			<p>A listagem disponível está limitada a utilizadores não autenticados. Para obter mais recursos, é aconselhado
		que entre na plataforma.</p>
						<div className="text-center">
							<LoginButton className="btn btn-warning">
								Entrar na REDA
							</LoginButton>
						</div>
		    		</Alert>
	    		</div>
    		</section>
    	);
    }

	render() {
		if (!this.props.resources)
			return <div>Loading...</div>;
		return (
			<div className="resources__page">
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-md-3">
							{/* Filters */}
							<ResourcesFilters />
							
							{/* Contribute */}
							<section>
								<h6>Comece a contribuir</h6>
								<Link to="novorecurso" className="cta primary">
									Introduzir Recursos
								</Link>
							</section>
							
						</div>
						<div className="col-xs-12 col-md-9">
							{/* Search bar */}
							<SearchBar onSubmit={this.onSearchSubmit} className="resources-search" />

							<section className="row">
								<div className="col-xs-6">
									{/* Total Results */}
									<h4><strong>8000</strong> <span className="de-emphasize">Resultados</span></h4>
								</div>
								<div className="col-xs-6">
									{/* Ordering Options */}
									<ResourcesOrdering onChange={this.onListOrder} />
								</div>
							</section>

							{/* Warnings */}
							{!this.props.auth.isAuthenticated ? this.renderAlert() : ""}

							{/* Resources List */}
							<ResourcesList list={this.props.resources} maxcol={3} addscript/>

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
			</div>
		);
	}
}

ResourcesListing.propTypes = {
	resources: React.PropTypes.object.isRequired
}