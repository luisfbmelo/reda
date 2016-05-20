import React, { PropTypes } from 'react';

const renderList = (items) => {
	return (
		<ul>
			{items.map(item => {
				return <li key={item.id}>{item.title}</li>
			})}
		</ul>
	)
}

const techFile = (props) => {
	var showTitle = false;

	const { Years, Domains, Subjects, Languages, techResources } = props.details;

	//
	//	Show section title?
	//
	if ((Years && Years.length>0) || 
		Domains && Domains.length>0 ||
		Subjects && Subjects.length>0 || 
		Languages && Languages.length>0 || 
		techResources && techResources.length>0){

		showTitle = props.showTitle!=null ? props.showTitle : true;
	}

	//
	//	Set number of columns
	//
	let maxCol = props.maxCol || 4;
	let classColCount = Math.floor(12/maxCol);

	return(
		<div className="row tech-file">
			{showTitle && <div className="col-xs-12 text-center">
				<h2>Ficha Técnica</h2>
			</div>}
			{Years && Years.length>0 && <div className={"col-xs-12 col-sm-6 col-md-" + classColCount}>
				<h4>Anos</h4>	
				{renderList(Years)}		
			</div>}
			{Domains && Domains.length>0 && <div className={"col-xs-12 col-sm-6 col-md-" + classColCount}>
				<h4>Domínios</h4>
				{renderList(Domains)}	
			</div>}
			{Subjects && Subjects.length>0 && <div className={"col-xs-12 col-sm-6 col-md-" + classColCount}>
				<h4>Disciplinas</h4>
				{renderList(Subjects)}			
			</div>}
			{Languages && Languages.length>0 && <div className={"col-xs-12 col-sm-6 col-md-" + classColCount}>
				<h4>Idioma</h4>	
				{renderList(Languages)}		
			</div>}
			{techResources && techResources.length>0 && <div className="col-xs-12 col-sm-6 col-md-12">
				<h4>Requisitos Técnicos</h4>	
				{techResources}		
			</div>}
		</div>
	);
}

techFile.propTypes = {
	details: PropTypes.object.isRequired,
	maxCol: PropTypes.number
}

export default techFile