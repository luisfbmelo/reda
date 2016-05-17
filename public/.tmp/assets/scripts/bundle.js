(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\access.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchAccess = fetchAccess;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _actionTypes = require('./action-types');

var _api = require('../middleware/api');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

require('es6-promise').polyfill();


// FORMATS
function requestAccess() {
	return {
		type: _actionTypes.ACCESS_REQUEST
	};
}

function receiveAccess(data) {
	return {
		type: _actionTypes.ACCESS_SUCCESS,
		data: data
	};
}

function accessError(message) {
	return {
		type: _actionTypes.ACCESS_FAILURE,
		message: message
	};
}

function fetchAccess() {
	/*return dispatch => {
 	dispatch(requestAccess());
 		return fetch('/assets/scripts/dummy.json')
 	.then(response => {
 		if (response.status >= 400) {
           throw new Error('Bad response');
         }
         return response.json();
 	})
 	.then(json => {
 		dispatch(receiveAccess(json.access));
 	})
 	.catch(message => {
 		dispatch(accessError(message));
 	})
 }*/
	return _defineProperty({}, _api.CALL_API, {
		endpoint: 'modes',
		types: [_actionTypes.ACCESS_REQUEST, _actionTypes.ACCESS_SUCCESS, _actionTypes.ACCESS_FAILURE]
	});
}

},{"../middleware/api":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\middleware\\api.js","./action-types":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\action-types.js","es6-promise":"es6-promise","isomorphic-fetch":"isomorphic-fetch"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\action-types.js":[function(require,module,exports){
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

// ACCESS
var ACCESS_REQUEST = exports.ACCESS_REQUEST = 'ACCESS_REQUEST';
var ACCESS_SUCCESS = exports.ACCESS_SUCCESS = 'ACCESS_SUCCESS';
var ACCESS_FAILURE = exports.ACCESS_FAILURE = 'ACCESS_FAILURE';

// SUBJECTS
var SUBJECTS_REQUEST = exports.SUBJECTS_REQUEST = 'SUBJECTS_REQUEST';
var SUBJECTS_SUCCESS = exports.SUBJECTS_SUCCESS = 'SUBJECTS_SUCCESS';
var SUBJECTS_FAILURE = exports.SUBJECTS_FAILURE = 'SUBJECTS_FAILURE';

// DOMAINS
var DOMAINS_REQUEST = exports.DOMAINS_REQUEST = 'DOMAINS_REQUEST';
var DOMAINS_SUCCESS = exports.DOMAINS_SUCCESS = 'DOMAINS_SUCCESS';
var DOMAINS_FAILURE = exports.DOMAINS_FAILURE = 'DOMAINS_FAILURE';

// YEARS
var YEARS_REQUEST = exports.YEARS_REQUEST = 'YEARS_REQUEST';
var YEARS_SUCCESS = exports.YEARS_SUCCESS = 'YEARS_SUCCESS';
var YEARS_FAILURE = exports.YEARS_FAILURE = 'YEARS_FAILURE';

// LANGUAGES
var LANGUAGES_REQUEST = exports.LANGUAGES_REQUEST = 'LANGUAGES_REQUEST';
var LANGUAGES_SUCCESS = exports.LANGUAGES_SUCCESS = 'LANGUAGES_SUCCESS';
var LANGUAGES_FAILURE = exports.LANGUAGES_FAILURE = 'LANGUAGES_FAILURE';

// LOGIN
var LOGIN_REQUEST = exports.LOGIN_REQUEST = 'LOGIN_REQUEST';
var LOGIN_SUCCESS = exports.LOGIN_SUCCESS = 'LOGIN_SUCCESS';
var LOGIN_FAILURE = exports.LOGIN_FAILURE = 'LOGIN_FAILURE';

// SIGNUP
var SIGNUP_REQUEST = exports.SIGNUP_REQUEST = 'SIGNUP_REQUEST';
var SIGNUP_SUCCESS = exports.SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
var SIGNUP_FAILURE = exports.SIGNUP_FAILURE = 'SIGNUP_FAILURE';

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

// USER
var FILTERS_REQUEST = exports.FILTERS_REQUEST = 'FILTERS_REQUEST';
var FILTERS_SUCCESS = exports.FILTERS_SUCCESS = 'FILTERS_SUCCESS';
var FILTERS_FAILURE = exports.FILTERS_FAILURE = 'FILTERS_FAILURE';

// TERMS AND CONDITIONS
var TERMSANDCONDITIONS_REQUEST = exports.TERMSANDCONDITIONS_REQUEST = 'TERMSANDCONDITIONS_REQUEST';
var TERMSANDCONDITIONS_SUCCESS = exports.TERMSANDCONDITIONS_SUCCESS = 'TERMSANDCONDITIONS_SUCCESS';
var TERMSANDCONDITIONS_FAILURE = exports.TERMSANDCONDITIONS_FAILURE = 'TERMSANDCONDITIONS_FAILURE';

// ALERTS
var ALERT_ADD = exports.ALERT_ADD = 'ALERT_ADD';
var ALERT_REMOVE = exports.ALERT_REMOVE = 'ALERT_REMOVE';

},{}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\alerts.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.addAlert = addAlert;
exports.removeAlert = removeAlert;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _actionTypes = require('./action-types');

var _messageTypes = require('./message-types');

var messages = _interopRequireWildcard(_messageTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('es6-promise').polyfill();
function addAlert(message, resultType) {
	return {
		type: _actionTypes.ALERT_ADD,
		message: message,
		resultType: resultType
	};
}

function removeAlert(data) {
	return {
		type: _actionTypes.ALERT_REMOVE
	};
}

},{"./action-types":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\action-types.js","./message-types":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\message-types.js","es6-promise":"es6-promise","isomorphic-fetch":"isomorphic-fetch"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\auth.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.receiveLogin = receiveLogin;
exports.loginUser = loginUser;
exports.logout = logout;
exports.signupUser = signupUser;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _actionTypes = require('./action-types');

var _messageTypes = require('./message-types');

var alertMessages = _interopRequireWildcard(_messageTypes);

var _alerts = require('./alerts');

var alertActions = _interopRequireWildcard(_alerts);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('es6-promise').polyfill();


// LOGIN
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
	var config = {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: 'email=' + props.email + '&password=' + props.password
	};

	return function (dispatch) {
		dispatch(requestLogin());

		/* Change this to API Call */
		return (0, _isomorphicFetch2.default)('http://devbox.dev/api/users/signin', config).then(function (response) {
			if (!response.ok) {
				var message = response.status == 401 ? "Email ou Palavra-chave incorretos" : "Não foi possível entrar. Contate o administrador da REDA";
				dispatch(loginError(message));
				return Promise.reject(message);
			}

			return response.json();
		}).then(function (json) {
			console.log(json);
			// If login was successful, set the token in local storage
			localStorage.setItem('token', json.token);
			localStorage.setItem('user', JSON.stringify(json.user));

			dispatch(alertActions.addAlert(alertMessages.ALERT_LOGIN_SUCCESS, alertMessages.SUCCESS));
			dispatch(receiveLogin(json.token));
		}).catch(function (errors) {
			dispatch(loginError(errors));
		});
	};
}

function logout() {
	return function (dispatch) {
		localStorage.removeItem('token');
		localStorage.removeItem('user');

		dispatch(requestLogout());
		dispatch(alertActions.addAlert(alertMessages.ALERT_LOGOUT_SUCCESS, alertMessages.SUCCESS));
	};
}

function requestLogout() {
	return {
		type: _actionTypes.LOGOUT_REQUEST
	};
}

// SIGNUP
function requestSignup() {
	return {
		type: _actionTypes.SIGNUP_REQUEST
	};
}

function receiveSignup(data) {
	return {
		type: _actionTypes.SIGNUP_SUCCESS,
		data: data
	};
}

function signupError(errors) {
	return {
		type: _actionTypes.SIGNUP_FAILURE,
		errors: errors
	};
}

