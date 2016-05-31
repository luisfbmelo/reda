import React, { PropTypes, Component } from 'react';

// Components
import { Alert } from 'react-bootstrap';
import LoginButton from '@/components/auth/loginButton';

export default class AlertLogin extends Component{
	constructor(props){
		super(props);

		//
		//	Handle events
		//
		this.handleAlertDismiss = this.handleAlertDismiss.bind(this);

		this.state = {
			alertVisible: true
		}
	}

	componentDidMount(){
		let localLoginAlert = localStorage.getItem('login_alert')!=null ? localStorage.getItem('login_alert')==="true" : true;
		this.setState({alertVisible: localLoginAlert});
	}

	handleAlertDismiss() {
	    this.setState({alertVisible: false});
	    localStorage.setItem('login_alert', false);
	}

	render(){
		if (this.state.alertVisible==false){
			return null;
		}

		return(
			<section className="row">
    			<div className="col-xs-12">
					<Alert bsStyle="warning" className="alert" onDismiss={this.handleAlertDismiss}>
		    			<p>Esta listagem pode conter resultados restritos ao utilizador não registado, pelo que aconselhamos que realize a sua autenticação.</p>
						<div className="text-center">
							<LoginButton className="btn btn-warning" location={this.props.location.pathname}>
								Entrar na REDA
							</LoginButton>
						</div>
		    		</Alert>
	    		</div>
    		</section>
		)		
	}
}

AlertLogin.propTypes = {
	location: PropTypes.object.isRequired
}