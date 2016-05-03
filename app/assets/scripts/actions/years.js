require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

import { 
	YEARS_REQUEST, 
	YEARS_SUCCESS,
	YEARS_FAILURE
} from '../actions/action-types';


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

export function fetchYears(){
	return dispatch => {
		dispatch(requestYears());

		return fetch('/assets/scripts/dummy.json')
		.then(response => {
			if (response.status >= 400) {
	          throw new Error('Bad response');
	        }
	        return response.json();
		})
		.then(json => {
			dispatch(receiveYears(json.years));
		})
		.catch(message => {
			dispatch(yearsError(message));
		})
	}
}