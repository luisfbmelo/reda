import React from 'react';
import { reduxForm } from 'redux-form';
import CommentForm from '@/components/resources/comments/form';
//import { loginUser } from '../../actions/auth';
export const fields = [ 'description' ];

/* Validate field types */
export const validate = values => {
  const errors = {}
  return errors
}

/* Make request to server to check data */
export const asyncValidate = (values/*, dispatch */) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if ([ 'john', 'paul', 'george', 'ringo' ].includes(values.description)) {
        reject({ description: 'Forbidden words' })
      } else {
        resolve()
      }
    }, 1000) // simulate server latency
  })
}

/* Set sharable state */
function mapStateToProps(state) {
  return { auth: state.auth};
}

export default reduxForm({
  form: 'CommentForm',
  fields,
  asyncValidate,
  asyncBlurFields: [ 'description' ],
  validate
}, mapStateToProps, null)(CommentForm)