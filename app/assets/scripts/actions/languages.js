'use strict';

require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

import { 
	LANGUAGES_REQUEST, 
	LANGUAGES_SUCCESS,
	LANGUAGES_FAILURE
} from '../actions/action-types';


// FORMATS
function requestLanguages(){
	return {
		type: LANGUAGES_REQUEST
	}
}

function receiveLanguages(data){
	return {
		type: LANGUAGES_SUCCESS,
		data: data
	}
}

function languagesError(message){
	return {
		type: LANGUAGES_FAILURE,
		message: message
	}
}

export function fetchLanguages(){
	return dispatch => {
		dispatch(requestLanguages());

		return fetch('/assets/scripts/dummy.json')
		.then(response => {
			if (response.status >= 400) {
	          throw new Error('Bad response');
	        }
	        return response.json();
		})
		.then(json => {
			dispatch(receiveLanguages(json.languages));
		})
		.catch(message => {
			dispatch(languagesError(message));
		})
	}
}