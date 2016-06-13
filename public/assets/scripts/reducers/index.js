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
import apps from './apps';
import terms  from './terms';
import systems  from './systems';
import categories  from './categories';
import themes  from './themes';
import auth from './auth';
import user from './user';
import alerts  from './alerts';
import filters from './filters';
import filtersApps from './filtersApps';
import config from './config';
import headers from './headers';

const rootReducer = combineReducers({
	config,
	headers,
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
	filtersApps,
	alerts,
	apps,
	systems,
	categories,
	themes
}); 

export default rootReducer;