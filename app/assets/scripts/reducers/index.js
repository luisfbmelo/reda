'use strict';

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import  highlightsReducer, {resources as resourcesReducer}  from './resources';
import  formatsReducer  from './formats';

const rootReducer = combineReducers({
  form: formReducer,
  highlights: highlightsReducer,
  formats: formatsReducer,
  resources: resourcesReducer
}); 

export default rootReducer;