import React from 'react';
import { Component, PropTypes } from 'react';
import Link from 'react-router/lib/Link'


// Boostrap
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

// Components
import SvgComponent from '@/components/common/svg';
import { truncate, setUrl } from '@/utils';
import AppPopup from './popup';

//
//	Handle button click
//
const onClickApp = (e) => {

	if (!confirm('Está a sair do sítio REDA da Direção Regional de Educação dos Açores, para ir para um recurso externo. A DRE não se responsabiliza, nem tem qualquer controlo, sobre as opiniões expressas ou a informação contida na página que irá aceder. Os Termos e Condições e de privacidade da plataforma REDA não se aplicam à página que irá aceder.Obrigado por nos visitar e volte sempre!')){
		e.preventDefault();
	}
}

export const AppElement = (props) => {

	if (!props.el){
		return null
	}

	const { 
		el, 
		classColCount, 
		index, 
		maxcol, 
		config
	} = props;

	// Clearfix classes
	let breaker = "";
	breaker = (index)%maxcol == 0 ? ' floatnone floatnone__lg' : "";
	breaker = (index)%maxcol == 0 ? breaker + ' floatnone__md' : breaker;
	breaker = (index)%3 == 0 ? breaker + ' floatnone__sm' : breaker;


	return(		
      	<article className={"col-xs-12 col-sm-4 col-md-" + classColCount + " col-lg-" + classColCount + breaker} >
      		<div className="app__element">
      			<header>
      				<div className="app__element--picture">
						<img src={config.files+"/apps/"+el.slug+"/"+el.Image.name+"."+el.Image.extension} />
      				</div>      				
	      			
	      			<section>
	      				<h1 title={el.title}>{truncate(el.title, 4)}</h1>
						<ul>
							{el.Systems.map(system => {
								return <li><i className={"fa fa-"+ system.icon}></i>{system.title}</li>
							})}
						</ul>
	      			</section>		      		
	      		</header>

	      		<section>
					<p>{truncate(el.description, 40)}</p>
	      		</section>	      		

	      		<footer className="text-center">
	      		{
	      			el.Systems.map(system => {
	      				return <AppPopup target={system.app_system.link} className="cta primary outline block no-border">{system.title}</AppPopup>
	      			})	      			
	      		}
	      		</footer>	
      		</div>
		</article>			
	);	
}

AppElement.propTypes = {
	el: PropTypes.object.isRequired,
	maxcol: PropTypes.number,
	classColCount: PropTypes.number,
	config: PropTypes.object
}