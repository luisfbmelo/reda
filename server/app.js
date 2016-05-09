var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const cors = require('cors');

// Routes
var routes = require('./routes/index');

// React
var React          = require('react');
var ReactDOM       = require('react-dom/server'); // Fixed this
var match          = require('react-router').match;
var RoutingContext = require('react-router').RoutingContext;

var app = express();

require('node-jsx').install();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Init routes
routes(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.use('*', function (req, res) {
    match({routes:Routes, location:req.url}, (error, redirectLocation, renderProps) => {
        if (error) {
          res.status(500).send(error.message)
        } else if (redirectLocation) {
          res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            var pageData = {
                serverHtml: ReactDOM.renderToString(React.createElement(RoutingContext, renderProps))
            };

            res.render('index', pageData);
        } else {
          res.status(404).send('Not found')
        }
    });
});

module.exports = app;