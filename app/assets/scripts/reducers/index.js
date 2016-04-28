'use strict';

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import highlightsReducer, {resources as resourcesReducer, resource as resourceReducer, relatedResources as relatedResourcesReducer }  from './resources';
import commentsReducer  from './comments';
import formatsReducer  from './formats';
import authReducer from './auth';
import userReducer from './user';
import configReducer from './config';

const rootReducer = combineReducers({
	config: configReducer,
	form: formReducer,
	highlights: highlightsReducer,
	formats: formatsReducer,
	comments: commentsReducer,
	resources: resourcesReducer,
	resource: resourceReducer,
	relatedResources: relatedResourcesReducer,
	auth: authReducer,
	user: userReducer
}); 

export default rootReducer;