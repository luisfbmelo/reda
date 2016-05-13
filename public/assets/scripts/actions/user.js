require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

import { 
	USER_REQUEST, 
	USER_SUCCESS,
	USER_FAILURE
} from './action-types';


// CONFFIG
function requestUser(){
	return {
		type: USER_REQUEST
	}
}

function receiveUser(data){
	return {
		type: USER_SUCCESS,
		data: data
	}
}

function userError(message){
	return {
		type: USER_FAILURE,
		message: message
	}
}

export function fetchUserData(userId){

	return dispatch => {
		dispatch(requestUser());

		return fetch('/assets/scripts/dummy.json')
		.then(response => {
			if (response.status >= 400) {
	          throw new Error('Bad response');
	        }


	        return response.json();
		})
		.then(json => {
			
			var filtered = json.users.filter((obj) => {				
				return obj.id == userId;
			});
			
			if (filtered.length==0){
				throw new Error('No data');
			}

			dispatch(receiveUser(filtered[0]));
		})
		.catch(message => {
			dispatch(userError(message));
		})
	}
}