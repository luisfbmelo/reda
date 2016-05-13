'use strict';

require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

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

function receiveLogin(data){
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
	return dispatch => {
		dispatch(requestLogin());

		/* Change this to API Call */
		return fetch('/assets/scripts/dummy.json')
		.then(response => {
			if (response.status >= 400) {
	          throw new Error('Bad response');
	        }

	        return response.json();
		})
		.then(json => {
			dispatch(alertActions.addAlert(alertMessages.ALERT_LOGIN_SUCCESS, alertMessages.SUCCESS))
	        dispatch(receiveLogin(json.users[0]));			
		})
		.catch(errors => {

			// Errors simulation
			let data = {
				email: "Email já existe",
				password: "Faltam caracteres"
			}

			dispatch(loginError(data));
		})
	}
}

export function logout(){
	return dispatch => {
		dispatch(requestLogout());
		dispatch(alertActions.addAlert(alertMessages.ALERT_LOGOUT_SUCCESS, alertMessages.SUCCESS))
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