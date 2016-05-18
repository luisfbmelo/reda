'use strict';

require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

import { 
	SUBJECTS_REQUEST, 
	SUBJECTS_SUCCESS,
	SUBJECTS_FAILURE,
	SUBJECTS_RESET
} from './action-types';
import { CALL_API } from '../middleware/api';


// FORMATS
function requestSubjects(){
	return {
		type: SUBJECTS_REQUEST
	}
}

function receiveSubjects(data){
	return {
		type: SUBJECTS_SUCCESS,
		data: data
	}
}

function subjectsError(message){
	return {
		type: SUBJECTS_FAILURE,
		message: message
	}
}

export function resetSubjects(){
	return {
		type: SUBJECTS_RESET
	}
}

export function fetchSubjects(isRequired){
	/*return dispatch => {
		dispatch(requestSubjects());

		return fetch('/assets/scripts/dummy.json')
		.then(response => {
			if (response.status >= 400) {
	          throw new Error('Bad response');
	        }
	        return response.json();
		})
		.then(json => {
			dispatch(receiveSubjects(json.subjects));
		})
		.catch(message => {
			dispatch(subjectsError(message));
		})
	}*/

	let params = '';

	if (isRequired){
		params = '?required=true';
	}

	return {
		[CALL_API]: {
		  endpoint: 'subjects'+params,
		  types: [SUBJECTS_REQUEST, SUBJECTS_SUCCESS, SUBJECTS_FAILURE]
		}
	}
}