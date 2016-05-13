import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

import { Nav, Navbar, NavItem } from 'react-bootstrap';

import LoginButton from '../auth/loginButton';
import LogoutButton from '../auth/logoutButton';


export default class TopNav extends Component {
	constructor(props){
		super(props);

		this.renderSmallNav = this.renderSmallNav.bind(this);
		this.renderLogout = this.renderLogout.bind(this);
	}

	isActive(location, target){
		location = location.length > 1 ? location.replace(/^\//, '') : location;
		location = location.length > 1 && location.indexOf('/') > 0 ? location.substring(0, location.indexOf('/')) : location;

		return location === target ? 'active' : '';
	}

	renderSmallNav(isAuthenticated){
		return(
			<ul className="nav navbar-nav small-nav">
				{!isAuthenticated && 
					<li>
						<LoginButton location={this.props.location.pathname}>
							Entrar
						</LoginButton>
					</li>
				}

				{!isAuthenticated && 
					<li className={this.isActive(this.props.location.pathname, 'registar')}>
						<Link to="/registar">Registar</Link>
					</li>
				}
				{isAuthenticated && 
					<li className={this.isActive(this.props.location.pathname, 'painel')}>
		           		<Link to="/painel">Minha Conta</Link>
		           	</li>
				}
				<li className={this.isActive(this.props.location.pathname, 'ajuda')}>
					<Link to="/ajuda">Ajuda</Link>
				</li>
				{this.renderLogout(isAuthenticated)}
			</ul>
		)
	}

	renderLogout(isAuthenticated){
		if (isAuthenticated){
			return(<LogoutButton />);
		}
		return null;
	}

	render() {
		const { isAuthenticated } = this.props.auth;

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

		              	{this.renderSmallNav(isAuthenticated)}

						<ul className="nav navbar-nav big-nav">
			              <li className={this.isActive(this.props.location.pathname, '/')}>
			                <Link to="/">Início</Link>
			              </li>
			              <li className={this.isActive(this.props.location.pathname, 'descobrir')}>
			                <Link to="/descobrir">Descobrir</Link>
			              </li>
			              <li className={this.isActive(this.props.location.pathname, 'aplicacoes')}>
			                <Link to="/aplicacoes">Aplicações</Link>
			              </li>
			              <li className={this.isActive(this.props.location.pathname, 'noticias')}>
			                <Link to="/noticias">Notícias</Link>
			              </li>
			              <li className={this.isActive(this.props.location.pathname, 'sugestoes')}>
			                <Link to="/sugestoes">Sugestões</Link>
			              </li>
			            </ul>
		            </div>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

TopNav.propTypes = {
	location: React.PropTypes.object.isRequired
}