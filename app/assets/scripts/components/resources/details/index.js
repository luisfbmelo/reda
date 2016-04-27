import React from 'react';
import { Component } from 'react';
import MediaDisplay from './mediaDisplay';
import MediaFooter from './mediaFooter';
import TechFile from '../techFile';
import Scripts from './scripts';
import CommentForm from '../../../containers/comments/commentForm';
import CommentsList from '../../../containers/comments';
import RelatedResources from '../../../containers/resources/related';

import Rating from '../../common/rating';
import { Link } from 'react-router';

export default class ResourceDetails extends Component {
	constructor(props){
		super(props);

		this.printMeta = this.printMeta.bind(this);
		this.setFavorite = this.setFavorite.bind(this);

		this.state = {
			isFavorite: false
		}

	}

	/* Get configuration and resource data */
	componentDidMount(){		
		let { resource } = this.props.params;

		this.props.fetchConfig()
		.then(() => {
			this.props.fetchResource(resource)
			.then(() => {
				this.setState({
					isFavorite: this.props.resource.data.favorite || false
				});
			});
		})
	}

	componentWillReceiveProps(nextProps){
		// Load new data when the dataSource property changes.
	    if (nextProps.params.resource != this.props.params.resource) {
	    	this.props.fetchResource(nextProps.params.resource)
			.then(() => {
				this.setState({
					isFavorite: this.props.resource.data.favorite || false
				});
			});
	    }
	}

	printMeta(label, data){
		return (data) ? <p><strong>{label}: </strong>data</p> : "";
	}

	/* Set favorite */
	setFavorite(){
		this.setState({
			isFavorite: !this.state.isFavorite
		});

		/* CALL ACTION TO APPLY CHANGE */
	}

	render() {
		if (!this.props.config.data || !this.props.resource.data || (this.props.resource && this.props.resource.fetching)){
			return <div>Loading...</div>
		}

		const { files, graphics } = this.props.config.data;
		const resource = this.props.resource.data;
		const resId = this.props.params.resource;
		
		return (
			<div className="resource-details">
				<section className="container first-details">
					<div className="row">
						<div className="col-xs-12 col-sm-6">
							<MediaDisplay filesPath={files} graphicsPath={graphics} data={resource} />
							<MediaFooter filesPath={files} isFavorite={this.state.isFavorite} setFavorite={this.setFavorite} />
						</div>

						<div className="col-xs-12 col-sm-6">
							<h1>{resource.title}</h1>
							<div className="rating">
			      				<Rating initialRate={resource.rating_avg}/>
			      			</div>
			      			{this.printMeta("Autor", resource.author)}
			      			{this.printMeta("Organização", resource.organization)}
			      			{this.printMeta("Email", resource.email)}

			      			<p>
			      				{resource.text}
			      			</p>
						</div>
					</div>

					{/* Tech File */}
					<TechFile details={resource} />

					<div className="row">
						<div className="col-xs-12">
							<h4>Proposta de Operacionalização</h4>
						</div>
					</div>

					<div className="row details-buttons">
						<div className="col-xs-6">
							<a href="#/comments" className="cta primary pull-right">Comentar Recurso</a>
						</div>
						<div className="col-xs-6">
							<Link to={"/novoguiao/" + resId} className="cta primary">Novo Guião</Link>
						</div>
					</div>
				</section>

				{/* Scripts */}
				<Scripts data={resource} />

				{/* Comments */}
				<section className="comments">
					<div className="container">
						<div className="row">
							<div className="col-xs-12">
								<h5> Escreva o seu comentário </h5>
							</div>
						</div>

						<div className="row">
							<div className="col-xs-12">
								<CommentForm />
							</div>
						</div>

						<div className="row">
							<div className="col-xs-12">
								<CommentsList />
							</div>
						</div>
					</div>
				</section>

				<RelatedResources origin={resource}/>
			</div>
		);
	}
}