function signupUser(props) {
	return function (dispatch) {
		dispatch(requestSignup());

		/* Change this to API Call */
		return (0, _isomorphicFetch2.default)('/assets/scripts/dummy.json').then(function (response) {
			if (response.status >= 400) {
				throw new Error('Bad response');
			}

			return response.json();
		}).then(function (json) {

			dispatch(receiveSignup(json.users[0]));
		}).catch(function (errors) {

			// Errors simulation
			var data = {
				email: "Email já existe",
				password: "Faltam caracteres"
			};

			dispatch(signupError(data));
		});
	};
}

},{"./action-types":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\action-types.js","./alerts":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\alerts.js","./message-types":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\message-types.js","es6-promise":"es6-promise","isomorphic-fetch":"isomorphic-fetch"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\comments.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchComments = fetchComments;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _actionTypes = require('./action-types');

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

},{"./action-types":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\action-types.js","es6-promise":"es6-promise","isomorphic-fetch":"isomorphic-fetch"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\config.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchConfig = fetchConfig;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _actionTypes = require('./action-types');

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

},{"./action-types":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\action-types.js","es6-promise":"es6-promise","isomorphic-fetch":"isomorphic-fetch"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\domains.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchDomains = fetchDomains;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _actionTypes = require('./action-types');

var _api = require('../middleware/api');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

require('es6-promise').polyfill();


// FORMATS
function requestDomains() {
	return {
		type: _actionTypes.DOMAINS_REQUEST
	};
}

function receiveDomains(data) {
	return {
		type: _actionTypes.DOMAINS_SUCCESS,
		data: data
	};
}

function domainsError(message) {
	return {
		type: _actionTypes.DOMAINS_FAILURE,
		message: message
	};
}

function fetchDomains() {
	/*return dispatch => {
 	dispatch(requestDomains());
 		return fetch('/assets/scripts/dummy.json')
 	.then(response => {
 		if (response.status >= 400) {
           throw new Error('Bad response');
         }
         return response.json();
 	})
 	.then(json => {
 		dispatch(receiveDomains(json.domains));
 	})
 	.catch(message => {
 		dispatch(domainsError(message));
 	})
 }*/
	return _defineProperty({}, _api.CALL_API, {
		endpoint: 'domains',
		types: [_actionTypes.DOMAINS_REQUEST, _actionTypes.DOMAINS_SUCCESS, _actionTypes.DOMAINS_FAILURE]
	});
}

},{"../middleware/api":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\middleware\\api.js","./action-types":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\action-types.js","es6-promise":"es6-promise","isomorphic-fetch":"isomorphic-fetch"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\filters.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchFormats = fetchFormats;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _actionTypes = require('./action-types');

var _api = require('../middleware/api');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

require('es6-promise').polyfill();


// FORMATS
function requestFilters() {
	return {
		type: _actionTypes.FILTERS_REQUEST
	};
}

function receiveFilters(data) {
	return {
		type: _actionTypes.FILTERS_SUCCESS,
		data: data
	};
}

function filtersError(message) {
	return {
		type: _actionTypes.FILTERS_FAILURE,
		message: message
	};
}

function fetchFormats() {
	/*return dispatch => {
 	dispatch(requestFormats());
 
 	return fetch('/assets/scripts/dummy.json')
 	.then(response => {
 		if (response.status >= 400) {
           throw new Error('Bad response');
         }
         return response.json();
 	})
 	.then(json => {
 		dispatch(receiveFormats(json.formats));
 	})
 	.catch(message => {
 		dispatch(formatsError(message));
 	})
 }*/

	return _defineProperty({}, _api.CALL_API, {
		endpoint: 'formats',
		types: [_actionTypes.FILTERS_REQUEST, _actionTypes.FILTERS_SUCCESS, _actionTypes.FILTERS_FAILURE]
	});
}

},{"../middleware/api":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\middleware\\api.js","./action-types":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\action-types.js","es6-promise":"es6-promise","isomorphic-fetch":"isomorphic-fetch"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\formats.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchFormats = fetchFormats;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _actionTypes = require('./action-types');

var _api = require('../middleware/api');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
	/*return dispatch => {
 	dispatch(requestFormats());
 		return fetch('/assets/scripts/dummy.json')
 	.then(response => {
 		if (response.status >= 400) {
           throw new Error('Bad response');
         }
         return response.json();
 	})
 	.then(json => {
 		dispatch(receiveFormats(json.formats));
 	})
 	.catch(message => {
 		dispatch(formatsError(message));
 	})
 }*/

	return _defineProperty({}, _api.CALL_API, {
		endpoint: 'formats',
		types: [_actionTypes.FORMATS_REQUEST, _actionTypes.FORMATS_SUCCESS, _actionTypes.FORMATS_FAILURE]
	});
}

},{"../middleware/api":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\middleware\\api.js","./action-types":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\action-types.js","es6-promise":"es6-promise","isomorphic-fetch":"isomorphic-fetch"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\languages.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchLanguages = fetchLanguages;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _actionTypes = require('./action-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('es6-promise').polyfill();


// FORMATS
function requestLanguages() {
	return {
		type: _actionTypes.LANGUAGES_REQUEST
	};
}

function receiveLanguages(data) {
	return {
		type: _actionTypes.LANGUAGES_SUCCESS,
		data: data
	};
}

function languagesError(message) {
	return {
		type: _actionTypes.LANGUAGES_FAILURE,
		message: message
	};
}

function fetchLanguages() {
	return function (dispatch) {
		dispatch(requestLanguages());

		return (0, _isomorphicFetch2.default)('/assets/scripts/dummy.json').then(function (response) {
			if (response.status >= 400) {
				throw new Error('Bad response');
			}
			return response.json();
		}).then(function (json) {
			dispatch(receiveLanguages(json.languages));
		}).catch(function (message) {
			dispatch(languagesError(message));
		});
	};
}

},{"./action-types":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\action-types.js","es6-promise":"es6-promise","isomorphic-fetch":"isomorphic-fetch"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\message-types.js":[function(require,module,exports){
'use strict';

// GENERIC

Object.defineProperty(exports, "__esModule", {
  value: true
});
var SUCCESS = exports.SUCCESS = "success";
var ERROR = exports.ERROR = "danger";
var WARNING = exports.WARNING = "warning";

// USER
var ALERT_LOGIN_SUCCESS = exports.ALERT_LOGIN_SUCCESS = 'Bem vindo(a) à REDA!';
var ALERT_LOGOUT_SUCCESS = exports.ALERT_LOGOUT_SUCCESS = 'Volte sempre!';

// RESOURCES
var ALERT_RESOURCE_CREATE_SUCCESS = exports.ALERT_RESOURCE_CREATE_SUCCESS = 'O recurso foi adicionado';
var ALERT_RESOURCE_EDIT_SUCCESS = exports.ALERT_RESOURCE_EDIT_SUCCESS = 'O recurso foi alterado';

// SCRIPTS
var ALERT_SCRIPT_CREATE_SUCCESS = exports.ALERT_SCRIPT_CREATE_SUCCESS = 'O guião foi adicionado';
var ALERT_SCRIPT_EDIT_SUCCESS = exports.ALERT_SCRIPT_EDIT_SUCCESS = 'O guião foi alterado';

},{}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\resources.js":[function(require,module,exports){
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

var _actionTypes = require('./action-types');

var _api = require('../middleware/api');

var _messageTypes = require('./message-types');

var alertMessages = _interopRequireWildcard(_messageTypes);

var _alerts = require('./alerts');

var alertActions = _interopRequireWildcard(_alerts);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
	/*return dispatch => {
 	dispatch(requestHighlights());
 		return fetch('/assets/scripts/dummy.json')
 	.then(response => {
 		if (response.status >= 400) {
           throw new Error('Bad response');
         }
         return response.json();
 	})
 	.then(json => {
 		dispatch(receiveHighlights(json.highlights));
 	})
 	.catch(message => {
 		dispatch(highlightsError(message));
 	})
 }*/

	return _defineProperty({}, _api.CALL_API, {
		endpoint: 'resources/highlight',
		sendToken: true,
		types: [_actionTypes.HIGHLIGHTS_REQUEST, _actionTypes.HIGHLIGHTS_SUCCESS, _actionTypes.HIGHLIGHTS_FAILURE]
	});
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

function fetchResources(type, params) {
	/*return dispatch => {
 	dispatch(requestResources());
 		return fetch('/assets/scripts/dummy.json')
 	.then(response => {
 		if (response.status >= 400) {
           throw new Error('Bad response');
         }
         return response.json();
 	})
 	.then(json => {
 		dispatch(receiveResources(json.resources));
 	})
 	.catch(message => {
 		dispatch(resourcesError(message));
 	})
 }*/

	var endpoint = type ? 'resources/' + type : 'resources';

	return _defineProperty({}, _api.CALL_API, {
		endpoint: endpoint,
		sendToken: true,
		method: 'GET',
		types: [_actionTypes.RESOURCES_REQUEST, _actionTypes.RESOURCES_SUCCESS, _actionTypes.RESOURCES_FAILURE]
	});
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

},{"../middleware/api":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\middleware\\api.js","./action-types":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\action-types.js","./alerts":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\alerts.js","./message-types":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\message-types.js","es6-promise":"es6-promise","isomorphic-fetch":"isomorphic-fetch"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\subjects.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchSubjects = fetchSubjects;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _actionTypes = require('./action-types');

var _api = require('../middleware/api');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

require('es6-promise').polyfill();


// FORMATS
function requestSubjects() {
	return {
		type: _actionTypes.SUBJECTS_REQUEST
	};
}

function receiveSubjects(data) {
	return {
		type: _actionTypes.SUBJECTS_SUCCESS,
		data: data
	};
}

function subjectsError(message) {
	return {
		type: _actionTypes.SUBJECTS_FAILURE,
		message: message
	};
}

function fetchSubjects() {
	/*return dispatch => {
 	dispatch(requestSubjects());
 		return fetch('/assets/scripts/dummy.json')
 	.then(response => {
 		if (response.status >= 400) {
           throw new Error('Bad response');
         }
         return response.json();
 	})
 	.then(json => {
 		dispatch(receiveSubjects(json.subjects));
 	})
 	.catch(message => {
 		dispatch(subjectsError(message));
 	})
 }*/

	return _defineProperty({}, _api.CALL_API, {
		endpoint: 'subjects',
		types: [_actionTypes.SUBJECTS_REQUEST, _actionTypes.SUBJECTS_SUCCESS, _actionTypes.SUBJECTS_FAILURE]
	});
}

},{"../middleware/api":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\middleware\\api.js","./action-types":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\action-types.js","es6-promise":"es6-promise","isomorphic-fetch":"isomorphic-fetch"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\terms.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchTerms = fetchTerms;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _actionTypes = require('./action-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('es6-promise').polyfill();


// FORMATS
function requestTerms() {
	return {
		type: _actionTypes.TERMSANDCONDITIONS_REQUEST
	};
}

function receiveTerms(data) {
	return {
		type: _actionTypes.TERMSANDCONDITIONS_SUCCESS,
		data: data
	};
}

function termsError(message) {
	return {
		type: _actionTypes.TERMSANDCONDITIONS_FAILURE,
		message: message
	};
}

function fetchTerms() {
	return function (dispatch) {
		dispatch(requestTerms());

		return (0, _isomorphicFetch2.default)('/assets/scripts/dummy.json').then(function (response) {
			if (response.status >= 400) {
				throw new Error('Bad response');
			}
			return response.json();
		}).then(function (json) {
			dispatch(receiveTerms(json.terms));
		}).catch(function (message) {
			dispatch(termsError(message));
		});
	};
}

},{"./action-types":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\action-types.js","es6-promise":"es6-promise","isomorphic-fetch":"isomorphic-fetch"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\user.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchUserData = fetchUserData;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _actionTypes = require('./action-types');

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

},{"./action-types":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\action-types.js","es6-promise":"es6-promise","isomorphic-fetch":"isomorphic-fetch"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\years.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchYears = fetchYears;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _actionTypes = require('./action-types');

var _api = require('../middleware/api');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

require('es6-promise').polyfill();


// FORMATS
function requestYears() {
	return {
		type: _actionTypes.YEARS_REQUEST
	};
}

function receiveYears(data) {
	return {
		type: _actionTypes.YEARS_SUCCESS,
		data: data
	};
}

function yearsError(message) {
	return {
		type: _actionTypes.YEARS_FAILURE,
		message: message
	};
}

function fetchYears() {
	return _defineProperty({}, _api.CALL_API, {
		endpoint: 'years',
		types: [_actionTypes.YEARS_REQUEST, _actionTypes.YEARS_SUCCESS, _actionTypes.YEARS_FAILURE]
	});
}

},{"../middleware/api":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\middleware\\api.js","./action-types":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\action-types.js","es6-promise":"es6-promise","isomorphic-fetch":"isomorphic-fetch"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\app.js":[function(require,module,exports){
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

var _api = require('./middleware/api');

var _api2 = _interopRequireDefault(_api);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _auth = require('./actions/auth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.applyMiddleware)(_reduxThunk2.default, _api2.default)(_redux.createStore)(_reducers2.default);

// Actions


var token = localStorage.getItem('token');
if (token !== null) {
  store.dispatch((0, _auth.receiveLogin)(token));
}

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_reactRouter.Router, { history: _reactRouter.browserHistory, routes: _routes2.default })
), document.getElementById('site-canvas'));

},{"./actions/auth":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\auth.js","./middleware/api":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\middleware\\api.js","./reducers":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\reducers\\index.js","./routes":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\routes\\index.js","react":"react","react-dom":"react-dom","react-redux":"react-redux","react-router":"react-router","redux":"redux","redux-thunk":"redux-thunk"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\auth\\loginButton.js":[function(require,module,exports){
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

var _reactRouter = require('react-router');

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
      // Set target
      var target = this.props.location || null;

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
            _react2.default.createElement(_loginForm2.default, { target: target })
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Footer,
            null,
            _react2.default.createElement(
              'small',
              null,
              'Acesso disponível apenas para utilizadores ',
              _react2.default.createElement(
                'strong',
                null,
                'azores.gov.pt'
              )
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

},{"../../containers/auth/loginForm":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\auth\\loginForm.js","react":"react","react-bootstrap":"react-bootstrap","react-router":"react-router"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\auth\\loginForm.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

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
          var errors = _this2.props.auth.errors;


          if (!errors) {
            if (_this2.props.target) {
              _this2.context.router.push(_this2.props.target);
            } else {
              _this2.context.router.push('/painel');
            }
          }
        }).catch(function (error) {});
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
      var _props$auth = this.props.auth;
      var fetching = _props$auth.fetching;
      var errors = _props$auth.errors;


      return _react2.default.createElement(
        'div',
        { className: 'login-form box-form' },
        _react2.default.createElement(
          'form',
          { onSubmit: handleSubmit(this.onSubmit) },
          _react2.default.createElement(
            'div',
            { className: 'form-group ' + (email.touched && (email.invalid || errors) ? 'has-error' : '') },
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
            { className: 'form-group ' + (password.touched && (password.invalid || errors) ? 'has-error' : '') },
            _react2.default.createElement('input', _extends({ type: 'password', className: 'form-control', placeholder: 'Palavra-chave' }, password)),
            password.touched && password.error && _react2.default.createElement(
              'div',
              { className: 'text-danger' },
              password.error
            )
          ),
          function () {
            if (errors) {
              return _react2.default.createElement(
                'div',
                { className: 'form-group text-danger' },
                errors
              );
            }
          }(),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'button',
              { type: 'submit', disabled: fetching || asyncValidating, className: 'cta primary' },
              fetching ? _react2.default.createElement('i', { className: 'fa fa-spinner fa-spin' }) : "",
              'Entrar'
            ),
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/recuperar-password', className: 'cta primary no-bg recover-password' },
              'Esqueceu-se da sua palavra-chave?'
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

},{"react":"react","react-router":"react-router"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\auth\\logoutButton.js":[function(require,module,exports){
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
          { onClick: this.logout, className: 'link-effect' },
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

},{"../../actions/auth":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\auth.js","react":"react","react-redux":"react-redux"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\auth\\protectedButton.js":[function(require,module,exports){
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
              'Parece que ainda não se autenticou na plataforma...'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Body,
            null,
            _react2.default.createElement(
              'p',
              null,
              'Para que tenha acesso a todos os recursos disponíveis, terá de efetuar a sua autentificação.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Caso ainda não esteja registado, aproveite esta oportunidade para o fazer!'
            ),
            _react2.default.createElement(_loginForm2.default, { target: this.props.target })
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Footer,
            null,
            _react2.default.createElement(
              'p',
              null,
              'Não é professor? Não deixe de explorar as sugestões que temos para todos.'
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

},{"../../containers/auth/loginForm":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\auth\\loginForm.js","react":"react","react-bootstrap":"react-bootstrap","react-router":"react-router"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\auth\\signupForm.js":[function(require,module,exports){
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

var SignupForm = function (_Component) {
  _inherits(SignupForm, _Component);

  function SignupForm(props) {
    _classCallCheck(this, SignupForm);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SignupForm).call(this, props));

    _this.onSubmit = _this.onSubmit.bind(_this);
    return _this;
  }

  _createClass(SignupForm, [{
    key: 'onSubmit',
    value: function onSubmit(props) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2.props.signupUser(props).then(function () {

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
      var organization = _props$fields.organization;
      var authKey = _props$fields.authKey;
      var resetForm = _props.resetForm;
      var handleSubmit = _props.handleSubmit;
      var submitting = _props.submitting;
      var fetching = this.props.auth.fetching;


      return _react2.default.createElement(
        'div',
        { className: 'signup-form box-form light-background' },
        _react2.default.createElement(
          'form',
          { onSubmit: handleSubmit(this.onSubmit), className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-sm-6 col-sm-offset-3 text-center' },
              _react2.default.createElement(
                'h1',
                null,
                'Efetue o seu registo'
              ),
              _react2.default.createElement(
                'p',
                null,
                'Para que tenha acesso a todos os recursos e funcionalidades disponíveis, efetue o seu registo na plataforma com a chave de segurança que lhe foi fornecida.'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'form-group col-xs-12 col-sm-4 col-sm-offset-4 ' + (email.touched && email.invalid ? 'has-error' : '') },
              _react2.default.createElement(
                'label',
                { className: 'input-title' },
                'Email*'
              ),
              _react2.default.createElement('input', _extends({ type: 'text', className: 'form-control', id: 'email', placeholder: 'Email' }, email)),
              asyncValidating === 'email' && _react2.default.createElement('i', { className: 'fa fa-spinner fa-spin' }),
              email.touched && email.error && _react2.default.createElement(
                'div',
                { className: 'text-danger' },
                email.error
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'form-group col-xs-12 col-sm-4 col-sm-offset-4 ' + (password.touched && password.invalid ? 'has-error' : '') },
              _react2.default.createElement(
                'label',
                { className: 'input-title' },
                'Palavra-Chave*'
              ),
              _react2.default.createElement('input', _extends({ type: 'password', className: 'form-control', placeholder: 'Palavra-chave' }, password)),
              password.touched && password.error && _react2.default.createElement(
                'div',
                { className: 'text-danger' },
                password.error
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'form-group col-xs-12 col-sm-4 col-sm-offset-4 ' + (organization.touched && organization.invalid ? 'has-error' : '') },
              _react2.default.createElement(
                'label',
                { className: 'input-title' },
                'Escola/Organização*'
              ),
              _react2.default.createElement('input', _extends({ type: 'text', className: 'form-control', placeholder: 'Nome da escola/organização onde se encontra' }, organization)),
              organization.touched && organization.error && _react2.default.createElement(
                'div',
                { className: 'text-danger' },
                organization.error
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'form-group col-xs-12 col-sm-4 col-sm-offset-4 ' + (authKey.touched && authKey.invalid ? 'has-error' : '') },
              _react2.default.createElement(
                'label',
                { className: 'input-title' },
                'Chave de Docente*'
              ),
              _react2.default.createElement('input', _extends({ type: 'text', className: 'form-control', placeholder: 'Insira a chave de docente que lhe foi fornecida' }, authKey)),
              authKey.touched && authKey.error && _react2.default.createElement(
                'div',
                { className: 'text-danger' },
                authKey.error
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-sm-4 col-sm-offset-4' },
              _react2.default.createElement(
                'button',
                { type: 'submit', disabled: fetching || asyncValidating, className: 'cta primary' },
                fetching || asyncValidating ? _react2.default.createElement('i', { className: 'fa fa-spinner fa-spin' }) : "",
                'Registar'
              )
            )
          )
        )
      );
    }
  }]);

  return SignupForm;
}(_react.Component);

exports.default = SignupForm;


SignupForm.propTypes = {
  fields: _react.PropTypes.object.isRequired,
  resetForm: _react.PropTypes.func.isRequired,
  handleSubmit: _react.PropTypes.func.isRequired,
  submitting: _react.PropTypes.bool.isRequired
};

SignupForm.contextTypes = {
  router: _react.PropTypes.object
};

},{"react":"react"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\blocks\\contribute.js":[function(require,module,exports){
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
			var _this3 = this;

			return this.state.sections.map(function (section, index) {

				return _react2.default.createElement(
					'div',
					{ className: "col-xs-12 col-sm-6 col-md-4 block__contribute--col" + (index == 0 ? " col-md-offset-2" : null), key: index },
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
							return !_this3.props.auth.isAuthenticated ? _react2.default.createElement(
								_loginButton2.default,
								{ className: 'cta white outline' },
								section.button.text
							) : _react2.default.createElement(
								_reactRouter.Link,
								{ to: '/painel', className: 'cta white outline' },
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

},{"../auth/loginButton":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\auth\\loginButton.js","../common/svg":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\common\\svg.js","isomorphic-fetch":"isomorphic-fetch","react":"react","react-router":"react-router"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\blocks\\explore.js":[function(require,module,exports){
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
					_react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: this.state.text } }),
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

},{"isomorphic-fetch":"isomorphic-fetch","react":"react","react-router":"react-router"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\common\\alerts.js":[function(require,module,exports){
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

var AlertsBox = function (_Component) {
	_inherits(AlertsBox, _Component);

	function AlertsBox(props) {
		_classCallCheck(this, AlertsBox);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AlertsBox).call(this, props));

		_this.setTimer = _this.setTimer.bind(_this);
		_this.dismissAlert = _this.dismissAlert.bind(_this);

		_this.state = {
			visible: false
		};
		return _this;
	}

	_createClass(AlertsBox, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.setTimer();
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var _props$alerts = this.props.alerts;
			var message = _props$alerts.message;
			var resultType = _props$alerts.resultType;


			if (nextProps.alerts.message != message && nextProps.alerts.resultType != resultType) {
				this.setTimer();
				this.setState({ visible: true });
			}
		}
	}, {
		key: 'dismissAlert',
		value: function dismissAlert() {
			this.setState({ visible: false });
			clearTimeout(this._timer);
		}

		// Set timer to hide alert box

	}, {
		key: 'setTimer',
		value: function setTimer() {

			// clear any existing timer
			this._timer != null ? clearTimeout(this._timer) : null;

			// hide after `delay` milliseconds
			this._timer = setTimeout(function () {
				this.setState({ visible: false });
				this._timer = null;
				this.props.removeAlert();
			}.bind(this), this.props.delay);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props$alerts2 = this.props.alerts;
			var message = _props$alerts2.message;
			var resultType = _props$alerts2.resultType;
			var visible = this.state.visible;


			return _react2.default.createElement(
				'div',
				{ className: "alert-fixed alert" + (resultType ? " alert-" + resultType : "") + (!message || !visible ? " hide" : "") + (message && visible ? " animate-show" : "") },
				_react2.default.createElement(
					'button',
					{ type: 'button', className: 'close', 'data-dismiss': 'alert', 'aria-label': 'Close', onClick: this.dismissAlert },
					_react2.default.createElement(
						'span',
						{ 'aria-hidden': 'true' },
						'×'
					)
				),
				message
			);
		}
	}]);

	return AlertsBox;
}(_react.Component);

exports.default = AlertsBox;


AlertsBox.propTypes = {
	alerts: _react2.default.PropTypes.object.isRequired
};

AlertsBox.defaultProps = {
	delay: 5000
};

},{"react":"react"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\common\\breadcrumbs.js":[function(require,module,exports){
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

},{"react":"react","react-breadcrumbs":"react-breadcrumbs"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\common\\collapse.js":[function(require,module,exports){
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
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.setState({
				open: this.props.isOpen || false
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var deleteTitle = this.props.deleteTitle || "Remover";

			return _react2.default.createElement(
				'div',
				{ className: 'collapse-container' },
				_react2.default.createElement(
					'div',
					{ className: "buttons " + this.props.className + (this.state.open ? " open" : " outline") },
					function () {
						if (_this2.props.deleteEl) {
							return _react2.default.createElement('i', { className: _this2.props.deleteIcon || null, onClick: function onClick() {
									return _this2.props.deleteEl();
								}, title: deleteTitle });
						}
					}(),
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
					)
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
	className: _react2.default.PropTypes.string,
	iconOpen: _react2.default.PropTypes.string.isRequired,
	iconClosed: _react2.default.PropTypes.string.isRequired,
	deleteEl: _react2.default.PropTypes.func,
	deleteIcon: _react2.default.PropTypes.string,
	isOpen: _react2.default.PropTypes.bool
};

},{"react":"react","react-bootstrap":"react-bootstrap"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\common\\fileInput.js":[function(require,module,exports){
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

var FileInput = function (_Component) {
    _inherits(FileInput, _Component);

    function FileInput(props) {
        _classCallCheck(this, FileInput);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FileInput).call(this, props));

        _this.uploadFile = _this.uploadFile.bind(_this);
        return _this;
    }

    _createClass(FileInput, [{
        key: 'uploadFile',
        value: function uploadFile(e) {
            var _this2 = this;

            var reader = new FileReader();
            var thisFile = e.target.files[0] || null;
            var hasError = false;

            var name = null;
            var extension = null;
            var data = null;
            var size = thisFile.size;

            /*if (thisFile.size>2000000) {
                hasError = true;
            }*/

            //check if file is image
            if (!hasError) {
                //read file
                reader.readAsDataURL(e.target.files[0]);

                //set loading
            } else {}
                //clear all fields


                // File loaded
            if (thisFile) {
                reader.onload = function (e) {
                    // Set file name
                    name = thisFile.name.substr(0, thisFile.name.lastIndexOf('.')) || thisFile.name;

                    // Set file extension
                    extension = thisFile.name.substr(thisFile.name.lastIndexOf('.') + 1);

                    // Save file data
                    data = e.target.result;

                    // Return file metadata
                    _this2.props.setFile({ name: name, extension: extension, data: data, size: size });
                };
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'span',
                { className: 'cta primary btn-file' },
                _react2.default.createElement('input', { type: 'file', onChange: this.uploadFile }),
                ' Escolher Ficheiro'
            );
        }
    }]);

    return FileInput;
}(_react.Component);

exports.default = FileInput;

},{"react":"react"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\common\\radioGroup.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderList = function renderList(list, name, onclickCallback, checkedEl, isSingleCol) {
	var colClass = isSingleCol ? "col-xs-12" : "col-xs-6 col-sm-4";
	return list.map(function (item, index) {
		return _react2.default.createElement(
			'div',
			{ className: colClass, key: item.id },
			_react2.default.createElement(
				'div',
				{ className: 'radio' },
				_react2.default.createElement('input', { id: name + "_" + item.id, type: 'radio', name: name, value: '{item.title}', onChange: function onChange() {
						return onclickCallback(item);
					}, checked: item.id == checkedEl.id }),
				_react2.default.createElement(
					'label',
					{ htmlFor: name + "_" + item.id },
					item.title
				)
			)
		);
	});
};

exports.default = function (props) {
	return _react2.default.createElement(
		'div',
		{ className: 'row' },
		renderList(props.list, props.name, props.setRadio, props.checked, props.singleCol)
	);
};

},{"react":"react"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\common\\rating.js":[function(require,module,exports){
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

},{"react":"react","react-rating":"react-rating"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\common\\svg.js":[function(require,module,exports){
'use strict';
'user strict';

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

},{"react":"react"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\common\\tags.js":[function(require,module,exports){
'use strict';
'user strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTagsinput = require('react-tagsinput');

var _reactTagsinput2 = _interopRequireDefault(_reactTagsinput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TagsInput = function (_Component) {
    _inherits(TagsInput, _Component);

    function TagsInput(props) {
        _classCallCheck(this, TagsInput);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TagsInput).call(this, props));

        _this.handleChange = _this.handleChange.bind(_this);

        _this.state = {
            tags: []
        };
        return _this;
    }

    _createClass(TagsInput, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({ tags: this.props.tags || [] });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(tags) {
            this.setState({ tags: tags });
            this.props.setTags(tags);
        }
    }, {
        key: 'render',
        value: function render() {
            var inputProps = {
                className: 'react-tagsinput-input',
                placeholder: this.props.placeholder
            };
            return _react2.default.createElement(
                'div',
                { className: this.props.className },
                _react2.default.createElement(_reactTagsinput2.default, {
                    value: this.state.tags,
                    onChange: this.handleChange,
                    addKeys: [188, 9, 13, 32],
                    inputProps: inputProps })
            );
        }
    }]);

    return TagsInput;
}(_react.Component);

exports.default = TagsInput;

},{"react":"react","react-tagsinput":"react-tagsinput"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\common\\textarea.js":[function(require,module,exports){
'use strict';
'user strict';

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

var TextArea = function (_Component) {
	_inherits(TextArea, _Component);

	function TextArea(props) {
		_classCallCheck(this, TextArea);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TextArea).call(this, props));

		_this.handleChange = _this.handleChange.bind(_this);

		_this.state = {
			currentLength: 0,
			text: ""
		};
		return _this;
	}

	_createClass(TextArea, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.setState({ text: this.props.initVal || "" });
		}
	}, {
		key: 'handleChange',
		value: function handleChange(e) {
			// Check 	
			if (e.target.value.length <= this.props.max || !this.props.max) {
				this.setState({
					currentLength: e.target.value.length,
					text: e.target.value
				});
			} else {
				e.preventDefault();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement('textarea', _extends({}, this.props, { onChange: this.handleChange, value: this.state.text })),
				_react2.default.createElement(
					'div',
					{ className: 'row' },
					_react2.default.createElement(
						'div',
						{ className: 'col-xs-6' },
						function () {
							if (_this2.props.max) {
								return _react2.default.createElement(
									'span',
									null,
									_this2.state.currentLength + "/" + _this2.props.max
								);
							}
						}()
					),
					_react2.default.createElement(
						'div',
						{ className: 'col-xs-6 text-right' },
						_react2.default.createElement(
							'small',
							null,
							'Deve ter no mínimo ',
							this.props.min,
							' caracteres e no máximo ',
							this.props.max
						)
					)
				)
			);
		}
	}]);

	return TextArea;
}(_react.Component);

