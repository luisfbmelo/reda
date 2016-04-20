'user strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../containers/app';

// Pages
import IndexPage from '../pages/indexPage';
import DiscoverPage from '../pages/discoverPage';

export default (
  <Route path="/" name="Início" component={App}>
  	<IndexRoute component={IndexPage} />
  	<Route name="Descobrir" path="descobrir" component={DiscoverPage} />
  	<Route name="Novo Guião" path="novoguiao/:resource" component={DiscoverPage} />
  </Route>
);