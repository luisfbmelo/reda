'use strict';

require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import apiPath from '@/config';

import { 
	LOGIN_REQUEST, 
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGOUT_REQUEST,
	SIGNUP_REQUEST, 
	SIGNUP_SUCCESS,
	SIGNUP_FAILURE
} from './action-types';

import * as alertMessages from './message-types';
import * as alertActions from './alerts';

// LOGIN
function requestLogin(){
	return {
		type: LOGIN_REQUEST
	}
}

export function receiveLogin(data){
	return {
		type: LOGIN_SUCCESS,
		data: data
	}
}

function loginError(errors){
	return {
		type: LOGIN_FAILURE,
		errors
	}
}

export function loginUser(props){
	let config = {
		method: 'POST',
		headers: { 'Content-Type':'application/x-www-form-urlencoded' },
		body: `email=${props.email}&password=${props.password}`
	}

	return dispatch => {
		dispatch(requestLogin());

		/* Change this to API Call */
		return fetch(apiPath.production.api+'users/signin', config)
		.then(response => {
			if (!response.ok) {	 
				let message = response.status == 401 ? "Email ou Palavra-chave incorretos" : "Não foi possível entrar. Contate o administrador da REDA";
          		dispatch(loginError(message));
          		return Promise.reject(message);
	        }

	        return response.json();
		})
		.then(json => {

			// If login was successful, set the token in local storage
          	localStorage.setItem('token', json.token);
          	localStorage.setItem('user', JSON.stringify(json.user));

			dispatch(alertActions.addAlert(alertMessages.ALERT_LOGIN_SUCCESS, alertMessages.SUCCESS))
	        dispatch(receiveLogin(json));			
		})
		.catch(errors => {
			dispatch(loginError(errors));
		})
	}
}

export function logout(){
	return dispatch => {
		localStorage.removeItem('token');
      	localStorage.removeItem('user');
      	dispatch(alertActions.addAlert(alertMessages.ALERT_LOGOUT_SUCCESS, alertMessages.SUCCESS));
		dispatch(requestLogout());
		
	}
}

function requestLogout(){
	return {
		type: LOGOUT_REQUEST
	}
}

// SIGNUP
function requestSignup(){
	return {
		type: SIGNUP_REQUEST
	}
}

function receiveSignup(data){
	return {
		type: SIGNUP_SUCCESS,
		data: data
	}
}

function signupError(errors){
	return {
		type: SIGNUP_FAILURE,
		errors
	}
}

export function signupUser(props){
	return dispatch => {
		dispatch(requestSignup());

		/* Change this to API Call */
		return fetch('/assets/scripts/dummy.json')
		.then(response => {
			if (response.status >= 400) {
	          throw new Error('Bad response');
	        }

	        return response.json();
		})
		.then(json => {

	        dispatch(receiveSignup(json.users[0]));			
		})
		.catch(errors => {

			// Errors simulation
			let data = {
				email: "Email já existe",
				password: "Faltam caracteres"
			}

			dispatch(signupError(data));
		})
	}
}