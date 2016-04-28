import React from 'react';
import { Component, PropTypes } from 'react';

import { Link } from 'react-router';

export default class UserResume extends Component {
	constructor(props){
		super(props);

	}

	componentDidMount(){		
		/* CHANGE THIS TO REAL USER ID FROM STATE/LOCALSTORAGE */
		//let userId = this.props.auth.data.id;
		let userId = 1;
		this.props.fetchUserData(userId);
		
	}

	render() {

		if (!this.props.user.data)
			return null

		const user = this.props.user.data;

		return (
			<div className="row user-resume">
				<div className="col-xs-12">
					<div className="user-image" style={{"backgroundImage": `url(${user.image.src})`}}></div>
					<h4>{user.name}</h4>
				</div>
				<div className="col-xs-12 text-center">
					<Link to="/novorecurso" className="cta primary">Novo Recurso</Link>
				</div>
			</div>
		);
	}
}

UserResume.propTypes = {
	user: PropTypes.object.isRequired
}