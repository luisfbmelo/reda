'use strict';
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

// Components
import Progress from "react-progress-2";

const BASE_URL = 'http://devbox.dev/api/';

function callApi(endpoint, sendToken, mustAuth, method) {
  
  let token = localStorage.getItem('token') || null
  let config = { 
    method: method || 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  
  if(sendToken) {
    if(token) {
      config.headers.Authorization = `${token}`;
    } else if(mustAuth){
      throw "No token saved!"
    }
  }
  
  return fetch(BASE_URL + endpoint, config)
    .then(response =>
      response.json()
      .then(json => ({ json, response }))
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json)
      }
      
      return json;
    }).catch(err => console.log(err))
}

export const CALL_API = Symbol('Call API')

export default store => next => action => {
  
  const callAPI = action[CALL_API]
  
  // So the middleware doesn't get applied to every single action
  if (typeof callAPI === 'undefined') {
    return next(action)
  }
  
  let { endpoint, types, sendToken, mustAuth, method } = callAPI
  
  const [ requestType, successType, errorType ] = types

  Progress.show();
  
  // Passing the authenticated boolean back in our data will let us distinguish between normal and secret quotes
  return callApi(endpoint, sendToken, mustAuth, method).then(
    response => {
      Progress.hide();

      next({
        data:response,
        type: successType
      })
    })   
    .catch(error => {
      Progress.hide();
      
      next({
        error: error.message || 'There was an error.',
        type: errorType
      })
    }
  )
}