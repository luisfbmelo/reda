'user strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../containers/app';

// Pages
import IndexPage from '../pages/indexPage';
import DiscoverPage from '../pages/discoverPage';

export default (
  <Route path="/" component={App}>
  	<IndexRoute component={IndexPage} />
  	<Route path="descobrir" component={DiscoverPage} />
  </Route>
);