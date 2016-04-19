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

},{}],"/var/www/devbox/app/assets/scripts/actions/formats.js":[function(require,module,exports){
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

},{"./reducers":"/var/www/devbox/app/assets/scripts/reducers/index.js","./routes":"/var/www/devbox/app/assets/scripts/routes/index.js","react":"react","react-dom":"react-dom","react-redux":"react-redux","react-router":"react-router","redux":"redux","redux-thunk":"redux-thunk"}],"/var/www/devbox/app/assets/scripts/components/blocks/explore.js":[function(require,module,exports){
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

},{"isomorphic-fetch":"isomorphic-fetch","react":"react","react-router":"react-router"}],"/var/www/devbox/app/assets/scripts/components/common/rating.js":[function(require,module,exports){
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
						var rect = doc.querySelector("path");
						rect.setAttribute("class", "");
						rect.setAttribute("fill", elColor);
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

},{"react":"react"}],"/var/www/devbox/app/assets/scripts/components/formats/index.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

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
				_react2.default.createElement(_list2.default, { formats: this.props.formats })
			);
		}
	}]);

	return FormatsBanner;
}(_react.Component);

exports.default = FormatsBanner;

},{"./list":"/var/www/devbox/app/assets/scripts/components/formats/list.js","react":"react"}],"/var/www/devbox/app/assets/scripts/components/formats/list.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

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

exports.default = function (props) {
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopNav = function (_Component) {
	_inherits(TopNav, _Component);

	function TopNav() {
		_classCallCheck(this, TopNav);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(TopNav).apply(this, arguments));
	}

	_createClass(TopNav, [{
		key: 'isActive',
		value: function isActive(location, target) {
			location = location.length > 1 ? location.replace(/^\//, '') : location;
			return location === target ? 'active' : '';
		}
	}, {
		key: 'render',
		value: function render() {
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
							_react2.default.createElement(
								'li',
								{ className: this.isActive(this.props.location.pathname, 'entrar') },
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: '/entrar' },
									'Entrar'
								)
							),
							_react2.default.createElement(
								'li',
								{ className: this.isActive(this.props.location.pathname, 'ajuda') },
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: 'ajuda' },
									'Ajuda'
								)
							)
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

},{"react":"react","react-bootstrap":"react-bootstrap","react-router":"react-router"}],"/var/www/devbox/app/assets/scripts/components/resources/carousel.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderList = function renderList(list) {
	return list.map(function (highlight) {
		return _react2.default.createElement(
			_reactBootstrap.Carousel.Item,
			{ key: highlight.id },
			_react2.default.createElement(
				'div',
				{ className: 'media col-xs-9 col-sm-8 col-xs-offset-2 col-sm-offset-2' },
				_react2.default.createElement(
					'div',
					{ className: 'media-left media__img' },
					_react2.default.createElement(
						'a',
						{ href: '#', className: 'highlights__img' },
						_react2.default.createElement('img', { className: 'media-object img-responsive', src: highlight.image.src, alt: highlight.image.alt })
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
							highlight.title
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'highlights__text' },
						highlight.text
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

exports.default = function (props) {
	var settings = props.settings;
	if (!props.highlights || !props.highlights.data || props.highlights.fetching) {
		return _react2.default.createElement(
			'div',
			{ className: 'loading' },
			'Loading...'
		);
	}

	return _react2.default.createElement(
		'div',
		{ className: 'container highlights' },
		_react2.default.createElement(
			_reactBootstrap.Carousel,
			{ interval: settings.interval, nextIcon: settings.nextIcon, prevIcon: settings.prevIcon, indicators: settings.indicators },
			renderList(props.highlights.data)
		)
	);
};

},{"react":"react","react-bootstrap":"react-bootstrap"}],"/var/www/devbox/app/assets/scripts/components/resources/common/list.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

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


var renderList = function renderList(list) {
	return list.map(function (el, index) {
		// Clearfix classes
		var breaker = "";
		breaker = index % 4 == 0 ? ' floatnone floatnone__lg' : "";
		breaker = index % 4 == 0 ? breaker + ' floatnone__md' : breaker;
		breaker = index % 3 == 0 ? breaker + ' floatnone__sm' : breaker;

		// Type tooltip
		var tooltip = _react2.default.createElement(
			_reactBootstrap.Tooltip,
			{ id: "resource_" + el.id },
			el.format.title
		);

		return _react2.default.createElement(
			'article',
			{ className: "col-xs-6 col-sm-4 col-md-3 col-lg-3" + breaker, key: index },
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
				_react2.default.createElement(
					_reactRouter.Link,
					{ to: '/', className: 'cta primary outline small' },
					'Adicionar Guião'
				),
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

exports.default = function (props) {
	if (!props.list || !props.list.data || props.list.fetching) {
		return _react2.default.createElement(
			'div',
			{ className: 'loading' },
			'Loading...'
		);
	}

	return _react2.default.createElement(
		'div',
		{ className: 'row' },
		renderList(props.list.data)
	);
};

},{"../../common/rating":"/var/www/devbox/app/assets/scripts/components/common/rating.js","../../common/svg":"/var/www/devbox/app/assets/scripts/components/common/svg.js","react":"react","react-bootstrap":"react-bootstrap","react-router":"react-router"}],"/var/www/devbox/app/assets/scripts/components/resources/highlights.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _carousel = require('./carousel');

var _carousel2 = _interopRequireDefault(_carousel);

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

			return _react2.default.createElement(_carousel2.default, { highlights: this.props.highlights, settings: settings });
		}
	}]);

	return ResourceHighlights;
}(_react.Component);

