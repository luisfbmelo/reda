'use strict';

require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

import { 
	TERMSANDCONDITIONS_REQUEST, 
	TERMSANDCONDITIONS_SUCCESS,
	TERMSANDCONDITIONS_FAILURE
} from '../actions/action-types';


// FORMATS
function requestTerms(){
	return {
		type: TERMSANDCONDITIONS_REQUEST
	}
}

function receiveTerms(data){
	return {
		type: TERMSANDCONDITIONS_SUCCESS,
		data: data
	}
}

function termsError(message){
	return {
		type: TERMSANDCONDITIONS_FAILURE,
		message: message
	}
}

export function fetchTerms(){
	return dispatch => {
		dispatch(requestTerms());

		return fetch('/assets/scripts/dummy.json')
		.then(response => {
			if (response.status >= 400) {
	          throw new Error('Bad response');
	        }
	        return response.json();
		})
		.then(json => {
			dispatch(receiveTerms(json.terms));
		})
		.catch(message => {
			dispatch(termsError(message));
		})
	}
}