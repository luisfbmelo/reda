(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/var/www/devbox/app/assets/scripts/actions/action-types.js":[function(require,module,exports){
'use strict';

// CONFIG

Object.defineProperty(exports, "__esModule", {
  value: true
});
var CONFIG_REQUEST = exports.CONFIG_REQUEST = 'CONFIG_REQUEST';
var CONFIG_SUCCESS = exports.CONFIG_SUCCESS = 'CONFIG_SUCCESS';
var CONFIG_FAILURE = exports.CONFIG_FAILURE = 'CONFIG_FAILURE';

// RESOURCES
var RESOURCES_REQUEST = exports.RESOURCES_REQUEST = 'RESOURCES_REQUEST';
var RESOURCES_SUCCESS = exports.RESOURCES_SUCCESS = 'RESOURCES_SUCCESS';
var RESOURCES_FAILURE = exports.RESOURCES_FAILURE = 'RESOURCES_FAILURE';

// SINGLE RESOURCE
var RESOURCE_REQUEST = exports.RESOURCE_REQUEST = 'RESOURCE_REQUEST';
var RESOURCE_SUCCESS = exports.RESOURCE_SUCCESS = 'RESOURCE_SUCCESS';
var RESOURCE_FAILURE = exports.RESOURCE_FAILURE = 'RESOURCE_FAILURE';

// RELATED RESOURCES
var RELATED_RESOURCES_REQUEST = exports.RELATED_RESOURCES_REQUEST = 'RELATED_RESOURCES_REQUEST';
var RELATED_RESOURCES_SUCCESS = exports.RELATED_RESOURCES_SUCCESS = 'RELATED_RESOURCES_SUCCESS';
var RELATED_RESOURCES_FAILURE = exports.RELATED_RESOURCES_FAILURE = 'RELATED_RESOURCES_FAILURE';

// HIGHLIGHTS
var HIGHLIGHTS_REQUEST = exports.HIGHLIGHTS_REQUEST = 'HIGHLIGHTS_REQUEST';
var HIGHLIGHTS_SUCCESS = exports.HIGHLIGHTS_SUCCESS = 'HIGHLIGHTS_SUCCESS';
var HIGHLIGHTS_FAILURE = exports.HIGHLIGHTS_FAILURE = 'HIGHLIGHTS_FAILURE';
var TOGGLE_HIGHLIGHT_RESOURCE = exports.TOGGLE_HIGHLIGHT_RESOURCE = 'TOGGLE_HIGHLIGHT_RESOURCE';

// FORMATS
var FORMATS_REQUEST = exports.FORMATS_REQUEST = 'FORMATS_REQUEST';
var FORMATS_SUCCESS = exports.FORMATS_SUCCESS = 'FORMATS_SUCCESS';
var FORMATS_FAILURE = exports.FORMATS_FAILURE = 'FORMATS_FAILURE';

// LOGIN
var LOGIN_REQUEST = exports.LOGIN_REQUEST = 'LOGIN_REQUEST';
var LOGIN_SUCCESS = exports.LOGIN_SUCCESS = 'LOGIN_SUCCESS';
var LOGIN_FAILURE = exports.LOGIN_FAILURE = 'LOGIN_FAILURE';

// LOGOUT
var LOGOUT_REQUEST = exports.LOGOUT_REQUEST = 'LOGOUT_REQUEST';

// COMMENTS
var COMMENTS_REQUEST = exports.COMMENTS_REQUEST = 'COMMENTS_REQUEST';
var COMMENTS_SUCCESS = exports.COMMENTS_SUCCESS = 'COMMENTS_SUCCESS';
var COMMENTS_FAILURE = exports.COMMENTS_FAILURE = 'COMMENTS_FAILURE';

// USER
var USER_REQUEST = exports.USER_REQUEST = 'USER_REQUEST';
var USER_SUCCESS = exports.USER_SUCCESS = 'USER_SUCCESS';
var USER_FAILURE = exports.USER_FAILURE = 'USER_FAILURE';

},{}],"/var/www/devbox/app/assets/scripts/actions/auth.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.loginUser = loginUser;
exports.logout = logout;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _actionTypes = require('../actions/action-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('es6-promise').polyfill();


function requestLogin() {
	return {
		type: _actionTypes.LOGIN_REQUEST
	};
}

function receiveLogin(data) {
	return {
		type: _actionTypes.LOGIN_SUCCESS,
		data: data
	};
}

function loginError(errors) {
	return {
		type: _actionTypes.LOGIN_FAILURE,
		errors: errors
	};
}

function loginUser(props) {
	return function (dispatch) {
		dispatch(requestLogin());

		/* Change this to API Call */
		return (0, _isomorphicFetch2.default)('/assets/scripts/dummy.json').then(function (response) {
			if (response.status >= 400) {
				throw new Error('Bad response');
			}

			return response.json();
		}).then(function (json) {

			dispatch(receiveLogin(json.users[0]));
		}).catch(function (errors) {

			// Errors simulation
			var data = {
				email: "Email já existe",
				password: "Faltam caracteres"
			};

			dispatch(loginError(data));
		});
	};
}

function logout() {
	return {
		type: _actionTypes.LOGOUT_REQUEST
	};
}

},{"../actions/action-types":"/var/www/devbox/app/assets/scripts/actions/action-types.js","es6-promise":"es6-promise","isomorphic-fetch":"isomorphic-fetch"}],"/var/www/devbox/app/assets/scripts/actions/comments.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchComments = fetchComments;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _actionTypes = require('../actions/action-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('es6-promise').polyfill();


function requestComments() {
	return {
		type: _actionTypes.COMMENTS_REQUEST
	};
}

function receiveComments(data) {
	return {
		type: _actionTypes.COMMENTS_SUCCESS,
		data: data
	};
}

function commentsError(errors) {
	return {
		type: _actionTypes.COMMENTS_FAILURE,
		errors: errors
	};
}

function fetchComments(resourceId) {
	return function (dispatch) {
		dispatch(requestComments());

		/* Change this to API Call */
		return (0, _isomorphicFetch2.default)('/assets/scripts/dummy.json').then(function (response) {
			if (response.status >= 400) {
				throw new Error('Bad response');
			}

			return response.json();
		}).then(function (json) {
			var filtered = json.resources.filter(function (obj) {
				return obj.id == resourceId;
			});

			if (filtered.length == 0) {
				throw new Error('No data');
			}

			dispatch(receiveComments(filtered[0].comments));
		}).catch(function (errors) {
			dispatch(commentsError(errors));
		});
	};
}

},{"../actions/action-types":"/var/www/devbox/app/assets/scripts/actions/action-types.js","es6-promise":"es6-promise","isomorphic-fetch":"isomorphic-fetch"}],"/var/www/devbox/app/assets/scripts/actions/config.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchConfig = fetchConfig;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _actionTypes = require('../actions/action-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('es6-promise').polyfill();


// CONFFIG
function requestConfig() {
	return {
		type: _actionTypes.CONFIG_REQUEST
	};
}

function receiveConfig(data) {
	return {
		type: _actionTypes.CONFIG_SUCCESS,
		data: data
	};
}

function configError(message) {
	return {
		type: _actionTypes.CONFIG_FAILURE,
		message: message
	};
}

function fetchConfig() {
	return function (dispatch) {
		dispatch(requestConfig());

		return (0, _isomorphicFetch2.default)('/config/config.json').then(function (response) {
			if (response.status >= 400) {
				throw new Error('Bad response');
			}
			return response.json();
		}).then(function (json) {
			dispatch(receiveConfig(json));
		}).catch(function (message) {
			dispatch(configError(message));
		});
	};
}

},{"../actions/action-types":"/var/www/devbox/app/assets/scripts/actions/action-types.js","es6-promise":"es6-promise","isomorphic-fetch":"isomorphic-fetch"}],"/var/www/devbox/app/assets/scripts/actions/formats.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchFormats = fetchFormats;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _actionTypes = require('../actions/action-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('es6-promise').polyfill();


// FORMATS
function requestFormats() {
	return {
		type: _actionTypes.FORMATS_REQUEST
	};
}

function receiveFormats(data) {
	return {
		type: _actionTypes.FORMATS_SUCCESS,
		data: data
	};
}

function formatsError(message) {
	return {
		type: _actionTypes.FORMATS_FAILURE,
		message: message
	};
}

function fetchFormats() {
	return function (dispatch) {
		dispatch(requestFormats());

		return (0, _isomorphicFetch2.default)('/assets/scripts/dummy.json').then(function (response) {
			if (response.status >= 400) {
				throw new Error('Bad response');
			}
			return response.json();
		}).then(function (json) {
			dispatch(receiveFormats(json.formats));
		}).catch(function (message) {
			dispatch(formatsError(message));
		});
	};
}

},{"../actions/action-types":"/var/www/devbox/app/assets/scripts/actions/action-types.js","es6-promise":"es6-promise","isomorphic-fetch":"isomorphic-fetch"}],"/var/www/devbox/app/assets/scripts/actions/resources.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.setHighlight = setHighlight;
exports.fetchHighlights = fetchHighlights;
exports.fetchResources = fetchResources;
exports.fetchResource = fetchResource;
exports.fetchRelatedResources = fetchRelatedResources;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _actionTypes = require('../actions/action-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('es6-promise').polyfill();


// HIGHLIGHTS
function requestHighlights() {
	return {
		type: _actionTypes.HIGHLIGHTS_REQUEST
	};
}

function receiveHighlights(data) {
	return {
		type: _actionTypes.HIGHLIGHTS_SUCCESS,
		data: data
	};
}

function highlightsError(message) {
	return {
		type: _actionTypes.HIGHLIGHTS_FAILURE,
		message: message
	};
}

function setHighlight(resourceId) {
	return {
		type: _actionTypes.TOGGLE_HIGHLIGHT_RESOURCE,
		id: resourceId
	};
}

function fetchHighlights(params) {
	return function (dispatch) {
		dispatch(requestHighlights());

		return (0, _isomorphicFetch2.default)('/assets/scripts/dummy.json').then(function (response) {
			if (response.status >= 400) {
				throw new Error('Bad response');
			}
			return response.json();
		}).then(function (json) {
			dispatch(receiveHighlights(json.highlights));
		}).catch(function (message) {
			dispatch(highlightsError(message));
		});
	};
}

// RESOURCES
function requestResources() {
	return {
		type: _actionTypes.RESOURCES_REQUEST
	};
}

function receiveResources(data) {
	return {
		type: _actionTypes.RESOURCES_SUCCESS,
		data: data
	};
}

function resourcesError(message) {
	return {
		type: _actionTypes.RESOURCES_FAILURE,
		message: message
	};
}

function fetchResources(params) {
	return function (dispatch) {
		dispatch(requestResources());

		return (0, _isomorphicFetch2.default)('/assets/scripts/dummy.json').then(function (response) {
			if (response.status >= 400) {
				throw new Error('Bad response');
			}
			return response.json();
		}).then(function (json) {
			dispatch(receiveResources(json.resources));
		}).catch(function (message) {
			dispatch(resourcesError(message));
		});
	};
}

// SINGLE RESOURCE
function requestResource() {
	return {
		type: _actionTypes.RESOURCE_REQUEST
	};
}

function receiveResource(data) {
	return {
		type: _actionTypes.RESOURCE_SUCCESS,
		data: data
	};
}

function resourceError(message) {
	return {
		type: _actionTypes.RESOURCE_FAILURE,
		message: message
	};
}

function fetchResource(resourceId) {
	return function (dispatch) {
		dispatch(requestResource());

		return (0, _isomorphicFetch2.default)('/assets/scripts/dummy.json').then(function (response) {
			if (response.status >= 400) {
				throw new Error('Bad response');
			}
			return response.json();
		}).then(function (json) {
			var filtered = json.resources.filter(function (obj) {
				return obj.id == resourceId;
			});

			if (filtered.length == 0) {
				throw new Error('No data');
			}

			dispatch(receiveResource(filtered[0]));
		}).catch(function (message) {
			dispatch(resourceError(message));
		});
	};
}

// RELATED RESOURCES
function requestRelatedResources() {
	return {
		type: _actionTypes.RELATED_RESOURCES_REQUEST
	};
}

function receiveRelatedResources(data) {
	return {
		type: _actionTypes.RELATED_RESOURCES_SUCCESS,
		data: data
	};
}

function relatedResourcesError(message) {
	return {
		type: _actionTypes.RELATED_RESOURCES_FAILURE,
		message: message
	};
}

function fetchRelatedResources(resourceId) {
	return function (dispatch) {
		dispatch(requestRelatedResources());

		return (0, _isomorphicFetch2.default)('/assets/scripts/dummy.json').then(function (response) {
			if (response.status >= 400) {
				throw new Error('Bad response');
			}
			return response.json();
		}).then(function (json) {
			json.resources.length = 3;
			dispatch(receiveRelatedResources(json.resources));
		}).catch(function (message) {
			dispatch(relatedResourcesError(message));
		});
	};
}

},{"../actions/action-types":"/var/www/devbox/app/assets/scripts/actions/action-types.js","es6-promise":"es6-promise","isomorphic-fetch":"isomorphic-fetch"}],"/var/www/devbox/app/assets/scripts/actions/user.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchUserData = fetchUserData;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _actionTypes = require('../actions/action-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('es6-promise').polyfill();


// CONFFIG
function requestUser() {
	return {
		type: _actionTypes.USER_REQUEST
	};
}

function receiveUser(data) {
	return {
		type: _actionTypes.USER_SUCCESS,
		data: data
	};
}

function userError(message) {
	return {
		type: _actionTypes.USER_FAILURE,
		message: message
	};
}

function fetchUserData(userId) {

	return function (dispatch) {
		dispatch(requestUser());

		return (0, _isomorphicFetch2.default)('/assets/scripts/dummy.json').then(function (response) {
			if (response.status >= 400) {
				throw new Error('Bad response');
			}

			return response.json();
		}).then(function (json) {

			var filtered = json.users.filter(function (obj) {
				return obj.id == userId;
			});

			if (filtered.length == 0) {
				throw new Error('No data');
			}

			dispatch(receiveUser(filtered[0]));
		}).catch(function (message) {
			dispatch(userError(message));
		});
	};
}

},{"../actions/action-types":"/var/www/devbox/app/assets/scripts/actions/action-types.js","es6-promise":"es6-promise","isomorphic-fetch":"isomorphic-fetch"}],"/var/www/devbox/app/assets/scripts/app.js":[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reactRouter = require('react-router');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.applyMiddleware)(_reduxThunk2.default)(_redux.createStore)(_reducers2.default);

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_reactRouter.Router, { history: _reactRouter.browserHistory, routes: _routes2.default })
), document.getElementById('site-canvas'));

},{"./reducers":"/var/www/devbox/app/assets/scripts/reducers/index.js","./routes":"/var/www/devbox/app/assets/scripts/routes/index.js","react":"react","react-dom":"react-dom","react-redux":"react-redux","react-router":"react-router","redux":"redux","redux-thunk":"redux-thunk"}],"/var/www/devbox/app/assets/scripts/components/auth/loginButton.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _loginForm = require('../../containers/auth/loginForm');

var _loginForm2 = _interopRequireDefault(_loginForm);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginButton = function (_Component) {
  _inherits(LoginButton, _Component);

  function LoginButton(props) {
    _classCallCheck(this, LoginButton);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LoginButton).call(this, props));

    _this.state = { showModal: false };

    _this.open = _this.open.bind(_this);
    _this.close = _this.close.bind(_this);

    return _this;
  }

  _createClass(LoginButton, [{
    key: 'open',
    value: function open() {
      this.setState({ showModal: true });
    }
  }, {
    key: 'close',
    value: function close() {
      this.setState({ showModal: false });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          { onClick: this.open, className: this.props.className },
          this.props.children
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal,
          { show: this.state.showModal, onHide: this.close, dialogClassName: 'login-dialog' },
          _react2.default.createElement(
            _reactBootstrap.Modal.Header,
            { closeButton: true },
            _react2.default.createElement(
              'section',
              null,
              _react2.default.createElement('i', { className: 'fa fa-user' })
            ),
            _react2.default.createElement(
              _reactBootstrap.Modal.Title,
              null,
              'Entrar na REDA'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Body,
            null,
            _react2.default.createElement(_loginForm2.default, null)
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Footer,
            null,
            _react2.default.createElement(
              'small',
              null,
              'Acesso disponível apenas para utilizadores azores.gov.pt'
            )
          )
        )
      );
    }
  }]);

  return LoginButton;
}(_react.Component);

exports.default = LoginButton;