exports.default = ResourceHighlights;

},{"./carousel":"/var/www/devbox/app/assets/scripts/components/resources/carousel.js","react":"react"}],"/var/www/devbox/app/assets/scripts/components/resources/recent.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _list = require('./common/list');

var _list2 = _interopRequireDefault(_list);

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
				'div',
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
					_react2.default.createElement(_list2.default, { list: this.props.resources })
				)
			);
		}
	}]);

	return RecentResources;
}(_react.Component);

exports.default = RecentResources;

},{"./common/list":"/var/www/devbox/app/assets/scripts/components/resources/common/list.js","react":"react"}],"/var/www/devbox/app/assets/scripts/components/search/searchForm.js":[function(require,module,exports){
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

},{"react":"react"}],"/var/www/devbox/app/assets/scripts/containers/formats/index.js":[function(require,module,exports){
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
			return location !== "/" ? "home-page" : location;
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: "header-container " + this.headerType(this.props.location) },
				_react2.default.createElement(_topNav2.default, { location: this.props.location }),
				_react2.default.createElement(_highlights2.default, null),
				_react2.default.createElement(_search2.default, null)
			);
		}
	}]);

	return Header;
}(_react.Component);

exports.default = Header;

},{"../../components/navigation/topNav":"/var/www/devbox/app/assets/scripts/components/navigation/topNav.js","../highlights":"/var/www/devbox/app/assets/scripts/containers/highlights/index.js","../search":"/var/www/devbox/app/assets/scripts/containers/search/index.js","react":"react"}],"/var/www/devbox/app/assets/scripts/containers/highlights/index.js":[function(require,module,exports){
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

},{"../../actions/resources":"/var/www/devbox/app/assets/scripts/actions/resources.js","../../components/resources/highlights":"/var/www/devbox/app/assets/scripts/components/resources/highlights.js","react":"react","react-redux":"react-redux","redux":"redux"}],"/var/www/devbox/app/assets/scripts/containers/resources/recent.js":[function(require,module,exports){
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

},{"../../components/search/searchForm":"/var/www/devbox/app/assets/scripts/components/search/searchForm.js","react":"react"}],"/var/www/devbox/app/assets/scripts/pages/discoverPage.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('../containers/header');

var _header2 = _interopRequireDefault(_header);

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
      return _react2.default.createElement(_header2.default, { location: this.props.location });
    }
  }]);

  return DiscoverPage;
}(_react.Component);

exports.default = DiscoverPage;

},{"../containers/header":"/var/www/devbox/app/assets/scripts/containers/header/index.js","react":"react"}],"/var/www/devbox/app/assets/scripts/pages/indexPage.js":[function(require,module,exports){
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
        _react2.default.createElement(_recent2.default, null)
      );
    }
  }]);

  return IndexPage;
}(_react.Component);

exports.default = IndexPage;

},{"../components/blocks/explore":"/var/www/devbox/app/assets/scripts/components/blocks/explore.js","../containers/formats":"/var/www/devbox/app/assets/scripts/containers/formats/index.js","../containers/header":"/var/www/devbox/app/assets/scripts/containers/header/index.js","../containers/resources/recent":"/var/www/devbox/app/assets/scripts/containers/resources/recent.js","react":"react"}],"/var/www/devbox/app/assets/scripts/reducers/formats.js":[function(require,module,exports){
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  form: _reduxForm.reducer,
  highlights: _resources2.default,
  formats: _formats2.default,
  resources: _resources.resources
});

exports.default = rootReducer;

},{"./formats":"/var/www/devbox/app/assets/scripts/reducers/formats.js","./resources":"/var/www/devbox/app/assets/scripts/reducers/resources.js","redux":"redux","redux-form":"redux-form"}],"/var/www/devbox/app/assets/scripts/reducers/resources.js":[function(require,module,exports){
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Pages
exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/', component: _app2.default },
  _react2.default.createElement(_reactRouter.IndexRoute, { component: _indexPage2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'descobrir', component: _discoverPage2.default })
);

},{"../containers/app":"/var/www/devbox/app/assets/scripts/containers/app.js","../pages/discoverPage":"/var/www/devbox/app/assets/scripts/pages/discoverPage.js","../pages/indexPage":"/var/www/devbox/app/assets/scripts/pages/indexPage.js","react":"react","react-router":"react-router"}]},{},["/var/www/devbox/app/assets/scripts/app.js"])


//# sourceMappingURL=bundle.js.map
