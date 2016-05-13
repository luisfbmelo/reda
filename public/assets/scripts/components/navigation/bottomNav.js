import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

import { Nav, Navbar, NavItem } from 'react-bootstrap';


export default class BottomNav extends Component {
	isActive(location, target){
		location = location.length > 1 ? location.replace(/^\//, '') : location;
		return location === target ? 'active' : '';
	}

	render() {
		return ( 
			<footer> 
				<div className="bottom-nav">
					<ul>
						<li className={this.isActive(this.props.location.pathname, 'sobre')}>
							<Link to="/sobre">Sobre</Link>
						</li>
						<li className={this.isActive(this.props.location.pathname, 'dicasutilidades')}>
							<Link to="/dicasutilidades">Dicas e Utilidades</Link>
						</li>
						<li className={this.isActive(this.props.location.pathname, 'aplicacoes')}>
							<Link to="/aplicacoes">Aplicações</Link>
						</li>
						<li className={this.isActive(this.props.location.pathname, 'noticias')}>
							<Link to="/noticias">Notícias</Link>
						</li>
						<li className={this.isActive(this.props.location.pathname, 'mapadositio')}>
							<Link to="/mapadositio">Mapa do Sítio</Link>
						</li>
					</ul>
					<button className="cta white outline pull-right">Fale Connosco</button>
				</div>
				<div className="copyright">
					© 2016 Direção Regional da Educação
				</div>				
			</footer>
		);
	}
}

BottomNav.propTypes = {
	location: React.PropTypes.object.isRequired
}