LoginButton.propTypes = {
  className: _react.PropTypes.string
};

},{"../../containers/auth/loginForm":"/var/www/devbox/app/assets/scripts/containers/auth/loginForm.js","react":"react","react-bootstrap":"react-bootstrap"}],"/var/www/devbox/app/assets/scripts/components/auth/loginForm.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginForm = function (_Component) {
  _inherits(LoginForm, _Component);

  function LoginForm(props) {
    _classCallCheck(this, LoginForm);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LoginForm).call(this, props));

    _this.onSubmit = _this.onSubmit.bind(_this);
    return _this;
  }

  _createClass(LoginForm, [{
    key: 'onSubmit',
    value: function onSubmit(props) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2.props.loginUser(props).then(function () {

          // Are there any errors?
          if (_this2.props.auth.errors) {
            reject(_this2.props.auth.errors);
          }

          resolve();

          if (_this2.props.target) {
            _this2.context.router.push(_this2.props.target);
          } else {
            _this2.context.router.push('/painel');
          }
        }).catch(function (error) {
          console.log(error);
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var asyncValidating = _props.asyncValidating;
      var _props$fields = _props.fields;
      var email = _props$fields.email;
      var password = _props$fields.password;
      var resetForm = _props.resetForm;
      var handleSubmit = _props.handleSubmit;
      var submitting = _props.submitting;
      var fetching = this.props.auth.fetching;


      return _react2.default.createElement(
        'div',
        { className: 'login-form box-form' },
        _react2.default.createElement(
          'form',
          { onSubmit: handleSubmit(this.onSubmit) },
          _react2.default.createElement(
            'div',
            { className: 'form-group ' + (email.touched && email.invalid ? 'has-error' : '') },
            _react2.default.createElement('input', _extends({ type: 'text', className: 'form-control', placeholder: 'Email' }, email)),
            asyncValidating === 'email' && _react2.default.createElement('i', { className: 'fa fa-spinner fa-spin' }),
            email.touched && email.error && _react2.default.createElement(
              'div',
              { className: 'text-danger' },
              email.error
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group ' + (password.touched && password.invalid ? 'has-error' : '') },
            _react2.default.createElement('input', _extends({ type: 'password', className: 'form-control', placeholder: 'Palavra-chave' }, password)),
            password.touched && password.error && _react2.default.createElement(
              'div',
              { className: 'text-danger' },
              password.error
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'button',
              { type: 'submit', disabled: fetching || asyncValidating, className: 'cta primary' },
              fetching ? _react2.default.createElement('i', { className: 'fa fa-spinner fa-spin' }) : "",
              'Entrar'
            )
          )
        )
      );
    }
  }]);

  return LoginForm;
}(_react.Component);

exports.default = LoginForm;


LoginForm.propTypes = {
  fields: _react.PropTypes.object.isRequired,
  resetForm: _react.PropTypes.func.isRequired,
  handleSubmit: _react.PropTypes.func.isRequired,
  submitting: _react.PropTypes.bool.isRequired
};

LoginForm.contextTypes = {
  router: _react.PropTypes.object
};

},{"react":"react"}],"/var/www/devbox/app/assets/scripts/components/auth/logoutButton.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _auth = require('../../actions/auth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LogoutButton = function (_Component) {
  _inherits(LogoutButton, _Component);

  function LogoutButton(props) {
    _classCallCheck(this, LogoutButton);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LogoutButton).call(this, props));

    _this.logout = _this.logout.bind(_this);
    return _this;
  }

  _createClass(LogoutButton, [{
    key: 'logout',
    value: function logout() {
      this.props.logout();
      this.context.router.push('/');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'button',
          { onClick: this.logout },
          'Sair'
        )
      );
    }
  }]);

  return LogoutButton;
}(_react.Component);

exports.default = LogoutButton;


LogoutButton.contextTypes = {
  router: _react.PropTypes.object
};

exports.default = (0, _reactRedux.connect)(null, { logout: _auth.logout })(LogoutButton);

},{"../../actions/auth":"/var/www/devbox/app/assets/scripts/actions/auth.js","react":"react","react-redux":"react-redux"}],"/var/www/devbox/app/assets/scripts/components/auth/protectedButton.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactBootstrap = require('react-bootstrap');

var _loginForm = require('../../containers/auth/loginForm');

var _loginForm2 = _interopRequireDefault(_loginForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProtectedButton = function (_Component) {
  _inherits(ProtectedButton, _Component);

  function ProtectedButton(props) {
    _classCallCheck(this, ProtectedButton);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ProtectedButton).call(this, props));

    _this.state = { showModal: false };

    _this.open = _this.open.bind(_this);
    _this.close = _this.close.bind(_this);

    return _this;
  }

  _createClass(ProtectedButton, [{
    key: 'open',
    value: function open() {
      this.setState({ showModal: true });
    }
  }, {
    key: 'close',
    value: function close() {
      this.setState({ showModal: false });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'protected-button' },
        _react2.default.createElement(
          'button',
          { onClick: this.open, className: this.props.className },
          this.props.children
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal,
          { show: this.state.showModal, onHide: this.close, dialogClassName: 'login-dialog' },
          _react2.default.createElement(
            _reactBootstrap.Modal.Header,
            { closeButton: true },
            _react2.default.createElement(
              'section',
              null,
              _react2.default.createElement('i', { className: 'fa fa-lock' })
            ),
            _react2.default.createElement(
              _reactBootstrap.Modal.Title,
              null,
              'Parece que não se autenticou...'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Body,
            null,
            _react2.default.createElement(
              'p',
              null,
              'Alguns conteúdos da REDA estão reservados apenas para docentes. Aconselhamos autenticar-se na plataforma.'
            ),
            _react2.default.createElement(_loginForm2.default, { target: this.props.target })
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Footer,
            null,
            _react2.default.createElement(
              'p',
              null,
              'Não é docente? Pode na mesma ver...'
            ),
            _react2.default.createElement(
              _reactRouter.Link,
              { to: 'sugestoes', className: 'cta primary outline small' },
              'Sugestões'
            ),
            _react2.default.createElement(
              _reactRouter.Link,
              { to: 'aplicacoes', className: 'cta primary outline small' },
              'Aplicações'
            ),
            _react2.default.createElement(
              _reactRouter.Link,
              { to: 'noticias', className: 'cta primary outline small' },
              'Notícias'
            )
          )
        )
      );
    }
  }]);

  return ProtectedButton;
}(_react.Component);

exports.default = ProtectedButton;


ProtectedButton.propTypes = {
  className: _react.PropTypes.string,
  target: _react.PropTypes.string.isRequired
};

},{"../../containers/auth/loginForm":"/var/www/devbox/app/assets/scripts/containers/auth/loginForm.js","react":"react","react-bootstrap":"react-bootstrap","react-router":"react-router"}],"/var/www/devbox/app/assets/scripts/components/blocks/contribute.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _reactRouter = require('react-router');

var _loginButton = require('../auth/loginButton');

var _loginButton2 = _interopRequireDefault(_loginButton);

var _svg = require('../common/svg');

var _svg2 = _interopRequireDefault(_svg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContributeBlock = function (_Component) {
	_inherits(ContributeBlock, _Component);

	function ContributeBlock(props) {
		_classCallCheck(this, ContributeBlock);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ContributeBlock).call(this, props));

		_this.state = {};
		return _this;
	}

	_createClass(ContributeBlock, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			return (0, _isomorphicFetch2.default)('/assets/scripts/dummy.json').then(function (response) {
				if (response.status >= 400) {
					throw new Error('Bad response');
				}

				return response.json();
			}).then(function (json) {
				if (!json.explore) throw new Error('No data');

				_this2.setState(json.contribute);
			}).catch(function (message) {
				console.log(message);
			});
		}
	}, {
		key: 'renderSections',
		value: function renderSections() {
			return this.state.sections.map(function (section, index) {
				// Set if this column has an offset
				var hasOffset = index == 0 ? " col-md-offset-2" : "";

				return _react2.default.createElement(
					'div',
					{ className: "col-xs-12 col-sm-6 col-md-4 block__contribute--col" + (index == 0 ? " col-md-offset-2" : ""), key: index },
					_react2.default.createElement(
						'h2',
						null,
						section.title
					),
					_react2.default.createElement(_svg2.default, { element: section.icon, color: '#ffffff' }),
					_react2.default.createElement(
						'p',
						null,
						section.text
					),
					function () {
						if (section.button.type == "login") {
							return _react2.default.createElement(
								_loginButton2.default,
								{ className: 'cta white outline' },
								section.button.text
							);
						} else if (section.button.type == "feedback") {
							return _react2.default.createElement(
								'button',
								{ className: 'cta white outline' },
								section.button.text
							);
						}
					}()
				);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			if (Object.keys(this.state).length <= 0) {
				return null;
			}

			return _react2.default.createElement(
				'div',
				{ className: 'block__contribute' },
				_react2.default.createElement(
					'div',
					{ className: 'container' },
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement(
							'h1',
							null,
							this.state.title
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						this.renderSections()
					)
				)
			);
		}
	}]);

	return ContributeBlock;
}(_react.Component);

exports.default = ContributeBlock;

},{"../auth/loginButton":"/var/www/devbox/app/assets/scripts/components/auth/loginButton.js","../common/svg":"/var/www/devbox/app/assets/scripts/components/common/svg.js","isomorphic-fetch":"isomorphic-fetch","react":"react","react-router":"react-router"}],"/var/www/devbox/app/assets/scripts/components/blocks/explore.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExploreBlock = function (_Component) {
	_inherits(ExploreBlock, _Component);

	function ExploreBlock(props) {
		_classCallCheck(this, ExploreBlock);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ExploreBlock).call(this, props));

		_this.state = {};
		return _this;
	}

	_createClass(ExploreBlock, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			return (0, _isomorphicFetch2.default)('/assets/scripts/dummy.json').then(function (response) {
				if (response.status >= 400) {
					throw new Error('Bad response');
				}

				return response.json();
			}).then(function (json) {
				if (!json.explore) throw new Error('No data');

				_this2.setState(json.explore);
			}).catch(function (message) {
				console.log(message);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			if (Object.keys(this.state).length <= 0) {
				return null;
			}

			return _react2.default.createElement(
				'div',
				{ className: 'block__explore' },
				_react2.default.createElement(
					'div',
					{ className: 'block__side block__side--left' },
					_react2.default.createElement(
						'div',
						{ className: 'bg-container', style: { "backgroundImage": 'url(' + this.state.image.src + ')' } },
						' '
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'block__side block__side--right block__side--text' },
					_react2.default.createElement(
						'h1',
						null,
						this.state.title
					),
					_react2.default.createElement(
						'span',
						null,
						this.state.text
					),
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: 'experimenta', className: 'cta primary outline' },
						this.state.button
					)
				)
			);
		}
	}]);

	return ExploreBlock;
}(_react.Component);

exports.default = ExploreBlock;

},{"isomorphic-fetch":"isomorphic-fetch","react":"react","react-router":"react-router"}],"/var/www/devbox/app/assets/scripts/components/common/breadcrumbs.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AppBreadcrumbs = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBreadcrumbs = require('react-breadcrumbs');

var _reactBreadcrumbs2 = _interopRequireDefault(_reactBreadcrumbs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppBreadcrumbs = exports.AppBreadcrumbs = function AppBreadcrumbs(props) {
	return _react2.default.createElement(
		'div',
		{ className: 'breadcrumbs-container' },
		_react2.default.createElement(
			'div',
			{ className: 'container' },
			_react2.default.createElement(
				'div',
				{ className: 'row' },
				_react2.default.createElement(
					'div',
					{ className: 'col-xs-12' },
					_react2.default.createElement(_reactBreadcrumbs2.default, _extends({}, props, { customClass: "breadcrumbs" + (props.customClass ? " " + props.customClass : ""), separator: ' > ' }))
				)
			)
		)
	);
};

AppBreadcrumbs.propTypes = {
	customClass: _react2.default.PropTypes.string
};

},{"react":"react","react-breadcrumbs":"react-breadcrumbs"}],"/var/www/devbox/app/assets/scripts/components/common/collapse.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Collapsible = function (_Component) {
	_inherits(Collapsible, _Component);

	function Collapsible(props) {
		_classCallCheck(this, Collapsible);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Collapsible).call(this, props));

		_this.state = { open: false };
		return _this;
	}

	_createClass(Collapsible, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				{ className: 'collapse-container' },
				_react2.default.createElement(
					'button',
					{ onClick: function onClick() {
							return _this2.setState({ open: !_this2.state.open });
						} },
					_react2.default.createElement(
						'span',
						null,
						this.props.title
					),
					_react2.default.createElement('i', { className: this.state.open ? this.props.iconOpen : this.props.iconClosed })
				),
				_react2.default.createElement(
					_reactBootstrap.Collapse,
					{ 'in': this.state.open },
					_react2.default.createElement(
						'div',
						null,
						this.props.children
					)
				)
			);
		}
	}]);

	return Collapsible;
}(_react.Component);

exports.default = Collapsible;


Collapsible.propTypes = {
	title: _react2.default.PropTypes.string.isRequired,
	children: _react2.default.PropTypes.object.isRequired,
	iconOpen: _react2.default.PropTypes.string.isRequired,
	iconClosed: _react2.default.PropTypes.string.isRequired
};

},{"react":"react","react-bootstrap":"react-bootstrap"}],"/var/www/devbox/app/assets/scripts/components/common/rating.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRating = require('react-rating');

var _reactRating2 = _interopRequireDefault(_reactRating);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
	return _react2.default.createElement(_reactRating2.default, _extends({}, props, { empty: 'fa fa-star-o', full: 'fa fa-star' }));
};

},{"react":"react","react-rating":"react-rating"}],"/var/www/devbox/app/assets/scripts/components/common/svg.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SvgComponent = function (_Component) {
	_inherits(SvgComponent, _Component);

	function SvgComponent(props) {
		_classCallCheck(this, SvgComponent);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SvgComponent).call(this, props));
	}

	_createClass(SvgComponent, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			if (this.props.color) {
				(function () {
					var elColor = _this2.props.color;
					_this2.refs.svgElement.addEventListener("load", function () {
						var doc = this.getSVGDocument();
						var els = doc.querySelectorAll("path");
						for (var i = 0; i < els.length; i++) {
							els[i].setAttribute("class", "");
							els[i].setAttribute("fill", elColor);
						}
					});
				})();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			if (!this.props.element) {
				return null;
			}

			return _react2.default.createElement('object', { ref: 'svgElement', className: 'svg-element', data: this.props.element, type: 'image/svg+xml' });
		}
	}]);

	return SvgComponent;
}(_react.Component);

exports.default = SvgComponent;


SvgComponent.propTypes = {
	color: _react2.default.PropTypes.string,
	element: _react2.default.PropTypes.string.isRequired
};

},{"react":"react"}],"/var/www/devbox/app/assets/scripts/components/dashboard/index.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _myResources = require('../../containers/dashboard/myResources');

var _myResources2 = _interopRequireDefault(_myResources);

var _menu = require('../../containers/dashboard/menu');

var _menu2 = _interopRequireDefault(_menu);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DashboardContent = function (_Component) {
	_inherits(DashboardContent, _Component);

	function DashboardContent(props) {
		_classCallCheck(this, DashboardContent);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DashboardContent).call(this, props));

		_this.onChangePage = _this.onChangePage.bind(_this);

		_this.state = {
			activePage: 1
		};
		return _this;
	}

	_createClass(DashboardContent, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.onChangePage(1);
		}

		// Handle pagination

	}, {
		key: 'onChangePage',
		value: function onChangePage(event, selectedEvent) {
			if (selectedEvent) {
				this.setState({
					activePage: selectedEvent.eventKey
				});
			}
		}

		// Handle list ordering

	}, {
		key: 'onListOrder',
		value: function onListOrder(order) {
			console.log(order);
		}

		// Search resources by keyword

	}, {
		key: 'onSearchSubmit',
		value: function onSearchSubmit(keyword) {
			console.log(keyword);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'light__page' },
				_react2.default.createElement(
					'div',
					{ className: 'container' },
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement(
							'div',
							{ className: 'col-xs-12 col-md-3' },
							_react2.default.createElement(_menu2.default, { location: this.props.location })
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-xs-12 col-md-9' },
							_react2.default.createElement(_myResources2.default, null)
						)
					)
				)
			);
		}
	}]);

	return DashboardContent;
}(_react.Component);

exports.default = DashboardContent;


DashboardContent.propTypes = {
	//resources: PropTypes.object.isRequired
};

},{"../../containers/dashboard/menu":"/var/www/devbox/app/assets/scripts/containers/dashboard/menu.js","../../containers/dashboard/myResources":"/var/www/devbox/app/assets/scripts/containers/dashboard/myResources.js","react":"react","react-bootstrap":"react-bootstrap","react-router":"react-router"}],"/var/www/devbox/app/assets/scripts/components/dashboard/resources/common/list.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ResourcesList = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactBootstrap = require('react-bootstrap');

var _rating = require('../../../common/rating');

var _rating2 = _interopRequireDefault(_rating);

var _svg = require('../../../common/svg');

var _svg2 = _interopRequireDefault(_svg);

var _protectedButton = require('../../../auth/protectedButton');

var _protectedButton2 = _interopRequireDefault(_protectedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Boostrap


var renderList = function renderList(list, props) {
	return list.map(function (el, index) {
		// Type tooltip
		var tooltip = _react2.default.createElement(
			_reactBootstrap.Tooltip,
			{ id: "resource_" + el.id },
			el.format.title
		);

		return _react2.default.createElement(
			'article',
			{ className: 'col-xs-12', key: el.id },
			_react2.default.createElement(
				'div',
				{ className: 'list__element list__dashboard' },
				_react2.default.createElement(
					'header',
					{ className: 'list__dashboard--heading' },
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: "/descobrir/detalhes-recurso/" + el.id, className: 'left-col fLeft' },
						_react2.default.createElement(
							'h1',
							null,
							el.title
						),
						_react2.default.createElement(
							'p',
							null,
							el.text
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'top-icons fRight' },
						_react2.default.createElement('i', { className: "fa fa-" + (el.favorite ? "heart" : "heart-o") }),
						_react2.default.createElement(
							'div',
							{ className: 'type' },
							_react2.default.createElement(
								_reactBootstrap.OverlayTrigger,
								{ placement: 'left', overlay: tooltip },
								_react2.default.createElement(
									'span',
									null,
									_react2.default.createElement(_svg2.default, { element: el.format.image.src, color: '#b4b4b4' })
								)
							)
						)
					)
				),
				_react2.default.createElement(
					'footer',
					{ className: 'list__dashboard--footer' },
					_react2.default.createElement(
						'div',
						{ className: 'rating fLeft' },
						_react2.default.createElement(_rating2.default, { readonly: true, initialRate: el.rating_avg })
					),
					_react2.default.createElement(
						'div',
						{ className: 'fRight right-col' },
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: "/descobrir/detalhes-recurso/" + el.id, className: 'cta primary outline small' },
							'Ver Recurso'
						),
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: "/novoguiao/" + el.id, className: 'cta primary outline small' },
							'Gerir Guiões'
						),
						_react2.default.createElement('i', { className: "action-btn fa fa-" + (el.highlight ? "star" : "star-o"), onClick: function onClick() {
								return props.setHighlight(el.id);
							} })
					)
				)
			)
		);
	});
};

