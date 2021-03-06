'use strict';

import React, { Component, PropTypes } from 'react';
import LoginFormContainer from '@/containers/auth/loginForm';

// Utils
import { removeClass } from '@/utils';

// Components
import { Modal } from 'react-bootstrap';
import Link from 'react-router/lib/Link'


export default class LoginButton extends Component {
  constructor(props){
    super(props);

    this.state = {showModal: false};

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);

  }

  open(){
    removeClass('open', Array.from(document.querySelectorAll(".open")));
    removeClass('filter-menu', Array.from(document.querySelectorAll(".filter-menu")));
    removeClass('admin-op-menu', Array.from(document.querySelectorAll(".admin-op-menu")));
    removeClass('site-menu', Array.from(document.querySelectorAll(".site-menu")));

    this.setState({showModal: true});
  }

  close(){
    this.setState({showModal: false});
  }


  render() {
    // Set target
    let target = this.props.location || null;

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
            <LoginFormContainer target={target}/>
          </Modal.Body>
          <Modal.Footer >
            <small>Acesso disponível apenas para utilizadores <strong>azores.gov.pt</strong></small>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

LoginButton.propTypes = {
  className: PropTypes.string
}