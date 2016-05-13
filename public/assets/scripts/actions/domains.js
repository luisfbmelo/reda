'use strict';

require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

import { 
	DOMAINS_REQUEST, 
	DOMAINS_SUCCESS,
	DOMAINS_FAILURE
} from './action-types';


// FORMATS
function requestDomains(){
	return {
		type: DOMAINS_REQUEST
	}
}

function receiveDomains(data){
	return {
		type: DOMAINS_SUCCESS,
		data: data
	}
}

function domainsError(message){
	return {
		type: DOMAINS_FAILURE,
		message: message
	}
}

export function fetchDomains(){
	return dispatch => {
		dispatch(requestDomains());

		return fetch('/assets/scripts/dummy.json')
		.then(response => {
			if (response.status >= 400) {
	          throw new Error('Bad response');
	        }
	        return response.json();
		})
		.then(json => {
			dispatch(receiveDomains(json.domains));
		})
		.catch(message => {
			dispatch(domainsError(message));
		})
	}
}