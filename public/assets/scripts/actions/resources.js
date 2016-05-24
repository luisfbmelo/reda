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
	TOGGLE_FAVORITE_RESOURCE,
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

// search resources with specific params
export function searchResources(filters){
	return {
		[CALL_API]: {
		  endpoint: 'resources/search?'+complexToQueryString(filters),
		  sendToken: true,
		  types: [RESOURCES_REQUEST, RESOURCES_SUCCESS, RESOURCES_FAILURE]
		}
	}
}

// dashboard myResources
export function fetchMyResources(filters){
	return {
		[CALL_API]: {
		  endpoint: 'resources/search?type=myresources&'+complexToQueryString(filters),
		  sendToken: true,
		  mustAuth: true,
		  types: [RESOURCES_REQUEST, RESOURCES_SUCCESS, RESOURCES_FAILURE]
		}
	}
}

// delete collective
export function deleteResources(list){
	return {
		[CALL_API]: {
		  endpoint: 'resources',
		  method: 'DELETE',
		  sendToken: true,
		  mustAuth: true,
		  data: { resources: list },
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

export function setFavorite(resourceId){
	return {
		type: TOGGLE_FAVORITE_RESOURCE,
		id: resourceId
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

export function submitResource(data, resource){
	const endPoint = resource ? 'resources/'+resource : 'resources';
	const method = resource ? 'PUT' : 'POST';

	return {
		[CALL_API]: {
		  endpoint: endPoint,
		  method: method || 'POST',
		  sendToken: true,
		  mustAuth: true,
		  data,
		  types: [RESOURCE_REQUEST, RESOURCE_SUCCESS, RESOURCE_FAILURE]
		}
	}
}

export function deleteResource(resourceSlug){
	return {
		[CALL_API]: {
		  endpoint: 'resources/'+resourceSlug,
		  method: 'DELETE',
		  sendToken: true,
		  mustAuth: true,
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

export function fetchRelatedResources(resourceSlug){
	return {
		[CALL_API]: {
		  endpoint: 'resources/related/'+resourceSlug,
		  types: [RELATED_RESOURCES_REQUEST, RELATED_RESOURCES_SUCCESS, RELATED_RESOURCES_FAILURE]
		}
	}
}