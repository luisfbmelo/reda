'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import thunkMiddleware  from 'redux-thunk';
import apiMiddleware  from './middleware/api';
import reducers from './reducers';
import routes from './routes';

// Actions
import { receiveLogin } from './actions/auth';


const store = applyMiddleware(
  thunkMiddleware,
  apiMiddleware
)(createStore)(reducers);

let token = localStorage.getItem('token');
if (token !== null) {
    store.dispatch(receiveLogin(token));
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('site-canvas'));