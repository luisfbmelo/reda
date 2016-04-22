(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/var/www/devbox/app/assets/scripts/actions/action-types.js":[function(require,module,exports){
'use strict';

// RESOURCES

Object.defineProperty(exports, "__esModule", {
  value: true
});
var RESOURCES_REQUEST = exports.RESOURCES_REQUEST = 'RESOURCES_REQUEST';
var RESOURCES_SUCCESS = exports.RESOURCES_SUCCESS = 'RESOURCES_SUCCESS';
var RESOURCES_FAILURE = exports.RESOURCES_FAILURE = 'RESOURCES_FAILURE';

// RESOURCE
var RESOURCE_REQUEST = exports.RESOURCE_REQUEST = 'RESOURCE_REQUEST';
var RESOURCE_SUCCESS = exports.RESOURCE_SUCCESS = 'RESOURCE_SUCCESS';
var RESOURCE_FAILURE = exports.RESOURCE_FAILURE = 'RESOURCE_FAILURE';

// HIGHLIGHTS
var HIGHLIGHTS_REQUEST = exports.HIGHLIGHTS_REQUEST = 'HIGHLIGHTS_REQUEST';
var HIGHLIGHTS_SUCCESS = exports.HIGHLIGHTS_SUCCESS = 'HIGHLIGHTS_SUCCESS';
var HIGHLIGHTS_FAILURE = exports.HIGHLIGHTS_FAILURE = 'HIGHLIGHTS_FAILURE';

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
			dispatch(receiveLogin(props));
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
exports.fetchHighlights = fetchHighlights;
exports.fetchResources = fetchResources;

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
        'li',
        null,
        _react2.default.createElement(
          'button',
          { onClick: this.open },
          'Entrar'
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

          // Is authenticated?
          if (_this2.props.auth && _this2.props.auth.isAuthenticated) {
            resolve();
            _this2.context.router.push('/conta');
          }

          // Are there any errors?
          if (_this2.props.auth.errors) {
            reject(_this2.props.auth.errors);
          }

          resolve();
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
            asyncValidating === 'email' && _react2.default.createElement('i', null),
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
              fetching || asyncValidating ? _react2.default.createElement('i', { className: 'fa fa-spinner fa-spin' }) : "",
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
  asyncValidating: _react.PropTypes.string.isRequired,
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

},{"../../actions/auth":"/var/www/devbox/app/assets/scripts/actions/auth.js","react":"react","react-redux":"react-redux"}],"/var/www/devbox/app/assets/scripts/components/blocks/contribute.js":[function(require,module,exports){
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
					_react2.default.createElement(
						'button',
						{ className: 'cta white outline' },
						section.button
					)
				);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			if (Object.keys(this.state).length <= 0) {
				return _react2.default.createElement(
					'div',
					null,
					'Loading...'
				);
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

},{"../common/svg":"/var/www/devbox/app/assets/scripts/components/common/svg.js","isomorphic-fetch":"isomorphic-fetch","react":"react","react-router":"react-router"}],"/var/www/devbox/app/assets/scripts/components/blocks/explore.js":[function(require,module,exports){
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
				return _react2.default.createElement(
					'div',
					null,
					'Loading...'
				);
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
		{ className: 'light-background' },
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
				return "";
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

},{"react":"react"}],"/var/www/devbox/app/assets/scripts/components/formats/index.js":[function(require,module,exports){
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
		return _react2.default.createElement(
			'div',
			{ className: 'loading' },
			'Loading...'
		);
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

},{"react":"react","react-bootstrap":"react-bootstrap","react-router":"react-router"}],"/var/www/devbox/app/assets/scripts/components/navigation/topNav.js":[function(require,module,exports){
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
			return location === target ? 'active' : '';
		}
	}, {
		key: 'renderUserTools',
		value: function renderUserTools(isAuthenticated) {
			if (!isAuthenticated) {
				return _react2.default.createElement(_loginButton2.default, null);
			}
			return _react2.default.createElement(
				'li',
				{ className: this.isActive(this.props.location.pathname, 'conta') },
				_react2.default.createElement(
					_reactRouter.Link,
					{ to: 'conta' },
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

			console.log(isAuthenticated);
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
									{ to: 'ajuda' },
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
									{ to: 'descobrir' },
									'Descobrir'
								)
							),
							_react2.default.createElement(
								'li',
								{ className: this.isActive(this.props.location.pathname, 'aplicacoes') },
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: 'aplicacoes' },
									'Aplicações'
								)
							),
							_react2.default.createElement(
								'li',
								{ className: this.isActive(this.props.location.pathname, 'noticias') },
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: 'noticias' },
									'Notícias'
								)
							),
							_react2.default.createElement(
								'li',
								{ className: this.isActive(this.props.location.pathname, 'sugestoes') },
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: 'sugestoes' },
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

},{"../auth/loginButton":"/var/www/devbox/app/assets/scripts/components/auth/loginButton.js","../auth/logoutButton":"/var/www/devbox/app/assets/scripts/components/auth/logoutButton.js","react":"react","react-bootstrap":"react-bootstrap","react-router":"react-router"}],"/var/www/devbox/app/assets/scripts/components/resources/carousel.js":[function(require,module,exports){
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

},{"react":"react","react-bootstrap":"react-bootstrap"}],"/var/www/devbox/app/assets/scripts/components/resources/common/filters.js":[function(require,module,exports){
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Components


var renderBreaker = function renderBreaker(classes) {
	if (classes != null) {
		return _react2.default.createElement('div', { className: classes });
	}

	return null;
};

// Boostrap


var renderList = function renderList(list, props) {
	// Set maximum columns
	var maxcol = props.maxcol || 4;
	var classColCount = Math.floor(12 / maxcol);

	return list.map(function (el, index) {

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
			{ className: "col-xs-12 col-sm-4 col-md-" + classColCount + " col-lg-" + classColCount + breaker, key: index },
			_react2.default.createElement(
				'div',
				{ className: 'list__element' },
				_react2.default.createElement(
					_reactRouter.Link,
					{ to: 'descobrir' },
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
				function () {
					if (props.addscript) {
						return _react2.default.createElement(
							_reactRouter.Link,
							{ to: "novoguiao/" + el.id, className: 'cta primary outline small' },
							'Adicionar Guião'
						);
					}
				}(),
				function () {
					if (props.viewmore) {
						return _react2.default.createElement(
							_reactRouter.Link,
							{ to: "detalhes-recurso/" + el.id, className: 'cta primary outline small' },
							'Ver Recurso'
						);
					}
				}(),
				_react2.default.createElement(
					_reactRouter.Link,
					{ to: 'descobrir' },
					_react2.default.createElement(
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
					)
				)
			)
		);
	});
};

var ResourcesList = exports.ResourcesList = function ResourcesList(props) {

	if (!props.list || !props.list.data || props.list.fetching) {
		return _react2.default.createElement(
			'div',
			{ className: 'loading' },
			'Loading...'
		);
	}

	return _react2.default.createElement(
		'section',
		{ className: 'row' },
		renderList(props.list.data, props)
	);
};

ResourcesList.propTypes = {
	list: _react2.default.PropTypes.object.isRequired,
	maxcol: _react2.default.PropTypes.number,
	addscript: _react2.default.PropTypes.bool,
	viewmore: _react2.default.PropTypes.bool
};

},{"../../common/rating":"/var/www/devbox/app/assets/scripts/components/common/rating.js","../../common/svg":"/var/www/devbox/app/assets/scripts/components/common/svg.js","react":"react","react-bootstrap":"react-bootstrap","react-router":"react-router"}],"/var/www/devbox/app/assets/scripts/components/resources/common/order.js":[function(require,module,exports){
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

},{"react":"react"}],"/var/www/devbox/app/assets/scripts/components/resources/highlights.js":[function(require,module,exports){
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
							'p',
							{ className: 'text-center' },
							_react2.default.createElement(
								_reactBootstrap.Button,
								{ bsStyle: 'warning' },
								'Entrar na REDA'
							)
						)
					)
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			if (!this.props.resources) return _react2.default.createElement(
				'div',
				null,
				'Loading...'
			);
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
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: 'novorecurso', className: 'cta primary' },
									'Introduzir Recursos'
								)
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
							this.renderAlert(),
							_react2.default.createElement(_list.ResourcesList, { list: this.props.resources, maxcol: 3, addscript: true }),
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
	resources: _react2.default.PropTypes.object.isRequired
};

},{"../../containers/filters":"/var/www/devbox/app/assets/scripts/containers/filters/index.js","../search/searchBar":"/var/www/devbox/app/assets/scripts/components/search/searchBar.js","./common/list":"/var/www/devbox/app/assets/scripts/components/resources/common/list.js","./common/order":"/var/www/devbox/app/assets/scripts/components/resources/common/order.js","react":"react","react-bootstrap":"react-bootstrap","react-router":"react-router"}],"/var/www/devbox/app/assets/scripts/components/resources/recent.js":[function(require,module,exports){
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
			if (!this.props.resources) return _react2.default.createElement(
				'div',
				null,
				'Loading...'
			);

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
					_react2.default.createElement(_list.ResourcesList, { list: this.props.resources, maxcol: 4, viewmore: true })
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

},{"./common/list":"/var/www/devbox/app/assets/scripts/components/resources/common/list.js","react":"react"}],"/var/www/devbox/app/assets/scripts/components/search/searchBar.js":[function(require,module,exports){
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
							{ className: 'col-xs-12 col-sm-4 col-md-2' },
							_react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'keywords', placeholder: 'Palavras-chave', onChange: this.handleChange })
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-xs-12 col-sm-4 col-md-2' },
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
							{ className: 'col-xs-12 col-sm-4 col-md-2' },
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
							{ className: 'col-xs-12 col-sm-4 col-md-2' },
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
							{ className: 'col-xs-12 col-sm-4 col-md-2' },
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
							{ className: 'col-xs-12 col-sm-4 col-md-2' },
							_react2.default.createElement(
								'button',
								{ type: 'submit', className: 'cta primary' },
								_react2.default.createElement('i', { className: 'fa fa-search', 'aria-hidden': 'true' }),
								'Pesquisar'
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

},{"react":"react"}],"/var/www/devbox/app/assets/scripts/containers/app.js":[function(require,module,exports){
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

},{"react":"react"}],"/var/www/devbox/app/assets/scripts/containers/auth/loginForm.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asyncValidate = exports.validate = exports.fields = undefined;

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

