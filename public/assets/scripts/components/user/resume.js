import React from 'react';
import { Component, PropTypes } from 'react';

import Link from 'react-router/lib/Link'

export default class UserResume extends Component {
	constructor(props){
		super(props);

	}

	componentDidMount(){		
		this.props.fetchConfig();
	}

	render() {

		const { auth, config } = this.props;

		if ((!auth.data && !auth.data.user) || !config.data)
			return null

		const user = auth.data.user;

		const image = auth.data.user.image || config.data.icons+"/user.png";

		return (
			<div className="container">
				<div className="row user-resume">
					<div className="col-xs-12">
						<div className="user-image" style={{"backgroundImage": `url(${image})`}}></div>
						<h4>{user.name || 'Utilizador sem nome'}</h4>
					</div>
					<div className="col-xs-12 text-center">
						<Link to="/novorecurso" className="cta primary">Novo Recurso</Link>
					</div>
				</div>
			</div>
		);
	}
}

UserResume.propTypes = {
	auth: PropTypes.object.isRequired
}