'user strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../layouts/app';
import Empty from '../layouts/empty';

// Pages
import IndexPage from '../pages/indexPage';
import DiscoverPage from '../pages/discoverPage';
import SignupFormPage from '../pages/signupFormPage';
import DashboardPage from '../pages/dashboardPage';
import ResourceDetailsPage from '../pages/resourceDetailsPage';
import NewResourcePage from '../pages/newResourcePage';
import NewScriptPage from '../pages/newScriptPage';
import NotFoundPage from '../pages/notFoundPage';

// Required
import { requireAuth } from '../containers/auth/requireAuth';


export default (
  <Route path="/" name="Início" component={App}>
  	<IndexRoute component={IndexPage} />

  	<Route name="Descobrir" path="descobrir" component={DiscoverPage} />
  	<Route name="Descobrir" path="descobrir" component={Empty}>  		
		  <Route name="Detalhes de Recurso" path="detalhes-recurso/:resource" component={ResourceDetailsPage} />
  	</Route>
    
  	<Route name="Painel de Gestão" path="painel" component={DashboardPage} />
    <Route name="Novo Recurso" path="novorecurso" component={NewResourcePage} />
    <Route name="Gerir Guiões" path="gerirguioes/:resource" component={NewScriptPage} /> 

    <Route name="Registar" path="registar" component={SignupFormPage} />

  	<Route name="Não Encontrado" path="*" component={NotFoundPage} />
  </Route>
);