// Components


var ResourcesList = exports.ResourcesList = function ResourcesList(props) {
	if (!props.list || !props.list.data || props.list.fetching) {
		return _react2.default.createElement('div', null);
	}
	return _react2.default.createElement(
		'section',
		{ className: 'row' },
		renderList(props.list.data, props)
	);
};

ResourcesList.propTypes = {
	list: _react.PropTypes.object.isRequired
};

},{"../../../auth/protectedButton":"/var/www/devbox/app/assets/scripts/components/auth/protectedButton.js","../../../common/rating":"/var/www/devbox/app/assets/scripts/components/common/rating.js","../../../common/svg":"/var/www/devbox/app/assets/scripts/components/common/svg.js","react":"react","react-bootstrap":"react-bootstrap","react-router":"react-router"}],"/var/www/devbox/app/assets/scripts/components/dashboard/resources/myResources.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _list = require('./common/list');

var _order = require('../../resources/common/order');

var _order2 = _interopRequireDefault(_order);

var _searchBar = require('../../search/searchBar');

var _searchBar2 = _interopRequireDefault(_searchBar);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyResources = function (_Component) {
	_inherits(MyResources, _Component);

	function MyResources(props) {
		_classCallCheck(this, MyResources);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MyResources).call(this, props));

		_this.onChangePage = _this.onChangePage.bind(_this);
		_this.setHighlight = _this.setHighlight.bind(_this);

		_this.state = {
			activePage: 1
		};
		return _this;
	}

	_createClass(MyResources, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.fetchResources();
			this.onChangePage(1);
		}

		// Handle pagination

	}, {
		key: 'onChangePage',
		value: function onChangePage(event, selectedEvent) {
			if (selectedEvent) {
				this.setState({
					activePage: selectedEvent.eventKey
				});
			}
		}

		// Handle list ordering

	}, {
		key: 'onListOrder',
		value: function onListOrder(order) {
			console.log(order);
		}

		// Search resources by keyword

	}, {
		key: 'onSearchSubmit',
		value: function onSearchSubmit(keyword) {
			console.log(keyword);
		}
	}, {
		key: 'setHighlight',
		value: function setHighlight(resourceId) {
			/* REQUEST UPDATE AS HIGHLIGHT AND GET THE NEW ITEM IN THE REDUCER IN ORDER TO RE-RENDER */
			//console.log(this.props);
			this.props.setHighlight(resourceId);
		}
	}, {
		key: 'render',
		value: function render() {
			if (!this.props.resources) return null;

			var isAuthenticated = this.props.auth.isAuthenticated;


			return _react2.default.createElement(
				'div',
				{ className: 'resources__page' },
				_react2.default.createElement(
					'div',
					{ className: 'row' },
					_react2.default.createElement(
						'div',
						{ className: 'col-xs-12' },
						_react2.default.createElement(
							'h2',
							null,
							'Os meus recursos'
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'row' },
					_react2.default.createElement(
						'div',
						{ className: 'col-xs-12' },
						_react2.default.createElement(
							'section',
							{ className: 'row' },
							_react2.default.createElement(
								'div',
								{ className: 'col-xs-12 text-center' },
								_react2.default.createElement(_searchBar2.default, { onSubmit: this.onSearchSubmit, className: 'resources-search' })
							)
						),
						_react2.default.createElement(
							'section',
							{ className: 'row resources-actions' },
							_react2.default.createElement(
								'div',
								{ className: 'col-xs-6' },
								'Eliminar'
							),
							_react2.default.createElement(
								'div',
								{ className: 'col-xs-6' },
								_react2.default.createElement(_order2.default, { onChange: this.onListOrder })
							)
						),
						_react2.default.createElement(_list.ResourcesList, { list: this.props.resources, user: this.props.auth.data, setHighlight: this.setHighlight }),
						_react2.default.createElement(_reactBootstrap.Pagination, {
							prev: true,
							next: true,
							first: true,
							last: true,
							ellipsis: true,
							boundaryLinks: true,
							items: 20,
							maxButtons: 5,
							activePage: this.state.activePage,
							onSelect: this.onChangePage })
					)
				)
			);
		}
	}]);

	return MyResources;
}(_react.Component);

exports.default = MyResources;


MyResources.propTypes = {
	resources: _react.PropTypes.object.isRequired
};

},{"../../resources/common/order":"/var/www/devbox/app/assets/scripts/components/resources/common/order.js","../../search/searchBar":"/var/www/devbox/app/assets/scripts/components/search/searchBar.js","./common/list":"/var/www/devbox/app/assets/scripts/components/dashboard/resources/common/list.js","react":"react","react-bootstrap":"react-bootstrap","react-router":"react-router"}],"/var/www/devbox/app/assets/scripts/components/formats/index.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _list = require('./list');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormatsBanner = function (_Component) {
	_inherits(FormatsBanner, _Component);

	function FormatsBanner(props) {
		_classCallCheck(this, FormatsBanner);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(FormatsBanner).call(this, props));
	}

	_createClass(FormatsBanner, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.fetchFormats();
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'formats' },
				_react2.default.createElement(_list.FormatsList, { formats: this.props.formats })
			);
		}
	}]);

	return FormatsBanner;
}(_react.Component);

exports.default = FormatsBanner;


FormatsBanner.propTypes = {
	formats: _react2.default.PropTypes.object.isRequired
};

},{"./list":"/var/www/devbox/app/assets/scripts/components/formats/list.js","react":"react"}],"/var/www/devbox/app/assets/scripts/components/formats/list.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.FormatsList = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderList = function renderList(list) {
	return list.map(function (format) {
		return _react2.default.createElement(
			'article',
			{ className: 'col-xs-6 col-sm-3 col-md-2 formats__element', key: format.id },
			_react2.default.createElement(
				_reactRouter.Link,
				{ to: 'descobrir?formato=' + format.id },
				_react2.default.createElement('img', { src: format.image.src, alt: format.image.alt, className: 'img-responsive' }),
				_react2.default.createElement(
					'span',
					null,
					format.title
				)
			)
		);
	});
};

var FormatsList = exports.FormatsList = function FormatsList(props) {
	if (!props.formats || !props.formats.data || props.formats.fetching) {
		return _react2.default.createElement('div', null);
	}

	return _react2.default.createElement(
		'div',
		{ className: 'container' },
		_react2.default.createElement(
			'div',
			{ className: 'row' },
			renderList(props.formats.data)
		)
	);
};

FormatsList.propTypes = {
	formats: _react2.default.PropTypes.object.isRequired
};

},{"react":"react","react-router":"react-router"}],"/var/www/devbox/app/assets/scripts/components/navigation/bottomNav.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BottomNav = function (_Component) {
	_inherits(BottomNav, _Component);

	function BottomNav() {
		_classCallCheck(this, BottomNav);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(BottomNav).apply(this, arguments));
	}

	_createClass(BottomNav, [{
		key: 'isActive',
		value: function isActive(location, target) {
			location = location.length > 1 ? location.replace(/^\//, '') : location;
			return location === target ? 'active' : '';
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'footer',
				null,
				_react2.default.createElement(
					'div',
					{ className: 'bottom-nav' },
					_react2.default.createElement(
						'ul',
						null,
						_react2.default.createElement(
							'li',
							{ className: this.isActive(this.props.location.pathname, 'sobre') },
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/sobre' },
								'Sobre'
							)
						),
						_react2.default.createElement(
							'li',
							{ className: this.isActive(this.props.location.pathname, 'dicasutilidades') },
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/dicasutilidades' },
								'Dicas e Utilidades'
							)
						),
						_react2.default.createElement(
							'li',
							{ className: this.isActive(this.props.location.pathname, 'aplicacoes') },
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/aplicacoes' },
								'Aplicações'
							)
						),
						_react2.default.createElement(
							'li',
							{ className: this.isActive(this.props.location.pathname, 'noticias') },
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/noticias' },
								'Notícias'
							)
						),
						_react2.default.createElement(
							'li',
							{ className: this.isActive(this.props.location.pathname, 'mapadositio') },
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/mapadositio' },
								'Mapa do Sítio'
							)
						)
					),
					_react2.default.createElement(
						'button',
						{ className: 'cta white outline pull-right' },
						'Fale Connosco'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'copyright' },
					'© 2016 Direção Regional da Educação'
				)
			);
		}
	}]);

	return BottomNav;
}(_react.Component);

exports.default = BottomNav;


BottomNav.propTypes = {
	location: _react2.default.PropTypes.object.isRequired
};

},{"react":"react","react-bootstrap":"react-bootstrap","react-router":"react-router"}],"/var/www/devbox/app/assets/scripts/components/navigation/dashboardMenu.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactBootstrap = require('react-bootstrap');

var _collapse = require('../common/collapse');

var _collapse2 = _interopRequireDefault(_collapse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DashboardMenu = function (_Component) {
	_inherits(DashboardMenu, _Component);

	function DashboardMenu(props) {
		_classCallCheck(this, DashboardMenu);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(DashboardMenu).call(this, props));
	}

	_createClass(DashboardMenu, [{
		key: 'isActive',
		value: function isActive(location, target) {
			return location.indexOf(target) > 0 ? 'active' : '';
		}
	}, {
		key: 'adminOnly',
		value: function adminOnly(component) {

			/*if (this.props.auth.data){
   	const { role } = this.props.auth.data;*/
			var role = "admin";
			if (role != undefined && role == "admin") {
				return component;
			}
			/*}*/

			return null;
		}
	}, {
		key: 'render',
		value: function render() {
			var isAuthenticated = this.props.auth.isAuthenticated;


			return _react2.default.createElement(
				'nav',
				{ className: 'left-menu' },
				_react2.default.createElement(
					'ul',
					null,
					_react2.default.createElement(
						'li',
						{ className: this.isActive(this.props.location.pathname, 'painel') },
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: '/painel' },
							'Os meus recursos ',
							_react2.default.createElement('i', { className: 'fa fa-chevron-right' })
						)
					),
					_react2.default.createElement(
						'li',
						{ className: this.isActive(this.props.location.pathname, 'painel/guioes') },
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: '/painel/guioes' },
							'Os meus guiões ',
							_react2.default.createElement('i', { className: 'fa fa-chevron-right' })
						)
					),
					_react2.default.createElement(
						'li',
						{ className: this.isActive(this.props.location.pathname, 'painel/favoritos') },
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: '/painel/favoritos' },
							'Favoritos (5) ',
							_react2.default.createElement('i', { className: 'fa fa-chevron-right' })
						)
					),
					_react2.default.createElement(
						'li',
						{ className: this.isActive(this.props.location.pathname, 'painel/submetidos') },
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: '/painel/submetidos' },
							'Submetidos ',
							_react2.default.createElement('i', { className: 'fa fa-chevron-right' })
						)
					),
					_react2.default.createElement(
						'li',
						{ className: this.isActive(this.props.location.pathname, 'painel/comentarios-pendentes') },
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: '/painel/comentarios-pendentes' },
							'Comentários pendentes (2) ',
							_react2.default.createElement('i', { className: 'fa fa-chevron-right' })
						)
					)
				),
				_react2.default.createElement(
					'h6',
					null,
					'Opções de Administrador'
				),
				_react2.default.createElement(
					'ul',
					null,
					this.adminOnly(_react2.default.createElement(
						'li',
						{ className: this.isActive(this.props.location.pathname, 'painel/recursos-pendentes') },
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: '/painel/recursos-pendentes' },
							'Recursos pendentes (10) ',
							_react2.default.createElement('i', { className: 'fa fa-chevron-right' })
						)
					)),
					this.adminOnly(_react2.default.createElement(
						'li',
						{ className: this.isActive(this.props.location.pathname, 'painel/websugestoes') },
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: '/painel/websugestoes' },
							'Websugestões ',
							_react2.default.createElement('i', { className: 'fa fa-chevron-right' })
						)
					)),
					this.adminOnly(_react2.default.createElement(
						'li',
						{ className: this.isActive(this.props.location.pathname, 'painel/aplicacoes') },
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: '/painel/aplicacoes' },
							'Aplicações ',
							_react2.default.createElement('i', { className: 'fa fa-chevron-right' })
						)
					)),
					this.adminOnly(_react2.default.createElement(
						'li',
						{ className: this.isActive(this.props.location.pathname, 'painel/experimenta') },
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: '/painel/experimenta' },
							'Experimenta ',
							_react2.default.createElement('i', { className: 'fa fa-chevron-right' })
						)
					)),
					this.adminOnly(_react2.default.createElement(
						'li',
						{ className: this.isActive(this.props.location.pathname, 'painel/dicaseutilidades') },
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: '/painel/dicaseutilidades' },
							'Dicas e Utilidades ',
							_react2.default.createElement('i', { className: 'fa fa-chevron-right' })
						)
					))
				)
			);
		}
	}]);

	return DashboardMenu;
}(_react.Component);

exports.default = DashboardMenu;


DashboardMenu.propTypes = {
	location: _react2.default.PropTypes.object.isRequired
};

},{"../common/collapse":"/var/www/devbox/app/assets/scripts/components/common/collapse.js","react":"react","react-bootstrap":"react-bootstrap","react-router":"react-router"}],"/var/www/devbox/app/assets/scripts/components/navigation/profileNav.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProfileNav = function (_Component) {
	_inherits(ProfileNav, _Component);

	function ProfileNav() {
		_classCallCheck(this, ProfileNav);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(ProfileNav).apply(this, arguments));
	}

	_createClass(ProfileNav, [{
		key: 'isActive',
		value: function isActive(location, target) {
			location = location.length > 1 ? location.replace(/^\//, '') : location;
			return location === target ? 'active' : '';
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'nav',
				{ className: 'profile-nav' },
				_react2.default.createElement(
					'ul',
					null,
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: '/painel', className: "cta gray outline " + this.isActive(this.props.location.pathname, 'painel') },
							'Painel'
						)
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: '/perfil', className: "cta gray outline " + this.isActive(this.props.location.pathname, 'perfil') },
							'Meu Perfil'
						)
					)
				)
			);
		}
	}]);

	return ProfileNav;
}(_react.Component);

exports.default = ProfileNav;


ProfileNav.propTypes = {
	location: _react2.default.PropTypes.object.isRequired
};

},{"react":"react","react-router":"react-router"}],"/var/www/devbox/app/assets/scripts/components/navigation/topNav.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactBootstrap = require('react-bootstrap');

var _loginButton = require('../auth/loginButton');

var _loginButton2 = _interopRequireDefault(_loginButton);

var _logoutButton = require('../auth/logoutButton');

var _logoutButton2 = _interopRequireDefault(_logoutButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopNav = function (_Component) {
	_inherits(TopNav, _Component);

	function TopNav(props) {
		_classCallCheck(this, TopNav);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TopNav).call(this, props));

		_this.renderUserTools = _this.renderUserTools.bind(_this);
		_this.renderLogout = _this.renderLogout.bind(_this);
		return _this;
	}

	_createClass(TopNav, [{
		key: 'isActive',
		value: function isActive(location, target) {
			location = location.length > 1 ? location.replace(/^\//, '') : location;
			location = location.length > 1 && location.indexOf('/') > 0 ? location.substring(0, location.indexOf('/')) : location;

			return location === target ? 'active' : '';
		}
	}, {
		key: 'renderUserTools',
		value: function renderUserTools(isAuthenticated) {
			if (!isAuthenticated) {
				return _react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_loginButton2.default,
						null,
						'Entrar'
					)
				);
			}
			return _react2.default.createElement(
				'li',
				{ className: this.isActive(this.props.location.pathname, 'painel') },
				_react2.default.createElement(
					_reactRouter.Link,
					{ to: '/painel' },
					'Minha Conta'
				)
			);
		}
	}, {
		key: 'renderLogout',
		value: function renderLogout(isAuthenticated) {
			if (isAuthenticated) {
				return _react2.default.createElement(_logoutButton2.default, null);
			}
			return null;
		}
	}, {
		key: 'render',
		value: function render() {
			var isAuthenticated = this.props.auth.isAuthenticated;

			return _react2.default.createElement(
				_reactBootstrap.Navbar,
				null,
				_react2.default.createElement(
					_reactBootstrap.Navbar.Header,
					null,
					_react2.default.createElement(
						_reactBootstrap.Navbar.Brand,
						null,
						_react2.default.createElement(
							'a',
							{ href: '/' },
							_react2.default.createElement('img', { src: '/assets/graphics/REDA_logo.png', alt: 'A imagem da REDA', className: 'img-responsive' })
						)
					),
					_react2.default.createElement(_reactBootstrap.Navbar.Toggle, null)
				),
				_react2.default.createElement(
					_reactBootstrap.Navbar.Collapse,
					null,
					_react2.default.createElement(
						'div',
						{ className: 'pull-right menu-container' },
						_react2.default.createElement(
							'ul',
							{ className: 'nav navbar-nav small-nav' },
							this.renderUserTools(isAuthenticated),
							_react2.default.createElement(
								'li',
								{ className: this.isActive(this.props.location.pathname, 'ajuda') },
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: '/ajuda' },
									'Ajuda'
								)
							),
							this.renderLogout(isAuthenticated)
						),
						_react2.default.createElement(
							'ul',
							{ className: 'nav navbar-nav big-nav' },
							_react2.default.createElement(
								'li',
								{ className: this.isActive(this.props.location.pathname, '/') },
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: '/' },
									'Início'
								)
							),
							_react2.default.createElement(
								'li',
								{ className: this.isActive(this.props.location.pathname, 'descobrir') },
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: '/descobrir' },
									'Descobrir'
								)
							),
							_react2.default.createElement(
								'li',
								{ className: this.isActive(this.props.location.pathname, 'aplicacoes') },
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: '/aplicacoes' },
									'Aplicações'
								)
							),
							_react2.default.createElement(
								'li',
								{ className: this.isActive(this.props.location.pathname, 'noticias') },
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: '/noticias' },
									'Notícias'
								)
							),
							_react2.default.createElement(
								'li',
								{ className: this.isActive(this.props.location.pathname, 'sugestoes') },
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: '/sugestoes' },
									'Sugestões'
								)
							)
						)
					)
				)
			);
		}
	}]);

	return TopNav;
}(_react.Component);

