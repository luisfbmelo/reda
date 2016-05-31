import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

// Utils
import { toggleClass, removeClass } from '@/utils';

// Components
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import LoginButton from '@/components/auth/loginButton';
import LogoutButton from '@/components/auth/logoutButton';

import IsAuthenticated from '@/containers/auth/isAuth';
import IsNotAuthenticated from '@/containers/auth/isNotAuth';


export default class TopNav extends Component {
	constructor(props){
		super(props);

		//
		//	Handle events
		//
		this.onToggle = this.onToggle.bind(this);

		//
		//	Renders
		//
		this.renderSmallNav = this.renderSmallNav.bind(this);
	}

	componentWillUnmount(){
		//	Remove open class from body on unmount
		removeClass('open',document.getElementsByTagName("BODY")[0]);
	}

	onToggle(navExpanded){
		let item = document.querySelector(".nav-container");
		let backdrop = this.refs.menu_backdrop;
		let body = document.getElementsByTagName("BODY")[0];

		toggleClass('open', item);
		toggleClass('open', backdrop);
		toggleClass('open', body);
	}

	isActive(location, target){
		location = location.length > 1 ? location.replace(/^\//, '') : location;
		location = location.length > 1 && location.indexOf('/') > 0 ? location.substring(0, location.indexOf('/')) : location;

		return location === target ? 'active' : '';
	}

	renderSmallNav(isAuthenticated){
		return(
			<ul className="nav navbar-nav small-nav">
				<IsNotAuthenticated>
					<li>
						<LoginButton location={this.props.location.pathname}>
							Entrar
						</LoginButton>
					</li>
				</IsNotAuthenticated>

				<IsNotAuthenticated>
					<li className={this.isActive(this.props.location.pathname, 'registar')}>
						<Link to="/registar">Registar</Link>
					</li>
				</IsNotAuthenticated>	

				{/*<IsAuthenticated>
					<li className={this.isActive(this.props.location.pathname, 'painel')}>
		           		<Link to="/painel">Minha Conta</Link>
		           	</li>
				</IsAuthenticated>*/}
				<li className={this.isActive(this.props.location.pathname, 'ajuda')}>
					<Link to="/ajuda">Ajuda</Link>
				</li>
				
				<IsAuthenticated>
					{this.props.auth.data && 
					<li className={"user-identification "+this.isActive(this.props.location.pathname, 'painel')}>
		           		<Link to="/painel">Minha Conta</Link>
		           	</li>}
				</IsAuthenticated>

				<IsAuthenticated>
					<LogoutButton />
				</IsAuthenticated>
			</ul>
		)
	}

	render() {
		const { isAuthenticated } = this.props.auth;

		return (  
			<Navbar onToggle={this.onToggle}>
				<div className="backdrop" ref="menu_backdrop" onClick={this.onToggle}></div>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="/"><img src="/assets/graphics/REDA_logo.png" alt="A imagem da REDA" className="img-responsive"/></a>
					</Navbar.Brand>
					<Navbar.Toggle/>
				</Navbar.Header>
				<Nav className="nav-container">
					<div className="row">
						{/* Title */}
						<div className="col-xs-10 nav-container--title">
							<h6>Menu</h6>
						</div>
						{/* Close Button */}
						<div className="col-xs-2 nav-container--close">
							<button type="button" className="close" aria-label="Close" onClick={this.onToggle}><span aria-hidden="true">&times;</span></button>
						</div>
					</div>



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
				</Nav>
			</Navbar>
		);
	}
}

TopNav.propTypes = {
	location: React.PropTypes.object.isRequired
}