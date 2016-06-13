import React, { PropTypes } from 'react';
import { Component } from 'react';

// Components
import { ResourcesList } from './common/list';

export default class RelatedResources extends Component {

	constructor(props){
		super(props);

		this.fetchRelated = this.fetchRelated.bind(this);
	}

	componentDidMount(){
		let { origin } = this.props;
		this.fetchRelated(origin);
	}
	
	componentDidUpdate(prevProps, prevState) {
	    let { origin } = this.props;
	 	if (prevProps.origin != origin) {
	 		this.fetchRelated(origin);	
	 	}   
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.relatedResources.fetched;
	}

	fetchRelated(origin){
		this.props.fetchRelatedResources(origin);	
		this.props.fetchConfig();
	}

	render() {
		if (this.props.relatedResources.fetched && (!this.props.relatedResources.data || this.props.relatedResources.data.length==0))
			return null;
		
		const { isAuthenticated } = this.props.auth;

		return (
			<section className="resources__recent">
				<div className="container">
					<div className="row">
						<div className="col-xs-12 text-left">
							<h2 className="resources__title">Outros recursos relacionados</h2>
						</div>
					</div>
					<ResourcesList 
						list={this.props.relatedResources} 
						config={this.props.config.data} 
						maxcol={3} 
						viewmore 
						isAuthenticated={isAuthenticated} 
						hideOptions={true}/>
				</div>
			</section>
		);
	}
}

RelatedResources.propTypes = {
	relatedResources: PropTypes.object.isRequired,
	origin: PropTypes.string.isRequired,
	config: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
}