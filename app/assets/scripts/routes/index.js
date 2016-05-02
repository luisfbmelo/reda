'user strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../layouts/app';

// Pages
import IndexPage from '../pages/indexPage';
import DiscoverPage from '../pages/discoverPage';
import DashboardPage from '../pages/dashboardPage';
import ResourceDetailsPage from '../pages/resourceDetailsPage';
import NewResourcePage from '../pages/newResourcePage';
import NotFoundPage from '../pages/notFoundPage';

// Required
import { requireAuth } from '../containers/auth/requireAuth';


export default (
  <Route path="/" name="Início" component={App}>
  	<IndexRoute component={IndexPage} />
  	<Route name="Descobrir" path="descobrir" component={DiscoverPage} />

  	<Route name="Descobrir" path="descobrir" component={App}>  		
		  <Route name="Detalhes de Recurso" path="detalhes-recurso/:resource" component={ResourceDetailsPage} />
  	</Route>
    
  	<Route name="Novo Guião" path="novoguiao/:resource" component={DiscoverPage} />  	

  	<Route name="Painel de Gestão" path="painel" component={DashboardPage} />
    <Route name="Novo Recurso" path="novorecurso" component={NewResourcePage} />

  	<Route name="Não Encontrado" path="*" component={NotFoundPage} />
  </Route>
);