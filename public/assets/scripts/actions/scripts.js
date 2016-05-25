'use strict';

require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

import { 
	SCRIPTS_REQUEST, 
	SCRIPTS_SUCCESS,
	SCRIPTS_FAILURE,
	SCRIPTS_RESET
} from './action-types';
import { CALL_API } from '../middleware/api';


// FORMATS
function requestScripts(){
	return {
		type: SCRIPTS_REQUEST
	}
}

function receiveScripts(data){
	return {
		type: SCRIPTS_SUCCESS,
		data: data
	}
}

function scriptsError(message){
	return {
		type: SCRIPTS_FAILURE,
		message: message
	}
}

export function resetScripts(){
	return {
		type: SCRIPTS_RESET
	}
}

export function fetchScripts(resourceId){

	return {
		[CALL_API]: {
		  endpoint: 'scripts/'+resourceId,
		  sendToken: true,
		  mustAuth: true,
		  types: [SCRIPTS_REQUEST, SCRIPTS_SUCCESS, SCRIPTS_FAILURE]
		}
	}
}

export function fetchUserScripts(resourceId){
	
	return {
		[CALL_API]: {
		  endpoint: 'scripts/user-scripts/'+resourceId,
		  sendToken: true,
		  mustAuth: true,
		  types: [SCRIPTS_REQUEST, SCRIPTS_SUCCESS, SCRIPTS_FAILURE]
		}
	}
}

export function deleteScript(scriptId){
	return {
		[CALL_API]: {
		  endpoint: 'scripts/'+scriptId,
		  method: 'DELETE',
		  sendToken: true,
		  mustAuth: true,
		  types: [SCRIPTS_REQUEST, SCRIPTS_SUCCESS, SCRIPTS_FAILURE]
		}
	}
}

export function submitScripts(data, resourceId){
	return {
		[CALL_API]: {
		  endpoint: 'scripts/'+resourceId,
		  method: 'POST',
		  sendToken: true,
		  mustAuth: true,
		  data,
		  types: [SCRIPTS_REQUEST, SCRIPTS_SUCCESS, SCRIPTS_FAILURE]
		}
	}
}