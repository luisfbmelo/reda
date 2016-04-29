require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

import { 
	HIGHLIGHTS_REQUEST, 
	HIGHLIGHTS_SUCCESS,
	HIGHLIGHTS_FAILURE,
	TOGGLE_HIGHLIGHT_RESOURCE,
	RESOURCES_REQUEST, 
	RESOURCES_SUCCESS,
	RESOURCES_FAILURE,
	RESOURCE_REQUEST, 
	RESOURCE_SUCCESS,
	RESOURCE_FAILURE,	
	RELATED_RESOURCES_REQUEST, 
	RELATED_RESOURCES_SUCCESS,
	RELATED_RESOURCES_FAILURE
} from '../actions/action-types';


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

export function setHighlight(resourceId){
	return {
		type: TOGGLE_HIGHLIGHT_RESOURCE,
		id: resourceId
	}
}

export function fetchHighlights(params){
	return dispatch => {
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

export function fetchResources(params){
	return dispatch => {
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

export function fetchResource(resourceId){
	return dispatch => {
		dispatch(requestResource());

		return fetch('/assets/scripts/dummy.json')
		.then(response => {
			if (response.status >= 400) {
	          throw new Error('Bad response');
	        }
	        return response.json();
		})
		.then(json => {
			var filtered = json.resources.filter((obj) => {				
				return obj.id == resourceId;
			})
			
			if (filtered.length==0){
				throw new Error('No data');
			}
			
			dispatch(receiveResource(filtered[0]));
		})
		.catch(message => {
			dispatch(resourceError(message));
		})
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