exports.default = TextArea;

},{"react":"react"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\dashboard\\index.js":[function(require,module,exports){
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

},{"../../containers/dashboard/menu":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\dashboard\\menu.js","../../containers/dashboard/myResources":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\dashboard\\myResources.js","react":"react","react-bootstrap":"react-bootstrap","react-router":"react-router"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\dashboard\\resources\\common\\list.js":[function(require,module,exports){
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
			el.Format.title
		);

		return _react2.default.createElement(
			'article',
			{ className: 'col-xs-12', key: el.id },
			_react2.default.createElement(
				'div',
				{ className: 'list__element list__dashboard' },
				_react2.default.createElement(
					'div',
					{ className: 'check-element' },
					_react2.default.createElement('input', { type: 'checkbox', name: "selected-resource" + el.id, id: "selected-resource" + el.id, checked: props.checkedList.indexOf(el.id) >= 0 }),
					_react2.default.createElement('label', { htmlFor: "selected-resource" + el.id, onClick: function onClick() {
							return props.checkEl(el.id);
						} })
				),
				_react2.default.createElement(
					'div',
					{ className: 'list__dashboard--container' },
					_react2.default.createElement(
						'header',
						{ className: 'list__dashboard--heading' },
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: "/descobrir/detalhes-recurso/" + el.slug, className: 'left-col fLeft' },
							_react2.default.createElement(
								'h1',
								null,
								el.title
							),
							_react2.default.createElement(
								'p',
								null,
								el.description
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'top-icons fRight' },
							_react2.default.createElement('i', { className: "fa fa-" + (el.Favorites && el.Favorites.length > 0 ? "heart" : "heart-o"), title: 'Favorito' }),
							_react2.default.createElement(
								'div',
								{ className: 'type' },
								_react2.default.createElement(
									_reactBootstrap.OverlayTrigger,
									{ placement: 'left', overlay: tooltip },
									_react2.default.createElement(
										'span',
										null,
										_react2.default.createElement(_svg2.default, { element: props.config.formatIcons + "/" + el.Format.Image.name + "." + el.Format.Image.extension, color: '#b4b4b4' })
									)
								)
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'actions' },
							_react2.default.createElement(
								'button',
								{ className: 'cta secundary no-bg' },
								'Editar'
							),
							_react2.default.createElement(
								'button',
								{ className: 'cta secundary no-bg', onClick: function onClick() {
										return props.delEl(el.id);
									} },
								'Eliminar'
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
								{ to: "/descobrir/detalhes-recurso/" + el.slug, className: 'cta primary outline small' },
								'Ver Recurso'
							),
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: "/gerirguioes/" + el.id, className: 'cta primary outline small' },
								'Gerir Guiões'
							),
							_react2.default.createElement('i', { className: "action-btn fa fa-" + (el.highlight ? "star" : "star-o"), onClick: function onClick() {
									return props.setHighlight(el.id);
								}, title: 'Recurso do Mês' })
						)
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

},{"../../../auth/protectedButton":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\auth\\protectedButton.js","../../../common/rating":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\common\\rating.js","../../../common/svg":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\common\\svg.js","react":"react","react-bootstrap":"react-bootstrap","react-router":"react-router"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\dashboard\\resources\\myResources.js":[function(require,module,exports){
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

var _search = require('../../../containers/search');

var _search2 = _interopRequireDefault(_search);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Components


// Bootstrap


var MyResources = function (_Component) {
	_inherits(MyResources, _Component);

	function MyResources(props) {
		_classCallCheck(this, MyResources);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MyResources).call(this, props));

		_this.onChangePage = _this.onChangePage.bind(_this);
		_this.setHighlight = _this.setHighlight.bind(_this);
		_this.filterList = _this.filterList.bind(_this);

		// Resources actions
		_this.checkAllResources = _this.checkAllResources.bind(_this);
		_this.checkEl = _this.checkEl.bind(_this);
		_this.delList = _this.delList.bind(_this);
		_this.delEl = _this.delEl.bind(_this);

		_this.state = {
			activePage: 1,
			checkedResources: [],
			checkAll: false
		};
		return _this;
	}

	_createClass(MyResources, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			this.props.fetchResources('search').then(function () {
				_this2.setState({ activePage: _this2.props.resources.curPage || 1 });
			});
			this.props.fetchConfig();

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

		// Set as highlighted

	}, {
		key: 'setHighlight',
		value: function setHighlight(resourceId) {
			/* REQUEST UPDATE AS HIGHLIGHT AND GET THE NEW ITEM IN THE REDUCER IN ORDER TO RE-RENDER */
			//console.log(this.props);
			this.props.setHighlight(resourceId);
		}

		// Check elements

	}, {
		key: 'checkAllResources',
		value: function checkAllResources() {
			if (!this.state.checkAll) {
				var totalIds = [];
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = this.props.resources.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var item = _step.value;

						totalIds.push(item.id);
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				this.setState({
					checkedResources: totalIds,
					checkAll: !this.state.checkAll
				});
			} else {
				this.setState({
					checkedResources: [],
					checkAll: !this.state.checkAll
				});
			}
		}
	}, {
		key: 'checkEl',
		value: function checkEl(id) {
			var checkedResources = this.state.checkedResources;

			var index = checkedResources.indexOf(id);
			var allChecked = false;

			// If exists, remove item and set as
			if (index >= 0) {
				checkedResources.splice(index, 1);
			} else {
				checkedResources.push(id);
				allChecked = this.state.checkAll;
			}

			this.setState({
				checkedResources: checkedResources,
				checkAll: allChecked
			});
		}

		// Delete list of selected items

	}, {
		key: 'delList',
		value: function delList() {
			console.log(this.state.checkedResources);
		}

		// Delete single element

	}, {
		key: 'delEl',
		value: function delEl(id) {
			console.log(id);
		}
	}, {
		key: 'filterList',
		value: function filterList() {
			console.log("Filter");
		}
	}, {
		key: 'render',
		value: function render() {
			var resources = this.props.resources;


			if (!resources.data) return null;

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
							{ className: 'pannel-title' },
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
								{ className: 'col-xs-12 filter-container' },
								_react2.default.createElement(_search2.default, { searchKeywords: false, buttonText: 'Filtrar', iconClass: 'fa fa-filter', onSubmit: this.filterList })
							)
						),
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
								_react2.default.createElement('input', { type: 'checkbox', name: 'selected-resources', id: 'selected-resources', checked: this.state.checkAll }),
								_react2.default.createElement('label', { htmlFor: 'selected-resources', onClick: this.checkAllResources }),
								_react2.default.createElement(
									'button',
									{ className: 'btn btn-danger' },
									_react2.default.createElement('i', { className: 'fa fa-trash' })
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'col-xs-6' },
								_react2.default.createElement(_order2.default, { onChange: this.onListOrder })
							)
						),
						_react2.default.createElement(_list.ResourcesList, {
							config: this.props.config.data,
							list: this.props.resources,
							user: this.props.auth.data,
							setHighlight: this.setHighlight,
							checkedList: this.state.checkedResources,
							checkEl: this.checkEl,
							allChecked: this.state.checkAll,
							delEl: this.delEl
						}),
						_react2.default.createElement(_reactBootstrap.Pagination, {
							prev: true,
							next: true,
							first: true,
							last: true,
							ellipsis: true,
							boundaryLinks: true,
							items: resources.totalPages,
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
	resources: _react.PropTypes.object.isRequired,
	auth: _react.PropTypes.object.isRequired,
	config: _react.PropTypes.object.isRequired
};

},{"../../../containers/search":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\search\\index.js","../../resources/common/order":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\common\\order.js","../../search/searchBar":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\search\\searchBar.js","./common/list":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\dashboard\\resources\\common\\list.js","react":"react","react-bootstrap":"react-bootstrap","react-router":"react-router"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\formats\\index.js":[function(require,module,exports){
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
			this.props.fetchConfig();
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'formats' },
				_react2.default.createElement(_list.FormatsList, { formats: this.props.formats, config: this.props.config })
			);
		}
	}]);

	return FormatsBanner;
}(_react.Component);

exports.default = FormatsBanner;


FormatsBanner.propTypes = {
	formats: _react2.default.PropTypes.object.isRequired
};

},{"./list":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\formats\\list.js","react":"react"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\formats\\list.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.FormatsList = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderList = function renderList(list, config) {
	return _.sortBy(list, 'priority').map(function (format, index) {
		if (index <= 5) {
			return _react2.default.createElement(
				'article',
				{ className: 'col-xs-6 col-sm-3 col-md-2 formats__element', key: format.id },
				_react2.default.createElement(
					_reactRouter.Link,
					{ to: 'descobrir?formato=' + format.id },
					_react2.default.createElement('img', { src: config.formatIcons + "/" + format.Image.name + "." + format.Image.extension, alt: format.Image.alt, className: 'img-responsive' }),
					_react2.default.createElement(
						'span',
						null,
						format.title
					)
				)
			);
		}
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
			renderList(props.formats.data, props.config.data)
		)
	);
};

FormatsList.propTypes = {
	formats: _react2.default.PropTypes.object.isRequired
};

},{"react":"react","react-router":"react-router"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\navigation\\bottomNav.js":[function(require,module,exports){
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

},{"react":"react","react-bootstrap":"react-bootstrap","react-router":"react-router"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\navigation\\dashboardMenu.js":[function(require,module,exports){
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

},{"../common/collapse":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\common\\collapse.js","react":"react","react-bootstrap":"react-bootstrap","react-router":"react-router"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\navigation\\profileNav.js":[function(require,module,exports){
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

},{"react":"react","react-router":"react-router"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\navigation\\topNav.js":[function(require,module,exports){
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

		_this.renderSmallNav = _this.renderSmallNav.bind(_this);
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
		key: 'renderSmallNav',
		value: function renderSmallNav(isAuthenticated) {
			return _react2.default.createElement(
				'ul',
				{ className: 'nav navbar-nav small-nav' },
				!isAuthenticated && _react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_loginButton2.default,
						{ location: this.props.location.pathname },
						'Entrar'
					)
				),
				!isAuthenticated && _react2.default.createElement(
					'li',
					{ className: this.isActive(this.props.location.pathname, 'registar') },
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/registar' },
						'Registar'
					)
				),
				isAuthenticated && _react2.default.createElement(
					'li',
					{ className: this.isActive(this.props.location.pathname, 'painel') },
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/painel' },
						'Minha Conta'
					)
				),
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
						this.renderSmallNav(isAuthenticated),
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

},{"../auth/loginButton":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\auth\\loginButton.js","../auth/logoutButton":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\auth\\logoutButton.js","react":"react","react-bootstrap":"react-bootstrap","react-router":"react-router"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\actions\\email.js":[function(require,module,exports){
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

},{"react":"react"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\actions\\embed.js":[function(require,module,exports){
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

},{"react":"react"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\actions\\favorite.js":[function(require,module,exports){
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

},{"react":"react"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\actions\\share.js":[function(require,module,exports){
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

},{"react":"react"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\carousel.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AppCarousel = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _reactRouter = require('react-router');

var _protectedButton = require('../auth/protectedButton');

var _protectedButton2 = _interopRequireDefault(_protectedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Components


var renderProtected = function renderProtected(obj, target, el, isAuth) {
	if (!el.exclusive || isAuth) {
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

var renderList = function renderList(list, isAuth) {
	return list.map(function (element) {
		return _react2.default.createElement(
			_reactBootstrap.Carousel.Item,
			{ key: element.slug },
			_react2.default.createElement(
				'div',
				{ className: 'media col-xs-9 col-sm-8 col-xs-offset-2 col-sm-offset-2' },
				_react2.default.createElement('div', { className: 'media-left media__img' }),
				_react2.default.createElement(
					'div',
					{ className: 'media-body' },
					renderProtected(_react2.default.createElement(
						'h1',
						{ className: 'media-heading' },
						element.title
					), "/descobrir/detalhes-recurso/" + element.slug, element, isAuth),
					_react2.default.createElement(
						'div',
						{ className: 'app-carousel__text' },
						element.description
					),
					renderProtected(_react2.default.createElement(
						'span',
						{ className: 'cta secundary no-bg pull-right' },
						'Ler mais...'
					), "/descobrir/detalhes-recurso/" + element.slug, element, isAuth)
				)
			)
		);
	});
};

var AppCarousel = exports.AppCarousel = function AppCarousel(props) {
	var settings = props.settings;
	if (!props.data || !props.data.data || props.data.fetching) {
		return _react2.default.createElement('div', null);
	}

	return _react2.default.createElement(
		'div',
		{ className: 'container app-carousel' },
		_react2.default.createElement(
			_reactBootstrap.Carousel,
			{ interval: settings.interval, nextIcon: settings.nextIcon, prevIcon: settings.prevIcon, indicators: settings.indicators },
			renderList(props.data.data, props.isAuthenticated)
		)
	);
};

AppCarousel.propTypes = {
	data: _react2.default.PropTypes.object.isRequired,
	settings: _react2.default.PropTypes.object.isRequired
};

},{"../auth/protectedButton":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\auth\\protectedButton.js","react":"react","react-bootstrap":"react-bootstrap","react-router":"react-router"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\comments\\comment.js":[function(require,module,exports){
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

},{"../../../utils":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\utils\\index.js","./comments":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\comments\\comments.js","react":"react","react-bootstrap":"react-bootstrap"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\comments\\comments.js":[function(require,module,exports){
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

},{"./comment":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\comments\\comment.js","react":"react"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\comments\\form.js":[function(require,module,exports){
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

},{"react":"react","react-dom":"react-dom"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\comments\\list.js":[function(require,module,exports){
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

},{"./comments":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\comments\\comments.js","react":"react","react-router":"react-router"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\common\\filters.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = require('../../../utils');

var _collapse = require('../../common/collapse');

var _collapse2 = _interopRequireDefault(_collapse);

var _reactCheckboxGroup = require('react-checkbox-group');

var _reactCheckboxGroup2 = _interopRequireDefault(_reactCheckboxGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Utils


// Components


var ResourcesFilters = function (_Component) {
	_inherits(ResourcesFilters, _Component);

	function ResourcesFilters(props) {
		_classCallCheck(this, ResourcesFilters);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ResourcesFilters).call(this, props));

		_this.state = {
			formats: [],
			subjects: [],
			domains: [],
			years: [],
			access: []
		};

		//
		//	Submition
		//
		_this.submitFilters = _this.submitFilters.bind(_this);

		//
		//	Change events
		//
		_this.formatChange = _this.formatChange.bind(_this);
		_this.subjectChange = _this.subjectChange.bind(_this);
		_this.domainChange = _this.domainChange.bind(_this);
		_this.yearChange = _this.yearChange.bind(_this);
		_this.accessChange = _this.accessChange.bind(_this);

		//
		//	Renders
		//
		_this.renderFormats = _this.renderFormats.bind(_this);
		_this.renderSubjects = _this.renderSubjects.bind(_this);
		_this.renderDomains = _this.renderDomains.bind(_this);
		_this.renderYears = _this.renderYears.bind(_this);
		_this.renderAccess = _this.renderAccess.bind(_this);
		return _this;
	}

	_createClass(ResourcesFilters, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.fetchFormats();
			this.props.fetchSubjects();
			this.props.fetchDomains();
			this.props.fetchYears();
			this.props.fetchAccess();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {

			//If previous state is different, then warn container
			if (prevState != this.state) {
				this.submitFilters();
			}
		}
	}, {
		key: 'submitFilters',
		value: function submitFilters() {
			this.props.onFilterChange(this.state);
		}

		//
		//	Handle Changes
		//

	}, {
		key: 'formatChange',
		value: function formatChange(data) {
			this.setState({
				formats: data
			});
		}
	}, {
		key: 'subjectChange',
		value: function subjectChange(data) {
			this.setState({
				subjects: data
			});
		}
	}, {
		key: 'domainChange',
		value: function domainChange(data) {
			this.setState({
				domains: data
			});
		}
	}, {
		key: 'yearChange',
		value: function yearChange(data) {
			this.setState({
				years: data
			});
		}
	}, {
		key: 'accessChange',
		value: function accessChange(data) {
			this.setState({
				access: data
			});
		}

		//
		//	RENDER DATA
		//
		// Render formats list

	}, {
		key: 'renderFormats',
		value: function renderFormats() {
			var data = this.props.formats.data;

			return _react2.default.createElement(
				_reactCheckboxGroup2.default,
				{
					name: 'subjects',
					value: this.state.formats,
					onChange: this.formatChange
				},
				function (Checkbox) {
					return _react2.default.createElement(
						'div',
						{ className: 'row' },
						data.sort(_utils.sortByTitle).map(function (item, index) {
							return _react2.default.createElement(
								'div',
								{ key: item.id, className: 'col-xs-12' },
								_react2.default.createElement(Checkbox, { value: item.id, id: "format-" + item.id }),
								_react2.default.createElement(
									'label',
									{ htmlFor: "format-" + item.id },
									item.title
								)
							);
						})
					);
				}
			);
		}

		// Render subjects list

	}, {
		key: 'renderSubjects',
		value: function renderSubjects() {
			var data = this.props.subjects.data;

			return _react2.default.createElement(
				_reactCheckboxGroup2.default,
				{
					name: 'subjects',
					value: this.state.subjects,
					onChange: this.subjectChange
				},
				function (Checkbox) {
					return _react2.default.createElement(
						'div',
						{ className: 'row' },
						data.sort(_utils.sortByTitle).map(function (item, index) {
							return _react2.default.createElement(
								'div',
								{ key: item.id, className: 'col-xs-12' },
								_react2.default.createElement(Checkbox, { value: item.id, id: "subject-" + item.id }),
								_react2.default.createElement(
									'label',
									{ htmlFor: "subject-" + item.id },
									item.title
								)
							);
						})
					);
				}
			);
		}

		// Render domains list

	}, {
		key: 'renderDomains',
		value: function renderDomains() {
			var data = this.props.domains.data;

			return _react2.default.createElement(
				_reactCheckboxGroup2.default,
				{
					name: 'domains',
					value: this.state.domains,
					onChange: this.domainChange
				},
				function (Checkbox) {
					return _react2.default.createElement(
						'div',
						{ className: 'row' },
						data.sort(_utils.sortByTitle).map(function (item, index) {
							return _react2.default.createElement(
								'div',
								{ key: item.id, className: 'col-xs-12' },
								_react2.default.createElement(Checkbox, { value: item.id, id: "domain-" + item.id }),
								_react2.default.createElement(
									'label',
									{ htmlFor: "domain-" + item.id },
									item.title
								)
							);
						})
					);
				}
			);
		}

		// Render years list

	}, {
		key: 'renderYears',
		value: function renderYears() {
			var data = this.props.years.data;

			return _react2.default.createElement(
				_reactCheckboxGroup2.default,
				{
					name: 'years',
					value: this.state.years,
					onChange: this.yearChange
				},
				function (Checkbox) {
					return _react2.default.createElement(
						'div',
						{ className: 'row' },
						data.sort(_utils.sortByTitle).map(function (item, index) {
							return _react2.default.createElement(
								'div',
								{ key: item.id, className: 'col-xs-6' },
								_react2.default.createElement(Checkbox, { value: item.id, id: "year-" + item.id }),
								_react2.default.createElement(
									'label',
									{ htmlFor: "year-" + item.id },
									item.title
								)
							);
						})
					);
				}
			);
		}

		// Render access modes list

	}, {
		key: 'renderAccess',
		value: function renderAccess() {
			var data = this.props.access.data;

			return _react2.default.createElement(
				_reactCheckboxGroup2.default,
				{
					name: 'access',
					value: this.state.access,
					onChange: this.accessChange
				},
				function (Checkbox) {
					return _react2.default.createElement(
						'div',
						{ className: 'row' },
						data.sort(_utils.sortByTitle).map(function (item, index) {
							return _react2.default.createElement(
								'div',
								{ key: item.id, className: 'col-xs-6' },
								_react2.default.createElement(Checkbox, { value: item.id, id: "access-" + item.id }),
								_react2.default.createElement(
									'label',
									{ htmlFor: "access-" + item.id },
									item.title
								)
							);
						})
					);
				}
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props;
			var formats = _props.formats;
			var subjects = _props.subjects;
			var domains = _props.domains;
			var years = _props.years;
			var access = _props.access;

			if (!formats.data || !subjects.data || !domains.data || !years.data || !access.data) return null;

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
							{ title: 'Anos', iconOpen: 'fa fa-chevron-up', iconClosed: 'fa fa-chevron-down' },
							this.renderYears()
						),
						_react2.default.createElement(
							_collapse2.default,
							{ title: 'Disciplinas', iconOpen: 'fa fa-chevron-up', iconClosed: 'fa fa-chevron-down' },
							this.renderSubjects()
						),
						_react2.default.createElement(
							_collapse2.default,
							{ title: 'Domínios', iconOpen: 'fa fa-chevron-up', iconClosed: 'fa fa-chevron-down' },
							this.renderDomains()
						),
						_react2.default.createElement(
							_collapse2.default,
							{ title: 'Formatos', iconOpen: 'fa fa-chevron-up', iconClosed: 'fa fa-chevron-down' },
							this.renderFormats()
						),
						_react2.default.createElement(
							_collapse2.default,
							{ title: 'Modos de utilização', iconOpen: 'fa fa-chevron-up', iconClosed: 'fa fa-chevron-down' },
							this.renderAccess()
						)
					)
				)
			);
		}
	}]);

	return ResourcesFilters;
}(_react.Component);

exports.default = ResourcesFilters;


ResourcesFilters.propTypes = {
	formats: _react.PropTypes.object.isRequired,
	subjects: _react.PropTypes.object.isRequired
};

},{"../../../utils":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\utils\\index.js","../../common/collapse":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\common\\collapse.js","lodash":"lodash","react":"react","react-checkbox-group":"react-checkbox-group"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\common\\list.js":[function(require,module,exports){
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
		return _react2.default.createElement(_resource.ResourceElement, { maxcol: maxcol, classColCount: classColCount, addscript: addscript, viewmore: viewmore, isAuthenticated: isAuthenticated, el: el, index: index, key: index, config: props.config });
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

},{"../../auth/protectedButton":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\auth\\protectedButton.js","../../common/rating":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\common\\rating.js","../../common/svg":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\common\\svg.js","./resource":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\common\\resource.js","react":"react","react-bootstrap":"react-bootstrap","react-router":"react-router"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\common\\order.js":[function(require,module,exports){
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

},{"react":"react"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\common\\resource.js":[function(require,module,exports){
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
	if (!props.el.exclusive || props.isAuthenticated) {
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
	var config = props.config;

	// Clearfix classes

	var breaker = "";
	breaker = index % maxcol == 0 ? ' floatnone floatnone__lg' : "";
	breaker = index % maxcol == 0 ? breaker + ' floatnone__md' : breaker;
	breaker = index % 3 == 0 ? breaker + ' floatnone__sm' : breaker;

	// Type tooltip
	var tooltip = _react2.default.createElement(
		_reactBootstrap.Tooltip,
		{ id: "resource_" + el.id },
		el.Format.title
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
					el.description
				)
			), "/descobrir/detalhes-recurso/" + el.slug, props),
			function () {
				if (addscript && isAuthenticated) {
					return _react2.default.createElement(
						'span',
						{ className: 'list__element--buttons' },
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: "/descobrir/detalhes-recurso/" + el.slug, className: 'cta primary outline small' },
							'Ver Recurso'
						),
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: "/gerirguioes/" + el.id, className: 'cta primary outline small' },
							'Adicionar Guião'
						)
					);
				}

				if ((viewmore || addscript) && (!el.exclusive || isAuthenticated)) {
					return _react2.default.createElement(
						_reactRouter.Link,
						{ to: "/descobrir/detalhes-recurso/" + el.slug, className: 'cta primary outline small' },
						'Ver Recurso'
					);
				} else {
					return _react2.default.createElement(
						_protectedButton2.default,
						{ className: 'cta primary outline small action-btn', target: "/descobrir/detalhes-recurso/" + el.slug },
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
							_react2.default.createElement(_svg2.default, { element: config.formatIcons + "/" + el.Format.Image.name + "." + el.Format.Image.extension, color: '#b4b4b4' })
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
	classColCount: _react.PropTypes.number,
	config: _react.PropTypes.object
};

},{"../../auth/protectedButton":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\auth\\protectedButton.js","../../common/rating":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\common\\rating.js","../../common/svg":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\common\\svg.js","react":"react","react-bootstrap":"react-bootstrap","react-router":"react-router"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\details\\index.js":[function(require,module,exports){
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

						// If allowed, get the favorite
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

},{"../../../containers/comments":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\comments\\index.js","../../../containers/comments/commentForm":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\comments\\commentForm.js","../../../containers/resources/related":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\resources\\related.js","../../common/rating":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\common\\rating.js","../techFile":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\techFile\\index.js","./mediaDisplay":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\details\\mediaDisplay.js","./mediaFooter":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\details\\mediaFooter.js","./scripts":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\details\\scripts.js","react":"react","react-router":"react-router"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\details\\mediaDisplay.js":[function(require,module,exports){
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

},{"react":"react"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\details\\mediaFooter.js":[function(require,module,exports){
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

},{"../../../utils":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\utils\\index.js","../actions/email":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\actions\\email.js","../actions/embed":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\actions\\embed.js","../actions/favorite":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\actions\\favorite.js","../actions/share":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\actions\\share.js","react":"react"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\details\\scripts.js":[function(require,module,exports){
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

},{"react":"react","react-bootstrap":"react-bootstrap"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\highlights.js":[function(require,module,exports){
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

			return _react2.default.createElement(_carousel.AppCarousel, { data: this.props.highlights, settings: settings, isAuthenticated: this.props.auth.isAuthenticated });
		}
	}]);

	return ResourceHighlights;
}(_react.Component);

