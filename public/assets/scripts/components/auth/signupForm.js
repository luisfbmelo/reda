'use strict';

import React, { Component, PropTypes } from 'react'


export default class SignupForm extends Component {
  constructor(props){
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(props){
    return new Promise((resolve, reject) => {
      this.props.signupUser(props)
      .then(() => {

        // Are there any errors?
        if (this.props.auth.errors){
          reject(this.props.auth.errors);
        }

        resolve();
      
        if (this.props.target){
          this.context.router.push(this.props.target);
        }else{
          this.context.router.push('/painel');
        }

      }).catch(error => {
        console.log(error);
      });
    })    
  }


  render() {
    const { asyncValidating, fields: { email, password, organization, authKey }, resetForm, handleSubmit, submitting } = this.props;
    const { fetching } = this.props.auth;

    return (
      <div className="signup-form box-form light-background">
        <form onSubmit={handleSubmit(this.onSubmit)} className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-sm-offset-3 text-center">
              <h1>Efetue o seu registo</h1>
              <p>
                Para que tenha acesso a todos os recursos e funcionalidades disponíveis, efetue o seu registo na plataforma com a chave de segurança que lhe foi fornecida.
              </p>
            </div>
          </div>

          {/* EMAIL */}
          <div className="row">
            <div className={`form-group col-xs-12 col-sm-4 col-sm-offset-4 ${email.touched && email.invalid ? 'has-error' : ''}`}>
              <label className="input-title">Email*</label>
              <input type="text" className="form-control" id="email" placeholder="Email" {...email}/>
              {asyncValidating === 'email' && <i className='fa fa-spinner fa-spin'/>}
              {email.touched && email.error && <div className="text-danger">{email.error}</div>}
            </div>
          </div>
          
          {/* PASSWORD */}
          <div className="row">
            <div className={`form-group col-xs-12 col-sm-4 col-sm-offset-4 ${password.touched && password.invalid ? 'has-error' : ''}`}>
              <label className="input-title">Palavra-Chave*</label>
              <input type="password" className="form-control" placeholder="Palavra-chave" {...password}/>
              {password.touched && password.error && <div className="text-danger">{password.error}</div>}
            </div>
          </div>

          {/* ORGANIZATION */}
          <div className="row">
            <div className={`form-group col-xs-12 col-sm-4 col-sm-offset-4 ${organization.touched && organization.invalid ? 'has-error' : ''}`}>
              <label className="input-title">Escola/Organização*</label>
              <input type="text" className="form-control" placeholder="Nome da escola/organização onde se encontra" {...organization}/>
              {organization.touched && organization.error && <div className="text-danger">{organization.error}</div>}
            </div>
          </div>

          {/* KEY */}
          <div className="row">
            <div className={`form-group col-xs-12 col-sm-4 col-sm-offset-4 ${authKey.touched && authKey.invalid ? 'has-error' : ''}`}>
              <label className="input-title">Chave de Docente*</label>
              <input type="text" className="form-control" placeholder="Insira a chave de docente que lhe foi fornecida" {...authKey}/>
              {authKey.touched && authKey.error && <div className="text-danger">{authKey.error}</div>}
            </div>
          </div>
          

          
          <div className="row">
            <div className="col-xs-12 col-sm-4 col-sm-offset-4">
              <button type="submit" disabled={ fetching || asyncValidating } className="cta primary">
                {fetching || asyncValidating ? <i className='fa fa-spinner fa-spin'></i> : ""}Registar
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

SignupForm.propTypes = {
  fields: PropTypes.object.isRequired,
  resetForm: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

SignupForm.contextTypes = {
  router: PropTypes.object
}