exports.default = TopNav;


TopNav.propTypes = {
	location: _react2.default.PropTypes.object.isRequired
};

},{"../auth/loginButton":"/var/www/devbox/app/assets/scripts/components/auth/loginButton.js","../auth/logoutButton":"/var/www/devbox/app/assets/scripts/components/auth/logoutButton.js","react":"react","react-bootstrap":"react-bootstrap","react-router":"react-router"}],"/var/www/devbox/app/assets/scripts/components/resources/actions/email.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmailIcon = function (_Component) {
	_inherits(EmailIcon, _Component);

	function EmailIcon(props) {
		_classCallCheck(this, EmailIcon);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(EmailIcon).call(this, props));
	}

	_createClass(EmailIcon, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'media__action' },
				_react2.default.createElement('i', { className: 'fa fa-envelope' })
			);
		}
	}]);

	return EmailIcon;
}(_react.Component);

exports.default = EmailIcon;

},{"react":"react"}],"/var/www/devbox/app/assets/scripts/components/resources/actions/embed.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmbedIcon = function (_Component) {
	_inherits(EmbedIcon, _Component);

	function EmbedIcon(props) {
		_classCallCheck(this, EmbedIcon);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(EmbedIcon).call(this, props));
	}

	_createClass(EmbedIcon, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'media__action' },
				_react2.default.createElement('i', { className: 'fa fa-code' })
			);
		}
	}]);

	return EmbedIcon;
}(_react.Component);

exports.default = EmbedIcon;

},{"react":"react"}],"/var/www/devbox/app/assets/scripts/components/resources/actions/favorite.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getIcon(isFavorite) {
	return isFavorite ? "fa-heart" : "fa-heart-o";
}

exports.default = function (props) {
	return _react2.default.createElement(
		'div',
		{ className: 'media__action favorite', onClick: props.setFavorite },
		_react2.default.createElement('i', { className: "fa " + getIcon(props.isFavorite) })
	);
};

},{"react":"react"}],"/var/www/devbox/app/assets/scripts/components/resources/actions/share.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShareIcon = function (_Component) {
	_inherits(ShareIcon, _Component);

	function ShareIcon(props) {
		_classCallCheck(this, ShareIcon);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(ShareIcon).call(this, props));
	}

	_createClass(ShareIcon, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'media__action' },
				_react2.default.createElement('i', { className: 'fa fa-share-alt' })
			);
		}
	}]);

	return ShareIcon;
}(_react.Component);

exports.default = ShareIcon;

},{"react":"react"}],"/var/www/devbox/app/assets/scripts/components/resources/carousel.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AppCarousel = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderList = function renderList(list) {
	return list.map(function (element) {
		return _react2.default.createElement(
			_reactBootstrap.Carousel.Item,
			{ key: element.id },
			_react2.default.createElement(
				'div',
				{ className: 'media col-xs-9 col-sm-8 col-xs-offset-2 col-sm-offset-2' },
				_react2.default.createElement(
					'div',
					{ className: 'media-left media__img' },
					_react2.default.createElement(
						'a',
						{ href: '#', className: 'app-carousel__img' },
						_react2.default.createElement('img', { className: 'media-object img-responsive', src: element.image.src, alt: element.image.alt })
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'media-body' },
					_react2.default.createElement(
						'a',
						{ href: '#' },
						_react2.default.createElement(
							'h1',
							{ className: 'media-heading' },
							element.title
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'app-carousel__text' },
						element.text
					),
					_react2.default.createElement(
						'a',
						{ href: '#', className: 'cta secundary no-bg pull-right' },
						'Ler mais...'
					)
				)
			)
		);
	});
};

var AppCarousel = exports.AppCarousel = function AppCarousel(props) {
	var settings = props.settings;
	if (!props.data || !props.data.data || props.data.fetching) {
		return _react2.default.createElement(
			'div',
			{ className: 'loading' },
			'Loading...'
		);
	}

	return _react2.default.createElement(
		'div',
		{ className: 'container app-carousel' },
		_react2.default.createElement(
			_reactBootstrap.Carousel,
			{ interval: settings.interval, nextIcon: settings.nextIcon, prevIcon: settings.prevIcon, indicators: settings.indicators },
			renderList(props.data.data)
		)
	);
};

AppCarousel.propTypes = {
	data: _react2.default.PropTypes.object.isRequired,
	settings: _react2.default.PropTypes.object.isRequired
};

},{"react":"react","react-bootstrap":"react-bootstrap"}],"/var/www/devbox/app/assets/scripts/components/resources/comments/comment.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _comments = require('./comments');

var _comments2 = _interopRequireDefault(_comments);

var _reactBootstrap = require('react-bootstrap');

var _utils = require('../../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderDelete = function renderDelete(deleteOpt, obj) {
	return _react2.default.createElement(
		'button',
		{ className: 'cta secundary no-bg', onClick: function onClick() {
				return deleteOpt(obj);
			} },
		'Eliminar'
	);
};

exports.default = function (props) {
	var comment = props.comment;
	var editable = props.editable;
	var deleteComment = props.deleteComment;

	return _react2.default.createElement(
		'div',
		{ className: 'comments__parent' },
		_react2.default.createElement(
			_reactBootstrap.Media,
			null,
			_react2.default.createElement(
				_reactBootstrap.Media.Left,
				null,
				_react2.default.createElement('div', { className: 'user-image', style: { "backgroundImage": 'url(' + comment.user.image.src + ')' } })
			),
			_react2.default.createElement(
				_reactBootstrap.Media.Body,
				null,
				_react2.default.createElement(
					'span',
					{ className: 'meta-info' },
					_react2.default.createElement(
						'strong',
						null,
						comment.user.name
					),
					' a ',
					(0, _utils.setDateFormat)(comment.date, "LLL")
				),
				_react2.default.createElement(
					'p',
					null,
					comment.text
				),
				editable ? renderDelete(deleteComment, comment) : "",
				comment.children ? _react2.default.createElement(_comments2.default, { comments: comment.children, editable: editable, deleteComment: deleteComment }) : ""
			)
		)
	);
};

},{"../../../utils":"/var/www/devbox/app/assets/scripts/utils/index.js","./comments":"/var/www/devbox/app/assets/scripts/components/resources/comments/comments.js","react":"react","react-bootstrap":"react-bootstrap"}],"/var/www/devbox/app/assets/scripts/components/resources/comments/comments.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _comment = require('./comment');

var _comment2 = _interopRequireDefault(_comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
	var comments = props.comments;
	var editable = props.editable;
	var deleteComment = props.deleteComment;


	return _react2.default.createElement(
		'div',
		{ className: 'comments__children' },
		comments.map(function (comment) {
			return _react2.default.createElement(_comment2.default, { key: comment.id, comment: comment, editable: editable, deleteComment: deleteComment });
		})
	);
};

},{"./comment":"/var/www/devbox/app/assets/scripts/components/resources/comments/comment.js","react":"react"}],"/var/www/devbox/app/assets/scripts/components/resources/comments/form.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentForm = function (_Component) {
  _inherits(CommentForm, _Component);

  function CommentForm(props) {
    _classCallCheck(this, CommentForm);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CommentForm).call(this, props));

    _this.onSubmit = _this.onSubmit.bind(_this);
    return _this;
  }

  _createClass(CommentForm, [{
    key: 'onSubmit',
    value: function onSubmit(props) {}
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var asyncValidating = _props.asyncValidating;
      var description = _props.fields.description;
      var resetForm = _props.resetForm;
      var handleSubmit = _props.handleSubmit;
      var submitting = _props.submitting;


      return _react2.default.createElement(
        'div',
        { className: 'comment-form box-form' },
        _react2.default.createElement(
          'form',
          { onSubmit: handleSubmit(this.onSubmit) },
          _react2.default.createElement(
            'div',
            { className: 'form-group ' + (description.touched && description.invalid ? 'has-error' : '') },
            _react2.default.createElement('textarea', _extends({ className: 'form-control', placeholder: 'Descrição' }, description)),
            asyncValidating === 'description' && _react2.default.createElement('i', { className: 'fa fa-spinner fa-spin' }),
            description.touched && description.error && _react2.default.createElement(
              'div',
              { className: 'text-danger' },
              description.error
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'text-center' },
            _react2.default.createElement(
              'button',
              { type: 'submit', disabled: asyncValidating, className: 'cta primary' },
              'Submeter Comentário'
            )
          )
        )
      );
    }
  }]);

  return CommentForm;
}(_react.Component);

exports.default = CommentForm;


CommentForm.propTypes = {
  fields: _react.PropTypes.object.isRequired,
  resetForm: _react.PropTypes.func.isRequired,
  handleSubmit: _react.PropTypes.func.isRequired,
  submitting: _react.PropTypes.bool.isRequired
};

CommentForm.contextTypes = {
  router: _react.PropTypes.object
};

},{"react":"react","react-dom":"react-dom"}],"/var/www/devbox/app/assets/scripts/components/resources/comments/list.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _comments = require('./comments');

var _comments2 = _interopRequireDefault(_comments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentsListing = function (_Component) {
	_inherits(CommentsListing, _Component);

	function CommentsListing(props) {
		_classCallCheck(this, CommentsListing);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CommentsListing).call(this, props));

		_this.deleteComment = _this.deleteComment.bind(_this);
		return _this;
	}

	_createClass(CommentsListing, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.fetchComments(this.props.source);
		}
	}, {
		key: 'deleteComment',
		value: function deleteComment(obj) {
			/* Delete comment */
		}
	}, {
		key: 'renderComments',
		value: function renderComments(comments) {
			var isAuthenticated = this.props.auth.isAuthenticated;


			return _react2.default.createElement(
				'div',
				{ className: 'row' },
				_react2.default.createElement(
					'div',
					{ className: 'col-xs-12' },
					_react2.default.createElement(_comments2.default, { comments: comments, deleteComment: this.deleteComment, editable: isAuthenticated })
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var comments = [];
			if (this.props.comments && this.props.comments.data) {
				comments = this.props.comments.data;
			}

			return _react2.default.createElement(
				'div',
				{ className: 'comments__container' },
				_react2.default.createElement(
					'div',
					{ className: 'row' },
					_react2.default.createElement(
						'div',
						{ className: 'col-xs-12' },
						_react2.default.createElement(
							'h6',
							null,
							comments.length,
							comments.length > 1 || comments.length == 0 ? ' Comentários' : ' Comentário'
						)
					)
				),
				comments && this.renderComments(comments)
			);
		}
	}]);

	return CommentsListing;
}(_react.Component);

exports.default = CommentsListing;


CommentsListing.propTypes = {
	comments: _react2.default.PropTypes.object.isRequired
};

},{"./comments":"/var/www/devbox/app/assets/scripts/components/resources/comments/comments.js","react":"react","react-router":"react-router"}],"/var/www/devbox/app/assets/scripts/components/resources/common/filters.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _collapse = require('../../common/collapse');

var _collapse2 = _interopRequireDefault(_collapse);

var _reactCheckboxGroup = require('react-checkbox-group');

var _reactCheckboxGroup2 = _interopRequireDefault(_reactCheckboxGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResourcesFilters = function (_Component) {
	_inherits(ResourcesFilters, _Component);

	function ResourcesFilters(props) {
		_classCallCheck(this, ResourcesFilters);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ResourcesFilters).call(this, props));

		_this.state = {
			formats: []
		};

		_this.formatChange = _this.formatChange.bind(_this);
		return _this;
	}

	_createClass(ResourcesFilters, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.fetchFormats();
		}
	}, {
		key: 'renderFilters',
		value: function renderFilters(filters) {}
	}, {
		key: 'formatChange',
		value: function formatChange(data) {
			this.setState({
				formats: data
			});
		}
	}, {
		key: 'render',
		value: function render() {
			if (!this.props.formats.data) return _react2.default.createElement(
				'div',
				null,
				'Loading...'
			);

			return _react2.default.createElement(
				'div',
				{ className: 'resources__filter' },
				_react2.default.createElement(
					'div',
					{ className: 'row' },
					_react2.default.createElement(
						'div',
						{ className: 'col-xs-12' },
						_react2.default.createElement(
							_collapse2.default,
							{ title: 'Formatos', iconOpen: 'fa fa-chevron-up', iconClosed: 'fa fa-chevron-down' },
							_react2.default.createElement(
								_reactCheckboxGroup2.default,
								{
									name: 'formats',
									value: this.state.formats,
									onChange: this.formatChange
								},
								function (Checkbox) {
									return _react2.default.createElement(
										'form',
										null,
										_react2.default.createElement(Checkbox, { value: 'apple', id: 'apple' }),
										_react2.default.createElement(
											'label',
											{ htmlFor: 'apple' },
											'Apple'
										),
										_react2.default.createElement(Checkbox, { value: 'apple2', id: 'apple2' }),
										_react2.default.createElement(
											'label',
											{ htmlFor: 'apple2' },
											'Apple'
										),
										_react2.default.createElement(Checkbox, { value: 'apple3', id: 'apple3' }),
										_react2.default.createElement(
											'label',
											{ htmlFor: 'apple3' },
											'Apple'
										)
									);
								}
							)
						),
						_react2.default.createElement(
							_collapse2.default,
							{ title: 'Formatos', iconOpen: 'fa fa-chevron-up', iconClosed: 'fa fa-chevron-down' },
							_react2.default.createElement(
								_reactCheckboxGroup2.default,
								{
									name: 'formats',
									value: this.state.formats,
									onChange: this.formatChange
								},
								function (Checkbox) {
									return _react2.default.createElement(
										'form',
										null,
										_react2.default.createElement(Checkbox, { value: 'orange', id: 'orange' }),
										_react2.default.createElement(
											'label',
											{ htmlFor: 'orange' },
											'orange'
										),
										_react2.default.createElement(Checkbox, { value: 'orange2', id: 'orange2' }),
										_react2.default.createElement(
											'label',
											{ htmlFor: 'orange2' },
											'orange'
										),
										_react2.default.createElement(Checkbox, { value: 'orange3', id: 'orange3' }),
										_react2.default.createElement(
											'label',
											{ htmlFor: 'orange3' },
											'Apple'
										)
									);
								}
							)
						)
					)
				)
			);
		}
	}]);

	return ResourcesFilters;
}(_react.Component);

exports.default = ResourcesFilters;

},{"../../common/collapse":"/var/www/devbox/app/assets/scripts/components/common/collapse.js","react":"react","react-checkbox-group":"react-checkbox-group"}],"/var/www/devbox/app/assets/scripts/components/resources/common/list.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ResourcesList = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactBootstrap = require('react-bootstrap');

var _rating = require('../../common/rating');

var _rating2 = _interopRequireDefault(_rating);

var _svg = require('../../common/svg');

var _svg2 = _interopRequireDefault(_svg);

var _protectedButton = require('../../auth/protectedButton');

var _protectedButton2 = _interopRequireDefault(_protectedButton);

var _resource = require('./resource');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Components


var renderList = function renderList(list, props) {
	// Set maximum columns
	var maxcol = props.maxcol || 4;
	var classColCount = Math.floor(12 / maxcol);

	var addscript = props.addscript;
	var viewmore = props.viewmore;
	var isAuthenticated = props.isAuthenticated;


	return list.map(function (el, index) {
		return _react2.default.createElement(_resource.ResourceElement, { maxcol: maxcol, classColCount: classColCount, addscript: addscript, viewmore: viewmore, isAuthenticated: isAuthenticated, el: el, index: index, key: index });
	});
};

// Boostrap


var ResourcesList = exports.ResourcesList = function ResourcesList(props) {
	if (!props.list || !props.list.data || props.list.fetching) {
		return _react2.default.createElement('div', null);
	}
	return _react2.default.createElement(
		'section',
		{ className: 'row' },
		renderList(props.list.data, props)
	);
};

ResourcesList.propTypes = {
	list: _react.PropTypes.object.isRequired,
	maxcol: _react.PropTypes.number,
	addscript: _react.PropTypes.bool,
	viewmore: _react.PropTypes.bool,
	isAuthenticated: _react.PropTypes.bool.isRequired
};

},{"../../auth/protectedButton":"/var/www/devbox/app/assets/scripts/components/auth/protectedButton.js","../../common/rating":"/var/www/devbox/app/assets/scripts/components/common/rating.js","../../common/svg":"/var/www/devbox/app/assets/scripts/components/common/svg.js","./resource":"/var/www/devbox/app/assets/scripts/components/resources/common/resource.js","react":"react","react-bootstrap":"react-bootstrap","react-router":"react-router"}],"/var/www/devbox/app/assets/scripts/components/resources/common/order.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResourcesOrdering = function (_Component) {
	_inherits(ResourcesOrdering, _Component);

	function ResourcesOrdering(props) {
		_classCallCheck(this, ResourcesOrdering);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ResourcesOrdering).call(this, props));

		_this.onOrderChange = _this.onOrderChange.bind(_this);

		_this.state = {
			value: "recent"
		};
		return _this;
	}

	_createClass(ResourcesOrdering, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'onOrderChange',
		value: function onOrderChange(e) {
			this.setState({ value: e.target.value });
			this.props.onChange(e.target.value);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'ordering' },
				_react2.default.createElement(
					'label',
					{ htmlFor: 'order-box' },
					'Ordenar por:'
				),
				_react2.default.createElement(
					'select',
					{ className: 'form-control', id: 'order-box', onChange: this.onOrderChange, value: this.state.value },
					_react2.default.createElement(
						'option',
						{ value: 'recent' },
						'Mais recente'
					),
					_react2.default.createElement(
						'option',
						{ value: 'alfa' },
						'Alfabeticamente'
					)
				)
			);
		}
	}]);

	return ResourcesOrdering;
}(_react.Component);

