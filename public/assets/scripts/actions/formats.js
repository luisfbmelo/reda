'use strict';

require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

import { 
	FORMATS_REQUEST, 
	FORMATS_SUCCESS,
	FORMATS_FAILURE,
	FORMATS_RESET
} from './action-types';
import { CALL_API } from '../middleware/api';


// FORMATS
function requestFormats(){
	return {
		type: FORMATS_REQUEST
	}
}

function receiveFormats(data){
	return {
		type: FORMATS_SUCCESS,
		data: data
	}
}

function formatsError(message){
	return {
		type: FORMATS_FAILURE,
		message: message
	}
}

export function resetFormats(){
	return {
		type: FORMATS_RESET
	}
}


export function fetchFormats(isRequired){
	/*return dispatch => {
		dispatch(requestFormats());

		return fetch('/assets/scripts/dummy.json')
		.then(response => {
			if (response.status >= 400) {
	          throw new Error('Bad response');
	        }
	        return response.json();
		})
		.then(json => {
			dispatch(receiveFormats(json.formats));
		})
		.catch(message => {
			dispatch(formatsError(message));
		})
	}*/

	let params = '';

	if (isRequired){
		params = '?required=true';
	}

	return {
		[CALL_API]: {
		  endpoint: 'formats'+params,
		  types: [FORMATS_REQUEST, FORMATS_SUCCESS, FORMATS_FAILURE]
		}
	}
}