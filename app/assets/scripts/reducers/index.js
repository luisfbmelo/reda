'use strict';

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import highlights, {resources, resource, relatedResources }  from './resources';
import comments  from './comments';
import formats  from './formats';
import access  from './access';
import subjects  from './subjects';
import domains  from './domains';
import languages  from './languages';
import years  from './years';
import auth from './auth';
import user from './user';
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
	relatedResources,
	auth,
	user
}); 

export default rootReducer;