exports.default = ResourcesOrdering;


ResourcesOrdering.propTypes = {
	onChange: _react2.default.PropTypes.func.isRequired
};

},{"react":"react"}],"/var/www/devbox/app/assets/scripts/components/resources/common/resource.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ResourceElement = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactBootstrap = require('react-bootstrap');

var _rating = require('../../common/rating');

var _rating2 = _interopRequireDefault(_rating);

var _svg = require('../../common/svg');

var _svg2 = _interopRequireDefault(_svg);

var _protectedButton = require('../../auth/protectedButton');

var _protectedButton2 = _interopRequireDefault(_protectedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Boostrap


var renderProtected = function renderProtected(obj, target, props) {
	if (!props.el.protected || props.isAuthenticated) {
		return _react2.default.createElement(
			_reactRouter.Link,
			{ to: target },
			obj
		);
	}

	return _react2.default.createElement(
		_protectedButton2.default,
		{ target: target },
		obj
	);
};

// Components


var ResourceElement = exports.ResourceElement = function ResourceElement(props) {

	if (!props.el) {
		return null;
	}

	var addscript = props.addscript;
	var viewmore = props.viewmore;
	var isAuthenticated = props.isAuthenticated;
	var el = props.el;
	var classColCount = props.classColCount;
	var index = props.index;
	var maxcol = props.maxcol;

	// Clearfix classes

	var breaker = "";
	breaker = index % maxcol == 0 ? ' floatnone floatnone__lg' : "";
	breaker = index % maxcol == 0 ? breaker + ' floatnone__md' : breaker;
	breaker = index % 3 == 0 ? breaker + ' floatnone__sm' : breaker;

	// Type tooltip
	var tooltip = _react2.default.createElement(
		_reactBootstrap.Tooltip,
		{ id: "resource_" + el.id },
		el.format.title
	);

	return _react2.default.createElement(
		'article',
		{ className: "col-xs-12 col-sm-4 col-md-" + classColCount + " col-lg-" + classColCount + breaker },
		_react2.default.createElement(
			'div',
			{ className: 'list__element' },
			renderProtected(_react2.default.createElement(
				'header',
				null,
				_react2.default.createElement(
					'h1',
					null,
					el.title
				),
				_react2.default.createElement(
					'p',
					null,
					el.text
				)
			), "/descobrir/detalhes-recurso/" + el.id, props),
			function () {
				if (addscript && isAuthenticated) {
					return _react2.default.createElement(
						_reactRouter.Link,
						{ to: "/novoguiao/" + el.id, className: 'cta primary outline small' },
						'Adicionar Guião'
					);
				}

				if ((viewmore || addscript) && (!el.protected || isAuthenticated)) {
					return _react2.default.createElement(
						_reactRouter.Link,
						{ to: "/descobrir/detalhes-recurso/" + el.id, className: 'cta primary outline small' },
						'Ver Recurso'
					);
				} else {
					return _react2.default.createElement(
						_protectedButton2.default,
						{ className: 'cta primary outline small action-btn', target: "/descobrir/detalhes-recurso/" + el.id },
						'Ver Recurso'
					);
				}
			}(),
			renderProtected(_react2.default.createElement(
				'footer',
				null,
				_react2.default.createElement(
					'div',
					{ className: 'rating' },
					_react2.default.createElement(_rating2.default, { readonly: true, initialRate: el.rating_avg })
				),
				_react2.default.createElement(
					'div',
					{ className: 'type' },
					_react2.default.createElement(
						_reactBootstrap.OverlayTrigger,
						{ placement: 'left', overlay: tooltip },
						_react2.default.createElement(
							'span',
							null,
							_react2.default.createElement(_svg2.default, { element: el.format.image.src, color: '#b4b4b4' })
						)
					)
				)
			), "/descobrir/detalhes-recurso/" + el.id, props)
		)
	);
};

ResourceElement.propTypes = {
	el: _react.PropTypes.object.isRequired,
	maxcol: _react.PropTypes.number,
	addscript: _react.PropTypes.bool,
	viewmore: _react.PropTypes.bool,
	isAuthenticated: _react.PropTypes.bool.isRequired,
	classColCount: _react.PropTypes.number
};

},{"../../auth/protectedButton":"/var/www/devbox/app/assets/scripts/components/auth/protectedButton.js","../../common/rating":"/var/www/devbox/app/assets/scripts/components/common/rating.js","../../common/svg":"/var/www/devbox/app/assets/scripts/components/common/svg.js","react":"react","react-bootstrap":"react-bootstrap","react-router":"react-router"}],"/var/www/devbox/app/assets/scripts/components/resources/details/index.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _mediaDisplay = require('./mediaDisplay');

var _mediaDisplay2 = _interopRequireDefault(_mediaDisplay);

var _mediaFooter = require('./mediaFooter');

var _mediaFooter2 = _interopRequireDefault(_mediaFooter);

var _techFile = require('../techFile');

var _techFile2 = _interopRequireDefault(_techFile);

var _scripts = require('./scripts');

var _scripts2 = _interopRequireDefault(_scripts);

var _commentForm = require('../../../containers/comments/commentForm');

var _commentForm2 = _interopRequireDefault(_commentForm);

var _comments = require('../../../containers/comments');

var _comments2 = _interopRequireDefault(_comments);

var _related = require('../../../containers/resources/related');

var _related2 = _interopRequireDefault(_related);

var _rating = require('../../common/rating');

var _rating2 = _interopRequireDefault(_rating);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResourceDetails = function (_Component) {
	_inherits(ResourceDetails, _Component);

	function ResourceDetails(props) {
		_classCallCheck(this, ResourceDetails);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ResourceDetails).call(this, props));

		_this.requiresAuth = _this.requiresAuth.bind(_this);
		_this.printMeta = _this.printMeta.bind(_this);
		_this.setFavorite = _this.setFavorite.bind(_this);
		_this.scrollToComments = _this.scrollToComments.bind(_this);

		_this.state = {
			isFavorite: false
		};
		return _this;
	}

	/* Get configuration and resource data */


	_createClass(ResourceDetails, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			var resource = this.props.params.resource;


			this.props.fetchConfig().then(function () {
				_this2.props.fetchResource(resource).then(function () {

					// If this requires auth and not authed, go back
					if (_this2.requiresAuth()) {
						_this2.context.router.push('/descobrir');
					} else {
						_this2.setState({
							isFavorite: _this2.props.resource.data.favorite || false
						});
					}
				});
			});
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var _this3 = this;

			// Load new data when the dataSource property changes.
			if (nextProps.params.resource != this.props.params.resource) {
				this.props.fetchResource(nextProps.params.resource).then(function () {
					_this3.setState({
						isFavorite: _this3.props.resource.data.favorite || false
					});
				});
			}
		}
	}, {
		key: 'requiresAuth',
		value: function requiresAuth() {
			// If no Auth and is protected and finished fetching
			if (this.props.resource.fetched && !this.props.auth.isAuthenticated && this.props.resource.data.protected) {
				return true;
			}
			return false;
		}
	}, {
		key: 'printMeta',
		value: function printMeta(label, data) {
			return data ? _react2.default.createElement(
				'p',
				null,
				_react2.default.createElement(
					'strong',
					null,
					label,
					': '
				),
				'data'
			) : "";
		}

		/* Set favorite */

	}, {
		key: 'setFavorite',
		value: function setFavorite() {
			this.setState({
				isFavorite: !this.state.isFavorite
			});

			/* CALL ACTION TO APPLY CHANGE */
		}
	}, {
		key: 'scrollToComments',
		value: function scrollToComments() {
			var el = document.getElementById("comentar");
			var total = el.offsetTop;
			window.scrollTo(0, total);
			console.log(total);
		}
	}, {
		key: 'render',
		value: function render() {
			if (!this.props.config.data || !this.props.resource.data || this.props.resource && this.props.resource.fetching) {
				return null;
			}

			var _props$config$data = this.props.config.data;
			var files = _props$config$data.files;
			var graphics = _props$config$data.graphics;

			var resource = this.props.resource.data;
			var resId = this.props.params.resource;
			var isAuthenticated = this.props.auth.isAuthenticated;


			return _react2.default.createElement(
				'div',
				{ className: 'resource-details' },
				_react2.default.createElement(
					'section',
					{ className: 'container first-details' },
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement(
							'div',
							{ className: 'col-xs-12 col-sm-6' },
							_react2.default.createElement(_mediaDisplay2.default, { filesPath: files, graphicsPath: graphics, data: resource }),
							_react2.default.createElement(_mediaFooter2.default, { filesPath: files, isFavorite: this.state.isFavorite, setFavorite: this.setFavorite, file: resource.file, url: resource.url })
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-xs-12 col-sm-6' },
							_react2.default.createElement(
								'h1',
								null,
								resource.title
							),
							_react2.default.createElement(
								'div',
								{ className: 'rating' },
								_react2.default.createElement(_rating2.default, { initialRate: resource.rating_avg, readonly: !isAuthenticated })
							),
							this.printMeta("Autor", resource.author),
							this.printMeta("Organização", resource.organization),
							this.printMeta("Email", resource.email),
							_react2.default.createElement(
								'p',
								null,
								resource.text
							)
						)
					),
					_react2.default.createElement(_techFile2.default, { details: resource }),
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement(
							'div',
							{ className: 'col-xs-12' },
							_react2.default.createElement(
								'h4',
								null,
								'Proposta de Operacionalização'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'row details-buttons' },
						_react2.default.createElement(
							'div',
							{ className: 'col-xs-6' },
							_react2.default.createElement(
								'button',
								{ className: 'cta primary pull-right', onClick: this.scrollToComments },
								'Comentar Recurso'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-xs-6' },
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: "/novoguiao/" + resId, className: 'cta primary' },
								'Novo Guião'
							)
						)
					)
				),
				_react2.default.createElement(_scripts2.default, { data: resource }),
				_react2.default.createElement(
					'section',
					{ className: 'comments', id: 'comentar' },
					_react2.default.createElement(
						'div',
						{ className: 'container' },
						_react2.default.createElement(
							'div',
							{ className: 'row' },
							_react2.default.createElement(
								'div',
								{ className: 'col-xs-12' },
								_react2.default.createElement(
									'h5',
									null,
									' Escreva o seu comentário '
								)
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'row' },
							_react2.default.createElement(
								'div',
								{ className: 'col-xs-12' },
								_react2.default.createElement(_commentForm2.default, null)
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'row' },
							_react2.default.createElement(
								'div',
								{ className: 'col-xs-12' },
								_react2.default.createElement(_comments2.default, { source: resource.id })
							)
						)
					)
				),
				_react2.default.createElement(_related2.default, { origin: resource })
			);
		}
	}]);

	return ResourceDetails;
}(_react.Component);

exports.default = ResourceDetails;


ResourceDetails.contextTypes = {
	router: _react.PropTypes.object
};

},{"../../../containers/comments":"/var/www/devbox/app/assets/scripts/containers/comments/index.js","../../../containers/comments/commentForm":"/var/www/devbox/app/assets/scripts/containers/comments/commentForm.js","../../../containers/resources/related":"/var/www/devbox/app/assets/scripts/containers/resources/related.js","../../common/rating":"/var/www/devbox/app/assets/scripts/components/common/rating.js","../techFile":"/var/www/devbox/app/assets/scripts/components/resources/techFile/index.js","./mediaDisplay":"/var/www/devbox/app/assets/scripts/components/resources/details/mediaDisplay.js","./mediaFooter":"/var/www/devbox/app/assets/scripts/components/resources/details/mediaFooter.js","./scripts":"/var/www/devbox/app/assets/scripts/components/resources/details/scripts.js","react":"react","react-router":"react-router"}],"/var/www/devbox/app/assets/scripts/components/resources/details/mediaDisplay.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 *	Helper functions
 * 
 */
var showPlaceholder = function showPlaceholder(type) {
	return _react2.default.createElement('img', { src: "assets/graphics/placeholder/types/" + type + ".jpg", className: 'img-responsive' });
};

var checkExtension = function checkExtension(fileName) {
	var re = /(?:\.([^.]+))?$/;
	return ext = re.exec(fileName);
};

var includeSwf = function includeSwf(filePath, fileName) {
	return _react2.default.createElement('embed', { src: filePath + "/" + fileName });
};

/**
 * 
 * Data type returns
 * 
 */
var video = function video(meta) {
	return _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: meta.embed }, className: 'embed-content' }) || showPlaceholder("video");
};

var image = function image(meta) {
	return _react2.default.createElement('img', { src: meta.file, className: 'img-responsive' });
};

var audio = function audio() {
	return showPlaceholder("audio");
};

var simulation = function simulation(meta) {
	if (checkExtension("swf")) {
		return includeSwf(meta.filePath, meta.file);
	}

	return showPlaceholder("simulation");
};

var animation = function animation(meta) {
	if (checkExtension("swf")) {
		return includeSwf(meta.filePath, meta.file);
	}

	return showPlaceholder("animation");
};

var text = function text() {
	return showPlaceholder("text");
};

var calc = function calc() {
	return showPlaceholder("calc");
};

var game = function game(meta) {
	if (checkExtension("swf")) {
		return includeSwf(meta.filePath, meta.file);
	}

	return showPlaceholder("game");
};

var evalFunc = function evalFunc(func, props) {
	return eval(func).call(undefined, props);
};

exports.default = function (props) {
	var type = props.data.format.type;

	return _react2.default.createElement(
		'span',
		null,
		type ? evalFunc(type, props.data) : ""
	);
};

},{"react":"react"}],"/var/www/devbox/app/assets/scripts/components/resources/details/mediaFooter.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _favorite = require('../actions/favorite');

var _favorite2 = _interopRequireDefault(_favorite);

var _email = require('../actions/email');

var _email2 = _interopRequireDefault(_email);

var _share = require('../actions/share');

var _share2 = _interopRequireDefault(_share);

var _embed = require('../actions/embed');

var _embed2 = _interopRequireDefault(_embed);

var _utils = require('../../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 *	Helper functions
 * 
 */
var printAction = function printAction(status, filesPath) {
	var argsObj = arguments.length <= 2 ? undefined : arguments[2];

	if (status && argsObj && argsObj.file) {
		return _react2.default.createElement(
			'li',
			null,
			_react2.default.createElement(
				'a',
				{ href: filesPath + "/" + argsObj.file, download: true, className: 'media__action media__action--main' },
				_react2.default.createElement('i', { className: 'fa fa-download' })
			)
		);
	} else if (argsObj && argsObj.url) {
		return _react2.default.createElement(
			'li',
			null,
			_react2.default.createElement(
				'a',
				{ href: (0, _utils.setUrl)(argsObj.url), target: '_blank', className: 'media__action media__action--main' },
				_react2.default.createElement('i', { className: 'fa fa-link' })
			)
		);
	}

	return null;
};

exports.default = function (props) {
	var filesPath = props.filesPath;
	var file = props.file;
	var url = props.url;
	var setFavorite = props.setFavorite;
	var isFavorite = props.isFavorite;


	return _react2.default.createElement(
		'ul',
		{ className: 'media-footer' },
		printAction(true, filesPath, { file: file, url: url }),
		_react2.default.createElement(
			'li',
			null,
			_react2.default.createElement(_favorite2.default, { isFavorite: isFavorite, setFavorite: setFavorite })
		),
		_react2.default.createElement(
			'li',
			null,
			_react2.default.createElement(_email2.default, null)
		),
		_react2.default.createElement(
			'li',
			null,
			_react2.default.createElement(_share2.default, null)
		),
		_react2.default.createElement(
			'li',
			null,
			_react2.default.createElement(_embed2.default, null)
		)
	);
};

},{"../../../utils":"/var/www/devbox/app/assets/scripts/utils/index.js","../actions/email":"/var/www/devbox/app/assets/scripts/components/resources/actions/email.js","../actions/embed":"/var/www/devbox/app/assets/scripts/components/resources/actions/embed.js","../actions/favorite":"/var/www/devbox/app/assets/scripts/components/resources/actions/favorite.js","../actions/share":"/var/www/devbox/app/assets/scripts/components/resources/actions/share.js","react":"react"}],"/var/www/devbox/app/assets/scripts/components/resources/details/scripts.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
	return _react2.default.createElement(
		'section',
		{ className: 'scripts-detail' },
		_react2.default.createElement(
			'div',
			{ className: 'container' },
			_react2.default.createElement(
				_reactBootstrap.Tabs,
				{ defaultActiveKey: 1 },
				_react2.default.createElement(
					_reactBootstrap.Tab,
					{ eventKey: 1, title: 'Guião 1' },
					_react2.default.createElement(
						'h4',
						{ className: 'text-center' },
						'Guião 1'
					),
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement(
							'div',
							{ className: 'col-xs-12 col-sm-4' },
							'/* Author */'
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-xs-12 col-sm-4' },
							'/* email */'
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-xs-12 col-sm-4' },
							'/* organization */'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement(
							'div',
							{ className: 'col-xs-12' },
							'/* Op Proposal*/'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement(
							'div',
							{ className: 'col-xs-6 col-sm-3' },
							'/* More details */'
						)
					)
				),
				_react2.default.createElement(
					_reactBootstrap.Tab,
					{ eventKey: 2, title: 'Guião 2' },
					'Tab 2 content'
				),
				_react2.default.createElement(
					_reactBootstrap.Tab,
					{ eventKey: 3, title: 'Guião 3' },
					'Tab 3 content'
				)
			)
		)
	);
};

},{"react":"react","react-bootstrap":"react-bootstrap"}],"/var/www/devbox/app/assets/scripts/components/resources/highlights.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _carousel = require('./carousel');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResourceHighlights = function (_Component) {
	_inherits(ResourceHighlights, _Component);

	function ResourceHighlights(props) {
		_classCallCheck(this, ResourceHighlights);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(ResourceHighlights).call(this, props));
	}

	_createClass(ResourceHighlights, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.fetchHighlights();
		}
	}, {
		key: 'render',
		value: function render() {
			var settings = {
				interval: 5000,
				indicators: true,
				nextIcon: _react2.default.createElement('i', { className: 'fa fa-chevron-right', 'aria-hidden': 'true' }),
				prevIcon: _react2.default.createElement('i', { className: 'fa fa-chevron-left', 'aria-hidden': 'true' })
			};

			return _react2.default.createElement(_carousel.AppCarousel, { data: this.props.highlights, settings: settings });
		}
	}]);

	return ResourceHighlights;
}(_react.Component);

