'use strict';

require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

// Utils
import { toQueryString } from '../utils';

import { 
	FILTERS_SET, 
	FILTERS_GET,
	FILTERS_RESET,
	RESOURCES_REQUEST, 
	RESOURCES_SUCCESS,
	RESOURCES_FAILURE
} from './action-types';
import { CALL_API } from '../middleware/api';


// FORMATS
export function getFilters(){
	return {
		type: FILTERS_GET
	}
}

export function setFilters(filters){
	return {
		type: FILTERS_SET,
		filters
	}
}

export function resetFilters(){
	return {
		type: FILTERS_RESET
	}
}

export function searchResourcesFilters(filters){
	return {
		[CALL_API]: {
		  endpoint: 'resources/search?'+toQueryString(filters),
		  sendToken: true,
		  types: [RESOURCES_REQUEST, RESOURCES_SUCCESS, RESOURCES_FAILURE]
		}
	}
}