'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import thunkMiddleware  from 'redux-thunk';
import reducers from './reducers';
import routes from './routes';


const store = applyMiddleware(
  thunkMiddleware
)(createStore)(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('site-canvas'));