exports.default = ResourceHighlights;


ResourceHighlights.propTypes = {
	highlights: _react2.default.PropTypes.object.isRequired
};

},{"./carousel":"/var/www/devbox/app/assets/scripts/components/resources/carousel.js","react":"react"}],"/var/www/devbox/app/assets/scripts/components/resources/listing.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _list = require('./common/list');

var _order = require('./common/order');

var _order2 = _interopRequireDefault(_order);

var _searchBar = require('../search/searchBar');

var _searchBar2 = _interopRequireDefault(_searchBar);

var _filters = require('../../containers/filters');

var _filters2 = _interopRequireDefault(_filters);

var _loginButton = require('../auth/loginButton');

var _loginButton2 = _interopRequireDefault(_loginButton);

var _protectedButton = require('../auth/protectedButton');

var _protectedButton2 = _interopRequireDefault(_protectedButton);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResourcesListing = function (_Component) {
	_inherits(ResourcesListing, _Component);

	function ResourcesListing(props) {
		_classCallCheck(this, ResourcesListing);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ResourcesListing).call(this, props));

		_this.onChangePage = _this.onChangePage.bind(_this);

		_this.state = {
			activePage: 1
		};
		return _this;
	}

	_createClass(ResourcesListing, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.fetchResources();
			this.onChangePage(1);
		}

		// Handle pagination

	}, {
		key: 'onChangePage',
		value: function onChangePage(event, selectedEvent) {
			if (selectedEvent) {
				this.setState({
					activePage: selectedEvent.eventKey
				});
			}
		}

		// Handle list ordering

	}, {
		key: 'onListOrder',
		value: function onListOrder(order) {
			console.log(order);
		}

		// Search resources by keyword

	}, {
		key: 'onSearchSubmit',
		value: function onSearchSubmit(keyword) {
			console.log(keyword);
		}
	}, {
		key: 'renderAlert',
		value: function renderAlert() {
			return _react2.default.createElement(
				'section',
				{ className: 'row' },
				_react2.default.createElement(
					'div',
					{ className: 'col-xs-12' },
					_react2.default.createElement(
						_reactBootstrap.Alert,
						{ bsStyle: 'warning', className: 'alert' },
						_react2.default.createElement(
							'p',
							null,
							'A listagem disponível está limitada a utilizadores não autenticados. Para obter mais recursos, é aconselhado que entre na plataforma.'
						),
						_react2.default.createElement(
							'div',
							{ className: 'text-center' },
							_react2.default.createElement(
								_loginButton2.default,
								{ className: 'btn btn-warning' },
								'Entrar na REDA'
							)
						)
					)
				)
			);
		}
	}, {
		key: 'renderNewResourceBtn',
		value: function renderNewResourceBtn(obj, target) {
			if (this.props.auth.isAuthenticated) {
				return _react2.default.createElement(
					_reactRouter.Link,
					{ to: target, className: 'cta primary' },
					obj
				);
			}

			return _react2.default.createElement(
				_protectedButton2.default,
				{ target: target, className: 'cta primary' },
				obj
			);
		}
	}, {
		key: 'render',
		value: function render() {
			if (!this.props.resources) return null;

			var isAuthenticated = this.props.auth.isAuthenticated;


			return _react2.default.createElement(
				'div',
				{ className: 'resources__page' },
				_react2.default.createElement(
					'div',
					{ className: 'container' },
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement(
							'div',
							{ className: 'col-xs-12 col-md-3' },
							_react2.default.createElement(_filters2.default, null),
							_react2.default.createElement(
								'section',
								null,
								_react2.default.createElement(
									'h6',
									null,
									'Comece a contribuir'
								),
								this.renderNewResourceBtn("Introduzir Recursos", "novorecurso")
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-xs-12 col-md-9' },
							_react2.default.createElement(_searchBar2.default, { onSubmit: this.onSearchSubmit, className: 'resources-search' }),
							_react2.default.createElement(
								'section',
								{ className: 'row' },
								_react2.default.createElement(
									'div',
									{ className: 'col-xs-6' },
									_react2.default.createElement(
										'h4',
										null,
										_react2.default.createElement(
											'strong',
											null,
											'8000'
										),
										' ',
										_react2.default.createElement(
											'span',
											{ className: 'de-emphasize' },
											'Resultados'
										)
									)
								),
								_react2.default.createElement(
									'div',
									{ className: 'col-xs-6' },
									_react2.default.createElement(_order2.default, { onChange: this.onListOrder })
								)
							),
							!this.props.auth.isAuthenticated ? this.renderAlert() : "",
							_react2.default.createElement(_list.ResourcesList, { list: this.props.resources, maxcol: 3, addscript: true, isAuthenticated: isAuthenticated }),
							_react2.default.createElement(_reactBootstrap.Pagination, {
								prev: true,
								next: true,
								first: true,
								last: true,
								ellipsis: true,
								boundaryLinks: true,
								items: 20,
								maxButtons: 5,
								activePage: this.state.activePage,
								onSelect: this.onChangePage })
						)
					)
				)
			);
		}
	}]);

	return ResourcesListing;
}(_react.Component);

exports.default = ResourcesListing;


ResourcesListing.propTypes = {
	resources: _react.PropTypes.object.isRequired
};

},{"../../containers/filters":"/var/www/devbox/app/assets/scripts/containers/filters/index.js","../auth/loginButton":"/var/www/devbox/app/assets/scripts/components/auth/loginButton.js","../auth/protectedButton":"/var/www/devbox/app/assets/scripts/components/auth/protectedButton.js","../search/searchBar":"/var/www/devbox/app/assets/scripts/components/search/searchBar.js","./common/list":"/var/www/devbox/app/assets/scripts/components/resources/common/list.js","./common/order":"/var/www/devbox/app/assets/scripts/components/resources/common/order.js","react":"react","react-bootstrap":"react-bootstrap","react-router":"react-router"}],"/var/www/devbox/app/assets/scripts/components/resources/recent.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _list = require('./common/list');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RecentResources = function (_Component) {
	_inherits(RecentResources, _Component);

	function RecentResources(props) {
		_classCallCheck(this, RecentResources);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(RecentResources).call(this, props));
	}

	_createClass(RecentResources, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.fetchResources();
		}
	}, {
		key: 'render',
		value: function render() {
			if (!this.props.resources) return null;

			var isAuthenticated = this.props.auth.isAuthenticated;


			return _react2.default.createElement(
				'section',
				{ className: 'resources__recent' },
				_react2.default.createElement(
					'div',
					{ className: 'container' },
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement(
							'div',
							{ className: 'col-xs-12' },
							_react2.default.createElement(
								'h1',
								{ className: 'resources__title' },
								'Últimos Recursos'
							)
						)
					),
					_react2.default.createElement(_list.ResourcesList, { list: this.props.resources, maxcol: 4, viewmore: true, isAuthenticated: isAuthenticated })
				)
			);
		}
	}]);

	return RecentResources;
}(_react.Component);

exports.default = RecentResources;


RecentResources.propTypes = {
	resources: _react2.default.PropTypes.object.isRequired
};

},{"./common/list":"/var/www/devbox/app/assets/scripts/components/resources/common/list.js","react":"react"}],"/var/www/devbox/app/assets/scripts/components/resources/related.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _list = require('./common/list');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RecentResources = function (_Component) {
	_inherits(RecentResources, _Component);

	function RecentResources(props) {
		_classCallCheck(this, RecentResources);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(RecentResources).call(this, props));
	}

	_createClass(RecentResources, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var resource = this.props.resource;

			this.props.fetchRelatedResources(resource);
		}
	}, {
		key: 'render',
		value: function render() {
			if (!this.props.relatedResources) return null;

			var isAuthenticated = this.props.auth.isAuthenticated;


			return _react2.default.createElement(
				'section',
				{ className: 'resources__recent' },
				_react2.default.createElement(
					'div',
					{ className: 'container' },
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement(
							'div',
							{ className: 'col-xs-12 text-left' },
							_react2.default.createElement(
								'h2',
								{ className: 'resources__title' },
								'Outros recursos relacionados'
							)
						)
					),
					_react2.default.createElement(_list.ResourcesList, { list: this.props.relatedResources, maxcol: 3, viewmore: true, isAuthenticated: isAuthenticated })
				)
			);
		}
	}]);

	return RecentResources;
}(_react.Component);

exports.default = RecentResources;


RecentResources.propTypes = {
	relatedResources: _react2.default.PropTypes.object.isRequired,
	origin: _react2.default.PropTypes.object.isRequired
};

},{"./common/list":"/var/www/devbox/app/assets/scripts/components/resources/common/list.js","react":"react"}],"/var/www/devbox/app/assets/scripts/components/resources/techFile/index.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
	return _react2.default.createElement(
		"div",
		{ className: "row tech-file" },
		_react2.default.createElement(
			"div",
			{ className: "col-xs-12 text-center" },
			_react2.default.createElement(
				"h2",
				null,
				"Ficha Técnica"
			)
		),
		_react2.default.createElement(
			"div",
			{ className: "col-xs-12 col-sm-6 col-md-2" },
			_react2.default.createElement(
				"h4",
				null,
				"Anos"
			),
			_react2.default.createElement(
				"li",
				null,
				"1"
			),
			_react2.default.createElement(
				"li",
				null,
				"2"
			),
			_react2.default.createElement(
				"li",
				null,
				"3"
			),
			_react2.default.createElement(
				"li",
				null,
				"4"
			)
		),
		_react2.default.createElement(
			"div",
			{ className: "col-xs-12 col-sm-6 col-md-2" },
			_react2.default.createElement(
				"h4",
				null,
				"Domínios"
			)
		),
		_react2.default.createElement(
			"div",
			{ className: "col-xs-12 col-sm-6 col-md-2" },
			_react2.default.createElement(
				"h4",
				null,
				"Disciplinas"
			)
		),
		_react2.default.createElement(
			"div",
			{ className: "col-xs-12 col-sm-6 col-md-2" },
			_react2.default.createElement(
				"h4",
				null,
				"Idioma"
			)
		),
		_react2.default.createElement(
			"div",
			{ className: "col-xs-12 col-sm-6 col-md-3" },
			_react2.default.createElement(
				"h4",
				null,
				"Requisitos Técnicos"
			)
		)
	);
};

},{"react":"react"}],"/var/www/devbox/app/assets/scripts/components/search/searchBar.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBar = function (_Component) {
  _inherits(SearchBar, _Component);

  function SearchBar(props) {
    _classCallCheck(this, SearchBar);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SearchBar).call(this, props));

    _this.state = { keyword: "" };
    _this.changeKeyword = _this.changeKeyword.bind(_this);
    _this.onSubmitForm = _this.onSubmitForm.bind(_this);
    return _this;
  }

  _createClass(SearchBar, [{
    key: 'changeKeyword',
    value: function changeKeyword(e) {
      this.setState({
        keyword: e.target.value
      });
    }
  }, {
    key: 'onSubmitForm',
    value: function onSubmitForm(e) {
      e.preventDefault();
      this.props.onSubmit(this.state.keyword);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'form',
        { onSubmit: this.onSubmitForm, className: "input-group single-search" },
        _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'keyword', placeholder: 'Palavras-chave', onChange: this.changeKeyword, value: this.state.keyword }),
        _react2.default.createElement(
          'button',
          { className: 'cta primary' },
          _react2.default.createElement('i', { className: 'fa fa-search', 'aria-hidden': 'true' }),
          ' Pesquisar'
        )
      );
    }
  }]);

  return SearchBar;
}(_react.Component);

exports.default = SearchBar;


SearchBar.propTypes = {
  onSubmit: _react2.default.PropTypes.func.isRequired
};

},{"react":"react"}],"/var/www/devbox/app/assets/scripts/components/search/searchForm.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchForm = function (_Component) {
	_inherits(SearchForm, _Component);

	function SearchForm(props) {
		_classCallCheck(this, SearchForm);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SearchForm).call(this, props));
	}

	_createClass(SearchForm, [{
		key: 'onFormSubmit',
		value: function onFormSubmit(event) {
			event.preventDefault();

			// We need to go and fetch weather data
			//this.props.fetchWeather(this.state.term);
			//this.setState({ term: '' });
		}
	}, {
		key: 'handleChange',
		value: function handleChange() {}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'section',
				{ className: 'search-container' },
				_react2.default.createElement(
					'div',
					{ className: 'container' },
					_react2.default.createElement(
						'form',
						{ className: 'input-group search-form', method: 'get', onSubmit: this.onFormSubmit },
						_react2.default.createElement(
							'div',
							{ className: 'row' },
							_react2.default.createElement(
								'div',
								{ className: 'col-xs-6 col-sm-4 col-md-2' },
								_react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'keywords', placeholder: 'Palavras-chave', onChange: this.handleChange })
							),
							_react2.default.createElement(
								'div',
								{ className: 'col-xs-6 col-sm-4 col-md-2' },
								_react2.default.createElement(
									'select',
									{ className: 'form-control', value: '0', onChange: this.handleChange },
									_react2.default.createElement(
										'option',
										{ value: '0' },
										'Disciplina'
									),
									_react2.default.createElement(
										'option',
										{ value: '1' },
										'2'
									),
									_react2.default.createElement(
										'option',
										{ value: '2' },
										'3'
									),
									_react2.default.createElement(
										'option',
										{ value: '3' },
										'4'
									)
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'col-xs-6 col-sm-4 col-md-2' },
								_react2.default.createElement(
									'select',
									{ className: 'form-control', value: '0', onChange: this.handleChange },
									_react2.default.createElement(
										'option',
										{ value: '0' },
										'Domínio'
									),
									_react2.default.createElement(
										'option',
										{ value: '1' },
										'2'
									),
									_react2.default.createElement(
										'option',
										{ value: '2' },
										'3'
									),
									_react2.default.createElement(
										'option',
										{ value: '3' },
										'4'
									)
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'col-xs-6 col-sm-4 col-md-2' },
								_react2.default.createElement(
									'select',
									{ className: 'form-control', value: '0', onChange: this.handleChange },
									_react2.default.createElement(
										'option',
										{ value: '0' },
										'Formato'
									),
									_react2.default.createElement(
										'option',
										{ value: '1' },
										'2'
									),
									_react2.default.createElement(
										'option',
										{ value: '2' },
										'3'
									),
									_react2.default.createElement(
										'option',
										{ value: '3' },
										'4'
									)
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'col-xs-6 col-sm-4 col-md-2' },
								_react2.default.createElement(
									'select',
									{ className: 'form-control', value: '0', onChange: this.handleChange },
									_react2.default.createElement(
										'option',
										{ value: '0' },
										'Ano'
									),
									_react2.default.createElement(
										'option',
										{ value: '1' },
										'2'
									),
									_react2.default.createElement(
										'option',
										{ value: '2' },
										'3'
									),
									_react2.default.createElement(
										'option',
										{ value: '3' },
										'4'
									)
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'col-xs-6 col-sm-4 col-md-2' },
								_react2.default.createElement(
									'button',
									{ type: 'submit', className: 'cta primary' },
									_react2.default.createElement('i', { className: 'fa fa-search', 'aria-hidden': 'true' }),
									'Pesquisar'
								)
							)
						)
					)
				)
			);
		}
	}]);

	return SearchForm;
}(_react.Component);

exports.default = SearchForm;

},{"react":"react"}],"/var/www/devbox/app/assets/scripts/components/user/resume.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserResume = function (_Component) {
	_inherits(UserResume, _Component);

	function UserResume(props) {
		_classCallCheck(this, UserResume);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(UserResume).call(this, props));
	}

	_createClass(UserResume, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			/* CHANGE THIS TO REAL USER ID FROM STATE/LOCALSTORAGE */
			//let userId = this.props.auth.data.id;
			var userId = 1;
			this.props.fetchUserData(userId);
		}
	}, {
		key: 'render',
		value: function render() {

			if (!this.props.user.data) return null;

			var user = this.props.user.data;

			return _react2.default.createElement(
				'div',
				{ className: 'container' },
				_react2.default.createElement(
					'div',
					{ className: 'row user-resume' },
					_react2.default.createElement(
						'div',
						{ className: 'col-xs-12' },
						_react2.default.createElement('div', { className: 'user-image', style: { "backgroundImage": 'url(' + user.image.src + ')' } }),
						_react2.default.createElement(
							'h4',
							null,
							user.name
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'col-xs-12 text-center' },
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: '/novorecurso', className: 'cta primary' },
							'Novo Recurso'
						)
					)
				)
			);
		}
	}]);

	return UserResume;
}(_react.Component);

