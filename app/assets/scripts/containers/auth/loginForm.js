import React from 'react';
import { reduxForm } from 'redux-form';
import LoginForm from '../../components/auth/loginForm';
import { loginUser } from '../../actions/auth';
export const fields = [ 'email', 'password' ];

/* Validate field types */
export const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'O campo é obrigatório';
  }

  if (values.email && !validateEmail(values.email)){
    errors.email = 'Deve inserir um e-mail válido';
  }

  if (!values.password) {
    errors.password = 'É necessário inserir a palavra-chave';
  }
  return errors
}

/* Make request to server to check data */
export const asyncValidate = (values/*, dispatch */) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if ([ 'john', 'paul', 'george', 'ringo' ].includes(values.email)) {
        reject({ email: 'That email is taken' })
      } else {
        resolve()
      }
    }, 1000) // simulate server latency
  })
}

/* Email validation */
const validateEmail = (value) => {
  // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(value);
};

/* Set sharable state */
function mapStateToProps(state) {
  return { auth: state.auth};
}

export default reduxForm({
  form: 'LoginForm',
  fields,
  asyncValidate,
  asyncBlurFields: [ 'email' ],
  validate
}, mapStateToProps, {loginUser})(LoginForm)