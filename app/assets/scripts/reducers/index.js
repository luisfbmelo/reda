'use strict';

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import  highlightsReducer  from './resources';

const rootReducer = combineReducers({
  form: formReducer,
  highlights: highlightsReducer
}); 

export default rootReducer;