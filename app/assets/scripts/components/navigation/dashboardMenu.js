import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

import { Nav, Navbar, NavItem } from 'react-bootstrap';

import Collapsible from '../common/collapse';


export default class DashboardMenu extends Component {
	constructor(props){
		super(props);

	}

	isActive(location, target){
		return location.indexOf(target)>0 ? 'active' : '';
	}

	adminOnly(component){

		/*if (this.props.auth.data){
			const { role } = this.props.auth.data;*/
			let role = "admin";
			if (role!=undefined && role=="admin"){
				return component;
			}
		/*}*/
		
		return null;
	}

	render() {
		const { isAuthenticated } = this.props.auth;

		return (  
			<nav className="left-menu">
				<ul>
					<li className={this.isActive(this.props.location.pathname, 'painel')}>
						<Link to="/painel">Os meus recursos <i className="fa fa-chevron-right"></i></Link>
					</li>
					<li className={this.isActive(this.props.location.pathname, 'painel/guioes')}>
						<Link to="/painel/guioes">Os meus guiões <i className="fa fa-chevron-right"></i></Link>
					</li>
					<li className={this.isActive(this.props.location.pathname, 'painel/favoritos')}>
						<Link to="/painel/favoritos">Favoritos (5) <i className="fa fa-chevron-right"></i></Link>
					</li>
					<li className={this.isActive(this.props.location.pathname, 'painel/submetidos')}>
						<Link to="/painel/submetidos">Submetidos <i className="fa fa-chevron-right"></i></Link>
					</li>
					<li className={this.isActive(this.props.location.pathname, 'painel/comentarios-pendentes')}>
						<Link to="/painel/comentarios-pendentes">Comentários pendentes (2) <i className="fa fa-chevron-right"></i></Link>
					</li>
				</ul>
				<h6>Opções de Administrador</h6>
				<ul>
					{ /* Admin Only*/ }
					{this.adminOnly(
						<li className={this.isActive(this.props.location.pathname, 'painel/recursos-pendentes')}>
		                <Link to="/painel/recursos-pendentes">Recursos pendentes (10) <i className="fa fa-chevron-right"></i></Link>
		              </li>
					)}
					{this.adminOnly(
						<li className={this.isActive(this.props.location.pathname, 'painel/websugestoes')}>
		                <Link to="/painel/websugestoes">Websugestões <i className="fa fa-chevron-right"></i></Link>
		              </li>
					)}
					{this.adminOnly(
						<li className={this.isActive(this.props.location.pathname, 'painel/aplicacoes')}>
		                <Link to="/painel/aplicacoes">Aplicações <i className="fa fa-chevron-right"></i></Link>
		              </li>
					)}
					{this.adminOnly(
						<li className={this.isActive(this.props.location.pathname, 'painel/experimenta')}>
		                <Link to="/painel/experimenta">Experimenta <i className="fa fa-chevron-right"></i></Link>
		              </li>
					)}	
					{this.adminOnly(
						<li className={this.isActive(this.props.location.pathname, 'painel/dicaseutilidades')}>
		                <Link to="/painel/dicaseutilidades">Dicas e Utilidades <i className="fa fa-chevron-right"></i></Link>
		              </li>
					)}              
	            </ul>
			</nav>
		);
	}
}

DashboardMenu.propTypes = {
	location: React.PropTypes.object.isRequired
}