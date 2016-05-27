import React from 'react';
import { reduxForm } from 'redux-form';
import SignupForm from '@/components/auth/signupForm';
import { signupUser } from '@/actions/auth';
export const fields = [ 
  'email', 
  'password', 
  'organization', 
  'authKey'
];

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

  if (!values.organization) {
    errors.organization = 'Campo é obrigatório';
  }

  if (!values.authKey) {
    errors.authKey = 'Deve inserir a chave que lhe foi fornecida pela organização';
  }

  return errors
}

/* Async validation*/
const asyncValidate = (values/*, dispatch */) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if ([ 'asd@asd.com' ].includes(values.email)) {
        reject({ email: 'Email inserido já se encontra registado' })
      }

      if (!values.authKey){
        reject({ authKey: 'A chave fornecida já não é válida' })
      }

      resolve();

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
  form: 'SignupForm',
  fields,
  asyncValidate,
  asyncBlurFields: [ 'email' ],
  validate
}, mapStateToProps, {signupUser})(SignupForm)