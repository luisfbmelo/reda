import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

import { Nav, Navbar, NavItem } from 'react-bootstrap';


export default class TopNav extends Component {
	isActive(location, target){
		location = location.length > 1 ? location.replace(/^\//, '') : location;
		return location === target ? 'active' : '';
	}

	render() {
		return (  
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="/"><img src="/assets/graphics/REDA_logo.png" alt="A imagem da REDA" className="img-responsive"/></a>
					</Navbar.Brand>
					<Navbar.Toggle/>
				</Navbar.Header>
				<Navbar.Collapse>
					<div className="pull-right menu-container">
						<ul className="nav navbar-nav small-nav">
			              <li className={this.isActive(this.props.location.pathname, 'entrar')}>
			                <Link to="/entrar">Entrar</Link>
			              </li>
			              <li className={this.isActive(this.props.location.pathname, 'ajuda')}>
			                <Link to="ajuda">Ajuda</Link>
			              </li>
			            </ul>

						<ul className="nav navbar-nav big-nav">
			              <li className={this.isActive(this.props.location.pathname, '/')}>
			                <Link to="/">Início</Link>
			              </li>
			              <li className={this.isActive(this.props.location.pathname, 'descobrir')}>
			                <Link to="descobrir">Descobrir</Link>
			              </li>
			              <li className={this.isActive(this.props.location.pathname, 'aplicacoes')}>
			                <Link to="aplicacoes">Aplicações</Link>
			              </li>
			              <li className={this.isActive(this.props.location.pathname, 'noticias')}>
			                <Link to="noticias">Notícias</Link>
			              </li>
			              <li className={this.isActive(this.props.location.pathname, 'sugestoes')}>
			                <Link to="sugestoes">Sugestões</Link>
			              </li>
			            </ul>
		            </div>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}