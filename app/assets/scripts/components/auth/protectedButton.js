import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import { Modal } from 'react-bootstrap';

import LoginFormContainer from '../../containers/auth/loginForm';

export default class ProtectedButton extends Component {
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
      <div className="protected-button">
        <button onClick={this.open} className={this.props.className}>{this.props.children}</button>
        <Modal show={this.state.showModal} onHide={this.close} dialogClassName="login-dialog">
          <Modal.Header closeButton>
            <section>
              <i className="fa fa-lock"></i>
            </section>
            <Modal.Title>Parece que não se autenticou...</Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <p>
              Alguns conteúdos da REDA estão reservados apenas para docentes. Aconselhamos autenticar-se na plataforma.
            </p>
            <LoginFormContainer target={this.props.target}/>
          </Modal.Body>
          <Modal.Footer>
            <p>
              Não é docente? Pode na mesma ver...
            </p>
            <Link to="sugestoes" className="cta primary outline small">Sugestões</Link>
            <Link to="aplicacoes" className="cta primary outline small">Aplicações</Link>
            <Link to="noticias" className="cta primary outline small">Notícias</Link>            
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

ProtectedButton.propTypes = {
  className: PropTypes.string,
  target: PropTypes.string.isRequired
}