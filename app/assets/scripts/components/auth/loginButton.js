import React, { Component, PropTypes } from 'react';
import LoginFormContainer from '../../containers/auth/loginForm';

import { Modal } from 'react-bootstrap';


export default class LoginButton extends Component {
  constructor(props){
    super(props);

    this.state = {showModal: false};

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);

  }

  open(){
    this.setState({showModal: true});
  }

  close(){
    this.setState({showModal: false});
  }


  render() {
    return (
      <div>
        <button onClick={this.open} className={this.props.className}>{this.props.children}</button>
        <Modal show={this.state.showModal} onHide={this.close} dialogClassName="login-dialog">
          <Modal.Header closeButton>
            <section>
              <i className="fa fa-user"></i>
            </section>
            <Modal.Title>Entrar na REDA</Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <LoginFormContainer />
          </Modal.Body>
          <Modal.Footer >
            <small>Acesso disponível apenas para utilizadores azores.gov.pt</small>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}