exports.default = ResourceHighlights;


ResourceHighlights.propTypes = {
	highlights: _react2.default.PropTypes.object.isRequired,
	auth: _react2.default.PropTypes.object.isRequired
};

},{"./carousel":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\carousel.js","react":"react"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\listing.js":[function(require,module,exports){
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

		_this.state = {
			activePage: 1,
			keywords: [],
			order: 0
		};

		//
		//	Event Handlers
		//
		_this.onChangePage = _this.onChangePage.bind(_this);
		_this.onSearchSubmit = _this.onSearchSubmit.bind(_this);
		_this.onListOrder = _this.onListOrder.bind(_this);
		_this.onFilterChange = _this.onFilterChange.bind(_this);

		//
		//	Handle all changes
		//
		_this.requestNewResources = _this.requestNewResources.bind(_this);
		return _this;
	}

	_createClass(ResourcesListing, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			this.props.fetchResources('search').then(function () {
				_this2.setState({ activePage: _this2.props.resources.curPage || 1 });
			});
			this.props.fetchConfig();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			var _state = this.state;
			var activePage = _state.activePage;
			var keywords = _state.keywords;
			var order = _state.order;

			// If there are any changes, get new resources

			if (prevState.activePage && prevState.activePage != activePage || prevState.keywords && prevState.keywords != keywords || prevState.order && prevState.order != order) {
				this.requestNewResources();
			}
		}

		//
		//	REQUEST NEW RESOURCES
		//

	}, {
		key: 'requestNewResources',
		value: function requestNewResources() {
			console.log(this.state);
		}

		// When filters change

	}, {
		key: 'onFilterChange',
		value: function onFilterChange(filters) {
			console.log(filters);
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
			this.setState({
				order: order
			});
		}

		// Search resources by keyword

	}, {
		key: 'onSearchSubmit',
		value: function onSearchSubmit(keywords) {
			this.setState({
				keywords: keywords
			});
		}

		// Alert that user is not authenticated

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
							'Esta listagem pode conter resultados restritos ao utilizador não registado, pelo que aconselhamos que realize a sua autenticação.'
						),
						_react2.default.createElement(
							'div',
							{ className: 'text-center' },
							_react2.default.createElement(
								_loginButton2.default,
								{ className: 'btn btn-warning', location: this.props.location.pathname },
								'Entrar na REDA'
							)
						)
					)
				)
			);
		}

		// Render new resource button according to auth

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
			var resources = this.props.resources;


			if (!resources.data) return null;

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
							_react2.default.createElement(_filters2.default, { onFilterChange: this.onFilterChange }),
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
											resources.total
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
							_react2.default.createElement(_list.ResourcesList, { list: this.props.resources, config: this.props.config.data, maxcol: 3, addscript: true, isAuthenticated: isAuthenticated }),
							_react2.default.createElement(_reactBootstrap.Pagination, {
								prev: true,
								next: true,
								first: true,
								last: true,
								ellipsis: true,
								boundaryLinks: true,
								items: resources.totalPages,
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
	resources: _react.PropTypes.object.isRequired,
	config: _react.PropTypes.object.isRequired
};

},{"../../containers/filters":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\filters\\index.js","../auth/loginButton":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\auth\\loginButton.js","../auth/protectedButton":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\auth\\protectedButton.js","../search/searchBar":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\search\\searchBar.js","./common/list":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\common\\list.js","./common/order":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\common\\order.js","react":"react","react-bootstrap":"react-bootstrap","react-router":"react-router"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\newResource\\newResourceFormFirstPage.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fields = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _reactRouter = require('react-router');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _tags = require('../../common/tags');

var _tags2 = _interopRequireDefault(_tags);

var _radioGroup = require('../../common/radioGroup');

var _radioGroup2 = _interopRequireDefault(_radioGroup);

var _fileInput = require('../../common/fileInput');

var _fileInput2 = _interopRequireDefault(_fileInput);

var _textarea = require('../../common/textarea');

var _textarea2 = _interopRequireDefault(_textarea);

var _validateFirstPage = require('./validateFirstPage');

var _validateFirstPage2 = _interopRequireDefault(_validateFirstPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Components


// Validation


var fields = exports.fields = ['title', 'author', 'email', 'organization', 'keywords', 'format', 'file', 'embed', 'link', 'duration', 'access', 'techResources', 'description', 'exclusive', 'isOnline'];

/**
 * FORM FIRST PAGE
 */

var NewResourceFormFirstPage = function (_Component) {
  _inherits(NewResourceFormFirstPage, _Component);

  function NewResourceFormFirstPage(props) {
    _classCallCheck(this, NewResourceFormFirstPage);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NewResourceFormFirstPage).call(this, props));

    _this.setTags = _this.setTags.bind(_this);
    _this.setFormat = _this.setFormat.bind(_this);
    _this.setAccess = _this.setAccess.bind(_this);
    _this.setFile = _this.setFile.bind(_this);
    _this.onlineChange = _this.onlineChange.bind(_this);
    return _this;
  }

  _createClass(NewResourceFormFirstPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.props.mapProps.fetchFormats();
      this.props.mapProps.fetchAccess().then(function () {
        // Set default to downloadable
        _lodash2.default.forEach(_this2.props.mapProps.access.data, function (mode) {
          mode.title == "Descarregável" && _this2.props.fields.access.onChange(mode);
        });
      });
    }

    // On change TAGS

  }, {
    key: 'setTags',
    value: function setTags(tags) {
      this.props.fields.keywords.onChange(tags);
    }

    // On change FORMATS

  }, {
    key: 'setFormat',
    value: function setFormat(format) {
      var _this3 = this;

      this.props.fields.format.onChange(format);

      // Set access mode
      _lodash2.default.forEach(this.props.mapProps.access.data, function (mode) {
        // If video, is online
        if (format.type == "video" && mode.title == "Online") {
          _this3.props.fields.access.onChange(mode);
          // If not, and if resource is not online, set to downloadable
        } else if (format.type != "video" && !_this3.props.fields.isOnline.value && mode.title == "Descarregável") {
            _this3.props.fields.access.onChange(mode);
          }
      });
    }

    // On change FORMATS

  }, {
    key: 'setAccess',
    value: function setAccess(access) {
      this.props.fields.access.onChange(access);
    }

    // On change FILE

  }, {
    key: 'setFile',
    value: function setFile(file) {
      this.props.fields.file.onChange(file);
    }

    // On change FILE

  }, {
    key: 'onlineChange',
    value: function onlineChange(e) {
      var _this4 = this;

      var _props$fields = this.props.fields;
      var isOnline = _props$fields.isOnline;
      var format = _props$fields.format;


      this.props.fields.isOnline.onChange(e);

      // Set access mode based on resource location
      if (this.props.mapProps.access && this.props.mapProps.access.data != null) {
        _lodash2.default.forEach(this.props.mapProps.access.data, function (mode) {
          // If is online and this mode is online
          if (isOnline.value && mode.title == "Online") {
            _this4.props.fields.access.onChange(mode);
            // If is not online and is a file, set to downloadable
          } else if (!isOnline.value && mode.title == "Descarregável") {
              _this4.props.fields.access.onChange(mode);
            }
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var _props = this.props;
      var _props$fields2 = _props.fields;
      var title = _props$fields2.title;
      var author = _props$fields2.author;
      var email = _props$fields2.email;
      var organization = _props$fields2.organization;
      var keywords = _props$fields2.keywords;
      var file = _props$fields2.file;
      var link = _props$fields2.link;
      var embed = _props$fields2.embed;
      var duration = _props$fields2.duration;
      var format = _props$fields2.format;
      var access = _props$fields2.access;
      var techResources = _props$fields2.techResources;
      var description = _props$fields2.description;
      var exclusive = _props$fields2.exclusive;
      var isOnline = _props$fields2.isOnline;
      var handleSubmit = _props.handleSubmit;


      if (!this.props.mapProps.formats.data || !this.props.mapProps.access.data) {
        return null;
      }

      var formats = this.props.mapProps.formats;
      //console.log(file);

      return _react2.default.createElement(
        'form',
        { onSubmit: handleSubmit, encType: 'multipart/form-data', className: 'form first-page' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 col-sm-6' },
            _react2.default.createElement(
              'h1',
              null,
              'Detalhes'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 col-sm-6 switch-container text-right' },
            _react2.default.createElement(
              'span',
              null,
              'Reservado a docentes'
            ),
            _react2.default.createElement(
              'label',
              { className: 'switch' },
              _react2.default.createElement('input', _extends({ type: 'checkbox' }, exclusive)),
              _react2.default.createElement('div', { className: 'slider round' })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 col-sm-3' },
            _react2.default.createElement(
              'label',
              { className: 'input-title' },
              'Título*'
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group ' + (title.touched && title.invalid ? 'has-error' : '') },
              _react2.default.createElement('input', _extends({ type: 'text', className: 'form-control', placeholder: 'Nome do seu recurso' }, title)),
              title.touched && title.error && _react2.default.createElement(
                'div',
                { className: 'text-danger' },
                title.error
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 col-sm-3' },
            _react2.default.createElement(
              'label',
              { className: 'input-title' },
              'Autor*'
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group ' + (author.touched && author.invalid ? 'has-error' : '') },
              _react2.default.createElement('input', _extends({ type: 'text', className: 'form-control', placeholder: 'Nome do autor' }, author)),
              author.touched && author.error && _react2.default.createElement(
                'div',
                { className: 'text-danger' },
                author.error
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 col-sm-3' },
            _react2.default.createElement(
              'label',
              { className: 'input-title' },
              'Email*'
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group ' + (email.touched && email.invalid ? 'has-error' : '') },
              _react2.default.createElement('input', _extends({ type: 'text', className: 'form-control', placeholder: 'Email do núcleo ou docente' }, email)),
              email.touched && email.error && _react2.default.createElement(
                'div',
                { className: 'text-danger' },
                email.error
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 col-sm-3' },
            _react2.default.createElement(
              'label',
              { className: 'input-title' },
              'Escola/Organização*'
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group ' + (organization.touched && organization.invalid ? 'has-error' : '') },
              _react2.default.createElement('input', _extends({ type: 'text', className: 'form-control', placeholder: 'Nome da sua escola/organização' }, organization)),
              organization.touched && organization.error && _react2.default.createElement(
                'div',
                { className: 'text-danger' },
                organization.error
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 col-sm-6' },
            _react2.default.createElement(
              'label',
              { className: 'input-title' },
              'Palavras-Chave*'
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group ' + (keywords.touched && keywords.invalid ? 'has-error' : '') },
              _react2.default.createElement(_tags2.default, { setTags: this.setTags, tags: keywords.value }),
              keywords.touched && keywords.error && _react2.default.createElement(
                'div',
                { className: 'text-danger' },
                keywords.error
              ),
              _react2.default.createElement(
                'small',
                null,
                'Deve escolher entre 1 e 5 palavras'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 col-sm-6' },
            _react2.default.createElement(
              'label',
              { className: 'input-title' },
              'Formato*'
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group ' + (format.touched && format.invalid ? 'has-error' : '') },
              _react2.default.createElement(_radioGroup2.default, { list: formats.data, name: 'formats', setRadio: this.setFormat, checked: format.value }),
              format.touched && format.error && _react2.default.createElement(
                'div',
                { className: 'text-danger' },
                format.error
              )
            )
          )
        ),
        function () {
          if (format.value.type == 'video') {
            return _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-xs-12 col-sm-6' },
                _react2.default.createElement(
                  'label',
                  { className: 'input-title' },
                  'Duração do vídeo*'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'form-group ' + (duration.touched && duration.invalid ? 'has-error' : '') },
                  _react2.default.createElement('input', _extends({ type: 'text', className: 'form-control', name: 'video-duration', placeholder: 'ex: 01:02:00s' }, duration)),
                  duration.touched && duration.error && _react2.default.createElement(
                    'div',
                    { className: 'text-danger' },
                    duration.error
                  )
                )
              )
            );
          }
        }(),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 col-sm-6' },
            _react2.default.createElement(
              'label',
              { className: 'input-title' },
              'Localização do recurso*'
            ),
            function () {
              if (format.value.type != 'video') {
                return _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement('input', _extends({ type: 'checkbox', value: 'isOnline', id: 'isOnline' }, isOnline, { onChange: _this5.onlineChange })),
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'isOnline' },
                    'Recurso encontra-se online'
                  )
                );
              }
            }(),
            function () {
              // If it is not online, and it is not a vide, set as a file upload
              if (!isOnline.value && format.value.type != 'video') {
                return _react2.default.createElement(
                  'div',
                  { className: 'form-group ' + ((file.touched || file.dirty) && file.invalid ? 'has-error' : '') },
                  _react2.default.createElement(_fileInput2.default, { setFile: _this5.setFile }),
                  _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                      'small',
                      null,
                      'Tamanho máximo de ficheiro é de 100MB'
                    )
                  ),
                  file.value && !file.error && _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                      'strong',
                      null,
                      'Ficheiro: ',
                      file.value.name,
                      '.',
                      file.value.extension
                    )
                  ),
                  (file.touched || file.dirty) && file.error && _react2.default.createElement(
                    'div',
                    { className: 'text-danger' },
                    file.error
                  )
                );
              } else if (isOnline.value || format.value.type == 'video') {
                // If it is online or is a video, set the link or embed field
                return _react2.default.createElement(
                  'div',
                  { className: 'form-group ' + (link.touched && link.invalid || embed.touched && embed.invalid ? 'has-error' : '') },
                  _react2.default.createElement('input', _extends({ type: 'text', className: 'form-control', name: 'link', placeholder: 'Indique o endereço do recurso' }, link)),
                  link.touched && link.error && _react2.default.createElement(
                    'div',
                    { className: 'text-danger' },
                    link.error
                  ),
                  _react2.default.createElement(
                    'small',
                    null,
                    'ou'
                  ),
                  _react2.default.createElement('input', _extends({ type: 'text', className: 'form-control', name: 'embed-video', placeholder: 'Insira o código de incorporação' }, embed)),
                  embed.touched && embed.error && _react2.default.createElement(
                    'div',
                    { className: 'text-danger' },
                    embed.error
                  )
                );
              }
            }()
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 col-sm-6' },
            _react2.default.createElement(
              'label',
              { className: 'input-title' },
              'Modo de acesso*'
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group ' + (access.touched && access.invalid ? 'has-error' : '') },
              _react2.default.createElement(_radioGroup2.default, { list: this.props.mapProps.access.data, name: 'access', setRadio: this.setAccess, checked: access.value }),
              access.touched && access.error && _react2.default.createElement(
                'div',
                { className: 'text-danger' },
                access.error
              )
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
              'label',
              { className: 'input-title' },
              'Recursos Técnicos*'
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group ' + (techResources.touched && techResources.invalid ? 'has-error' : '') },
              _react2.default.createElement(_textarea2.default, _extends({ max: '300', min: '20', className: 'form-control', placeholder: 'Este recurso requer a utilização de...', initVal: techResources.value }, techResources)),
              techResources.touched && techResources.error && _react2.default.createElement(
                'div',
                { className: 'text-danger' },
                techResources.error
              )
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
              'label',
              { className: 'input-title' },
              'Descrição*'
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group ' + (description.touched && description.invalid ? 'has-error' : '') },
              _react2.default.createElement(_textarea2.default, _extends({ max: '300', min: '20', className: 'form-control', placeholder: 'Descreva este recurso sucintamente', initVal: description.value }, description)),
              description.touched && description.error && _react2.default.createElement(
                'div',
                { className: 'text-danger' },
                description.error
              )
            )
          )
        ),
        _react2.default.createElement(
          'footer',
          { className: 'form-buttons' },
          _react2.default.createElement(
            'button',
            { type: 'submit', className: 'cta primary' },
            'Continuar'
          ),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/painel', className: 'cta primary no-bg' },
            'Cancelar'
          )
        )
      );
    }
  }]);

  return NewResourceFormFirstPage;
}(_react.Component);

