'use strict';

require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

import { 
	FILTERS_REQUEST, 
	FILTERS_SUCCESS,
	FILTERS_FAILURE
} from './action-types';
import { CALL_API } from '../middleware/api';


// FORMATS
function requestFilters(){
	return {
		type: FILTERS_REQUEST
	}
}

function receiveFilters(data){
	return {
		type: FILTERS_SUCCESS,
		data: data
	}
}

function filtersError(message){
	return {
		type: FILTERS_FAILURE,
		message: message
	}
}

export function fetchFormats(){
	/*return dispatch => {
		dispatch(requestFormats());

		return fetch('/assets/scripts/dummy.json')
		.then(response => {
			if (response.status >= 400) {
	          throw new Error('Bad response');
	        }
	        return response.json();
		})
		.then(json => {
			dispatch(receiveFormats(json.formats));
		})
		.catch(message => {
			dispatch(formatsError(message));
		})
	}*/

	

	return {
		[CALL_API]: {
		  endpoint: 'formats',
		  types: [FILTERS_REQUEST, FILTERS_SUCCESS, FILTERS_FAILURE]
		}
	}
}