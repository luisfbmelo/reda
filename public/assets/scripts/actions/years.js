'use strict';

require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

import { 
	YEARS_REQUEST, 
	YEARS_SUCCESS,
	YEARS_FAILURE,
	YEARS_RESET
} from './action-types';
import { CALL_API } from '../middleware/api';


// FORMATS
function requestYears(){
	return {
		type: YEARS_REQUEST
	}
}

function receiveYears(data){
	return {
		type: YEARS_SUCCESS,
		data: data
	}
}

function yearsError(message){
	return {
		type: YEARS_FAILURE,
		message: message
	}
}

export function resetYears(){
	return {
		type: YEARS_RESET
	}
}


export function fetchYears(isRequired){

	let params = '';

	if (isRequired){
		params = '?required=true';
	}

	return {
		[CALL_API]: {
		  endpoint: 'years'+params,
		  types: [YEARS_REQUEST, YEARS_SUCCESS, YEARS_FAILURE]
		}
	}
}