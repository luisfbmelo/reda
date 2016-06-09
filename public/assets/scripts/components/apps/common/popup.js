'use strict';
import React, { Component, PropTypes } from 'react';

// Components
import { Modal } from 'react-bootstrap';
import Link from 'react-router/lib/Link'
import { setUrl } from '@/utils';


export default class AppDownloadPopup extends Component {
  constructor(props){
    super(props);

    this.state = {showModal: false};

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.onContinue = this.onContinue.bind(this);

  }

  open(){
    this.setState({showModal: true});
  }

  close(){
    this.setState({showModal: false});
  }

  onContinue(){
    this.setState({showModal: false});
  }


  render() {
    
    return (
      <div>
        <button onClick={this.open} className={this.props.className}>{this.props.children}</button>
        <Modal show={this.state.showModal} onHide={this.close} dialogClassName="login-dialog">
          <Modal.Header closeButton>
            <Modal.Title>Está a sair do sítio REDA!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Está a sair do sítio REDA da Direção Regional de Educação dos Açores, para ir para um recurso externo. A DRE não se responsabiliza, nem tem qualquer controlo, sobre as opiniões expressas ou a informação contida na página que irá aceder. Os Termos e Condições e de privacidade da plataforma REDA não se aplicam à página que irá aceder.</p>
            <p>Obrigado por nos visitar e volte sempre!</p>
          </Modal.Body>
          <Modal.Footer >
            <a href={setUrl(this.props.target)} className="cta primary" target="_blank" onClick={() => this.onContinue()}>Compreendi</a>
            <button className="cta primary outline no-border" onClick={() => this.close()}>Não, obrigado!</button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

AppDownloadPopup.propTypes = {
  className: PropTypes.string,
  target: PropTypes.string
}