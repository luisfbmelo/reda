require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

import { 
	HIGHLIGHTS_REQUEST, 
	HIGHLIGHTS_SUCCESS,
	HIGHLIGHTS_FAILURE,
	RESOURCES_REQUEST, 
	RESOURCES_SUCCESS,
	RESOURCES_FAILURE
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