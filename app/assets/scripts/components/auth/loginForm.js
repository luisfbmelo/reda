import React, { Component, PropTypes } from 'react'


export default class LoginForm extends Component {
  constructor(props){
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(props){
    return new Promise((resolve, reject) => {
      this.props.loginUser(props)
      .then(() => {

        // Are there any errors?
        if (this.props.auth.errors){
          reject(this.props.auth.errors);
        }

        resolve();
      
        if (this.props.target){
          this.context.router.push(this.props.target);
        }else{
          this.context.router.push('/conta');
        }

      }).catch(error => {
        console.log(error);
      });
    })    
  }


  render() {
    const { asyncValidating, fields: { email, password }, resetForm, handleSubmit, submitting } = this.props;
    const { fetching } = this.props.auth;

    return (
      <div className="login-form box-form">
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div className={`form-group ${email.touched && email.invalid ? 'has-error' : ''}`}>
            <input type="text" className="form-control" placeholder="Email" {...email}/>
            {asyncValidating === 'email' && <i className='fa fa-spinner fa-spin'/>}
            {email.touched && email.error && <div className="text-danger">{email.error}</div>}
          </div>
          <div className={`form-group ${password.touched && password.invalid ? 'has-error' : ''}`}>
            <input type="password" className="form-control" placeholder="Palavra-chave" {...password}/>
            {password.touched && password.error && <div className="text-danger">{password.error}</div>}
          </div>
          <div>
            <button type="submit" disabled={ fetching || asyncValidating } className="cta primary">
              {fetching ? <i className='fa fa-spinner fa-spin'></i> : ""}Entrar
            </button>
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