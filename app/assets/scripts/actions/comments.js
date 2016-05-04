'use strict';

require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

import { 
	COMMENTS_REQUEST, 
	COMMENTS_SUCCESS,
	COMMENTS_FAILURE
} from '../actions/action-types';

function requestComments(){
	return {
		type: COMMENTS_REQUEST
	}
}

function receiveComments(data){
	return {
		type: COMMENTS_SUCCESS,
		data: data
	}
}

function commentsError(errors){
	return {
		type: COMMENTS_FAILURE,
		errors
	}
}

export function fetchComments(resourceId){
	return dispatch => {
		dispatch(requestComments());

		/* Change this to API Call */
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
			});
			
			if (filtered.length==0){
				throw new Error('No data');
			}
	        
	        dispatch(receiveComments(filtered[0].comments));			
		})
		.catch(errors => {
			dispatch(commentsError(errors));
		})
	}
}