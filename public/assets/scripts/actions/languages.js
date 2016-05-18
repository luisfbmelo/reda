'use strict';

require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

import { 
	LANGUAGES_REQUEST, 
	LANGUAGES_SUCCESS,
	LANGUAGES_FAILURE,
	LANGUAGES_RESET
} from './action-types';


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

export function resetLanguages(){
	return {
		type: LANGUAGES_RESET
	}
}


export function fetchLanguages(isRequired){
	let params = '';

	if (isRequired){
		params = '?required=true';
	}

	return {
		[CALL_API]: {
		  endpoint: 'languages'+params,
		  types: [LANGUAGES_REQUEST, LANGUAGES_SUCCESS, LANGUAGES_FAILURE]
		}
	}
}