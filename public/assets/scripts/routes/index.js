'user strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '@/layouts/app';
import Empty from '@/layouts/empty';

// Pages
import IndexPage from '@/pages/indexPage';
import DiscoverPage from '@/pages/discoverPage';
import SignupFormPage from '@/pages/signupFormPage';
import MyResourcesDashboardPage from '@/pages/myResourcesDashboardPage';
import AppsDashboardPage from '@/pages/appsDashboardPage';
import ResourceDetailsPage from '@/pages/resourceDetailsPage';
import NewResourcePage from '@/pages/newResourcePage';
import NewScriptPage from '@/pages/newScriptPage';
import AppsPage from '@/pages/appsPage';
import NotFoundPage from '@/pages/notFoundPage';

// Required
import { requireAuth } from '@/containers/auth/requireAuth';


export default (
  <Route path="/" name="Início" component={App}>
  	<IndexRoute component={IndexPage} />

  	<Route name="Descobrir" path="descobrir" component={DiscoverPage} />
  	<Route name="Descobrir" path="descobrir" component={Empty}>  		
		  <Route name="Detalhes de Recurso" staticName={true} path="detalhes-recurso/:resource" component={ResourceDetailsPage} />
  	</Route>

    <Route name="Aplicações" path="aplicacoes" component={AppsPage} />

    <Route name="Registar" path="registar" component={SignupFormPage} />  	

    {/*DASHBOARD*/}
    
    <Route name="Novo Recurso" path="novorecurso" component={NewResourcePage} />
    <Route name="Editar Recurso" staticName={true} path="editarrecurso/:resource" component={NewResourcePage} />
    <Route name="Gerir Guiões" staticName={true} path="gerirguioes/:resource" component={NewScriptPage} />

    
    <Route name="Painel de Gestão" path="painel" component={Empty}>     
      <Route name="Meus Recursos" path="meusrecursos" component={MyResourcesDashboardPage} />
      <Route name="Aplicações" path="aplicacoes" staticName={true} component={AppsDashboardPage} />
    </Route>

    {/*404*/}
    <Route name="Não Encontrado" path="*" component={NotFoundPage} />
  </Route>
);