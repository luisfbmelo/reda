require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

import { 
	LOGIN_REQUEST, 
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGOUT_REQUEST
} from '../actions/action-types';

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
	        dispatch(receiveLogin(props));			
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
	return {
		type: LOGOUT_REQUEST
	}
}