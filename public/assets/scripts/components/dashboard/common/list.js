import React from 'react';
import { Component, PropTypes } from 'react';
import Link from 'react-router/lib/Link'

// Utils
import { getAvg } from '@/utils';

// Boostrap
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

// Components
import DeleteSingle from '@/components/common/deleteSingle';
import { truncate } from '@/utils';

var renderList = (list, props) => {	
	return list.map((el, index) => {
		return (
			<article className="col-xs-12" key={el.id}>
				<div className="list__element list__dashboard">
					<div className="check-element">
						<input type="checkbox" name={"selected-element"+el.id} id={"selected-element"+el.id} checked={props.checkedList.indexOf(el.id)>=0}/>
						<label htmlFor={"selected-element"+el.id} onClick={() => props.checkEl(el.id)}></label>
					</div>

					<div className="list__dashboard--container">
						<header className="list__dashboard--heading">
							<h1 title={el.title}>{truncate(el.title, 10)}</h1>
				      		<p>{truncate(el.description, 40)}</p>

				      		{/*BUTTONS*/}
							<div className="actions">
								<Link to={props.targetEdit + el.slug} className="cta primary no-bg small">Editar</Link>
				      			<DeleteSingle className="cta primary no-bg small delete-action" deleteSingle={props.deleteSingle} item={el.slug}>Eliminar</DeleteSingle>
							</div>
			      		</header>
		      		</div>
				</div>
			</article>
		);
    });
}

export const List = (props) => {	
	if (!props.list || !props.list.data || props.list.fetching || props.list.data.length==0){
		return <p className="text-center">Não existem aplicações a disponibilizar.</p>
	}

	return(
		<section className="row">
			{renderList(props.list.data, props)}
		</section>
	);
}

List.propTypes = {
	list: PropTypes.object.isRequired,
	deleteSingle: PropTypes.func
}