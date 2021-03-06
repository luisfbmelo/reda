import React from 'react';
import { Component, PropTypes } from 'react';
import Link from 'react-router/lib/Link'

// Actions
import * as alertMessages from '@/actions/message-types';

// Utils
import { getAvg } from '@/utils';

// Components
import MediaDisplay from './mediaDisplay';
import MediaFooter from './mediaFooter';
import TechFile from '../techFile';
import Scripts from './scripts';
import CommentForm from '@/containers/comments/commentForm';
import CommentsList from '@/containers/comments';
import RelatedResources from '@/containers/resources/related';
import Rating from '@/components/common/rating';
import DeleteResource from '@/containers/resources/deleteResource';
import IsAuthenticated from '@/containers/auth/isAuth';
import IsAdmin from '@/containers/auth/isAdmin';

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
		this.setHighlight = this.setHighlight.bind(this);
		this.setRating = this.setRating.bind(this);
		this.deleteCb = this.deleteCb.bind(this);
		this.fetchResourceData = this.fetchResourceData.bind(this);

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
		this.fetchResourceData(resource);
	}

	componentDidUpdate(prevProps, prevState) {
	    let { resource } = this.props.params;
	 	if (prevProps.params.resource != resource) {
	 		this.fetchResourceData(resource);
	 	}   
	}

	//
	//	Fetch data
	//
	fetchResourceData(resource){
		
		this.props.fetchResource(resource)
		.then(() => {
			
			// If this requires auth and not authed, go back
			if (this.requiresAuth() || this.props.resource.errorMessage || (!this.props.resource.data && this.props.resource.fetched)){
				
				this.props.addAlert(alertMessages.ALERT_RESOURCE_ACCESS_ERROR, alertMessages.ERROR)
				this.context.router.push('/descobrir');

				// Reset resource because if there is any error,
				// the next time the user tries to access after login, 
				// we assure that it will not be redirected again
				this.props.resetResource();

			// If allowed, get the favorite
			}else{
				this.props.fetchScripts(this.props.resource.data.id);
			}
		})
		.catch((err) => {
			this.context.router.goBack();
		})

		this.props.fetchConfig();
	}

	//
	//	This resource is exclusive?
	//
	requiresAuth(){
		// If no Auth and is protected and finished fetching
		if (this.props.resource.data && !this.props.auth.isAuthenticated && this.props.resource.data.exclusive){
			return true;
		}
		return false;
	}

	//
	//	Print meta data
	//
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
	setFavorite(resourceId){
    	//this.props.setFavorite(resourceId);
    }

    // Set as highlight
	setHighlight(resourceId){
    	//this.props.setHighlight(resourceId);
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

		if ((resource && (!resource.fetched || !resource.data))){
			return null
		}

		const { scripts } = this.props;

		const { files, graphics, icons_placeholder } = config.data;
		const resourceInfo = resource.data;
		const resId = params.resource;
		const { isAuthenticated } = auth;

		return (
			<div className="resource-details">
				<section className="container first-details">
					<div className="row">
						<div className="col-xs-12 col-sm-6">
							<MediaDisplay 
								filesPath={files+"/resources"+"/"+resourceInfo.slug} 
								graphicsPath={icons_placeholder} 
								type={resourceInfo.Format.type} 
								file={resourceInfo.Files[0]} 
								embed={resourceInfo.embed} />
							<MediaFooter 
								graphicsPath={graphics} 
								filesPath={files+"/resources"+"/"+resourceInfo.slug} 
								isFavorite={resourceInfo.isFavorite} 
								isHighlight={resourceInfo.highlight} 
								setFavorite={this.setFavorite} 
								setHighlight={this.setHighlight} 
								file={resourceInfo.Files[0]} 
								url={resourceInfo.link}
								resource={resourceInfo}/>
						</div>

						<div className="col-xs-12 col-sm-6">
							<h1>{resourceInfo.title}</h1>
							<small>{resourceInfo.Format.title}</small>

							{/* Admin features */}
							<IsAuthenticated>
								{(auth.data && auth.data.user && (auth.data.user.id == resourceInfo.user_id || auth.data.user.role=='admin')) &&
									<div className="row">
										<div className="col-xs-12 admin-features">										
											<Link to={"/editarrecurso/" + resourceInfo.slug} className="cta primary no-bg small">Editar</Link>
											<DeleteResource className="cta primary no-bg small delete-action" cb={this.deleteCb} item={resourceInfo.slug}>Eliminar</DeleteResource>
										</div>
									</div>
								}
							</IsAuthenticated>

							{/* Rating */}
							<div className="rating">
			      				<Rating initialRate={resourceInfo.ratingAvg} setRating={this.setRating} readonly={!isAuthenticated}/>
			      			</div>			      			

			      			

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

					{/* Authenticated feature */}
	      			<IsAuthenticated>
						<div className="row details-buttons text-center">
							<div className="col-xs-12">
								<button className="cta primary outline" onClick={this.scrollToComments}>Comentar Recurso</button>
								<Link to={"/gerirguioes/" + resourceInfo.slug} className="cta primary outline">Novo Guião</Link>
							</div>
						</div>
					</IsAuthenticated>
				</section>

				{/* Scripts */}
				<Scripts data={scripts.data} resource={resourceInfo.slug} />

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