exports.default = UserResume;


UserResume.propTypes = {
	user: _react.PropTypes.object.isRequired
};

},{"react":"react","react-router":"react-router"}],"/var/www/devbox/app/assets/scripts/containers/auth/loginForm.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = exports.fields = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _loginForm = require('../../components/auth/loginForm');

var _loginForm2 = _interopRequireDefault(_loginForm);

var _auth = require('../../actions/auth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fields = exports.fields = ['email', 'password'];

/* Validate field types */
var validate = exports.validate = function validate(values) {
  var errors = {};
  if (!values.email) {
    errors.email = 'O campo é obrigatório';
  }

  if (values.email && !validateEmail(values.email)) {
    errors.email = 'Deve inserir um e-mail válido';
  }

  if (!values.password) {
    errors.password = 'É necessário inserir a palavra-chave';
  }
  return errors;
};

/* Email validation */
var validateEmail = function validateEmail(value) {
  // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(value);
};

/* Set sharable state */
function mapStateToProps(state) {
  return { auth: state.auth };
}

exports.default = (0, _reduxForm.reduxForm)({
  form: 'LoginForm',
  fields: fields,
  asyncBlurFields: ['email'],
  validate: validate
}, mapStateToProps, { loginUser: _auth.loginUser })(_loginForm2.default);

},{"../../actions/auth":"/var/www/devbox/app/assets/scripts/actions/auth.js","../../components/auth/loginForm":"/var/www/devbox/app/assets/scripts/components/auth/loginForm.js","react":"react","redux-form":"redux-form"}],"/var/www/devbox/app/assets/scripts/containers/auth/requireAuth.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.requireAuth = requireAuth;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function requireAuth(Component) {
    var AuthenticatedComponent = function (_React$Component) {
        _inherits(AuthenticatedComponent, _React$Component);

        function AuthenticatedComponent() {
            _classCallCheck(this, AuthenticatedComponent);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(AuthenticatedComponent).apply(this, arguments));
        }

        _createClass(AuthenticatedComponent, [{
            key: 'componentWillMount',
            value: function componentWillMount() {
                this.checkAuth();
            }
        }, {
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps) {
                this.checkAuth();
            }
        }, {
            key: 'checkAuth',
            value: function checkAuth() {
                if (!this.props.isAuthenticated) {
                    var redirectAfterLogin = this.props.location.pathname;
                    this.context.router.push('/?next=' + redirectAfterLogin);
                }
            }
        }, {
            key: 'render',
            value: function render() {
                return _react2.default.createElement(
                    'div',
                    null,
                    this.props.isAuthenticated === true ? _react2.default.createElement(Component, this.props) : null
                );
            }
        }]);

        return AuthenticatedComponent;
    }(_react2.default.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            isAuthenticated: state.auth.isAuthenticated,
            resource: state.resource.data
        };
    };

    AuthenticatedComponent.contextTypes = {
        router: _react.PropTypes.object
    };

    return (0, _reactRedux.connect)(mapStateToProps)(AuthenticatedComponent);
}

},{"react":"react","react-redux":"react-redux","react-router":"react-router"}],"/var/www/devbox/app/assets/scripts/containers/comments/commentForm.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asyncValidate = exports.validate = exports.fields = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _form = require('../../components/resources/comments/form');

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { loginUser } from '../../actions/auth';
var fields = exports.fields = ['description'];

/* Validate field types */
var validate = exports.validate = function validate(values) {
  var errors = {};
  return errors;
};

/* Make request to server to check data */
var asyncValidate = exports.asyncValidate = function asyncValidate(values /*, dispatch */) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (['john', 'paul', 'george', 'ringo'].includes(values.description)) {
        reject({ description: 'Forbidden words' });
      } else {
        resolve();
      }
    }, 1000); // simulate server latency
  });
};

/* Set sharable state */
function mapStateToProps(state) {
  return { auth: state.auth };
}

exports.default = (0, _reduxForm.reduxForm)({
  form: 'CommentForm',
  fields: fields,
  asyncValidate: asyncValidate,
  asyncBlurFields: ['description'],
  validate: validate
}, mapStateToProps, null)(_form2.default);

},{"../../components/resources/comments/form":"/var/www/devbox/app/assets/scripts/components/resources/comments/form.js","react":"react","redux-form":"redux-form"}],"/var/www/devbox/app/assets/scripts/containers/comments/index.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _comments = require('../../actions/comments');

var _redux = require('redux');

var _list = require('../../components/resources/comments/list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
  return {
    comments: state.comments,
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ fetchComments: _comments.fetchComments }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_list2.default);

},{"../../actions/comments":"/var/www/devbox/app/assets/scripts/actions/comments.js","../../components/resources/comments/list":"/var/www/devbox/app/assets/scripts/components/resources/comments/list.js","react":"react","react-redux":"react-redux","redux":"redux"}],"/var/www/devbox/app/assets/scripts/containers/dashboard/menu.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _dashboardMenu = require('../../components/navigation/dashboardMenu');

var _dashboardMenu2 = _interopRequireDefault(_dashboardMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(_dashboardMenu2.default);

},{"../../components/navigation/dashboardMenu":"/var/www/devbox/app/assets/scripts/components/navigation/dashboardMenu.js","react":"react","react-redux":"react-redux","redux":"redux"}],"/var/www/devbox/app/assets/scripts/containers/dashboard/myResources.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _resources = require('../../actions/resources');

var _redux = require('redux');

var _myResources = require('../../components/dashboard/resources/myResources');

var _myResources2 = _interopRequireDefault(_myResources);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
  return {
    resources: state.resources,
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ fetchResources: _resources.fetchResources, setHighlight: _resources.setHighlight }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_myResources2.default);

},{"../../actions/resources":"/var/www/devbox/app/assets/scripts/actions/resources.js","../../components/dashboard/resources/myResources":"/var/www/devbox/app/assets/scripts/components/dashboard/resources/myResources.js","react":"react","react-redux":"react-redux","redux":"redux"}],"/var/www/devbox/app/assets/scripts/containers/filters/index.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _formats = require('../../actions/formats');

var _redux = require('redux');

var _filters = require('../../components/resources/common/filters');

var _filters2 = _interopRequireDefault(_filters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
  return { formats: state.formats };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ fetchFormats: _formats.fetchFormats }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_filters2.default);

},{"../../actions/formats":"/var/www/devbox/app/assets/scripts/actions/formats.js","../../components/resources/common/filters":"/var/www/devbox/app/assets/scripts/components/resources/common/filters.js","react":"react","react-redux":"react-redux","redux":"redux"}],"/var/www/devbox/app/assets/scripts/containers/formats/index.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _formats = require('../../actions/formats');

var _redux = require('redux');

var _formats2 = require('../../components/formats');

var _formats3 = _interopRequireDefault(_formats2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
  return { formats: state.formats };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ fetchFormats: _formats.fetchFormats }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_formats3.default);

},{"../../actions/formats":"/var/www/devbox/app/assets/scripts/actions/formats.js","../../components/formats":"/var/www/devbox/app/assets/scripts/components/formats/index.js","react":"react","react-redux":"react-redux","redux":"redux"}],"/var/www/devbox/app/assets/scripts/containers/header/index.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _topNav = require('../../components/navigation/topNav');

var _topNav2 = _interopRequireDefault(_topNav);

var _highlights = require('../highlights');

var _highlights2 = _interopRequireDefault(_highlights);

var _search = require('../search');

var _search2 = _interopRequireDefault(_search);

var _resume = require('../user/resume');

var _resume2 = _interopRequireDefault(_resume);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
	_inherits(Header, _Component);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
	}

	_createClass(Header, [{
		key: 'headerType',

		/* Get Page Type from LOCATION */
		value: function headerType(location) {
			location = location.length > 1 ? location.replace(/^\//, '') : location;
			location = location.length > 1 && location.indexOf('/') > 0 ? location.substring(0, location.indexOf('/')) : location;
			return location === "/" ? "home-page" : location;
		}
	}, {
		key: 'render',
		value: function render() {
			var curPage = this.headerType(this.props.location.pathname);
			return _react2.default.createElement(
				'div',
				{ className: "header-container " + curPage },
				_react2.default.createElement(_topNav2.default, { location: this.props.location, auth: this.props.auth }),
				function () {
					// IS HOME
					if (curPage == "home-page") {
						return [_react2.default.createElement(_highlights2.default, { key: 'highlights-container' }), _react2.default.createElement(_search2.default, { key: 'search-container' })];
					}

					// IS ACCOUNT
					if (curPage == "painel" || curPage == "perfil") {
						return _react2.default.createElement(_resume2.default, null);
					}
					return null;
				}()
			);
		}
	}]);

	return Header;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
	return {
		auth: state.auth
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);

},{"../../components/navigation/topNav":"/var/www/devbox/app/assets/scripts/components/navigation/topNav.js","../highlights":"/var/www/devbox/app/assets/scripts/containers/highlights/index.js","../search":"/var/www/devbox/app/assets/scripts/containers/search/index.js","../user/resume":"/var/www/devbox/app/assets/scripts/containers/user/resume.js","react":"react","react-redux":"react-redux"}],"/var/www/devbox/app/assets/scripts/containers/highlights/index.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _resources = require('../../actions/resources');

var _redux = require('redux');

var _highlights = require('../../components/resources/highlights');

var _highlights2 = _interopRequireDefault(_highlights);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
  return {
    highlights: state.highlights,
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ fetchHighlights: _resources.fetchHighlights }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_highlights2.default);

},{"../../actions/resources":"/var/www/devbox/app/assets/scripts/actions/resources.js","../../components/resources/highlights":"/var/www/devbox/app/assets/scripts/components/resources/highlights.js","react":"react","react-redux":"react-redux","redux":"redux"}],"/var/www/devbox/app/assets/scripts/containers/resources/details.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _resources = require('../../actions/resources');

var _config = require('../../actions/config');

var _redux = require('redux');

var _details = require('../../components/resources/details');

var _details2 = _interopRequireDefault(_details);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
  return {
    resource: state.resource,
    auth: state.auth,
    config: state.config
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ fetchResource: _resources.fetchResource, fetchConfig: _config.fetchConfig }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_details2.default);

},{"../../actions/config":"/var/www/devbox/app/assets/scripts/actions/config.js","../../actions/resources":"/var/www/devbox/app/assets/scripts/actions/resources.js","../../components/resources/details":"/var/www/devbox/app/assets/scripts/components/resources/details/index.js","react":"react","react-redux":"react-redux","redux":"redux"}],"/var/www/devbox/app/assets/scripts/containers/resources/index.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _resources = require('../../actions/resources');

var _redux = require('redux');

var _listing = require('../../components/resources/listing');

var _listing2 = _interopRequireDefault(_listing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
  return {
    resources: state.resources,
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ fetchResources: _resources.fetchResources }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_listing2.default);

},{"../../actions/resources":"/var/www/devbox/app/assets/scripts/actions/resources.js","../../components/resources/listing":"/var/www/devbox/app/assets/scripts/components/resources/listing.js","react":"react","react-redux":"react-redux","redux":"redux"}],"/var/www/devbox/app/assets/scripts/containers/resources/recent.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _resources = require('../../actions/resources');

var _redux = require('redux');

var _recent = require('../../components/resources/recent');

var _recent2 = _interopRequireDefault(_recent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
  return {
    resources: state.resources,
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ fetchResources: _resources.fetchResources }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_recent2.default);

},{"../../actions/resources":"/var/www/devbox/app/assets/scripts/actions/resources.js","../../components/resources/recent":"/var/www/devbox/app/assets/scripts/components/resources/recent.js","react":"react","react-redux":"react-redux","redux":"redux"}],"/var/www/devbox/app/assets/scripts/containers/resources/related.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _resources = require('../../actions/resources');

var _redux = require('redux');

var _related = require('../../components/resources/related');

var _related2 = _interopRequireDefault(_related);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
  return {
    relatedResources: state.relatedResources,
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ fetchRelatedResources: _resources.fetchRelatedResources }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_related2.default);

},{"../../actions/resources":"/var/www/devbox/app/assets/scripts/actions/resources.js","../../components/resources/related":"/var/www/devbox/app/assets/scripts/components/resources/related.js","react":"react","react-redux":"react-redux","redux":"redux"}],"/var/www/devbox/app/assets/scripts/containers/search/index.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _searchForm = require('../../components/search/searchForm');

var _searchForm2 = _interopRequireDefault(_searchForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchContainer = function (_Component) {
	_inherits(SearchContainer, _Component);

	function SearchContainer() {
		_classCallCheck(this, SearchContainer);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SearchContainer).apply(this, arguments));
	}

	_createClass(SearchContainer, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_searchForm2.default, null);
		}
	}]);

	return SearchContainer;
}(_react.Component);

exports.default = SearchContainer;

},{"../../components/search/searchForm":"/var/www/devbox/app/assets/scripts/components/search/searchForm.js","react":"react"}],"/var/www/devbox/app/assets/scripts/containers/user/resume.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _user = require('../../actions/user');

var _config = require('../../actions/config');

var _redux = require('redux');

var _resume = require('../../components/user/resume');

var _resume2 = _interopRequireDefault(_resume);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
  return {
    user: state.user,
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ fetchUserData: _user.fetchUserData }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_resume2.default);

},{"../../actions/config":"/var/www/devbox/app/assets/scripts/actions/config.js","../../actions/user":"/var/www/devbox/app/assets/scripts/actions/user.js","../../components/user/resume":"/var/www/devbox/app/assets/scripts/components/user/resume.js","react":"react","react-redux":"react-redux","redux":"redux"}],"/var/www/devbox/app/assets/scripts/layouts/app.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.props.children
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

},{"react":"react","react-redux":"react-redux"}],"/var/www/devbox/app/assets/scripts/pages/dashboardPage.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('../containers/header');

var _header2 = _interopRequireDefault(_header);

var _profileNav = require('../components/navigation/profileNav');

var _profileNav2 = _interopRequireDefault(_profileNav);

var _dashboard = require('../components/dashboard');

var _dashboard2 = _interopRequireDefault(_dashboard);

var _bottomNav = require('../components/navigation/bottomNav');

var _bottomNav2 = _interopRequireDefault(_bottomNav);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Animation


var DiscoverPage = function (_Component) {
  _inherits(DiscoverPage, _Component);

  function DiscoverPage() {
    _classCallCheck(this, DiscoverPage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(DiscoverPage).apply(this, arguments));
  }

  _createClass(DiscoverPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        { transitionName: 'transition',
          transitionAppear: true, transitionAppearTimeout: 500,
          transitionEnter: false, transitionLeave: false },
        _react2.default.createElement(_header2.default, { location: this.props.location }),
        _react2.default.createElement(_profileNav2.default, { location: this.props.location }),
        _react2.default.createElement(_dashboard2.default, { location: this.props.location }),
        _react2.default.createElement(_bottomNav2.default, { location: this.props.location })
      );
    }
  }]);

  return DiscoverPage;
}(_react.Component);

exports.default = DiscoverPage;

},{"../components/dashboard":"/var/www/devbox/app/assets/scripts/components/dashboard/index.js","../components/navigation/bottomNav":"/var/www/devbox/app/assets/scripts/components/navigation/bottomNav.js","../components/navigation/profileNav":"/var/www/devbox/app/assets/scripts/components/navigation/profileNav.js","../containers/header":"/var/www/devbox/app/assets/scripts/containers/header/index.js","react":"react","react-addons-css-transition-group":"react-addons-css-transition-group"}],"/var/www/devbox/app/assets/scripts/pages/discoverPage.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('../containers/header');

var _header2 = _interopRequireDefault(_header);

var _resources = require('../containers/resources');

var _resources2 = _interopRequireDefault(_resources);

var _breadcrumbs = require('../components/common/breadcrumbs');

var _bottomNav = require('../components/navigation/bottomNav');

var _bottomNav2 = _interopRequireDefault(_bottomNav);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Animation


var DiscoverPage = function (_Component) {
  _inherits(DiscoverPage, _Component);

  function DiscoverPage() {
    _classCallCheck(this, DiscoverPage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(DiscoverPage).apply(this, arguments));
  }

  _createClass(DiscoverPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        { transitionName: 'transition',
          transitionAppear: true, transitionAppearTimeout: 500,
          transitionEnter: false, transitionLeave: false },
        _react2.default.createElement(_header2.default, { location: this.props.location }),
        _react2.default.createElement(_breadcrumbs.AppBreadcrumbs, { routes: this.props.routes, params: this.props.params, setDocumentTitle: true }),
        _react2.default.createElement(_resources2.default, null),
        _react2.default.createElement(_bottomNav2.default, { location: this.props.location })
      );
    }
  }]);

  return DiscoverPage;
}(_react.Component);

exports.default = DiscoverPage;

},{"../components/common/breadcrumbs":"/var/www/devbox/app/assets/scripts/components/common/breadcrumbs.js","../components/navigation/bottomNav":"/var/www/devbox/app/assets/scripts/components/navigation/bottomNav.js","../containers/header":"/var/www/devbox/app/assets/scripts/containers/header/index.js","../containers/resources":"/var/www/devbox/app/assets/scripts/containers/resources/index.js","react":"react","react-addons-css-transition-group":"react-addons-css-transition-group"}],"/var/www/devbox/app/assets/scripts/pages/indexPage.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('../containers/header');

var _header2 = _interopRequireDefault(_header);

var _formats = require('../containers/formats');

var _formats2 = _interopRequireDefault(_formats);

var _explore = require('../components/blocks/explore');

var _explore2 = _interopRequireDefault(_explore);

var _recent = require('../containers/resources/recent');

var _recent2 = _interopRequireDefault(_recent);

var _contribute = require('../components/blocks/contribute');

var _contribute2 = _interopRequireDefault(_contribute);

var _bottomNav = require('../components/navigation/bottomNav');