/* Make request to server to check data */
var asyncValidate = exports.asyncValidate = function asyncValidate(values /*, dispatch */) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (['john', 'paul', 'george', 'ringo'].includes(values.email)) {
        reject({ email: 'That email is taken' });
      } else {
        resolve();
      }
    }, 1000); // simulate server latency
  });
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
  asyncValidate: asyncValidate,
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
            isAuthenticated: state.auth.isAuthenticated
        };
    };

    AuthenticatedComponent.contextTypes = {
        router: _react.PropTypes.object
    };

    return (0, _reactRedux.connect)(mapStateToProps)(AuthenticatedComponent);
}

},{"react":"react","react-redux":"react-redux","react-router":"react-router"}],"/var/www/devbox/app/assets/scripts/containers/filters/index.js":[function(require,module,exports){
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
		value: function headerType(location) {
			location = location.length > 1 ? location.replace(/^\//, '') : location;
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
					if (curPage == "home-page") {
						return [_react2.default.createElement(_highlights2.default, { key: 'highlights-container' }), _react2.default.createElement(_search2.default, { key: 'search-container' })];
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

},{"../../components/navigation/topNav":"/var/www/devbox/app/assets/scripts/components/navigation/topNav.js","../highlights":"/var/www/devbox/app/assets/scripts/containers/highlights/index.js","../search":"/var/www/devbox/app/assets/scripts/containers/search/index.js","react":"react","react-redux":"react-redux"}],"/var/www/devbox/app/assets/scripts/containers/highlights/index.js":[function(require,module,exports){
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
  return { highlights: state.highlights };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ fetchHighlights: _resources.fetchHighlights }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_highlights2.default);

},{"../../actions/resources":"/var/www/devbox/app/assets/scripts/actions/resources.js","../../components/resources/highlights":"/var/www/devbox/app/assets/scripts/components/resources/highlights.js","react":"react","react-redux":"react-redux","redux":"redux"}],"/var/www/devbox/app/assets/scripts/containers/resources/index.js":[function(require,module,exports){
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
  return { resources: state.resources };
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
  return { resources: state.resources };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ fetchResources: _resources.fetchResources }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_recent2.default);

},{"../../actions/resources":"/var/www/devbox/app/assets/scripts/actions/resources.js","../../components/resources/recent":"/var/www/devbox/app/assets/scripts/components/resources/recent.js","react":"react","react-redux":"react-redux","redux":"redux"}],"/var/www/devbox/app/assets/scripts/containers/search/index.js":[function(require,module,exports){
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

},{"../../components/search/searchForm":"/var/www/devbox/app/assets/scripts/components/search/searchForm.js","react":"react"}],"/var/www/devbox/app/assets/scripts/pages/accountPage.js":[function(require,module,exports){
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

var _bottomNav = require('../components/navigation/bottomNav');

var _bottomNav2 = _interopRequireDefault(_bottomNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
        'div',
        null,
        _react2.default.createElement(_header2.default, { location: this.props.location }),
        _react2.default.createElement(_breadcrumbs.AppBreadcrumbs, { routes: this.props.routes, params: this.props.params, setDocumentTitle: true }),
        '"asd"',
        _react2.default.createElement(_bottomNav2.default, { location: this.props.location })
      );
    }
  }]);

  return DiscoverPage;
}(_react.Component);

