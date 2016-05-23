'use strict';

require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

import { 
	DOMAINS_REQUEST, 
	DOMAINS_SUCCESS,
	DOMAINS_FAILURE,
	DOMAINS_RESET
} from './action-types';
import { CALL_API } from '../middleware/api';


// FORMATS
function requestDomains(){
	return {
		type: DOMAINS_REQUEST
	}
}

function receiveDomains(data){
	return {
		type: DOMAINS_SUCCESS,
		data: data
	}
}

function domainsError(message){
	return {
		type: DOMAINS_FAILURE,
		message: message
	}
}

export function resetDomains(){
	return {
		type: DOMAINS_RESET
	}
}

export function fetchDomains(isRequired){
	let params = '';

	if (isRequired){
		params = '?required=true';
	}

	return {
		[CALL_API]: {
		  endpoint: 'domains'+params,
		  types: [DOMAINS_REQUEST, DOMAINS_SUCCESS, DOMAINS_FAILURE]
		}
	}
}

export function fetchDomainsFromSubject(subId, isRequired){

	let params = '?subject='+subId;

	if (isRequired){
		params += '&required=true'
	}

	return {
		[CALL_API]: {
		  endpoint: 'domains/from-subject'+params,
		  types: [DOMAINS_REQUEST, DOMAINS_SUCCESS, DOMAINS_FAILURE]
		}
	}
}

export function fetchDomainsWithSubject(){
	return {
		[CALL_API]: {
		  endpoint: 'domains/with-subjects',
		  types: [DOMAINS_REQUEST, DOMAINS_SUCCESS, DOMAINS_FAILURE]
		}
	}
}