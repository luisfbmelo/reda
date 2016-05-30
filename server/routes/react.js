var debug = require('debug')('app');
const express = require('express');
var router = express.Router();

// React
import React 							from 'react';
import ReactDOM       					from 'react-dom/server'; 
import { renderToString }        		from 'react-dom/server'
import { RouterContext, match } 		from 'react-router';
import { Provider }              		from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware 					from 'redux-thunk';
import apiMiddleware 					from '../../public/assets/scripts/middleware/promise';
import fetchComponentData 				from '../utils/fetchComponentData';

import createLocation            		from 'history/lib/createLocation';
import routes         					from '../../public/assets/scripts/routes/index';
import reducers       					from '../../public/assets/scripts/reducers/index';



router.get('/*', function (req, res) {
  debug(reducers);
    const location = createLocation(req.url);
    const store = applyMiddleware(thunkMiddleware, apiMiddleware)(createStore)(reducers);

    match({routes, location}, (error, redirectLocation, renderProps) => {
      debug(renderProps);
      debug(req.url);
        if (error) {
          return res.status(500).send({message: error.message})

        } 
        if (redirectLocation) {
          return res.redirect(302, redirectLocation.pathname + redirectLocation.search)

        } 

        if (!renderProps) {
          return res.status(404).send({message: 'Not found'})
        }


        function renderView() {
          const InitialView = (
            <Provider store={store}>
              <RouterContext {...renderProps} />
            </Provider>
          );

          const componentHTML = renderToString(InitialView);

          const initialState = store.getState();

          const HTML = `
          <!DOCTYPE html>
			<!--[if lt IE 10]> <html class="lt-ie10 no-js"  lang=""> <![endif]-->
			<!--[if gt IE 9]><!--> <html class="no-js" lang=""> <!--<![endif]-->
			<head>
				<meta charset="utf-8">
				<meta name="viewport" content="width=device-width, initial-scale=1">
				<meta http-equiv="X-UA-Compatible" content="IE=edge">
				<title>REDA</title>

				<!-- Web Fonts -->
				<link href='https://fonts.googleapis.com/css?family=Lato:400,300,700' rel='stylesheet' type='text/css'>
				<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700,600,300' rel='stylesheet' type='text/css'>
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">
				<!-- /Web Fonts -->

				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
				
				<!-- build:css assets/styles/main.css -->
				<link rel="stylesheet" href="/assets/styles/main.css">
				<!-- endbuild -->

				<script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser-polyfill.min.js"></script>

				<!--[if lt IE 9]>
				<script>
				(function(){
				  var ef = function(){};
				  window.console = window.console || {log:ef,warn:ef,error:ef,dir:ef};
				}());
				</script>
				<script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script>
				<script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv-printshiv.min.js"></script>
				<script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/3.4.0/es5-shim.js"></script>
				<script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/3.4.0/es5-sham.js"></script>
				<![endif]-->
			</head>
            <body>
            	<!--[if lt IE 10]>
			      <div id="nocando" class="alert alert-danger">
			        <h1>Atenção!</h1>
			        <p>Está a utilizar uma versão <strong>desatualizada</strong> do seu navegador. Por favor <a href="http://browsehappy.com/">atualize o navegador</a> para melhorar a sua experiência.</p>
			      </div>
			    <![endif]-->
			    <div id="site-canvas"><div>${componentHTML}</div></div>
              <script>
	                window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
              	</script>
              <script src="/assets/scripts/vendor.js"></script>
              <script src="/assets/scripts/bundle.js"></script>

            </body>
          </html>
          `;

          return HTML;
        }

        fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
        .then(renderView)
        .then(html => res.end(html))
        .catch(err => res.end(err.message));

    });
});

module.exports = router;