NewResourceFormFirstPage.propTypes = {
  fields: _react.PropTypes.object.isRequired,
  handleSubmit: _react.PropTypes.func.isRequired
};

exports.default = (0, _reduxForm.reduxForm)({
  form: 'newResource', // <------ same form name
  fields: fields, // <------ only fields on this page
  destroyOnUnmount: false, // <------ preserve form data
  validate: _validateFirstPage2.default // <------ only validates the fields on this page
}, function (state) {
  return {
    initialValues: {
      exclusive: true,
      isOnline: false
    }
  };
})(NewResourceFormFirstPage);

},{"../../common/fileInput":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\common\\fileInput.js","../../common/radioGroup":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\common\\radioGroup.js","../../common/tags":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\common\\tags.js","../../common/textarea":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\common\\textarea.js","./validateFirstPage":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\newResource\\validateFirstPage.js","lodash":"lodash","react":"react","react-router":"react-router","redux-form":"redux-form"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\newResource\\newResourceFormSecondPage.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fields = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _reactRouter = require('react-router');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _radioGroup = require('../../common/radioGroup');

var _radioGroup2 = _interopRequireDefault(_radioGroup);

var _textarea = require('../../common/textarea');

var _textarea2 = _interopRequireDefault(_textarea);

var _reactCheckboxGroup = require('react-checkbox-group');

var _reactCheckboxGroup2 = _interopRequireDefault(_reactCheckboxGroup);

var _validateSecondPage = require('./validateSecondPage');

var _validateSecondPage2 = _interopRequireDefault(_validateSecondPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Components


// Validation


var fields = exports.fields = ['title', 'author', 'email', 'organization', 'keywords', 'format', 'file', 'embed', 'link', 'access', 'techResources', 'description', 'exclusive', 'isOnline', 'subjects', 'domains', 'years', 'language', 'op_proposal', 'accept_terms', 'hasDomains'];
// ^^ All fields on last form

var NewResourceFormSecondPage = function (_Component) {
  _inherits(NewResourceFormSecondPage, _Component);

  function NewResourceFormSecondPage(props) {
    _classCallCheck(this, NewResourceFormSecondPage);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NewResourceFormSecondPage).call(this, props));

    _this.renderSubjects = _this.renderSubjects.bind(_this);
    _this.renderYears = _this.renderYears.bind(_this);

    _this.setSubject = _this.setSubject.bind(_this);
    _this.setDomains = _this.setDomains.bind(_this);
    _this.setYears = _this.setYears.bind(_this);
    _this.setLanguage = _this.setLanguage.bind(_this);

    _this.domainsOfSubject = _this.domainsOfSubject.bind(_this);
    return _this;
  }

  _createClass(NewResourceFormSecondPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.mapProps.fetchSubjects();
      this.props.mapProps.fetchDomains();
      this.props.mapProps.fetchLanguages();
      this.props.mapProps.fetchYears();
      this.props.mapProps.fetchTerms();
    }

    // On change SUBJECTS

  }, {
    key: 'setSubject',
    value: function setSubject(group) {
      this.props.fields.domains.onChange([]);
      this.props.fields.subjects.onChange(group);
    }

    // On change YEARS

  }, {
    key: 'setYears',
    value: function setYears(group) {
      this.props.fields.years.onChange(group);
    }

    // On change YEARS

  }, {
    key: 'setDomains',
    value: function setDomains(group) {
      this.props.fields.domains.onChange(group);
    }

    // On change LANGUAGES

  }, {
    key: 'setLanguage',
    value: function setLanguage(language) {
      this.props.fields.language.onChange(language);
    }

    // Render subjects list

  }, {
    key: 'renderSubjects',
    value: function renderSubjects() {
      var _this2 = this;

      var subjects = this.props.fields.subjects;

      return _react2.default.createElement(
        _reactCheckboxGroup2.default,
        {
          name: 'subjects',
          value: subjects.value,
          onChange: this.setSubject
        },
        function (Checkbox) {
          return _react2.default.createElement(
            'div',
            { className: 'row' },
            _lodash2.default.sortBy(_this2.props.mapProps.subjects.data, 'title').map(function (item, index) {
              return _react2.default.createElement(
                'div',
                { key: "subject-" + item.id, className: 'col-xs-6' },
                _react2.default.createElement(Checkbox, { value: item.id, id: "subject-" + item.id }),
                _react2.default.createElement(
                  'label',
                  { htmlFor: "subject-" + item.id },
                  item.title
                )
              );
            })
          );
        }
      );
    }

    // Render subjects list

  }, {
    key: 'renderYears',
    value: function renderYears() {
      var _this3 = this;

      var years = this.props.fields.years;

      return _react2.default.createElement(
        _reactCheckboxGroup2.default,
        {
          name: 'years',
          value: years.value,
          onChange: this.setYears
        },
        function (Checkbox) {
          return _react2.default.createElement(
            'div',
            { className: 'row' },
            _lodash2.default.sortBy(_this3.props.mapProps.years.data, 'title').map(function (item, index) {
              return _react2.default.createElement(
                'div',
                { key: "year-" + item.id, className: 'col-xs-6' },
                _react2.default.createElement(Checkbox, { value: item.id, id: "year-" + item.id }),
                _react2.default.createElement(
                  'label',
                  { htmlFor: "year-" + item.id },
                  item.title
                )
              );
            })
          );
        }
      );
    }

    // Render domains by subjects

  }, {
    key: 'renderDomains',
    value: function renderDomains() {
      var _this4 = this;

      var _props$fields = this.props.fields;
      var domains = _props$fields.domains;
      var subjects = _props$fields.subjects;

      // Get domains to present

      var totalDomains = _lodash2.default.sortBy(this.domainsOfSubject(), 'title');

      if (!subjects.value || subjects.value.length == 0) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-xs-12' },
          _react2.default.createElement(
            'label',
            { className: 'input-title' },
            'Domínios*'
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group ' + (domains.touched && domains.invalid ? 'has-error' : '') },
            function () {
              if (!totalDomains || totalDomains.length == 0) {
                return _react2.default.createElement('input', _extends({ type: 'text', className: 'form-control', placeholder: 'Indique um domínio' }, domains));
              } else {
                return _react2.default.createElement(
                  _reactCheckboxGroup2.default,
                  {
                    name: 'domains',
                    value: domains.value,
                    onChange: _this4.setDomains
                  },
                  function (Checkbox) {
                    return _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      totalDomains.map(function (item, index) {
                        return _react2.default.createElement(
                          'div',
                          { key: "domains-" + item.id, className: 'col-xs-6 col-sm-3 domains-selection' },
                          _react2.default.createElement(Checkbox, { value: item.id, id: "domains-" + item.id }),
                          _react2.default.createElement(
                            'label',
                            { htmlFor: "domains-" + item.id },
                            item.title
                          )
                        );
                      })
                    );
                  }
                );
              }
            }(),
            domains.touched && domains.error && _react2.default.createElement(
              'div',
              { className: 'text-danger' },
              domains.error
            )
          )
        )
      );
    }

    // Check if domains are in any subject
    // DOMAINS MUST BE PROVIDED WITH THEIR SUBJECTS ASSOCIATED

  }, {
    key: 'domainsOfSubject',
    value: function domainsOfSubject() {
      var subjects = this.props.fields.subjects;
      var domains = this.props.mapProps.domains;

      // Make copy of domains to maintain immutable

      var domainsCopy = _lodash2.default.assign([], domains.data);

      // Are any subjects selected
      if (subjects.value) {
        domainsCopy = _lodash2.default.filter(domainsCopy, function (domain) {
          var exists = false;

          // If domain subjects was selected
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = domain.subjects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var domainSubject = _step.value;

              exists = subjects.value.indexOf(domainSubject.id) >= 0;
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return exists;
        });

        // Avoid returning duplicates
        return _lodash2.default.uniqBy(domainsCopy, 'title');
      }

      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var _props$fields2 = _props.fields;
      var op_proposal = _props$fields2.op_proposal;
      var subjects = _props$fields2.subjects;
      var years = _props$fields2.years;
      var language = _props$fields2.language;
      var accept_terms = _props$fields2.accept_terms;
      var domains = _props$fields2.domains;
      var handleSubmit = _props.handleSubmit;
      var previousPage = _props.previousPage;
      var submitting = _props.submitting;
      var mapProps = this.props.mapProps;


      if (!mapProps.subjects.data || !mapProps.domains.data || !mapProps.years.data || !mapProps.languages.data || !mapProps.terms.data) {
        return null;
      }

      return _react2.default.createElement(
        'form',
        { onSubmit: handleSubmit, className: 'form second-page' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 col-sm-6' },
            _react2.default.createElement(
              'h1',
              null,
              'Metadados'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 col-sm-4' },
            _react2.default.createElement(
              'label',
              { className: 'input-title' },
              'Disciplinas*'
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group ' + (subjects.touched && subjects.invalid ? 'has-error' : '') },
              this.renderSubjects(),
              subjects.touched && subjects.error && _react2.default.createElement(
                'div',
                { className: 'text-danger' },
                subjects.error
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 col-sm-4' },
            _react2.default.createElement(
              'label',
              { className: 'input-title' },
              'Anos*'
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group ' + (years.touched && years.invalid ? 'has-error' : '') },
              this.renderYears(),
              years.touched && years.error && _react2.default.createElement(
                'div',
                { className: 'text-danger' },
                years.error
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 col-sm-4' },
            _react2.default.createElement(
              'label',
              { className: 'input-title' },
              'Idiomas*'
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group ' + (language.touched && language.invalid ? 'has-error' : '') },
              _react2.default.createElement(_radioGroup2.default, { list: mapProps.languages.data, name: 'languagess', setRadio: this.setLanguage, checked: language.value, singleCol: true }),
              language.touched && language.error && _react2.default.createElement(
                'div',
                { className: 'text-danger' },
                language.error
              )
            )
          )
        ),
        this.renderDomains(),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12' },
            _react2.default.createElement(
              'label',
              { className: 'input-title' },
              'Proposta de Operacionalização*'
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group ' + (op_proposal.touched && op_proposal.invalid ? 'has-error' : '') },
              _react2.default.createElement(_textarea2.default, _extends({ max: 800, min: 20, className: 'form-control', placeholder: 'Indique como este recurso pode ser utilizado/operacionalizado', initVal: op_proposal.value }, op_proposal)),
              op_proposal.touched && op_proposal.error && _react2.default.createElement(
                'div',
                { className: 'text-danger' },
                op_proposal.error
              )
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
              'h1',
              null,
              'Termos e Condições'
            ),
            _react2.default.createElement('p', { dangerouslySetInnerHTML: { __html: mapProps.terms.data.acceptance } }),
            _react2.default.createElement(
              'div',
              { className: 'license' },
              _react2.default.createElement(
                'a',
                { rel: 'license', href: 'http://creativecommons.org/licenses/by-sa/4.0/' },
                _react2.default.createElement('img', { alt: 'Licença Creative Commons', src: 'https://i.creativecommons.org/l/by-sa/4.0/88x31.png', className: 'img-responsive' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'terms-conditions' },
              _react2.default.createElement('input', _extends({ type: 'checkbox', value: 'accept_terms', id: 'accept_terms' }, accept_terms)),
              _react2.default.createElement(
                'label',
                { htmlFor: 'accept_terms' },
                'Li e concordo com os “Termos e condições” de submissão.'
              ),
              accept_terms.touched && accept_terms.error && _react2.default.createElement(
                'div',
                { className: 'text-danger' },
                accept_terms.error
              )
            )
          )
        ),
        _react2.default.createElement(
          'footer',
          { className: 'form-buttons' },
          _react2.default.createElement(
            'button',
            { type: 'button', disabled: submitting, onClick: previousPage, className: 'cta primary outline' },
            'Anterior'
          ),
          _react2.default.createElement(
            'button',
            { type: 'submit', disabled: submitting, className: 'cta primary' },
            submitting ? _react2.default.createElement('i', { className: 'fa fa-spinner fa-spin' }) : "",
            ' Criar Recurso'
          ),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/painel', className: 'cta no-bg' },
            'Cancelar'
          )
        )
      );
    }
  }]);

  return NewResourceFormSecondPage;
}(_react.Component);

NewResourceFormSecondPage.propTypes = {
  fields: _react.PropTypes.object.isRequired,
  handleSubmit: _react.PropTypes.func.isRequired,
  previousPage: _react.PropTypes.func.isRequired,
  submitting: _react.PropTypes.bool.isRequired
};

exports.default = (0, _reduxForm.reduxForm)({
  form: 'newResource', // <------ same form name
  fields: fields, // <------ all fields on last wizard page
  destroyOnUnmount: false, // <------ preserve form data
  validate: _validateSecondPage2.default // <------ only validates the fields on this page
})(NewResourceFormSecondPage);

},{"../../common/radioGroup":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\common\\radioGroup.js","../../common/textarea":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\common\\textarea.js","./validateSecondPage":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\newResource\\validateSecondPage.js","lodash":"lodash","react":"react","react-checkbox-group":"react-checkbox-group","react-router":"react-router","redux-form":"redux-form"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\newResource\\validateFirstPage.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var allowedExt = ["gif", "jpeg", "jpg", "png", "rtf", "doc", "docx", "odt", "txt", "mp3", "wav", "wma", "jar", "ggb", "swf", "jnlp"];

var validate = function validate(values) {
  var errors = {};

  // Title
  if (!values.title) {
    errors.title = 'O campo é obrigatório';
  }

  // Author
  if (!values.author) {
    errors.author = 'O campo é obrigatório';
  }

  // Email
  if (!values.email) {
    errors.email = 'O campo é obrigatório';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'E-mail inserido não é válido';
  }

  // Organization
  if (!values.organization) {
    errors.organization = 'O campo é obrigatório';
  }

  // Keywords
  if (!values.keywords) {
    errors.keywords = 'O campo é obrigatório';
  } else if (values.keywords.length > 5) {
    errors.keywords = 'Deve ter entre 1 e 5 palavras-chave';
  }

  // Formats
  if (!values.format) {
    errors.format = 'O campo é obrigatório';
  }

  // File
  if (!values.isOnline && !values.file && values.format && values.format.type != "video") {
    errors.file = 'Campo é obrigatório';
  } else if (!values.isOnline && values.file && values.file.size && values.file.size > 1000000) {
    errors.file = 'Ficheiro não deve exceder os 1 MB';
  } else if (!values.isOnline && values.file && values.file.extension && allowedExt.indexOf(values.file.extension.toLowerCase()) < 0) {
    errors.file = "Extensão ." + values.file.extension + " não é permitida";
  }

  // Duration
  if (values.format && values.format.type == "video" && !values.duration) {
    errors.duration = 'Campo é obrigatório';
  }

  // Embed
  if (values.format && values.format.type == "video" && !values.embed && !values.link) {
    errors.embed = 'Campo é obrigatório';
  }

  // Link
  if (values.isOnline && !values.link && !values.embed) {
    errors.embed = 'Campo é obrigatório';
  }

  // Access modes
  if (!values.access) {
    errors.access = 'O campo é obrigatório';
  }

  // Tech Resources
  if (!values.techResources) {
    errors.techResources = 'O campo é obrigatório';
  } else if (values.techResources.length < 20) {
    errors.techResources = 'Deve ter pelo menos 20 caracteres';
  } else if (values.techResources.length > 300) {
    errors.techResources = 'Apenas deve conter no máximo 300 caracteres';
  }

  // Description
  if (!values.description) {
    errors.description = 'O campo é obrigatório';
  } else if (values.description.length < 20) {
    errors.description = 'Deve ter pelo menos 20 caracteres';
  } else if (values.description.length > 300) {
    errors.description = 'Apenas deve conter no máximo 300 caracteres';
  }

  return errors;
};

exports.default = validate;

},{}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\newResource\\validateSecondPage.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var validate = function validate(values) {
  var errors = {};

  // Subjects
  if (!values.subjects || values.subjects.length == 0) {
    errors.subjects = 'Campo é obrigatório';
  }

  // Domains
  if (!values.domains || values.domains.length == 0) {
    errors.domains = 'Campo é obrigatório';
  }

  // Years
  if (!values.years || values.years.length == 0) {
    errors.years = 'Campo é obrigatório';
  }

  // Languages
  if (!values.language) {
    errors.language = 'Campo é obrigatório';
  }

  // Op Proposal
  if (!values.op_proposal) {
    errors.op_proposal = 'O campo é obrigatório';
  } else if (values.op_proposal.length < 20) {
    errors.op_proposal = 'Deve ter pelo menos 20 caracteres';
  } else if (values.op_proposal.length > 800) {
    errors.op_proposal = 'Apenas deve conter no máximo 800 caracteres';
  }

  // Accepted terms
  if (!values.accept_terms) {
    errors.accept_terms = 'Deve aceitar os termos e condições para criar o recurso';
  }

  return errors;
};

exports.default = validate;

},{}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\recent.js":[function(require,module,exports){
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
			this.props.fetchResources('recent');
			this.props.fetchConfig();
		}
	}, {
		key: 'render',
		value: function render() {
			if (!this.props.resources.data || !this.props.resources.fetched) return null;

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
					_react2.default.createElement(_list.ResourcesList, { list: this.props.resources, config: this.props.config.data, maxcol: 4, viewmore: true, isAuthenticated: isAuthenticated })
				)
			);
		}
	}]);

	return RecentResources;
}(_react.Component);

exports.default = RecentResources;


RecentResources.propTypes = {
	resources: _react2.default.PropTypes.object.isRequired,
	config: _react2.default.PropTypes.object.isRequired
};

},{"./common/list":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\common\\list.js","react":"react"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\related.js":[function(require,module,exports){
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
			this.props.fetchConfig();
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
					_react2.default.createElement(_list.ResourcesList, { list: this.props.relatedResources, config: this.props.config.data, maxcol: 3, viewmore: true, isAuthenticated: isAuthenticated })
				)
			);
		}
	}]);

	return RecentResources;
}(_react.Component);

exports.default = RecentResources;


