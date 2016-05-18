'use strict';

require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

import { 
	ACCESS_REQUEST, 
	ACCESS_SUCCESS,
	ACCESS_FAILURE,
	ACCESS_RESET
} from './action-types';
import { CALL_API } from '../middleware/api';


// FORMATS
function requestAccess(){
	return {
		type: ACCESS_REQUEST
	}
}

function receiveAccess(data){
	return {
		type: ACCESS_SUCCESS,
		data: data
	}
}

function accessError(message){
	return {
		type: ACCESS_FAILURE,
		message: message
	}
}

export function resetAccess(){
	return {
		type: ACCESS_RESET
	}
}

export function fetchAccess(isRequired){
	/*return dispatch => {
		dispatch(requestAccess());

		return fetch('/assets/scripts/dummy.json')
		.then(response => {
			if (response.status >= 400) {
	          throw new Error('Bad response');
	        }
	        return response.json();
		})
		.then(json => {
			dispatch(receiveAccess(json.access));
		})
		.catch(message => {
			dispatch(accessError(message));
		})
	}*/

	let params = '';

	if (isRequired){
		params = '?required=true';
	}

	return {
		[CALL_API]: {
		  endpoint: 'modes'+params,
		  types: [ACCESS_REQUEST, ACCESS_SUCCESS, ACCESS_FAILURE]
		}
	}
}