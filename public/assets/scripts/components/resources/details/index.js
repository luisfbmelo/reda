import React from 'react';
import { Component, PropTypes } from 'react';
import { Link } from 'react-router';

// Utils
import { getAvg } from '../../../utils';

// Components
import MediaDisplay from './mediaDisplay';
import MediaFooter from './mediaFooter';
import TechFile from '../techFile';
import Scripts from './scripts';
import CommentForm from '../../../containers/comments/commentForm';
import CommentsList from '../../../containers/comments';
import RelatedResources from '../../../containers/resources/related';
import Rating from '../../common/rating';
import DeleteResource from '../../../containers/resources/deleteResource';
import IsAuthenticated from '../../../containers/auth/isAuth';
import IsAdmin from '../../../containers/auth/isAdmin';

export default class ResourceDetails extends Component {
	constructor(props){
		super(props);

		//
		//	Helpers
		//
		this.requiresAuth = this.requiresAuth.bind(this);
		this.scrollToComments = this.scrollToComments.bind(this);

		//
		//	Event handlers
		//	
		this.setFavorite = this.setFavorite.bind(this);
		this.setRating = this.setRating.bind(this);
		this.deleteCb = this.deleteCb.bind(this);

		//
		//	Renders
		//
		this.printMeta = this.printMeta.bind(this);

		this.state = {
			isFavorite: false
		}
	}

	/* Get configuration and resource data */
	componentDidMount(){		
		let { resource } = this.props.params;

		this.props.fetchResource(resource)
		.then(() => {

			// If this requires auth and not authed, go back
			if (this.requiresAuth() || this.props.resource.errorMessage){
				this.context.router.push('/descobrir');

			// If allowed, get the favorite
			}else{
				this.setState({
					isFavorite: this.props.resource.data.favorite || false
				});	

				this.props.fetchScripts(this.props.resource.data.id);
			}
		});

		this.props.fetchConfig();	

	}

	componentWillReceiveProps(nextProps){
		// Load new data when the dataSource property changes.
		// This is used for rating or favorite
	    if (nextProps.params.resource != this.props.params.resource) {
	    	this.props.fetchResource(nextProps.params.resource)
			.then(() => {
				this.setState({
					isFavorite: this.props.resource.data.favorite || false
				});
			});
	    }
	}

	requiresAuth(){
		// If no Auth and is protected and finished fetching
		if (this.props.resource.data && !this.props.auth.isAuthenticated && this.props.resource.data.exclusive){
			return true;
		}
		return false;
	}

	printMeta(label, data){
		return (data) ? <p><strong>{label}: </strong>
		{(() => { 
			if(label=='Email'){
		 		return <a href={"mailto:"+data}>{data}</a>
			}
			return data 
		})()}
		</p> : '';
	}

	// Set as favorite
	setFavorite(){
		this.setState({
			isFavorite: !this.state.isFavorite
		});

		/* CALL ACTION TO APPLY CHANGE */
	}

	//	After delete
	deleteCb(){
		this.context.router.push('/descobrir');
	}

	// Set rating for this resource
	setRating(rate){
		console.log(rate);
	}

	//	Scroll to comments
	scrollToComments(){
		var el = document.getElementById("comentar");        
		var total = el.offsetTop;
		window.scrollTo(0,total);
	}

	render() {
		const { config, resource, auth, params } = this.props;

		if (!config.data || !resource.data || (resource && !resource.fetched)){
			return null
		}

		const { scripts } = this.props;

		const { files, graphics } = config.data;
		const resourceInfo = resource.data;
		const resId = params.resource;
		const { isAuthenticated } = auth;

		return (
			<div className="resource-details">
				<section className="container first-details">
					<div className="row">
						<div className="col-xs-12 col-sm-6">
							<MediaDisplay 
								filesPath={files+"/"+resourceInfo.slug} 
								graphicsPath={graphics} 
								type={resourceInfo.Format.type} 
								file={resourceInfo.Files[0]} 
								embed={resourceInfo.embed} />
							<MediaFooter 
								graphicsPath={graphics} 
								filesPath={files+"/"+resourceInfo.slug} 
								isFavorite={this.state.isFavorite} 
								setFavorite={this.setFavorite} 
								file={resourceInfo.Files[0]} 
								url={resourceInfo.link}/>
						</div>

						<div className="col-xs-12 col-sm-6">
							<h1>{resourceInfo.title}</h1>

							{/* Admin features */}
							<IsAuthenticated>
								{(auth.data.user.id == resourceInfo.user_id || auth.data.user.role=='admin') &&
									<div className="row">
										<div className="col-xs-12 admin-features">										
											<Link to={"/editarrecurso/" + resourceInfo.slug} className="cta primary no-bg small">Editar</Link>
											<DeleteResource className="cta primary no-bg small" cb={this.deleteCb} item={resourceInfo.slug}>Eliminar</DeleteResource>
										</div>
									</div>
								}
							</IsAuthenticated>

							{/* Rating */}
							<div className="rating">
			      				<Rating initialRate={resourceInfo.ratingAvg} setRating={this.setRating} readonly={!isAuthenticated}/>
			      			</div>			      			

			      			{/* Authenticated feature */}
			      			<IsAuthenticated>
								<div className="row details-buttons">
									<div className="col-xs-12">
										<button className="cta primary outline small" onClick={this.scrollToComments}>Comentar Recurso</button>
										<Link to={"/gerirguioes/" + resourceInfo.slug} className="cta primary outline small">Novo Guião</Link>
									</div>
								</div>
							</IsAuthenticated>

			      			{this.printMeta("Autor", resourceInfo.author)}
			      			{this.printMeta("Organização", resourceInfo.organization)}
			      			{this.printMeta("Email", resourceInfo.email)}

			      			<p>
			      				{resourceInfo.description}
			      			</p>
						</div>
					</div>

					{/* Tech File */}
					<TechFile details={resourceInfo} />

					<div className="row">
						<div className="col-xs-12 op-proposal">
							<h4>Proposta de Operacionalização</h4>
							<p>
								{resourceInfo.operation}
							</p>
							<small>-- {resourceInfo.operation_author}</small>
						</div>
					</div>
				</section>

				{/* Scripts */}
				<Scripts data={scripts.data} resourceId={resourceInfo.id} />

				{/* Comments */}
				<section className="comments" id="comentar">
					<div className="container">
						<div className="row">
							<div className="col-xs-12">
								<h1 className="text-center">Comentários</h1>
							</div>
						</div>
						<IsAuthenticated>
							<div className="row">
								<div className="col-xs-12">
									<h5> Escreva o seu comentário </h5>
								</div>
							</div>
						</IsAuthenticated>
						<IsAuthenticated>
							<div className="row">
								<div className="col-xs-12">
									<CommentForm />
								</div>
							</div>
						</IsAuthenticated>

						<div className="row">
							<div className="col-xs-12">
								<CommentsList source={resourceInfo.slug}/>
							</div>
						</div>
					</div>
				</section>

				<RelatedResources origin={resourceInfo.slug}/>
			</div>
		);
	}
}

ResourceDetails.contextTypes = {
  router: PropTypes.object
}