RecentResources.propTypes = {
	relatedResources: _react2.default.PropTypes.object.isRequired,
	origin: _react2.default.PropTypes.object.isRequired,
	config: _react2.default.PropTypes.object.isRequired
};

},{"./common/list":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\common\\list.js","react":"react"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\techFile\\index.js":[function(require,module,exports){
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

},{"react":"react"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\scripts\\common\\domains.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCheckboxGroup = require('react-checkbox-group');

var _reactCheckboxGroup2 = _interopRequireDefault(_reactCheckboxGroup);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DomainsList = function (_Component) {
	_inherits(DomainsList, _Component);

	function DomainsList(props) {
		_classCallCheck(this, DomainsList);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DomainsList).call(this, props));

		_this.state = {
			scriptDomains: null
		};
		return _this;
	}

	_createClass(DomainsList, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			this.setState({
				scriptDomains: nextProps.script.domains.value
			});
		}
	}, {
		key: 'setDomains',
		value: function setDomains(index, group) {
			this.props.setDomains(index, group);
		}

		// Check if domains are in any subject
		// DOMAINS MUST BE PROVIDED WITH THEIR SUBJECTS ASSOCIATED

	}, {
		key: 'domainsOfSubject',
		value: function domainsOfSubject(script, domains) {

			// Make copy of domains to maintain immutable
			var domainsCopy = _lodash2.default.assign([], domains.data);

			// Are any subjects selected
			if (script.subjects.value) {
				domainsCopy = _lodash2.default.filter(domainsCopy, function (domain) {
					var exists = false;

					// If domain subjects was selected
					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;

					try {
						for (var _iterator = domain.subjects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var domainSubject = _step.value;

							exists = script.subjects.value.indexOf(domainSubject.id) >= 0;
						}
					} catch (err) {
						_didIteratorError = true;
						_iteratorError = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
							}
						} finally {
							if (_didIteratorError) {
								throw _iteratorError;
							}
						}
					}

					return exists;
				});

				// Avoid returning duplicates
				return _lodash2.default.uniqBy(domainsCopy, 'title');
			}

			return null;
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props;
			var script = _props.script;
			var scriptIndex = _props.scriptIndex;
			var setDomains = _props.setDomains;
			var domains = _props.domains;

			// Get domains to present

			var totalDomains = _lodash2.default.sortBy(this.domainsOfSubject(script, domains), 'title');
			if (!script.subjects.value || script.subjects.value.length == 0) {
				return null;
			}

			return _react2.default.createElement(
				'div',
				{ className: 'row' },
				_react2.default.createElement(
					'div',
					{ className: 'col-xs-12' },
					_react2.default.createElement(
						'label',
						{ className: 'input-title' },
						'Domínios*'
					),
					_react2.default.createElement(
						'div',
						{ className: 'form-group ' + (script.domains.touched && script.domains.invalid ? 'has-error' : '') },
						function () {
							if (!totalDomains || totalDomains.length == 0) {
								return _react2.default.createElement('input', _extends({ type: 'text', className: 'form-control', placeholder: 'Indique um domínio' }, script.domains));
							} else {
								return _react2.default.createElement(
									_reactCheckboxGroup2.default,
									{
										name: "domains-checkbox-" + scriptIndex,
										value: _this2.state.scriptDomains,
										onChange: _this2.setDomains.bind(_this2, scriptIndex)
									},
									function (Checkbox) {
										return _react2.default.createElement(
											'div',
											{ className: 'row' },
											totalDomains.map(function (item, index) {
												return _react2.default.createElement(
													'div',
													{ key: "domains-" + scriptIndex + "-" + item.id, className: 'col-xs-6 col-sm-3 domains-selection' },
													_react2.default.createElement(Checkbox, { value: item.id, id: "domains-" + scriptIndex + "-" + item.id }),
													_react2.default.createElement(
														'label',
														{ htmlFor: "domains-" + scriptIndex + "-" + item.id },
														item.title
													)
												);
											})
										);
									}
								);
							}
						}(),
						script.domains.touched && script.domains.error && _react2.default.createElement(
							'div',
							{ className: 'text-danger' },
							script.domains.error
						)
					)
				)
			);
		}
	}]);

	return DomainsList;
}(_react.Component);

exports.default = DomainsList;


