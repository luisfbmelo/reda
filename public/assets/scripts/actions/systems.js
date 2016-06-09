'use strict';

require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

import { 
	SYSTEMS_REQUEST, 
	SYSTEMS_SUCCESS,
	SYSTEMS_FAILURE,
	SYSTEMS_RESET
} from './action-types';
import { CALL_API } from '../middleware/api';


// FORMATS
function requestSystems(){
	return {
		type: SYSTEMS_REQUEST
	}
}

function receiveSystems(data){
	return {
		type: SYSTEMS_SUCCESS,
		data: data
	}
}

function systemsError(message){
	return {
		type: SYSTEMS_FAILURE,
		message: message
	}
}

export function resetSystems(){
	return {
		type: SYSTEMS_RESET
	}
}

export function fetchSystems(isRequired){
	let params = '';

	if (isRequired){
		params = '?required=true';
	}

	return {
		[CALL_API]: {
		  endpoint: 'systems'+params,
		  types: [SYSTEMS_REQUEST, SYSTEMS_SUCCESS, SYSTEMS_FAILURE]
		}
	}
}