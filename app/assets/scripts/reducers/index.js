'use strict';

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import highlightsReducer, {resources as resourcesReducer}  from './resources';
import formatsReducer  from './formats';
import auth from './auth';

const rootReducer = combineReducers({
  form: formReducer,
  highlights: highlightsReducer,
  formats: formatsReducer,
  resources: resourcesReducer,
  auth: auth
}); 

export default rootReducer;