DomainsList.propTypes = {
	script: _react.PropTypes.object.isRequired,
	scriptIndex: _react.PropTypes.number.isRequired,
	setDomains: _react.PropTypes.func.isRequired,
	domains: _react.PropTypes.object.isRequired
};

},{"lodash":"lodash","react":"react","react-checkbox-group":"react-checkbox-group"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\scripts\\newScriptForm.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fields = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _reactRouter = require('react-router');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _radioGroup = require('../common/radioGroup');

var _radioGroup2 = _interopRequireDefault(_radioGroup);

var _textarea = require('../common/textarea');

var _textarea2 = _interopRequireDefault(_textarea);

var _collapse = require('../common/collapse');

var _collapse2 = _interopRequireDefault(_collapse);

var _reactCheckboxGroup = require('react-checkbox-group');

var _reactCheckboxGroup2 = _interopRequireDefault(_reactCheckboxGroup);

var _domains = require('./common/domains');

var _domains2 = _interopRequireDefault(_domains);

var _validate = require('./validate');

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Components


// Validation


var fields = exports.fields = ['scripts[].title', 'scripts[].email', 'scripts[].organization', 'scripts[].description', 'scripts[].subjects', 'scripts[].domains', 'scripts[].years', 'scripts[].op_proposal', 'accept_terms', 'scripts[].hasDomains'];
// ^^ All fields on last form

var NewScriptForm = function (_Component) {
  _inherits(NewScriptForm, _Component);

  function NewScriptForm(props) {
    _classCallCheck(this, NewScriptForm);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NewScriptForm).call(this, props));

    _this.renderSubjects = _this.renderSubjects.bind(_this);
    _this.renderYears = _this.renderYears.bind(_this);

    _this.setDomains = _this.setDomains.bind(_this);
    return _this;
  }

  _createClass(NewScriptForm, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.mapProps.fetchSubjects();
      this.props.mapProps.fetchDomains();
      this.props.mapProps.fetchYears();
      this.props.mapProps.fetchTerms();

      this.props.fields.scripts.addField();

      /* FOR REFERENCE */
      /*children.addField({     // pushes child field with initial values onto the end of the array
        name: 'Bobby Tables',
        age: 13,
        awards: [ 'Input Sanitation', 'Best XKCD Meme' ]
      })*/
    }

    // On change SUBJECTS

  }, {
    key: 'setSubject',
    value: function setSubject(scriptIndex, group) {
      this.props.fields.scripts[scriptIndex].domains.onChange([]);
      this.props.fields.scripts[scriptIndex].subjects.onChange(group);
    }

    // On change YEARS

  }, {
    key: 'setYears',
    value: function setYears(scriptIndex, group) {
      this.props.fields.scripts[scriptIndex].years.onChange(group);
    }

    // On change YEARS

  }, {
    key: 'setDomains',
    value: function setDomains(scriptIndex, group) {
      this.props.fields.scripts[scriptIndex].domains.onChange(group);
    }

    // Render subjects list

  }, {
    key: 'renderSubjects',
    value: function renderSubjects(script, scriptIndex) {
      var _this2 = this;

      return _react2.default.createElement(
        _reactCheckboxGroup2.default,
        {
          name: "subjects-checkbox-" + scriptIndex,
          value: script.subjects.value,
          onChange: this.setSubject.bind(this, scriptIndex)
        },
        function (Checkbox) {
          return _react2.default.createElement(
            'div',
            { className: 'row' },
            _lodash2.default.sortBy(_this2.props.mapProps.subjects.data, 'title').map(function (item, index) {
              return _react2.default.createElement(
                'div',
                { key: "subject-" + scriptIndex + "-" + item.id, className: 'col-xs-6' },
                _react2.default.createElement(Checkbox, { value: item.id, id: "subject-" + scriptIndex + "-" + item.id }),
                _react2.default.createElement(
                  'label',
                  { htmlFor: "subject-" + scriptIndex + "-" + item.id },
                  item.title
                )
              );
            })
          );
        }
      );
    }

    // Render subjects list

  }, {
    key: 'renderYears',
    value: function renderYears(script, scriptIndex) {
      var _this3 = this;

      return _react2.default.createElement(
        _reactCheckboxGroup2.default,
        {
          name: "years-checkbox-" + scriptIndex,
          value: script.years.value,
          onChange: this.setYears.bind(this, scriptIndex)
        },
        function (Checkbox) {
          return _react2.default.createElement(
            'div',
            { className: 'row' },
            _lodash2.default.sortBy(_this3.props.mapProps.years.data, 'title').map(function (item, index) {

              return _react2.default.createElement(
                'div',
                { key: "year-" + scriptIndex + "-" + item.id, className: 'col-xs-6' },
                _react2.default.createElement(Checkbox, { value: item.id, id: "year-" + scriptIndex + "-" + item.id }),
                _react2.default.createElement(
                  'label',
                  { htmlFor: "year-" + scriptIndex + "-" + item.id },
                  item.title
                )
              );
            })
          );
        }
      );
    }

    // Render domains by subjects

  }, {
    key: 'renderDomains',
    value: function renderDomains(script, scriptIndex) {
      return _react2.default.createElement(_domains2.default, { script: script, scriptIndex: scriptIndex, setDomains: this.setDomains, domains: this.props.mapProps.domains });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props;
      var _props$fields = _props.fields;
      var scripts = _props$fields.scripts;
      var accept_terms = _props$fields.accept_terms;
      var handleSubmit = _props.handleSubmit;
      var previousPage = _props.previousPage;
      var submitting = _props.submitting;
      var mapProps = this.props.mapProps;


      if (!mapProps.subjects.data || !mapProps.domains.data || !mapProps.years.data || !mapProps.terms.data) {
        return null;
      }

      return _react2.default.createElement(
        'form',
        { onSubmit: handleSubmit, className: 'form script__form' },
        !scripts.length && _react2.default.createElement(
          'div',
          { className: 'alert alert-warning' },
          'Não existem guiões'
        ),
        scripts.map(function (script, index) {
          return _react2.default.createElement(
            'div',
            { key: index },
            _react2.default.createElement(
              _collapse2.default,
              { title: "Guião nº " + (index + 1), className: 'cta primary script__form--collapsible', iconOpen: 'fa fa-chevron-up', iconClosed: 'fa fa-chevron-down', deleteEl: function deleteEl() {
                  return scripts.removeField(index);
                }, deleteIcon: 'fa fa-trash-o', isOpen: true },
              _react2.default.createElement(
                'section',
                null,
                _react2.default.createElement(
                  'div',
                  { className: 'row' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-xs-12 col-sm-6' },
                    _react2.default.createElement(
                      'h1',
                      null,
                      'Detalhes'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'row' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-xs-12 col-sm-3' },
                    _react2.default.createElement(
                      'label',
                      { className: 'input-title' },
                      'Título*'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'form-group ' + (script.title.touched && script.title.invalid ? 'has-error' : '') },
                      _react2.default.createElement('input', _extends({ type: 'text', className: 'form-control', placeholder: 'Nome do seu guião' }, script.title)),
                      script.title.touched && script.title.error && _react2.default.createElement(
                        'div',
                        { className: 'text-danger' },
                        script.title.error
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-xs-12 col-sm-3' },
                    _react2.default.createElement(
                      'label',
                      { className: 'input-title' },
                      'Email*'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'form-group ' + (script.email.touched && script.email.invalid ? 'has-error' : '') },
                      _react2.default.createElement('input', _extends({ type: 'text', className: 'form-control', placeholder: 'Email do núcleo ou docente' }, script.email)),
                      script.email.touched && script.email.error && _react2.default.createElement(
                        'div',
                        { className: 'text-danger' },
                        script.email.error
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-xs-12 col-sm-3' },
                    _react2.default.createElement(
                      'label',
                      { className: 'input-title' },
                      'Escola/Organização*'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'form-group ' + (script.organization.touched && script.organization.invalid ? 'has-error' : '') },
                      _react2.default.createElement('input', _extends({ type: 'text', className: 'form-control', placeholder: 'Nome da sua escola/organização' }, script.organization)),
                      script.organization.touched && script.organization.error && _react2.default.createElement(
                        'div',
                        { className: 'text-danger' },
                        script.organization.error
                      )
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
                      'label',
                      { className: 'input-title' },
                      'Descrição*'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'form-group ' + (script.description.touched && script.description.invalid ? 'has-error' : '') },
                      _react2.default.createElement(_textarea2.default, _extends({ max: '300', min: '20', className: 'form-control', placeholder: 'Descreva este guião sucintamente', initVal: script.description.value }, script.description)),
                      script.description.touched && script.description.error && _react2.default.createElement(
                        'div',
                        { className: 'text-danger' },
                        script.description.error
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'section',
                null,
                _react2.default.createElement(
                  'div',
                  { className: 'row' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-xs-12 col-sm-6' },
                    _react2.default.createElement(
                      'h1',
                      null,
                      'Metadados'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'row' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-xs-12 col-sm-6' },
                    _react2.default.createElement(
                      'label',
                      { className: 'input-title' },
                      'Disciplinas*'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'form-group ' + (script.subjects.touched && script.subjects.invalid ? 'has-error' : '') },
                      _this4.renderSubjects(script, index),
                      script.subjects.touched && script.subjects.error && _react2.default.createElement(
                        'div',
                        { className: 'text-danger' },
                        script.subjects.error
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-xs-12 col-sm-6' },
                    _react2.default.createElement(
                      'label',
                      { className: 'input-title' },
                      'Anos*'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'form-group ' + (script.years.touched && script.years.invalid ? 'has-error' : '') },
                      _this4.renderYears(script, index),
                      script.years.touched && script.years.error && _react2.default.createElement(
                        'div',
                        { className: 'text-danger' },
                        script.years.error
                      )
                    )
                  )
                ),
                _this4.renderDomains(script, index),
                _react2.default.createElement(
                  'div',
                  { className: 'row' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-xs-12' },
                    _react2.default.createElement(
                      'label',
                      { className: 'input-title' },
                      'Proposta de Operacionalização*'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'form-group ' + (script.op_proposal.touched && script.op_proposal.invalid ? 'has-error' : '') },
                      _react2.default.createElement(_textarea2.default, _extends({ max: 800, min: 20, className: 'form-control', placeholder: 'Indique como este recurso pode ser utilizado/operacionalizado', initVal: script.op_proposal.value }, script.op_proposal)),
                      script.op_proposal.touched && script.op_proposal.error && _react2.default.createElement(
                        'div',
                        { className: 'text-danger' },
                        script.op_proposal.error
                      )
                    )
                  )
                )
              )
            )
          );
        }),
        _react2.default.createElement(
          'button',
          { type: 'button', className: 'cta primary more-script', onClick: function onClick() {
              scripts.addField();
            } },
          _react2.default.createElement('i', { className: 'fa fa-plus' }),
          ' Novo guião'
        ),
        _react2.default.createElement(
          'section',
          { className: 'terms-conditions' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12' },
              _react2.default.createElement(
                'h1',
                null,
                'Termos e Condições'
              ),
              _react2.default.createElement('p', { dangerouslySetInnerHTML: { __html: mapProps.terms.data.acceptance } }),
              _react2.default.createElement(
                'div',
                { className: 'license' },
                _react2.default.createElement(
                  'a',
                  { rel: 'license', href: 'http://creativecommons.org/licenses/by-sa/4.0/' },
                  _react2.default.createElement('img', { alt: 'Licença Creative Commons', src: 'https://i.creativecommons.org/l/by-sa/4.0/88x31.png', className: 'img-responsive' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'buttons' },
                _react2.default.createElement('input', _extends({ type: 'checkbox', value: 'accept_terms', id: 'accept_terms' }, accept_terms)),
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'accept_terms' },
                  'Li e concordo com os “Termos e condições” de submissão.'
                ),
                accept_terms.touched && accept_terms.error && _react2.default.createElement(
                  'div',
                  { className: 'text-danger' },
                  accept_terms.error
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'footer',
          { className: 'form-buttons' },
          _react2.default.createElement(
            'button',
            { type: 'submit', disabled: submitting, className: 'cta primary' },
            submitting ? _react2.default.createElement('i', { className: 'fa fa-spinner fa-spin' }) : "",
            ' Submeter Guiões'
          ),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/painel', className: 'cta no-bg' },
            'Cancelar'
          )
        )
      );
    }
  }]);

  return NewScriptForm;
}(_react.Component);

NewScriptForm.propTypes = {
  fields: _react.PropTypes.object.isRequired,
  handleSubmit: _react.PropTypes.func.isRequired,
  submitting: _react.PropTypes.bool.isRequired
};

exports.default = (0, _reduxForm.reduxForm)({
  form: 'newScript', // <------ same form name
  fields: fields, // <------ all fields on last wizard page
  validate: _validate2.default // <------ only validates the fields on this page
})(NewScriptForm);

},{"../common/collapse":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\common\\collapse.js","../common/radioGroup":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\common\\radioGroup.js","../common/textarea":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\common\\textarea.js","./common/domains":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\scripts\\common\\domains.js","./validate":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\scripts\\validate.js","lodash":"lodash","react":"react","react-checkbox-group":"react-checkbox-group","react-router":"react-router","redux-form":"redux-form"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\scripts\\validate.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var requireFields = function requireFields() {
  for (var _len = arguments.length, names = Array(_len), _key = 0; _key < _len; _key++) {
    names[_key] = arguments[_key];
  }

  return function (data) {
    return names.reduce(function (errors, name) {
      if (!data[name]) {
        errors[name] = 'Required';
      }
      return errors;
    }, {});
  };
};

var validateScript = function validateScript(values) {
  var errors = {};

  // Title
  if (!values.title) {
    errors.title = 'O campo é obrigatório';
  }

  // Email
  if (!values.email) {
    errors.email = 'O campo é obrigatório';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'E-mail inserido não é válido';
  }

  // Organization
  if (!values.organization) {
    errors.organization = 'O campo é obrigatório';
  }

  // Subjects
  if (!values.subjects || values.subjects.length == 0) {
    errors.subjects = 'Campo é obrigatório';
  }

  // Domains
  if (!values.domains || values.domains.length == 0) {
    errors.domains = 'Campo é obrigatório';
  }

  // Years
  if (!values.years || values.years.length == 0) {
    errors.years = 'Campo é obrigatório';
  }

  // Op Proposal
  if (!values.description) {
    errors.description = 'O campo é obrigatório';
  } else if (values.description.length < 20) {
    errors.description = 'Deve ter pelo menos 20 caracteres';
  } else if (values.description.length > 300) {
    errors.description = 'Apenas deve conter no máximo 300 caracteres';
  }

  // Op Proposal
  if (!values.op_proposal) {
    errors.op_proposal = 'O campo é obrigatório';
  } else if (values.op_proposal.length < 20) {
    errors.op_proposal = 'Deve ter pelo menos 20 caracteres';
  } else if (values.op_proposal.length > 800) {
    errors.op_proposal = 'Apenas deve conter no máximo 300 caracteres';
  }

  return errors;
};

var validateScriptForm = function validateScriptForm(data) {
  var errors = {};

  // Accepted terms
  if (!data.accept_terms) {
    errors.accept_terms = 'Deve aceitar os termos e condições para criar o recurso';
  }

  errors.scripts = data.scripts.map(validateScript);
  return errors;
};

exports.default = validateScriptForm;

},{}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\search\\searchBar.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tags = require('../common/tags');

var _tags2 = _interopRequireDefault(_tags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Components


var SearchBar = function (_Component) {
  _inherits(SearchBar, _Component);

  function SearchBar(props) {
    _classCallCheck(this, SearchBar);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SearchBar).call(this, props));

    _this.state = { keywords: [] };
    _this.changeKeyword = _this.changeKeyword.bind(_this);
    _this.onSubmitForm = _this.onSubmitForm.bind(_this);
    return _this;
  }

  _createClass(SearchBar, [{
    key: 'changeKeyword',
    value: function changeKeyword(tags) {
      this.setState({
        keyword: tags
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
        _react2.default.createElement(_tags2.default, { setTags: this.changeKeyword, tags: this.state.keywords, className: 'tags-search', placeholder: 'Palavras-chave' }),
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

},{"../common/tags":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\common\\tags.js","react":"react"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\search\\searchForm.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tags = require('../common/tags');

var _tags2 = _interopRequireDefault(_tags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Components


var SearchForm = function (_Component) {
	_inherits(SearchForm, _Component);

	function SearchForm(props) {
		_classCallCheck(this, SearchForm);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SearchForm).call(this, props));

		_this.state = {
			keywords: [],
			subject: "0",
			domain: "0",
			format: "0",
			year: "0"
		};

		_this.onFormSubmit = _this.onFormSubmit.bind(_this);
		_this.handleChange = _this.handleChange.bind(_this);
		_this.changeKeyword = _this.changeKeyword.bind(_this);

		//
		//	Renders
		//
		_this.renderYears = _this.renderYears.bind(_this);
		_this.renderSubjects = _this.renderSubjects.bind(_this);
		_this.renderDomains = _this.renderDomains.bind(_this);
		_this.renderFormats = _this.renderFormats.bind(_this);
		return _this;
	}

	_createClass(SearchForm, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.fetchYears();
			this.props.fetchSubjects();
			this.props.fetchDomains();
			this.props.fetchFormats();
		}
	}, {
		key: 'onFormSubmit',
		value: function onFormSubmit(event) {
			event.preventDefault();

			// We need to go and fetch weather data
			//this.props.fetchWeather(this.state.term);
			//this.setState({ term: '' });

			this.props.onSubmit();
		}
	}, {
		key: 'handleChange',
		value: function handleChange() {}

		// Handle keywords change

	}, {
		key: 'changeKeyword',
		value: function changeKeyword(tags) {
			this.setState({
				keyword: tags
			});
		}
	}, {
		key: 'calcColCount',
		value: function calcColCount(cols) {
			return Math.floor(12 / cols);
		}

		// Render years

	}, {
		key: 'renderYears',
		value: function renderYears() {
			var _props$years = this.props.years;
			var data = _props$years.data;
			var fetched = _props$years.fetched;

			if (fetched) {
				return _.sortBy(data, 'title').map(function (year) {
					return _react2.default.createElement(
						'option',
						{ value: year.id, key: year.id },
						year.title
					);
				});
			}
		}

		// Render subjects

	}, {
		key: 'renderSubjects',
		value: function renderSubjects() {
			var _props$subjects = this.props.subjects;
			var data = _props$subjects.data;
			var fetched = _props$subjects.fetched;

			if (fetched) {
				return _.sortBy(data, 'title').map(function (subject) {
					return _react2.default.createElement(
						'option',
						{ value: subject.id, key: subject.id },
						subject.title
					);
				});
			}
		}

		// Render domains

	}, {
		key: 'renderDomains',
		value: function renderDomains() {
			var _props$domains = this.props.domains;
			var data = _props$domains.data;
			var fetched = _props$domains.fetched;

			if (fetched) {
				return _.sortBy(data, 'title').map(function (domain) {
					return _react2.default.createElement(
						'option',
						{ value: domain.id, key: domain.id },
						domain.title
					);
				});
			}
		}

		// Render formats

	}, {
		key: 'renderFormats',
		value: function renderFormats() {
			var _props$formats = this.props.formats;
			var data = _props$formats.data;
			var fetched = _props$formats.fetched;

			if (fetched) {
				return _.sortBy(data, 'title').map(function (format) {
					return _react2.default.createElement(
						'option',
						{ value: format.id, key: format.id },
						format.title
					);
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			// Count total cols
			var maxcol = 6;
			var classColCount = this.calcColCount(maxcol);

			var _props = this.props;
			var searchKeywords = _props.searchKeywords;
			var iconClass = _props.iconClass;
			var buttonText = _props.buttonText;


			return _react2.default.createElement(
				'section',
				{ className: 'search-container' },
				_react2.default.createElement(
					'form',
					{ className: 'input-group search-form', method: 'get', onSubmit: this.onFormSubmit },
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						function () {
							if (searchKeywords) {
								return _react2.default.createElement(
									'div',
									{ className: "col-xs-12" },
									_react2.default.createElement(_tags2.default, { setTags: _this2.changeKeyword, tags: _this2.state.keywords, className: 'tags-search', placeholder: 'Palavras-chave' })
								);
							}
						}(),
						_react2.default.createElement(
							'div',
							{ className: "col-xs-6 col-sm-4 col-md-3" },
							_react2.default.createElement(
								'select',
								{ className: 'form-control', value: this.state.subject, onChange: function onChange(item) {
										return _this2.setState({ subject: item.target.value });
									} },
								_react2.default.createElement(
									'option',
									{ value: '0', 'default': true },
									'Disciplina'
								),
								this.renderSubjects()
							)
						),
						_react2.default.createElement(
							'div',
							{ className: "col-xs-6 col-sm-4 col-md-3" },
							_react2.default.createElement(
								'select',
								{ className: 'form-control', value: this.state.domain, onChange: function onChange(item) {
										return _this2.setState({ domain: item.target.value });
									} },
								_react2.default.createElement(
									'option',
									{ value: '0', 'default': true },
									'Domínio'
								),
								this.renderDomains()
							)
						),
						_react2.default.createElement(
							'div',
							{ className: "col-xs-6 col-sm-4 col-md-2" },
							_react2.default.createElement(
								'select',
								{ className: 'form-control', value: this.state.format, onChange: function onChange(item) {
										return _this2.setState({ format: item.target.value });
									} },
								_react2.default.createElement(
									'option',
									{ value: '0', 'default': true },
									'Formato'
								),
								this.renderFormats()
							)
						),
						_react2.default.createElement(
							'div',
							{ className: "col-xs-6 col-sm-4 col-md-2" },
							_react2.default.createElement(
								'select',
								{ className: 'form-control', value: this.state.year, onChange: function onChange(item) {
										return _this2.setState({ year: item.target.value });
									} },
								_react2.default.createElement(
									'option',
									{ value: '0', 'default': true },
									'Ano'
								),
								this.renderYears()
							)
						),
						_react2.default.createElement(
							'div',
							{ className: "col-xs-12 col-sm-4 col-md-2" },
							_react2.default.createElement(
								'button',
								{ type: 'submit', className: 'cta primary' },
								_react2.default.createElement('i', { className: iconClass || "fa fa-search", 'aria-hidden': 'true' }),
								buttonText || "Pesquisar"
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

},{"../common/tags":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\common\\tags.js","react":"react"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\user\\resume.js":[function(require,module,exports){
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

},{"react":"react","react-router":"react-router"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\auth\\loginForm.js":[function(require,module,exports){
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

},{"../../actions/auth":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\auth.js","../../components/auth/loginForm":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\auth\\loginForm.js","react":"react","redux-form":"redux-form"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\auth\\requireAuth.js":[function(require,module,exports){
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

},{"react":"react","react-redux":"react-redux","react-router":"react-router"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\auth\\signupForm.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = exports.fields = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _signupForm = require('../../components/auth/signupForm');

var _signupForm2 = _interopRequireDefault(_signupForm);

var _auth = require('../../actions/auth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fields = exports.fields = ['email', 'password', 'organization', 'authKey'];

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

  if (!values.organization) {
    errors.organization = 'Campo é obrigatório';
  }

  if (!values.authKey) {
    errors.authKey = 'Deve inserir a chave que lhe foi fornecida pela organização';
  }

  return errors;
};

/* Async validation*/
var asyncValidate = function asyncValidate(values /*, dispatch */) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (['asd@asd.com'].includes(values.email)) {
        reject({ email: 'Email inserido já se encontra registado' });
      }

      if (!values.authKey) {
        reject({ authKey: 'A chave fornecida já não é válida' });
      }

      resolve();
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
  form: 'SignupForm',
  fields: fields,
  asyncValidate: asyncValidate,
  asyncBlurFields: ['email'],
  validate: validate
}, mapStateToProps, { signupUser: _auth.signupUser })(_signupForm2.default);

},{"../../actions/auth":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\auth.js","../../components/auth/signupForm":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\auth\\signupForm.js","react":"react","redux-form":"redux-form"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\blocks\\contribute.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _contribute = require('../../components/blocks/contribute');

var _contribute2 = _interopRequireDefault(_contribute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(_contribute2.default);

},{"../../components/blocks/contribute":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\blocks\\contribute.js","react":"react","react-redux":"react-redux","redux":"redux"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\comments\\commentForm.js":[function(require,module,exports){
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

},{"../../components/resources/comments/form":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\comments\\form.js","react":"react","redux-form":"redux-form"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\comments\\index.js":[function(require,module,exports){
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

},{"../../actions/comments":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\comments.js","../../components/resources/comments/list":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\comments\\list.js","react":"react","react-redux":"react-redux","redux":"redux"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\common\\alerts.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _alerts = require('../../actions/alerts');

var _redux = require('redux');

var _alerts2 = require('../../components/common/alerts');

var _alerts3 = _interopRequireDefault(_alerts2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
  return {
    alerts: state.alerts
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ removeAlert: _alerts.removeAlert }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_alerts3.default);

},{"../../actions/alerts":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\alerts.js","../../components/common/alerts":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\common\\alerts.js","react":"react","react-redux":"react-redux","redux":"redux"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\dashboard\\menu.js":[function(require,module,exports){
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

},{"../../components/navigation/dashboardMenu":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\navigation\\dashboardMenu.js","react":"react","react-redux":"react-redux","redux":"redux"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\dashboard\\myResources.js":[function(require,module,exports){
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

var _myResources = require('../../components/dashboard/resources/myResources');

var _myResources2 = _interopRequireDefault(_myResources);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
  return {
    resources: state.resources,
    auth: state.auth,
    config: state.config
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ fetchResources: _resources.fetchResources, setHighlight: _resources.setHighlight, fetchConfig: _config.fetchConfig }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_myResources2.default);

},{"../../actions/config":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\config.js","../../actions/resources":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\resources.js","../../components/dashboard/resources/myResources":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\dashboard\\resources\\myResources.js","react":"react","react-redux":"react-redux","redux":"redux"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\dashboard\\newResourceForm.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _formats = require('../../actions/formats');

var _access = require('../../actions/access');

var _subjects = require('../../actions/subjects');

var _domains = require('../../actions/domains');

var _languages = require('../../actions/languages');

var _years = require('../../actions/years');

var _terms = require('../../actions/terms');

var _redux = require('redux');

var _reduxForm = require('redux-form');

var _newResourceFormFirstPage = require('../../components/resources/newResource/newResourceFormFirstPage');

var _newResourceFormFirstPage2 = _interopRequireDefault(_newResourceFormFirstPage);

var _newResourceFormSecondPage = require('../../components/resources/newResource/newResourceFormSecondPage');

var _newResourceFormSecondPage2 = _interopRequireDefault(_newResourceFormSecondPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewResourceFormContainer = function (_Component) {
  _inherits(NewResourceFormContainer, _Component);

  function NewResourceFormContainer(props) {
    _classCallCheck(this, NewResourceFormContainer);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NewResourceFormContainer).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);

    _this.nextPage = _this.nextPage.bind(_this);
    _this.previousPage = _this.previousPage.bind(_this);
    _this.state = {
      page: 1
    };
    return _this;
  }

  _createClass(NewResourceFormContainer, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.resetForm();
    }
  }, {
    key: 'nextPage',
    value: function nextPage() {
      this.setState({ page: this.state.page + 1 });
    }
  }, {
    key: 'previousPage',
    value: function previousPage() {
      this.setState({ page: this.state.page - 1 });
    }
  }, {
    key: 'printFormBreadcrumbs',
    value: function printFormBreadcrumbs() {
      if (this.state.page == 1) {
        return _react2.default.createElement(
          'span',
          null,
          _react2.default.createElement(
            'strong',
            null,
            'Detalhes'
          ),
          ' > Metadados'
        );
      } else if (this.state.page == 2) {
        return _react2.default.createElement(
          'span',
          null,
          'Detalhes > ',
          _react2.default.createElement(
            'strong',
            null,
            'Metadados'
          )
        );
      }
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      // MAKE SUBMITION
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve();
        }, 5000); // simulate server latency
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var page = this.state.page;

      return _react2.default.createElement(
        'div',
        { className: 'new-resource' },
        _react2.default.createElement(
          'header',
          { className: 'new-form-header text-center' },
          _react2.default.createElement(
            'h1',
            null,
            'Novo Recurso'
          ),
          this.printFormBreadcrumbs()
        ),
        _react2.default.createElement(
          'div',
          { className: 'new-resource__container' },
          _react2.default.createElement(
            'section',
            { className: 'container' },
            page === 1 && _react2.default.createElement(_newResourceFormFirstPage2.default, { onSubmit: this.nextPage, mapProps: this.props }),
            page === 2 && _react2.default.createElement(_newResourceFormSecondPage2.default, { previousPage: this.previousPage, onSubmit: this.handleSubmit, mapProps: this.props })
          )
        )
      );
    }
  }]);

  return NewResourceFormContainer;
}(_react.Component);

NewResourceFormContainer.propTypes = {};

function mapStateToProps(state) {
  return {
    formats: state.formats,
    access: state.access,
    subjects: state.subjects,
    domains: state.domains,
    languages: state.languages,
    years: state.years,
    terms: state.terms
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    fetchFormats: _formats.fetchFormats,
    fetchAccess: _access.fetchAccess,
    fetchSubjects: _subjects.fetchSubjects,
    fetchDomains: _domains.fetchDomains,
    fetchLanguages: _languages.fetchLanguages,
    fetchYears: _years.fetchYears,
    fetchTerms: _terms.fetchTerms,
    resetForm: function resetForm() {
      return dispatch((0, _reduxForm.reset)('newResource'));
    }
  }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NewResourceFormContainer);

},{"../../actions/access":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\access.js","../../actions/domains":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\domains.js","../../actions/formats":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\formats.js","../../actions/languages":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\languages.js","../../actions/subjects":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\subjects.js","../../actions/terms":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\terms.js","../../actions/years":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\years.js","../../components/resources/newResource/newResourceFormFirstPage":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\newResource\\newResourceFormFirstPage.js","../../components/resources/newResource/newResourceFormSecondPage":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\newResource\\newResourceFormSecondPage.js","react":"react","react-redux":"react-redux","redux":"redux","redux-form":"redux-form"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\dashboard\\newScriptForm.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _subjects = require('../../actions/subjects');

var _domains = require('../../actions/domains');

var _years = require('../../actions/years');

var _terms = require('../../actions/terms');

var _redux = require('redux');

var _reduxForm = require('redux-form');

var _newScriptForm = require('../../components/scripts/newScriptForm');

var _newScriptForm2 = _interopRequireDefault(_newScriptForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewScriptFormContainer = function (_Component) {
  _inherits(NewScriptFormContainer, _Component);

  function NewScriptFormContainer(props) {
    _classCallCheck(this, NewScriptFormContainer);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NewScriptFormContainer).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(NewScriptFormContainer, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.resetForm();
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      // MAKE SUBMITION
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve();
        }, 5000); // simulate server latency
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'new-resource' },
        _react2.default.createElement(
          'header',
          { className: 'new-form-header text-center' },
          _react2.default.createElement(
            'h1',
            null,
            'Gerir Guiões'
          ),
          _react2.default.createElement(
            'span',
            null,
            'Recurso X > ',
            _react2.default.createElement(
              'strong',
              null,
              'Guiões'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'new-resource__container' },
          _react2.default.createElement(
            'section',
            { className: 'container' },
            _react2.default.createElement(_newScriptForm2.default, { onSubmit: this.handleSubmit, mapProps: this.props })
          )
        )
      );
    }
  }]);

  return NewScriptFormContainer;
}(_react.Component);

NewScriptFormContainer.propTypes = {};

function mapStateToProps(state) {
  return {
    subjects: state.subjects,
    domains: state.domains,
    years: state.years,
    terms: state.terms
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    fetchSubjects: _subjects.fetchSubjects,
    fetchDomains: _domains.fetchDomains,
    fetchYears: _years.fetchYears,
    fetchTerms: _terms.fetchTerms,
    resetForm: function resetForm() {
      return dispatch((0, _reduxForm.reset)('newScript'));
    }
  }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NewScriptFormContainer);

},{"../../actions/domains":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\domains.js","../../actions/subjects":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\subjects.js","../../actions/terms":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\terms.js","../../actions/years":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\years.js","../../components/scripts/newScriptForm":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\scripts\\newScriptForm.js","react":"react","react-redux":"react-redux","redux":"redux","redux-form":"redux-form"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\filters\\index.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _formats = require('../../actions/formats');

var _subjects = require('../../actions/subjects');

var _domains = require('../../actions/domains');

var _years = require('../../actions/years');

var _access = require('../../actions/access');

var _filters = require('../../actions/filters');

var _redux = require('redux');

var _filters2 = require('../../components/resources/common/filters');

var _filters3 = _interopRequireDefault(_filters2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
  return {
    formats: state.formats,
    subjects: state.subjects,
    domains: state.domains,
    years: state.years,
    access: state.access,
    filters: state.filters
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    fetchFormats: _formats.fetchFormats,
    fetchSubjects: _subjects.fetchSubjects,
    fetchDomains: _domains.fetchDomains,
    fetchYears: _years.fetchYears,
    fetchAccess: _access.fetchAccess,
    submitFilters: _filters.submitFilters
  }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_filters3.default);

},{"../../actions/access":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\access.js","../../actions/domains":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\domains.js","../../actions/filters":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\filters.js","../../actions/formats":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\formats.js","../../actions/subjects":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\subjects.js","../../actions/years":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\years.js","../../components/resources/common/filters":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\common\\filters.js","react":"react","react-redux":"react-redux","redux":"redux"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\formats\\index.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _formats = require('../../actions/formats');

var _config = require('../../actions/config');

var _redux = require('redux');

var _formats2 = require('../../components/formats');

var _formats3 = _interopRequireDefault(_formats2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
  return {
    formats: state.formats,
    config: state.config
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ fetchFormats: _formats.fetchFormats, fetchConfig: _config.fetchConfig }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_formats3.default);

},{"../../actions/config":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\config.js","../../actions/formats":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\formats.js","../../components/formats":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\formats\\index.js","react":"react","react-redux":"react-redux","redux":"redux"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\header\\index.js":[function(require,module,exports){
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

	function Header(props) {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).call(this, props));
	}

	/* Get Page Type from LOCATION */


	_createClass(Header, [{
		key: 'headerType',
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
						return [_react2.default.createElement(_highlights2.default, { key: 'highlights-container' }), _react2.default.createElement(
							'div',
							{ className: 'container', key: 'search-container' },
							_react2.default.createElement(_search2.default, { key: 'search-container', searchKeywords: true })
						)];
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

},{"../../components/navigation/topNav":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\navigation\\topNav.js","../highlights":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\highlights\\index.js","../search":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\search\\index.js","../user/resume":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\user\\resume.js","react":"react","react-redux":"react-redux"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\highlights\\index.js":[function(require,module,exports){
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

},{"../../actions/resources":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\resources.js","../../components/resources/highlights":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\highlights.js","react":"react","react-redux":"react-redux","redux":"redux"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\resources\\details.js":[function(require,module,exports){
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

},{"../../actions/config":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\config.js","../../actions/resources":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\resources.js","../../components/resources/details":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\details\\index.js","react":"react","react-redux":"react-redux","redux":"redux"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\resources\\index.js":[function(require,module,exports){
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

var _listing = require('../../components/resources/listing');

var _listing2 = _interopRequireDefault(_listing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
  return {
    resources: state.resources,
    auth: state.auth,
    config: state.config
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ fetchResources: _resources.fetchResources, fetchConfig: _config.fetchConfig }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_listing2.default);

},{"../../actions/config":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\config.js","../../actions/resources":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\resources.js","../../components/resources/listing":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\listing.js","react":"react","react-redux":"react-redux","redux":"redux"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\resources\\recent.js":[function(require,module,exports){
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

var _recent = require('../../components/resources/recent');

var _recent2 = _interopRequireDefault(_recent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
  return {
    resources: state.resources,
    auth: state.auth,
    config: state.config
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ fetchResources: _resources.fetchResources, fetchConfig: _config.fetchConfig }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_recent2.default);

},{"../../actions/config":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\config.js","../../actions/resources":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\resources.js","../../components/resources/recent":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\recent.js","react":"react","react-redux":"react-redux","redux":"redux"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\resources\\related.js":[function(require,module,exports){
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

var _related = require('../../components/resources/related');

var _related2 = _interopRequireDefault(_related);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
  return {
    relatedResources: state.relatedResources,
    auth: state.auth,
    config: state.config
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ fetchRelatedResources: _resources.fetchRelatedResources, fetchConfig: _config.fetchConfig }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_related2.default);

},{"../../actions/config":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\config.js","../../actions/resources":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\resources.js","../../components/resources/related":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\resources\\related.js","react":"react","react-redux":"react-redux","redux":"redux"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\search\\index.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _years = require('../../actions/years');

var _subjects = require('../../actions/subjects');

var _domains = require('../../actions/domains');

var _formats = require('../../actions/formats');

var _redux = require('redux');

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
      return _react2.default.createElement(_searchForm2.default, this.props);
    }
  }]);

  return SearchContainer;
}(_react.Component);

function mapStateToProps(state) {
  return {
    years: state.years,
    subjects: state.subjects,
    domains: state.domains,
    formats: state.formats
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    fetchYears: _years.fetchYears,
    fetchSubjects: _subjects.fetchSubjects,
    fetchDomains: _domains.fetchDomains,
    fetchFormats: _formats.fetchFormats
  }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SearchContainer);

},{"../../actions/domains":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\domains.js","../../actions/formats":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\formats.js","../../actions/subjects":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\subjects.js","../../actions/years":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\years.js","../../components/search/searchForm":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\search\\searchForm.js","react":"react","react-redux":"react-redux","redux":"redux"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\user\\resume.js":[function(require,module,exports){
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

},{"../../actions/config":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\config.js","../../actions/user":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\user.js","../../components/user/resume":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\user\\resume.js","react":"react","react-redux":"react-redux","redux":"redux"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\layouts\\app.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _alerts = require('../containers/common/alerts');

var _alerts2 = _interopRequireDefault(_alerts);

var _reactProgress = require('react-progress-2');

var _reactProgress2 = _interopRequireDefault(_reactProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Components


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
        _react2.default.createElement(_reactProgress2.default.Component, null),
        _react2.default.createElement(_alerts2.default, null),
        this.props.children
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

},{"../containers/common/alerts":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\common\\alerts.js","react":"react","react-progress-2":"react-progress-2","react-redux":"react-redux"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\middleware\\api.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CALL_API = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _reactProgress = require('react-progress-2');

var _reactProgress2 = _interopRequireDefault(_reactProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('es6-promise').polyfill();

// Components

var BASE_URL = 'http://devbox.dev/api/';

function callApi(endpoint, sendToken, mustAuth, method) {

  var token = localStorage.getItem('token') || null;
  var config = {
    method: method || 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  if (sendToken) {
    if (token) {
      config.headers.Authorization = '' + token;
    } else if (mustAuth) {
      throw "No token saved!";
    }
  }

  return (0, _isomorphicFetch2.default)(BASE_URL + endpoint, config).then(function (response) {
    return response.json().then(function (json) {
      return { json: json, response: response };
    });
  }).then(function (_ref) {
    var json = _ref.json;
    var response = _ref.response;

    if (!response.ok) {
      return Promise.reject(json);
    }

    return json;
  }).catch(function (err) {
    return console.log(err);
  });
}

var CALL_API = exports.CALL_API = Symbol('Call API');

exports.default = function (store) {
  return function (next) {
    return function (action) {

      var callAPI = action[CALL_API];

      // So the middleware doesn't get applied to every single action
      if (typeof callAPI === 'undefined') {
        return next(action);
      }

      var endpoint = callAPI.endpoint;
      var types = callAPI.types;
      var sendToken = callAPI.sendToken;
      var mustAuth = callAPI.mustAuth;
      var method = callAPI.method;

      var _types = _slicedToArray(types, 3);

      var requestType = _types[0];
      var successType = _types[1];
      var errorType = _types[2];


      _reactProgress2.default.show();

      // Passing the authenticated boolean back in our data will let us distinguish between normal and secret quotes
      return callApi(endpoint, sendToken, mustAuth, method).then(function (response) {
        _reactProgress2.default.hide();

        next({
          data: response,
          type: successType
        });
      }).catch(function (error) {
        _reactProgress2.default.hide();

        next({
          error: error.message || 'There was an error.',
          type: errorType
        });
      });
    };
  };
};

},{"es6-promise":"es6-promise","isomorphic-fetch":"isomorphic-fetch","react-progress-2":"react-progress-2"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\pages\\dashboardPage.js":[function(require,module,exports){
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

},{"../components/dashboard":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\dashboard\\index.js","../components/navigation/bottomNav":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\navigation\\bottomNav.js","../components/navigation/profileNav":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\navigation\\profileNav.js","../containers/header":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\header\\index.js","react":"react","react-addons-css-transition-group":"react-addons-css-transition-group"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\pages\\discoverPage.js":[function(require,module,exports){
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
        _react2.default.createElement(_resources2.default, { location: this.props.location }),
        _react2.default.createElement(_bottomNav2.default, { location: this.props.location })
      );
    }
  }]);

  return DiscoverPage;
}(_react.Component);

exports.default = DiscoverPage;

},{"../components/common/breadcrumbs":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\common\\breadcrumbs.js","../components/navigation/bottomNav":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\navigation\\bottomNav.js","../containers/header":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\header\\index.js","../containers/resources":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\resources\\index.js","react":"react","react-addons-css-transition-group":"react-addons-css-transition-group"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\pages\\indexPage.js":[function(require,module,exports){
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

var _contribute = require('../containers/blocks/contribute');

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

},{"../components/blocks/explore":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\blocks\\explore.js","../components/navigation/bottomNav":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\navigation\\bottomNav.js","../containers/blocks/contribute":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\blocks\\contribute.js","../containers/formats":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\formats\\index.js","../containers/header":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\header\\index.js","../containers/resources/recent":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\resources\\recent.js","react":"react","react-addons-css-transition-group":"react-addons-css-transition-group"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\pages\\newResourcePage.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('../containers/header');

var _header2 = _interopRequireDefault(_header);

var _newResourceForm = require('../containers/dashboard/newResourceForm');

var _newResourceForm2 = _interopRequireDefault(_newResourceForm);

var _bottomNav = require('../components/navigation/bottomNav');

var _bottomNav2 = _interopRequireDefault(_bottomNav);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Animation


var NewResourcePage = function (_Component) {
  _inherits(NewResourcePage, _Component);

  function NewResourcePage() {
    _classCallCheck(this, NewResourcePage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(NewResourcePage).apply(this, arguments));
  }

  _createClass(NewResourcePage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        { transitionName: 'transition',
          transitionAppear: true, transitionAppearTimeout: 500,
          transitionEnter: false, transitionLeave: false },
        _react2.default.createElement(_header2.default, { location: this.props.location }),
        _react2.default.createElement(_newResourceForm2.default, null),
        _react2.default.createElement(_bottomNav2.default, { location: this.props.location })
      );
    }
  }]);

  return NewResourcePage;
}(_react.Component);

exports.default = NewResourcePage;

},{"../components/navigation/bottomNav":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\navigation\\bottomNav.js","../containers/dashboard/newResourceForm":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\dashboard\\newResourceForm.js","../containers/header":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\header\\index.js","react":"react","react-addons-css-transition-group":"react-addons-css-transition-group"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\pages\\newScriptPage.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('../containers/header');

var _header2 = _interopRequireDefault(_header);

var _newScriptForm = require('../containers/dashboard/newScriptForm');

var _newScriptForm2 = _interopRequireDefault(_newScriptForm);

var _bottomNav = require('../components/navigation/bottomNav');

var _bottomNav2 = _interopRequireDefault(_bottomNav);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Animation


var NewResourcePage = function (_Component) {
  _inherits(NewResourcePage, _Component);

  function NewResourcePage() {
    _classCallCheck(this, NewResourcePage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(NewResourcePage).apply(this, arguments));
  }

  _createClass(NewResourcePage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        { transitionName: 'transition',
          transitionAppear: true, transitionAppearTimeout: 500,
          transitionEnter: false, transitionLeave: false },
        _react2.default.createElement(_header2.default, { location: this.props.location }),
        _react2.default.createElement(_newScriptForm2.default, null),
        _react2.default.createElement(_bottomNav2.default, { location: this.props.location })
      );
    }
  }]);

  return NewResourcePage;
}(_react.Component);

exports.default = NewResourcePage;

},{"../components/navigation/bottomNav":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\navigation\\bottomNav.js","../containers/dashboard/newScriptForm":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\dashboard\\newScriptForm.js","../containers/header":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\header\\index.js","react":"react","react-addons-css-transition-group":"react-addons-css-transition-group"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\pages\\notFoundPage.js":[function(require,module,exports){
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

},{"../components/navigation/bottomNav":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\navigation\\bottomNav.js","../containers/header":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\header\\index.js","react":"react","react-addons-css-transition-group":"react-addons-css-transition-group"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\pages\\resourceDetailsPage.js":[function(require,module,exports){
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

var _search = require('../containers/search');

var _search2 = _interopRequireDefault(_search);

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
        _react2.default.createElement(
          'div',
          { className: 'resource-detail-search' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(_search2.default, { searchKeywords: false })
          )
        ),
        _react2.default.createElement(_breadcrumbs.AppBreadcrumbs, { routes: this.props.routes, params: this.props.params, setDocumentTitle: true }),
        _react2.default.createElement(_details2.default, { params: this.props.params }),
        _react2.default.createElement(_bottomNav2.default, { location: this.props.location })
      );
    }
  }]);

  return ResourceDetailsPage;
}(_react.Component);

exports.default = ResourceDetailsPage;

},{"../components/common/breadcrumbs":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\common\\breadcrumbs.js","../components/navigation/bottomNav":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\navigation\\bottomNav.js","../components/search/searchForm":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\search\\searchForm.js","../containers/header":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\header\\index.js","../containers/resources/details":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\resources\\details.js","../containers/search":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\search\\index.js","react":"react","react-addons-css-transition-group":"react-addons-css-transition-group"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\pages\\signupFormPage.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('../containers/header');

var _header2 = _interopRequireDefault(_header);

var _signupForm = require('../containers/auth/signupForm');

var _signupForm2 = _interopRequireDefault(_signupForm);

var _bottomNav = require('../components/navigation/bottomNav');

var _bottomNav2 = _interopRequireDefault(_bottomNav);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Animation


var NewResourcePage = function (_Component) {
  _inherits(NewResourcePage, _Component);

  function NewResourcePage() {
    _classCallCheck(this, NewResourcePage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(NewResourcePage).apply(this, arguments));
  }

  _createClass(NewResourcePage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        { transitionName: 'transition',
          transitionAppear: true, transitionAppearTimeout: 500,
          transitionEnter: false, transitionLeave: false },
        _react2.default.createElement(_header2.default, { location: this.props.location }),
        _react2.default.createElement(_signupForm2.default, null),
        _react2.default.createElement(_bottomNav2.default, { location: this.props.location })
      );
    }
  }]);

  return NewResourcePage;
}(_react.Component);

