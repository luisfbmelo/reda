'use strict';

import React, { Component, PropTypes } from 'react';

import Link from 'react-router/lib/Link'

// Utils
import { removeClass } from '@/utils';


export default class LoginForm extends Component {
  constructor(props){
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(props){
    return new Promise((resolve, reject) => {
      this.props.loginUser(props)
      .then(() => {
        const { errors } = this.props.auth;

        if (!errors){
          // Remove popupboxes
          removeClass('open', Array.from(document.querySelectorAll(".open")));
          removeClass('filter-menu', Array.from(document.querySelectorAll(".filter-menu")));
          removeClass('admin-op-menu', Array.from(document.querySelectorAll(".admin-op-menu")));
          removeClass('site-menu', Array.from(document.querySelectorAll(".site-menu")));

          if (this.props.target){
            this.context.router.push(this.props.target);
          }else{
            this.context.router.push('/painel');
          }
        }        

      }).catch(error => {
      });
    })    
  }


  render() {
    const { asyncValidating, fields: { email, password }, resetForm, handleSubmit, submitting } = this.props;
    const { fetching, errors } = this.props.auth;

    return (
      <div className="login-form box-form">
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div className={`form-group ${email.touched && (email.invalid || errors) ? 'has-error' : ''}`}>
            <input type="text" className="form-control" placeholder="Email" {...email}/>
            {asyncValidating === 'email' && <i className='fa fa-spinner fa-spin'/>}
            {email.touched && email.error && <div className="text-danger">{email.error}</div>}
          </div>
          <div className={`form-group ${password.touched && (password.invalid || errors) ? 'has-error' : ''}`}>
            <input type="password" className="form-control" placeholder="Palavra-chave" {...password}/>
            {password.touched && password.error && <div className="text-danger">{password.error}</div>}
          </div>
          {(() => {
            if (errors){
              return (<div className="form-group text-danger">{errors}</div>)
            }
          })()}         
          <div>
            <button type="submit" disabled={ fetching || asyncValidating } className="cta primary">
              {fetching ? <i className='fa fa-spinner fa-spin'></i> : ""}Entrar
            </button>
            <Link to="/recuperar-password" className="cta primary no-bg recover-password">Esqueceu-se da sua palavra-chave?</Link>
          </div>
        </form>
      </div>
    )
  }
}

LoginForm.propTypes = {
  fields: PropTypes.object.isRequired,
  resetForm: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

LoginForm.contextTypes = {
  router: PropTypes.object
}