exports.default = DiscoverPage;

},{"../components/common/breadcrumbs":"/var/www/devbox/app/assets/scripts/components/common/breadcrumbs.js","../components/navigation/bottomNav":"/var/www/devbox/app/assets/scripts/components/navigation/bottomNav.js","../containers/header":"/var/www/devbox/app/assets/scripts/containers/header/index.js","react":"react"}],"/var/www/devbox/app/assets/scripts/pages/discoverPage.js":[function(require,module,exports){
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
        'div',
        null,
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

},{"../components/common/breadcrumbs":"/var/www/devbox/app/assets/scripts/components/common/breadcrumbs.js","../components/navigation/bottomNav":"/var/www/devbox/app/assets/scripts/components/navigation/bottomNav.js","../containers/header":"/var/www/devbox/app/assets/scripts/containers/header/index.js","../containers/resources":"/var/www/devbox/app/assets/scripts/containers/resources/index.js","react":"react"}],"/var/www/devbox/app/assets/scripts/pages/indexPage.js":[function(require,module,exports){
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
        'div',
        null,
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

},{"../components/blocks/contribute":"/var/www/devbox/app/assets/scripts/components/blocks/contribute.js","../components/blocks/explore":"/var/www/devbox/app/assets/scripts/components/blocks/explore.js","../components/navigation/bottomNav":"/var/www/devbox/app/assets/scripts/components/navigation/bottomNav.js","../containers/formats":"/var/www/devbox/app/assets/scripts/containers/formats/index.js","../containers/header":"/var/www/devbox/app/assets/scripts/containers/header/index.js","../containers/resources/recent":"/var/www/devbox/app/assets/scripts/containers/resources/recent.js","react":"react"}],"/var/www/devbox/app/assets/scripts/reducers/auth.js":[function(require,module,exports){
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

var _formats = require('./formats');

var _formats2 = _interopRequireDefault(_formats);

var _auth = require('./auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  form: _reduxForm.reducer,
  highlights: _resources2.default,
  formats: _formats2.default,
  resources: _resources.resources,
  auth: _auth2.default
});

exports.default = rootReducer;

},{"./auth":"/var/www/devbox/app/assets/scripts/reducers/auth.js","./formats":"/var/www/devbox/app/assets/scripts/reducers/formats.js","./resources":"/var/www/devbox/app/assets/scripts/reducers/resources.js","redux":"redux","redux-form":"redux-form"}],"/var/www/devbox/app/assets/scripts/reducers/resources.js":[function(require,module,exports){
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
    default:
      return state;
  }
};

},{"../actions/action-types":"/var/www/devbox/app/assets/scripts/actions/action-types.js","object-assign":"object-assign"}],"/var/www/devbox/app/assets/scripts/routes/index.js":[function(require,module,exports){
'use strict';
'user strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _app = require('../containers/app');

var _app2 = _interopRequireDefault(_app);

var _indexPage = require('../pages/indexPage');

var _indexPage2 = _interopRequireDefault(_indexPage);

var _discoverPage = require('../pages/discoverPage');

var _discoverPage2 = _interopRequireDefault(_discoverPage);

var _accountPage = require('../pages/accountPage');

var _accountPage2 = _interopRequireDefault(_accountPage);

var _requireAuth = require('../containers/auth/requireAuth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Pages
exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/', name: 'Início', component: _app2.default },
  _react2.default.createElement(_reactRouter.IndexRoute, { component: _indexPage2.default }),
  _react2.default.createElement(_reactRouter.Route, { name: 'Descobrir', path: 'descobrir', component: _discoverPage2.default }),
  _react2.default.createElement(_reactRouter.Route, { name: 'Novo Guião', path: 'novoguiao/:resource', component: _discoverPage2.default }),
  _react2.default.createElement(_reactRouter.Route, { name: 'A minha conta', path: 'conta', component: (0, _requireAuth.requireAuth)(_accountPage2.default) })
);

// Required

},{"../containers/app":"/var/www/devbox/app/assets/scripts/containers/app.js","../containers/auth/requireAuth":"/var/www/devbox/app/assets/scripts/containers/auth/requireAuth.js","../pages/accountPage":"/var/www/devbox/app/assets/scripts/pages/accountPage.js","../pages/discoverPage":"/var/www/devbox/app/assets/scripts/pages/discoverPage.js","../pages/indexPage":"/var/www/devbox/app/assets/scripts/pages/indexPage.js","react":"react","react-router":"react-router"}]},{},["/var/www/devbox/app/assets/scripts/app.js"])


//# sourceMappingURL=bundle.js.map
