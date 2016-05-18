'use strict';

require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

// Utils
import { toQueryString, complexToQueryString } from '../utils';

import { 
	HIGHLIGHTS_REQUEST, 
	HIGHLIGHTS_SUCCESS,
	HIGHLIGHTS_FAILURE,
	HIGHLIGHTS_RESET,
	TOGGLE_HIGHLIGHT_RESOURCE,
	RESOURCES_REQUEST, 
	RESOURCES_SUCCESS,
	RESOURCES_FAILURE,
	RESOURCES_RESET,
	RESOURCE_REQUEST, 
	RESOURCE_SUCCESS,
	RESOURCE_FAILURE,
	RESOURCE_RESET,	
	RELATED_RESOURCES_REQUEST, 
	RELATED_RESOURCES_SUCCESS,
	RELATED_RESOURCES_FAILURE,
	RELATED_RESOURCES_RESET
} from './action-types';
import { CALL_API } from '../middleware/api';

import * as alertMessages from './message-types';
import * as alertActions from './alerts';

// HIGHLIGHTS
function requestHighlights(){
	return {
		type: HIGHLIGHTS_REQUEST
	}
}

function receiveHighlights(data){
	return {
		type: HIGHLIGHTS_SUCCESS,
		data: data
	}
}

function highlightsError(message){
	return {
		type: HIGHLIGHTS_FAILURE,
		message: message
	}
}

export function resetHighlights(){
	return {
		type: HIGHLIGHTS_RESET
	}
}


export function setHighlight(resourceId){
	return {
		type: TOGGLE_HIGHLIGHT_RESOURCE,
		id: resourceId
	}
}

export function fetchHighlights(params){
	/*return dispatch => {
		dispatch(requestHighlights());

		return fetch('/assets/scripts/dummy.json')
		.then(response => {
			if (response.status >= 400) {
	          throw new Error('Bad response');
	        }
	        return response.json();
		})
		.then(json => {
			dispatch(receiveHighlights(json.highlights));
		})
		.catch(message => {
			dispatch(highlightsError(message));
		})
	}*/

	return {
		[CALL_API]: {
		  endpoint: 'resources/highlight',
		  sendToken: true,
		  types: [HIGHLIGHTS_REQUEST, HIGHLIGHTS_SUCCESS, HIGHLIGHTS_FAILURE]
		}
	}
}

// RESOURCES
function requestResources(){
	return {
		type: RESOURCES_REQUEST
	}
}

function receiveResources(data){
	return {
		type: RESOURCES_SUCCESS,
		data: data
	}
}

function resourcesError(message){
	return {
		type: RESOURCES_FAILURE,
		message: message
	}
}

export function resetResources(){
	return {
		type: RESOURCES_RESET
	}
}

export function fetchResources(type, params){
	/*return dispatch => {
		dispatch(requestResources());

		return fetch('/assets/scripts/dummy.json')
		.then(response => {
			if (response.status >= 400) {
	          throw new Error('Bad response');
	        }
	        return response.json();
		})
		.then(json => {
			dispatch(receiveResources(json.resources));
		})
		.catch(message => {
			dispatch(resourcesError(message));
		})
	}*/

	const endpoint = type ? 'resources/'+type : 'resources';

	return {
		[CALL_API]: {
		  endpoint: endpoint,
		  sendToken: true,
		  method: 'GET',
		  types: [RESOURCES_REQUEST, RESOURCES_SUCCESS, RESOURCES_FAILURE]
		}
	}
}

export function searchResources(filters){
	return {
		[CALL_API]: {
		  endpoint: 'resources/search?'+complexToQueryString(filters),
		  types: [RESOURCES_REQUEST, RESOURCES_SUCCESS, RESOURCES_FAILURE]
		}
	}
}

// SINGLE RESOURCE
function requestResource(){
	return {
		type: RESOURCE_REQUEST
	}
}

function receiveResource(data){
	return {
		type: RESOURCE_SUCCESS,
		data: data
	}
}

function resourceError(message){
	return {
		type: RESOURCE_FAILURE,
		message: message
	}
}

export function resetResource(){
	return {
		type: RESOURCE_RESET
	}
}

export function fetchResource(resourceSlug){
	return {
		[CALL_API]: {
		  endpoint: 'resources/details/'+resourceSlug,
		  sendToken:true,
		  types: [RESOURCE_REQUEST, RESOURCE_SUCCESS, RESOURCE_FAILURE]
		}
	}
}

// RELATED RESOURCES
function requestRelatedResources(){
	return {
		type: RELATED_RESOURCES_REQUEST
	}
}

function receiveRelatedResources(data){
	return {
		type: RELATED_RESOURCES_SUCCESS,
		data: data
	}
}

function relatedResourcesError(message){
	return {
		type: RELATED_RESOURCES_FAILURE,
		message: message
	}
}

export function resetRelatedResources(){
	return {
		type: RELATED_RESOURCES_RESET
	}
}

export function fetchRelatedResources(resourceId){
	return dispatch => {
		dispatch(requestRelatedResources());

		return fetch('/assets/scripts/dummy.json')
		.then(response => {
			if (response.status >= 400) {
	          throw new Error('Bad response');
	        }
	        return response.json();
		})
		.then(json => {
			json.resources.length=3;
			dispatch(receiveRelatedResources(json.resources));
		})
		.catch(message => {
			dispatch(relatedResourcesError(message));
		})
	}
}