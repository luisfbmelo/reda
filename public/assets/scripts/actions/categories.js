'use strict';

require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

import { 
	CATEGORIES_REQUEST, 
	CATEGORIES_SUCCESS,
	CATEGORIES_FAILURE,
	CATEGORIES_RESET
} from './action-types';
import { CALL_API } from '../middleware/api';


// FORMATS
function requestCategories(){
	return {
		type: CATEGORIES_REQUEST
	}
}

function receiveCategories(data){
	return {
		type: CATEGORIES_SUCCESS,
		data: data
	}
}

function categoriesError(message){
	return {
		type: CATEGORIES_FAILURE,
		message: message
	}
}

export function resetCategories(){
	return {
		type: CATEGORIES_RESET
	}
}

// App categories
export function fetchCatApp(isRequired){
	return fetchCategories('apps', isRequired);
}

// Recomended categories
export function fetchCatRecomended(isRequired){
	return fetchCategories('recomended', isRequired);
}

// Try categories
export function fetchCatTry(isRequired){
	return fetchCategories('try', isRequired);
}

// Feedback categories
export function fetchCatFeedback(isRequired){
	return fetchCategories('feedback', isRequired);
}

function fetchCategories(type, isRequired){
	let params = '';

	params += '?type='+type
	params += '&required=true';
	/*if (isRequired){
		params += '&required=true';
	}*/

	return {
		[CALL_API]: {
		  endpoint: 'categories'+params,
		  types: [CATEGORIES_REQUEST, CATEGORIES_SUCCESS, CATEGORIES_FAILURE]
		}
	}
}