import React from 'react';
import { Component, PropTypes } from 'react';
import { Link } from 'react-router';

// Boostrap
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

// Components
import Rating from '../../../common/rating';
import SvgComponent from '../../../common/svg';
import ProtectedButton from '../../../auth/protectedButton';

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
								<h1>{el.title}</h1>
					      		<p>{el.description}</p>						      				      		
							</Link>
							
							<div className="top-icons fRight">
								<i className={"fa fa-" + ((el.Favorites && el.Favorites.length>0) ? "heart" : "heart-o")} title="Favorito"></i>
								<div className="type">
									<OverlayTrigger placement="left" overlay={tooltip}>
					      				<span>
					      					<SvgComponent element={props.config.formatIcons+"/"+el.Format.Image.name+"."+el.Format.Image.extension} color="#b4b4b4"/>
				      					</span>
				      				</OverlayTrigger>
								</div>		      				
				      		</div>

				      		{/*BUTTONS*/}
							<div className="actions">
								<button className="cta secundary no-bg">Editar</button>
				      			<button className="cta secundary no-bg" onClick={() => props.delEl(el.id)}>Eliminar</button>
							</div>
			      		</header>


						
						<footer className="list__dashboard--footer">
			      			<div className="rating fLeft">
			      				<Rating readonly initialRate={el.rating_avg}/>
			      			</div>	      			
			      			<div className="fRight right-col">
								<Link to={"/descobrir/detalhes-recurso/" + el.slug } className="cta primary outline small">Ver Recurso</Link>
								<Link to={"/gerirguioes/" + el.id } className="cta primary outline small">Gerir Guiões</Link>
			      				<i className={"action-btn fa fa-" + (el.highlight ? "star" : "star-o")} onClick={()=> props.setHighlight(el.id)} title="Recurso do Mês"></i>
			      			</div>
			      		</footer>
		      		</div>
				</div>
			</article>
		);
    });
}

export const ResourcesList = (props) => {	
	if (!props.list || !props.list.data || props.list.fetching){
		return <div></div>;
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