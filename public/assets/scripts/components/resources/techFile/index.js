import React from 'react';

export default (props) => {
	return(
		<div className="row tech-file">
			<div className="col-xs-12 text-center">
				<h2>Ficha Técnica</h2>
			</div>
			<div className="col-xs-12 col-sm-6 col-md-2">
				<h4>Anos</h4>		
				<li>1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>				
			</div>
			<div className="col-xs-12 col-sm-6 col-md-2">
				<h4>Domínios</h4>			
			</div>
			<div className="col-xs-12 col-sm-6 col-md-2">
				<h4>Disciplinas</h4>			
			</div>
			<div className="col-xs-12 col-sm-6 col-md-2">
				<h4>Idioma</h4>			
			</div>
			<div className="col-xs-12 col-sm-6 col-md-3">
				<h4>Requisitos Técnicos</h4>			
			</div>
		</div>
	);
}