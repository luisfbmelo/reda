import fetch from 'isomorphic-fetch';

import { 
	HIGHLIGHTS_REQUEST, 
	HIGHLIGHTS_SUCCESS,
	HIGHLIGHTS_FAILURE
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

export function fetchHighlights(){
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