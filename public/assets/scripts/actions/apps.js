'use strict';

require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

// Utils
import { toQueryString, complexToQueryString } from '../utils';

import { 
	APPS_REQUEST, 
	APPS_SUCCESS,
	APPS_FAILURE,
	APPS_RESET,
	APP_REQUEST, 
	APP_SUCCESS,
	APP_FAILURE,
	APP_RESET
} from './action-types';
import { CALL_API } from '../middleware/api';

import * as alertMessages from './message-types';
import * as alertActions from './alerts';

// RESOURCES
function requestApps(){
	return {
		type: APPS_REQUEST
	}
}

function receiveApps(data){
	return {
		type: APPS_SUCCESS,
		data: data
	}
}

function appsError(message){
	return {
		type: APPS_FAILURE,
		message: message
	}
}

export function resetApps(){
	return {
		type: APPS_RESET
	}
}

export function fetchApps(appId){
	return {
		[CALL_API]: {
		  endpoint: 'apps',
		  types: [APPS_REQUEST, APPS_SUCCESS, APPS_FAILURE]
		}
	}
}

// search apps with specific params
export function searchApps(filters){
	return {
		[CALL_API]: {
		  endpoint: 'apps/search?'+complexToQueryString(filters),
		  sendToken: true,
		  types: [APPS_REQUEST, APPS_SUCCESS, APPS_FAILURE]
		}
	}
}

// delete collective
export function deleteApps(list){
	return {
		[CALL_API]: {
		  endpoint: 'apps',
		  method: 'DELETE',
		  sendToken: true,
		  mustAuth: true,
		  data: { apps: list },
		  types: [APPS_REQUEST, APPS_SUCCESS, APPS_FAILURE]
		}
	}
}

// SINGLE RESOURCE
function requestApp(){
	return {
		type: APP_REQUEST
	}
}

function receiveApp(data){
	return {
		type: APP_SUCCESS,
		data: data
	}
}

function appError(message){
	return {
		type: APP_FAILURE,
		message: message
	}
}

export function resetApp(){
	return {
		type: APP_RESET
	}
}

export function fetchApp(appId){
	return {
		[CALL_API]: {
		  endpoint: 'apps/details/'+appId,
		  sendToken:true,
		  types: [APP_REQUEST, APP_SUCCESS, APP_FAILURE]
		}
	}
}

export function submitApp(data, app){
	const endPoint = app ? 'apps/'+app : 'apps';
	const method = app ? 'PUT' : 'POST';

	return {
		[CALL_API]: {
		  endpoint: endPoint,
		  method: method || 'POST',
		  sendToken: true,
		  mustAuth: true,
		  data,
		  types: [APP_REQUEST, APP_SUCCESS, APP_FAILURE]
		}
	}
}

export function deleteApp(appId){
	return {
		[CALL_API]: {
		  endpoint: 'apps/'+appId,
		  method: 'DELETE',
		  sendToken: true,
		  mustAuth: true,
		  types: [APP_REQUEST, APP_SUCCESS, APP_FAILURE]
		}
	}
}