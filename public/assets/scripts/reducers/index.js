'use strict';

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import highlights, {resources, resource, relatedResources }  from './resources';
import scripts  from './scripts';
import comments  from './comments';
import formats  from './formats';
import access  from './access';
import subjects  from './subjects';
import domains  from './domains';
import languages  from './languages';
import years  from './years';
import terms  from './terms';
import auth from './auth';
import user from './user';
import alerts  from './alerts';
import filters from './filters';
import config from './config';

const rootReducer = combineReducers({
	config,
	form,
	highlights,
	formats,
	access,
	subjects,
	domains,
	languages,
	years,
	comments,
	resources,
	resource,
	scripts,
	relatedResources,
	terms,
	auth,
	user,
	filters,
	alerts
}); 

export default rootReducer;