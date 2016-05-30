var debug = require('debug')('app');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var passport = require('passport');
var cors = require('cors');

//React


// Routes
var apiRoutes = require('./routes/index');

var app = express();

//require('node-jsx').install();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// CORS
app.use(cors());
app.use(bodyParser.json({limit:'150mb', type:'application/json'}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(express.static(path.join(__dirname, '.tmp')));

// Init routes
apiRoutes(app);

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

module.exports = app;