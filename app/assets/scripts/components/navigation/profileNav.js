import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

export default class ProfileNav extends Component {
	isActive(location, target){
		location = location.length > 1 ? location.replace(/^\//, '') : location;
		return location === target ? 'active' : '';
	}

	render() {
		return ( 
			<nav className="profile-nav"> 
				<ul>
					<li>
						<Link to="/painel" className={"cta gray outline " + this.isActive(this.props.location.pathname, 'painel')}>Painel</Link>
					</li>
					<li>
						<Link to="/perfil" className={"cta gray outline " + this.isActive(this.props.location.pathname, 'perfil')}>Meu Perfil</Link>
					</li>
				</ul>		
			</nav>
		);
	}
}

ProfileNav.propTypes = {
	location: React.PropTypes.object.isRequired
}