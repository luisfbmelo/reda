import React from 'react';
import { Component, PropTypes } from 'react';
import { Link } from 'react-router';

// Utils
import { getAvg } from '../../../../utils';

// Boostrap
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

// Components
import Rating from '@/components/common/rating';
import SvgComponent from '@/components/common/svg';
import ProtectedButton from '@/components/auth/protectedButton';
import DeleteResource from '@/containers/resources/deleteResource';
import IsAdmin from '@/containers/auth/isAdmin';
import { truncate } from '@/utils';

var renderList = (list, props) => {	
	return list.map((el, index) => {
		// Type tooltip
		const tooltip = (
			<Tooltip id={"resource_" + el.id}>{el.Format.title}</Tooltip>
		);
		
		return (
			<article className="col-xs-12" key={el.id}>
				<div className="list__element list__dashboard">
					<div className="check-element">
						<input type="checkbox" name={"selected-resource"+el.id} id={"selected-resource"+el.id} checked={props.checkedList.indexOf(el.id)>=0}/>
						<label htmlFor={"selected-resource"+el.id} onClick={() => props.checkEl(el.id)}></label>
					</div>

					<div className="list__dashboard--container">
						<header className="list__dashboard--heading">
							<Link to={"/descobrir/detalhes-recurso/" + el.slug} className="left-col fLeft">
								<h1 title={el.title}>{truncate(el.title, 10)}</h1>
					      		<p>{truncate(el.description, 40)}</p>						      				      		
							</Link>
							
							<div className="top-icons fRight">
								
								<div className="type">
									<OverlayTrigger placement="left" overlay={tooltip}>
					      				<span>
					      					<SvgComponent element={props.config.formatIcons+"/"+el.Format.Image.name+"."+el.Format.Image.extension} color="#6a696a"/>
				      					</span>
				      				</OverlayTrigger>
								</div>		      				
				      		</div>

				      		{/*BUTTONS*/}
							<div className="actions">
								<Link to={"/editarrecurso/" + el.slug} className="cta primary no-bg small">Editar</Link>
				      			<DeleteResource className="cta primary no-bg small" cb={props.deleteCb} item={el.slug}>Eliminar</DeleteResource>
							</div>
			      		</header>


						
						<footer className="list__dashboard--footer">
			      			<div className="rating fLeft">
			      				<Rating readonly initialRate={el.ratingAvg}/>
			      			</div>	      			
			      			<div className="fRight right-col">
								<Link to={"/descobrir/detalhes-recurso/" + el.slug } className="cta primary outline small">Ver Recurso</Link>
								<Link to={"/gerirguioes/" + el.slug } className="cta primary outline small">Gerir Guiões</Link>
								<span className="actions-container">
									<i className={"action-btn fa fa-" + ((el.isFavorite) ? "heart" : "heart-o")} title="Favorito" onClick={()=> props.setFavorite(el.id)}></i>
				      				<IsAdmin>
				      					<i className={"action-btn fa fa-" + (el.highlight ? "star" : "star-o")} onClick={()=> props.setHighlight(el.id)} title="Recurso do Mês"></i>
				      				</IsAdmin>
			      				</span>
			      			</div>
			      		</footer>
		      		</div>
				</div>
			</article>
		);
    });
}

export const ResourcesList = (props) => {	
	if (!props.list || !props.list.data || props.list.fetching || props.list.data.length==0){
		return <div></div>
	}

	return(
		<section className="row">
			{renderList(props.list.data, props)}
		</section>
	);
}

ResourcesList.propTypes = {
	list: PropTypes.object.isRequired
}