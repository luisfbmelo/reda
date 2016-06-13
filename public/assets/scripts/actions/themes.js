'use strict';

require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

import { 
	THEMES_REQUEST, 
	THEMES_SUCCESS,
	THEMES_FAILURE,
	THEMES_RESET
} from './action-types';
import { CALL_API } from '../middleware/api';


// FORMATS
function requestThemes(){
	return {
		type: THEMES_REQUEST
	}
}

function receiveThemes(data){
	return {
		type: THEMES_SUCCESS,
		data: data
	}
}

function themesError(message){
	return {
		type: THEMES_FAILURE,
		message: message
	}
}

export function resetThemes(){
	return {
		type: THEMES_RESET
	}
}

export function fetchThemes(isRequired){
	let params = '?required=true';

	/*if (isRequired){
		params = '?required=true';
	}*/

	return {
		[CALL_API]: {
		  endpoint: 'themes'+params,
		  types: [THEMES_REQUEST, THEMES_SUCCESS, THEMES_FAILURE]
		}
	}
}