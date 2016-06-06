'use strict';

require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

import { 
	HEADERS_REQUEST, 
	HEADERS_SUCCESS,
	HEADERS_FAILURE
} from './action-types';


// FORMATS
function requestHeaders(){
	return {
		type: HEADERS_REQUEST
	}
}

function receiveHeaders(data){
	return {
		type: HEADERS_SUCCESS,
		data: data
	}
}

function headersError(message){
	return {
		type: HEADERS_FAILURE,
		message: message
	}
}

export function fetchHeader(header){
	return dispatch => {
		dispatch(requestHeaders());

		return fetch('/assets/scripts/dummy.json')
		.then(response => {
			if (response.status >= 400) {
	          throw new Error('Bad response');
	        }
	        return response.json();
		})
		.then(json => {
			dispatch(receiveHeaders(json.headers[header]));
		})
		.catch(message => {
			dispatch(headersError(message));
		})
	}
}