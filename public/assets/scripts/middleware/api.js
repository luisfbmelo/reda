'use strict';
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

// Components
import Progress from "react-progress-2";

// Actions
import * as alertMessages from '@/actions/message-types';
import * as alertActions from '@/actions/alerts';

const BASE_URL = 'http://devbox.dev/api/';

function callApi(endpoint, sendToken, mustAuth, method, data) {
  
  let token = localStorage.getItem('token') || null
  let config = { 
    method: method || 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  if (data){
    config.body = JSON.stringify(data);
  }

  
  if(sendToken) {
    if(token) {
      config.headers.Authorization = `${token}`;
    } else if(mustAuth){
      throw "No token saved!"
    }
  }
  
  return fetch(BASE_URL + endpoint, config)
    .then(response =>{
      
        return response.json()
        .then(json => ({ json, response }))
      }
    ).then(({ json, response }) => {

      if (!response.ok) {        
        return Promise.reject({error: json, response})
      }
      
      return json;
    }).catch(err => Promise.reject(err))
}

export const CALL_API = Symbol('Call API')

export default store => next => action => {
  
  const callAPI = action[CALL_API]
  
  // So the middleware doesn't get applied to every single action
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  Progress.show();
  
  return makeAPIRequest(callAPI, next, store);
  
}

function makeAPIRequest(callAPI, next, store){
  let { endpoint, types, sendToken, mustAuth, method, data } = callAPI;
  
  const [ requestType, successType, errorType ] = types;

  // Passing the authenticated boolean back in our data will let us distinguish between normal and secret quotes
  return callApi(endpoint, sendToken, mustAuth, method, data).then(
    response => {
      Progress.hide();

      next({
        data: response,
        type: successType
      })
    })   
    .catch((result) => {
      Progress.hide();

      // Recursive if the error is a new token
      if (result.error && result.error.new_token){
        localStorage.setItem('token', result.error.new_token);
        return makeAPIRequest(callAPI, next, store);
      }
      
      // Dispatch alert if any error
      if (result && result.error && result.error.message){
        store.dispatch(alertActions.addAlert(result.error.message, alertMessages.ERROR));
      }      

      next({
        message: (result.error) ? (result.error.message || result.error) : 'There was an error.',
        status: result.response ? result.response.status : null,
        type: errorType
      })
    }
  )
}