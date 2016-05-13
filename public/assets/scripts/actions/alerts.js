'use strict';

require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

import { 
	ALERT_ADD, 
	ALERT_REMOVE
} from './action-types';

import * as messages from './message-types';

export function addAlert(message, resultType){
	return {
		type: ALERT_ADD,
		message,
		resultType
	}
}

export function removeAlert(data){
	return {
		type: ALERT_REMOVE
	}
}