exports.default = NewResourcePage;

},{"../components/navigation/bottomNav":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\components\\navigation\\bottomNav.js","../containers/auth/signupForm":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\auth\\signupForm.js","../containers/header":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\header\\index.js","react":"react","react-addons-css-transition-group":"react-addons-css-transition-group"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\reducers\\access.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.ACCESS_REQUEST:
      return (0, _objectAssign2.default)({}, state, {
        fetching: true
      });
    case _actionTypes.ACCESS_SUCCESS:

      return (0, _objectAssign2.default)({}, state, {
        fetching: false,
        fetched: true,
        data: action.data.result
      });
    case _actionTypes.ACCESS_FAILURE:
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

},{"../actions/action-types":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\action-types.js","object-assign":"object-assign"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\reducers\\alerts.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.ALERT_ADD:
      return (0, _objectAssign2.default)({}, state, {
        message: action.message,
        resultType: action.resultType
      });
    case _actionTypes.ALERT_REMOVE:
      return (0, _objectAssign2.default)({}, state, {
        message: null,
        resultType: null
      });
    default:
      return state;
  }
};

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _actionTypes = require('../actions/action-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = { message: null };

},{"../actions/action-types":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\action-types.js","object-assign":"object-assign"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\reducers\\auth.js":[function(require,module,exports){
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
    case _actionTypes.SIGNUP_REQUEST:
      return (0, _objectAssign2.default)({}, state, {
        fetching: true
      });
    case _actionTypes.SIGNUP_SUCCESS:
      return (0, _objectAssign2.default)({}, state, {
        fetching: false,
        fetched: true,
        data: action.data,
        isAuthenticated: true
      });
    case _actionTypes.SIGNUP_FAILURE:
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

},{"../actions/action-types":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\action-types.js","object-assign":"object-assign"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\reducers\\comments.js":[function(require,module,exports){
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

},{"../actions/action-types":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\action-types.js","object-assign":"object-assign"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\reducers\\config.js":[function(require,module,exports){
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

},{"../actions/action-types":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\action-types.js","object-assign":"object-assign"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\reducers\\domains.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.DOMAINS_REQUEST:
      return (0, _objectAssign2.default)({}, state, {
        fetching: true
      });
    case _actionTypes.DOMAINS_SUCCESS:

      return (0, _objectAssign2.default)({}, state, {
        fetching: false,
        fetched: true,
        data: action.data.result
      });
    case _actionTypes.DOMAINS_FAILURE:
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

},{"../actions/action-types":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\action-types.js","object-assign":"object-assign"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\reducers\\filters.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.FILTERS_REQUEST:
      return (0, _objectAssign2.default)({}, state, {
        fetching: true
      });
    case _actionTypes.FILTERS_SUCCESS:

      return (0, _objectAssign2.default)({}, state, {
        fetching: false,
        fetched: true,
        data: action.data
      });
    case _actionTypes.FILTERS_FAILURE:
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

},{"../actions/action-types":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\action-types.js","object-assign":"object-assign"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\reducers\\formats.js":[function(require,module,exports){
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
        data: action.data.result
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

},{"../actions/action-types":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\action-types.js","object-assign":"object-assign"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\reducers\\index.js":[function(require,module,exports){
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

var _access = require('./access');

var _access2 = _interopRequireDefault(_access);

var _subjects = require('./subjects');

var _subjects2 = _interopRequireDefault(_subjects);

var _domains = require('./domains');

var _domains2 = _interopRequireDefault(_domains);

var _languages = require('./languages');

var _languages2 = _interopRequireDefault(_languages);

var _years = require('./years');

var _years2 = _interopRequireDefault(_years);

var _terms = require('./terms');

var _terms2 = _interopRequireDefault(_terms);

var _auth = require('./auth');

var _auth2 = _interopRequireDefault(_auth);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _alerts = require('./alerts');

var _alerts2 = _interopRequireDefault(_alerts);

var _filters = require('./filters');

var _filters2 = _interopRequireDefault(_filters);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
	config: _config2.default,
	form: _reduxForm.reducer,
	highlights: _resources2.default,
	formats: _formats2.default,
	access: _access2.default,
	subjects: _subjects2.default,
	domains: _domains2.default,
	languages: _languages2.default,
	years: _years2.default,
	comments: _comments2.default,
	resources: _resources.resources,
	resource: _resources.resource,
	relatedResources: _resources.relatedResources,
	terms: _terms2.default,
	auth: _auth2.default,
	user: _user2.default,
	filters: _filters2.default,
	alerts: _alerts2.default
});

exports.default = rootReducer;

},{"./access":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\reducers\\access.js","./alerts":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\reducers\\alerts.js","./auth":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\reducers\\auth.js","./comments":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\reducers\\comments.js","./config":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\reducers\\config.js","./domains":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\reducers\\domains.js","./filters":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\reducers\\filters.js","./formats":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\reducers\\formats.js","./languages":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\reducers\\languages.js","./resources":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\reducers\\resources.js","./subjects":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\reducers\\subjects.js","./terms":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\reducers\\terms.js","./user":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\reducers\\user.js","./years":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\reducers\\years.js","redux":"redux","redux-form":"redux-form"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\reducers\\languages.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.LANGUAGES_REQUEST:
      return (0, _objectAssign2.default)({}, state, {
        fetching: true
      });
    case _actionTypes.LANGUAGES_SUCCESS:

      return (0, _objectAssign2.default)({}, state, {
        fetching: false,
        fetched: true,
        data: action.data.result
      });
    case _actionTypes.LANGUAGES_FAILURE:
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

},{"../actions/action-types":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\action-types.js","object-assign":"object-assign"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\reducers\\resources.js":[function(require,module,exports){
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
        data: action.data.result
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
        curPage: action.data.page,
        total: action.data.total,
        totalPages: action.data.totalPages,
        data: action.data.result
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
        data: action.data.result
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
        data: action.data.result
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

},{"../actions/action-types":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\action-types.js","object-assign":"object-assign"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\reducers\\subjects.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.SUBJECTS_REQUEST:
      return (0, _objectAssign2.default)({}, state, {
        fetching: true
      });
    case _actionTypes.SUBJECTS_SUCCESS:

      return (0, _objectAssign2.default)({}, state, {
        fetching: false,
        fetched: true,
        data: action.data.result
      });
    case _actionTypes.SUBJECTS_FAILURE:
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

},{"../actions/action-types":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\action-types.js","object-assign":"object-assign"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\reducers\\terms.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.TERMSANDCONDITIONS_REQUEST:
      return (0, _objectAssign2.default)({}, state, {
        fetching: true
      });
    case _actionTypes.TERMSANDCONDITIONS_SUCCESS:

      return (0, _objectAssign2.default)({}, state, {
        fetching: false,
        fetched: true,
        data: action.data
      });
    case _actionTypes.TERMSANDCONDITIONS_FAILURE:
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

},{"../actions/action-types":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\action-types.js","object-assign":"object-assign"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\reducers\\user.js":[function(require,module,exports){
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

},{"../actions/action-types":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\action-types.js","object-assign":"object-assign"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\reducers\\years.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.YEARS_REQUEST:
      return (0, _objectAssign2.default)({}, state, {
        fetching: true
      });
    case _actionTypes.YEARS_SUCCESS:
      return (0, _objectAssign2.default)({}, state, {
        fetching: false,
        fetched: true,
        data: action.data.result
      });
    case _actionTypes.YEARS_FAILURE:
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

},{"../actions/action-types":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\actions\\action-types.js","object-assign":"object-assign"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\routes\\index.js":[function(require,module,exports){
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

var _signupFormPage = require('../pages/signupFormPage');

var _signupFormPage2 = _interopRequireDefault(_signupFormPage);

var _dashboardPage = require('../pages/dashboardPage');

var _dashboardPage2 = _interopRequireDefault(_dashboardPage);

var _resourceDetailsPage = require('../pages/resourceDetailsPage');

var _resourceDetailsPage2 = _interopRequireDefault(_resourceDetailsPage);

var _newResourcePage = require('../pages/newResourcePage');

var _newResourcePage2 = _interopRequireDefault(_newResourcePage);

var _newScriptPage = require('../pages/newScriptPage');

var _newScriptPage2 = _interopRequireDefault(_newScriptPage);

var _notFoundPage = require('../pages/notFoundPage');

var _notFoundPage2 = _interopRequireDefault(_notFoundPage);

var _requireAuth = require('../containers/auth/requireAuth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  _react2.default.createElement(_reactRouter.Route, { name: 'Painel de Gestão', path: 'painel', component: _dashboardPage2.default }),
  _react2.default.createElement(_reactRouter.Route, { name: 'Novo Recurso', path: 'novorecurso', component: _newResourcePage2.default }),
  _react2.default.createElement(_reactRouter.Route, { name: 'Gerir Guiões', path: 'gerirguioes/:resource', component: _newScriptPage2.default }),
  _react2.default.createElement(_reactRouter.Route, { name: 'Registar', path: 'registar', component: _signupFormPage2.default }),
  _react2.default.createElement(_reactRouter.Route, { name: 'Não Encontrado', path: '*', component: _notFoundPage2.default })
);

// Required


// Pages

},{"../containers/auth/requireAuth":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\containers\\auth\\requireAuth.js","../layouts/app":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\layouts\\app.js","../pages/dashboardPage":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\pages\\dashboardPage.js","../pages/discoverPage":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\pages\\discoverPage.js","../pages/indexPage":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\pages\\indexPage.js","../pages/newResourcePage":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\pages\\newResourcePage.js","../pages/newScriptPage":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\pages\\newScriptPage.js","../pages/notFoundPage":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\pages\\notFoundPage.js","../pages/resourceDetailsPage":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\pages\\resourceDetailsPage.js","../pages/signupFormPage":"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\pages\\signupFormPage.js","react":"react","react-router":"react-router"}],"C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\utils\\index.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sortByTitle = exports.setUrl = exports.setDateFormat = undefined;

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

//
//  Sort with locale the TITLE property
//
var sortByTitle = exports.sortByTitle = function sortByTitle(s1, s2) {
    return s1.title.localeCompare(s2.title);
};

},{"moment":"moment"}]},{},["C:\\Vagrant\\devbox\\devbox\\public\\assets\\scripts\\app.js"])


//# sourceMappingURL=bundle.js.map