var _bottomNav2 = _interopRequireDefault(_bottomNav);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Containers


var IndexPage = function (_Component) {
  _inherits(IndexPage, _Component);

  function IndexPage() {
    _classCallCheck(this, IndexPage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(IndexPage).apply(this, arguments));
  }

  _createClass(IndexPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        { transitionName: 'transition',
          transitionAppear: true, transitionAppearTimeout: 500,
          transitionEnter: false, transitionLeave: false },
        _react2.default.createElement(_header2.default, { location: this.props.location }),
        _react2.default.createElement(_formats2.default, null),
        _react2.default.createElement(_explore2.default, null),
        _react2.default.createElement(_recent2.default, null),
        _react2.default.createElement(_contribute2.default, null),
        _react2.default.createElement(_bottomNav2.default, { location: this.props.location })
      );
    }
  }]);

  return IndexPage;
}(_react.Component);

exports.default = IndexPage;

},{"../components/blocks/contribute":"/var/www/devbox/app/assets/scripts/components/blocks/contribute.js","../components/blocks/explore":"/var/www/devbox/app/assets/scripts/components/blocks/explore.js","../components/navigation/bottomNav":"/var/www/devbox/app/assets/scripts/components/navigation/bottomNav.js","../containers/formats":"/var/www/devbox/app/assets/scripts/containers/formats/index.js","../containers/header":"/var/www/devbox/app/assets/scripts/containers/header/index.js","../containers/resources/recent":"/var/www/devbox/app/assets/scripts/containers/resources/recent.js","react":"react","react-addons-css-transition-group":"react-addons-css-transition-group"}],"/var/www/devbox/app/assets/scripts/pages/notFoundPage.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('../containers/header');

var _header2 = _interopRequireDefault(_header);

var _bottomNav = require('../components/navigation/bottomNav');

var _bottomNav2 = _interopRequireDefault(_bottomNav);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotFoundPage = function (_Component) {
  _inherits(NotFoundPage, _Component);

  function NotFoundPage() {
    _classCallCheck(this, NotFoundPage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(NotFoundPage).apply(this, arguments));
  }

  _createClass(NotFoundPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        { transitionName: 'transition',
          transitionAppear: true, transitionAppearTimeout: 500,
          transitionEnter: false, transitionLeave: false },
        _react2.default.createElement(_header2.default, { location: this.props.location }),
        _react2.default.createElement(
          'div',
          null,
          'Página Nâo Encontrada'
        ),
        _react2.default.createElement(_bottomNav2.default, { location: this.props.location })
      );
    }
  }]);

  return NotFoundPage;
}(_react.Component);

exports.default = NotFoundPage;

},{"../components/navigation/bottomNav":"/var/www/devbox/app/assets/scripts/components/navigation/bottomNav.js","../containers/header":"/var/www/devbox/app/assets/scripts/containers/header/index.js","react":"react","react-addons-css-transition-group":"react-addons-css-transition-group"}],"/var/www/devbox/app/assets/scripts/pages/resourceDetailsPage.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('../containers/header');

var _header2 = _interopRequireDefault(_header);

var _breadcrumbs = require('../components/common/breadcrumbs');

var _searchForm = require('../components/search/searchForm');

var _searchForm2 = _interopRequireDefault(_searchForm);

var _details = require('../containers/resources/details');

var _details2 = _interopRequireDefault(_details);

var _bottomNav = require('../components/navigation/bottomNav');

var _bottomNav2 = _interopRequireDefault(_bottomNav);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResourceDetailsPage = function (_Component) {
  _inherits(ResourceDetailsPage, _Component);

  function ResourceDetailsPage() {
    _classCallCheck(this, ResourceDetailsPage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ResourceDetailsPage).apply(this, arguments));
  }

  _createClass(ResourceDetailsPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        { transitionName: 'transition',
          transitionAppear: true, transitionAppearTimeout: 500,
          transitionEnter: false, transitionLeave: false },
        _react2.default.createElement(_header2.default, { location: this.props.location }),
        _react2.default.createElement(_searchForm2.default, null),
        _react2.default.createElement(_breadcrumbs.AppBreadcrumbs, { routes: this.props.routes, params: this.props.params, setDocumentTitle: true }),
        _react2.default.createElement(_details2.default, { params: this.props.params }),
        _react2.default.createElement(_bottomNav2.default, { location: this.props.location })
      );
    }
  }]);

  return ResourceDetailsPage;
}(_react.Component);

exports.default = ResourceDetailsPage;

},{"../components/common/breadcrumbs":"/var/www/devbox/app/assets/scripts/components/common/breadcrumbs.js","../components/navigation/bottomNav":"/var/www/devbox/app/assets/scripts/components/navigation/bottomNav.js","../components/search/searchForm":"/var/www/devbox/app/assets/scripts/components/search/searchForm.js","../containers/header":"/var/www/devbox/app/assets/scripts/containers/header/index.js","../containers/resources/details":"/var/www/devbox/app/assets/scripts/containers/resources/details.js","react":"react","react-addons-css-transition-group":"react-addons-css-transition-group"}],"/var/www/devbox/app/assets/scripts/reducers/auth.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.LOGIN_REQUEST:
      return (0, _objectAssign2.default)({}, state, {
        fetching: true
      });
    case _actionTypes.LOGIN_SUCCESS:
      return (0, _objectAssign2.default)({}, state, {
        fetching: false,
        fetched: true,
        data: action.data,
        isAuthenticated: true
      });
    case _actionTypes.LOGIN_FAILURE:
      return (0, _objectAssign2.default)({}, state, {
        fetching: false,
        errors: action.errors
      });
    case _actionTypes.LOGOUT_REQUEST:
      return (0, _objectAssign2.default)({}, state, INITIAL_STATE);
    default:
      return state;
  }
};

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _actionTypes = require('../actions/action-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = { fetching: false, fetched: false, data: null, errors: null, isAuthenticated: false };

},{"../actions/action-types":"/var/www/devbox/app/assets/scripts/actions/action-types.js","object-assign":"object-assign"}],"/var/www/devbox/app/assets/scripts/reducers/comments.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.COMMENTS_REQUEST:
      return (0, _objectAssign2.default)({}, state, {
        fetching: true
      });
    case _actionTypes.COMMENTS_SUCCESS:
      return (0, _objectAssign2.default)({}, state, {
        fetching: false,
        fetched: true,
        data: action.data,
        isAuthenticated: true
      });
    case _actionTypes.COMMENTS_FAILURE:
      return (0, _objectAssign2.default)({}, state, {
        fetching: false,
        errors: action.errors
      });
    default:
      return state;
  }
};

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _actionTypes = require('../actions/action-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = { fetching: false, fetched: false, data: null, errors: null, isAuthenticated: false };

},{"../actions/action-types":"/var/www/devbox/app/assets/scripts/actions/action-types.js","object-assign":"object-assign"}],"/var/www/devbox/app/assets/scripts/reducers/config.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.CONFIG_REQUEST:
      return (0, _objectAssign2.default)({}, state, {
        fetching: true
      });
    case _actionTypes.CONFIG_SUCCESS:
      return (0, _objectAssign2.default)({}, state, {
        fetching: false,
        fetched: true,
        data: action.data
      });
    case _actionTypes.CONFIG_FAILURE:
      return (0, _objectAssign2.default)({}, state, {
        fetching: false,
        errorMessage: action.message
      });
    default:
      return state;
  }
};

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _actionTypes = require('../actions/action-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = { fetching: false, fetched: false, data: null, errorMessage: null };

},{"../actions/action-types":"/var/www/devbox/app/assets/scripts/actions/action-types.js","object-assign":"object-assign"}],"/var/www/devbox/app/assets/scripts/reducers/formats.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.FORMATS_REQUEST:
      return (0, _objectAssign2.default)({}, state, {
        fetching: true
      });
    case _actionTypes.FORMATS_SUCCESS:

      return (0, _objectAssign2.default)({}, state, {
        fetching: false,
        fetched: true,
        data: action.data
      });
    case _actionTypes.FORMATS_FAILURE:
      return (0, _objectAssign2.default)({}, state, {
        fetching: false,
        errorMessage: action.message
      });
    default:
      return state;
  }
};

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _actionTypes = require('../actions/action-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = { fetching: false, fetched: false, data: null, errorMessage: null };

},{"../actions/action-types":"/var/www/devbox/app/assets/scripts/actions/action-types.js","object-assign":"object-assign"}],"/var/www/devbox/app/assets/scripts/reducers/index.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = require('redux');

var _reduxForm = require('redux-form');

var _resources = require('./resources');

var _resources2 = _interopRequireDefault(_resources);

var _comments = require('./comments');

var _comments2 = _interopRequireDefault(_comments);

var _formats = require('./formats');

var _formats2 = _interopRequireDefault(_formats);

var _auth = require('./auth');

var _auth2 = _interopRequireDefault(_auth);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
	config: _config2.default,
	form: _reduxForm.reducer,
	highlights: _resources2.default,
	formats: _formats2.default,
	comments: _comments2.default,
	resources: _resources.resources,
	resource: _resources.resource,
	relatedResources: _resources.relatedResources,
	auth: _auth2.default,
	user: _user2.default
});

exports.default = rootReducer;

},{"./auth":"/var/www/devbox/app/assets/scripts/reducers/auth.js","./comments":"/var/www/devbox/app/assets/scripts/reducers/comments.js","./config":"/var/www/devbox/app/assets/scripts/reducers/config.js","./formats":"/var/www/devbox/app/assets/scripts/reducers/formats.js","./resources":"/var/www/devbox/app/assets/scripts/reducers/resources.js","./user":"/var/www/devbox/app/assets/scripts/reducers/user.js","redux":"redux","redux-form":"redux-form"}],"/var/www/devbox/app/assets/scripts/reducers/resources.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.HIGHLIGHTS_REQUEST:
      return (0, _objectAssign2.default)({}, state, {
        fetching: true
      });
    case _actionTypes.HIGHLIGHTS_SUCCESS:
      return (0, _objectAssign2.default)({}, state, {
        fetching: false,
        fetched: true,
        data: action.data
      });
    case _actionTypes.HIGHLIGHTS_FAILURE:
      return (0, _objectAssign2.default)({}, state, {
        fetching: false,
        errorMessage: action.message
      });
    default:
      return state;
  }
};

exports.resources = resources;
exports.resource = resource;
exports.relatedResources = relatedResources;

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _actionTypes = require('../actions/action-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = { fetching: false, fetched: false, data: null, errorMessage: null };

function resources() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.RESOURCES_REQUEST:
      return (0, _objectAssign2.default)({}, state, {
        fetching: true
      });
    case _actionTypes.RESOURCES_SUCCESS:
      return (0, _objectAssign2.default)({}, state, {
        fetching: false,
        fetched: true,
        data: action.data
      });
    case _actionTypes.RESOURCES_FAILURE:
      return (0, _objectAssign2.default)({}, state, {
        fetching: false,
        errorMessage: action.message
      });
    case _actionTypes.TOGGLE_HIGHLIGHT_RESOURCE:

      // CALL SINGLE RESOURCE REDUCER TO MAKE THE CHANGE
      return (0, _objectAssign2.default)({}, state, {
        data: state.data.map(function (item) {
          return resource(item, action);
        })
      });

    default:
      return state;
  }
};

function resource() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.RESOURCE_REQUEST:
      return (0, _objectAssign2.default)({}, state, {
        fetching: true
      });
    case _actionTypes.RESOURCE_SUCCESS:
      return (0, _objectAssign2.default)({}, state, {
        fetching: false,
        fetched: true,
        data: action.data
      });
    case _actionTypes.RESOURCE_FAILURE:
      return (0, _objectAssign2.default)({}, state, {
        fetching: false,
        errorMessage: action.message
      });
    case _actionTypes.TOGGLE_HIGHLIGHT_RESOURCE:
      if (state.id != action.id) {
        return state;
      }

      return (0, _objectAssign2.default)({}, state, {
        highlight: !state.highlight
      });
    default:
      return state;
  }
};

function relatedResources() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.RELATED_RESOURCES_REQUEST:
      return (0, _objectAssign2.default)({}, state, {
        fetching: true
      });
    case _actionTypes.RELATED_RESOURCES_SUCCESS:
      return (0, _objectAssign2.default)({}, state, {
        fetching: false,
        fetched: true,
        data: action.data
      });
    case _actionTypes.RELATED_RESOURCES_FAILURE:
      return (0, _objectAssign2.default)({}, state, {
        fetching: false,
        errorMessage: action.message
      });
    default:
      return state;
  }
};

},{"../actions/action-types":"/var/www/devbox/app/assets/scripts/actions/action-types.js","object-assign":"object-assign"}],"/var/www/devbox/app/assets/scripts/reducers/user.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.USER_REQUEST:
      return (0, _objectAssign2.default)({}, state, {
        fetching: true
      });
    case _actionTypes.USER_SUCCESS:

      return (0, _objectAssign2.default)({}, state, {
        fetching: false,
        fetched: true,
        data: action.data
      });
    case _actionTypes.USER_FAILURE:
      return (0, _objectAssign2.default)({}, state, {
        fetching: false,
        errorMessage: action.message
      });
    default:
      return state;
  }
};

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _actionTypes = require('../actions/action-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = { fetching: false, fetched: false, data: null, errorMessage: null };

},{"../actions/action-types":"/var/www/devbox/app/assets/scripts/actions/action-types.js","object-assign":"object-assign"}],"/var/www/devbox/app/assets/scripts/routes/index.js":[function(require,module,exports){
'use strict';
'user strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _app = require('../layouts/app');

var _app2 = _interopRequireDefault(_app);

var _indexPage = require('../pages/indexPage');

var _indexPage2 = _interopRequireDefault(_indexPage);

var _discoverPage = require('../pages/discoverPage');

var _discoverPage2 = _interopRequireDefault(_discoverPage);

var _dashboardPage = require('../pages/dashboardPage');

var _dashboardPage2 = _interopRequireDefault(_dashboardPage);

var _resourceDetailsPage = require('../pages/resourceDetailsPage');

var _resourceDetailsPage2 = _interopRequireDefault(_resourceDetailsPage);

var _notFoundPage = require('../pages/notFoundPage');

var _notFoundPage2 = _interopRequireDefault(_notFoundPage);

var _requireAuth = require('../containers/auth/requireAuth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Pages
exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/', name: 'Início', component: _app2.default },
  _react2.default.createElement(_reactRouter.IndexRoute, { component: _indexPage2.default }),
  _react2.default.createElement(_reactRouter.Route, { name: 'Descobrir', path: 'descobrir', component: _discoverPage2.default }),
  _react2.default.createElement(
    _reactRouter.Route,
    { name: 'Descobrir', path: 'descobrir', component: _app2.default },
    _react2.default.createElement(_reactRouter.Route, { name: 'Detalhes de Recurso', path: 'detalhes-recurso/:resource', component: _resourceDetailsPage2.default })
  ),
  _react2.default.createElement(_reactRouter.Route, { name: 'Novo Guião', path: 'novoguiao/:resource', component: _discoverPage2.default }),
  _react2.default.createElement(_reactRouter.Route, { name: 'Painel de Gestão', path: 'painel', component: _dashboardPage2.default }),
  _react2.default.createElement(_reactRouter.Route, { name: 'Não Encontrado', path: '*', component: _notFoundPage2.default })
);

// Required

},{"../containers/auth/requireAuth":"/var/www/devbox/app/assets/scripts/containers/auth/requireAuth.js","../layouts/app":"/var/www/devbox/app/assets/scripts/layouts/app.js","../pages/dashboardPage":"/var/www/devbox/app/assets/scripts/pages/dashboardPage.js","../pages/discoverPage":"/var/www/devbox/app/assets/scripts/pages/discoverPage.js","../pages/indexPage":"/var/www/devbox/app/assets/scripts/pages/indexPage.js","../pages/notFoundPage":"/var/www/devbox/app/assets/scripts/pages/notFoundPage.js","../pages/resourceDetailsPage":"/var/www/devbox/app/assets/scripts/pages/resourceDetailsPage.js","react":"react","react-router":"react-router"}],"/var/www/devbox/app/assets/scripts/utils/index.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setUrl = exports.setDateFormat = undefined;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_moment2.default.locale('pt', {
    months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
    monthsShort: "jan._fev._mar_abr._mai_jun_jul._ago_set._out._nov._dez.".split("_"),
    weekdays: "domingo_segunda_terça_quarta_quinta_sexta_sábado".split("_"),
    weekdaysShort: "dom._seg._ter._qua._qui._sex._sab.".split("_"),
    weekdaysMin: "Do_Se_Te_Qua_Qui_Se_Sab".split("_"),
    longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY LT",
        LLLL: "dddd D MMMM YYYY LT"
    },
    calendar: {
        sameDay: "[Hoje às] LT",
        nextDay: '[Amanhã às] LT',
        nextWeek: 'dddd [às] LT',
        lastDay: '[Ontem às] LT',
        lastWeek: '[a última] dddd LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: "em %s",
        past: "%s atrás",
        s: "segundos",
        m: "um minuto",
        mm: "%d minutos",
        h: "uma hora",
        hh: "%d horas",
        d: "um dia",
        dd: "%d dias",
        M: "um mês",
        MM: "%d meses",
        y: "um ano",
        yy: "%d anos"
    },
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
});

var setDateFormat = exports.setDateFormat = function setDateFormat(date, formatDate) {
    _moment2.default.locale('pt');
    return (0, _moment2.default)(date).format(formatDate);
};

var setUrl = exports.setUrl = function setUrl(content) {
    if (content.indexOf("http://") == -1) {
        return "http://" + content;
    }

    return content;
};

},{"moment":"moment"}]},{},["/var/www/devbox/app/assets/scripts/app.js"])


//# sourceMappingURL=bundle.js.map
