import React from 'react';
import { Component } from 'react';
import Link from 'react-router/lib/Link'

// Utils
import { toggleClass, removeClass } from '@/utils';

// Components
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import Collapsible from '@/components/common/collapse';
import IsAdmin from '@/containers/auth/isAdmin';


export default class DashboardMenu extends Component {
	constructor(props){
		super(props);

		//
		//	Handle events
		//
		this.toggleMenu = this.toggleMenu.bind(this);

	}

	componentWillUnmount(){
		//	Remove open class from body on unmount
		removeClass('open',document.getElementsByTagName("BODY")[0]);
		removeClass('admin-op-menu',document.getElementsByTagName("BODY")[0]);
	}

	toggleMenu(){
		let list = this.refs.dasboard_menu_list;
		let backdrop = this.refs.backdrop;
		let body = document.getElementsByTagName("BODY")[0];

		toggleClass('open', list);
		toggleClass('open', backdrop);
		toggleClass('open', body);
		toggleClass('admin-op-menu', body);
	}

	isActive(location, target){
		return location.indexOf(target)>0 ? 'active' : '';
	}

	render() {
		const { isAuthenticated } = this.props.auth;

		return (  
			<nav className="left-menu dashboard__menu">
				<div className="backdrop" ref="backdrop" onClick={this.toggleMenu}></div>
				<div className="row dashboard__menu--toggle">
					<div className="col-xs-12">
						<button className="cta primary outline" onClick={this.toggleMenu}><i className="fa fa-wrench"></i>Opções de Administração</button>
					</div>
				</div>
				<div className="dashboard__menu--list" ref="dasboard_menu_list">
					<div className="row dashboard__menu--title">
						<div className="col-xs-10">
							<h6>Minhas Opções</h6>
						</div>
						<div className="col-xs-2 dashboard__menu--close">
							<button type="button" className="close" aria-label="Close" onClick={this.toggleMenu}><span aria-hidden="true">&times;</span></button>
						</div>
					</div>
					
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
					<IsAdmin>
						<div className="admin-tools">
							<h6>Opções de Administrador</h6>
							<ul>
								{ /* Admin Only*/ }
								<li className={this.isActive(this.props.location.pathname, 'painel/recursos-pendentes')}>
					                <Link to="/painel/recursos-pendentes">Recursos pendentes (10) <i className="fa fa-chevron-right"></i></Link>
					             </li>
								<li className={this.isActive(this.props.location.pathname, 'painel/websugestoes')}>
					                <Link to="/painel/websugestoes">Websugestões <i className="fa fa-chevron-right"></i></Link>
					            </li>
								<li className={this.isActive(this.props.location.pathname, 'painel/aplicacoes')}>
					                <Link to="/painel/aplicacoes">Aplicações <i className="fa fa-chevron-right"></i></Link>
					            </li>
								<li className={this.isActive(this.props.location.pathname, 'painel/experimenta')}>
					                <Link to="/painel/experimenta">Experimenta <i className="fa fa-chevron-right"></i></Link>
					            </li>
								<li className={this.isActive(this.props.location.pathname, 'painel/dicaseutilidades')}>
					                <Link to="/painel/dicaseutilidades">Dicas e Utilidades <i className="fa fa-chevron-right"></i></Link>
					            </li>            
				            </ul>
			            </div>
		            </IsAdmin>
	            </div>
			</nav>
		);
	}
}

DashboardMenu.propTypes = {
	location: React.PropTypes.object.isRequired
}