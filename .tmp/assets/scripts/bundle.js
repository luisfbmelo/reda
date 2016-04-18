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

},{}],"/var/www/devbox/app/assets/scripts/actions/resources.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchHighlights = fetchHighlights;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _actionTypes = require('../actions/action-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function fetchHighlights() {
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

},{"../actions/action-types":"/var/www/devbox/app/assets/scripts/actions/action-types.js","isomorphic-fetch":"isomorphic-fetch"}],"/var/www/devbox/app/assets/scripts/app.js":[function(require,module,exports){
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

},{"./reducers":"/var/www/devbox/app/assets/scripts/reducers/index.js","./routes":"/var/www/devbox/app/assets/scripts/routes/index.js","react":"react","react-dom":"react-dom","react-redux":"react-redux","react-router":"react-router","redux":"redux","redux-thunk":"redux-thunk"}],"/var/www/devbox/app/assets/scripts/components/navigation/topNav.js":[function(require,module,exports){
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

},{"react":"react","react-bootstrap":"react-bootstrap"}],"/var/www/devbox/app/assets/scripts/components/resources/highlights.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

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

},{"./carousel":"/var/www/devbox/app/assets/scripts/components/resources/carousel.js","react":"react","react-redux":"react-redux"}],"/var/www/devbox/app/assets/scripts/components/search/searchForm.js":[function(require,module,exports){
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
							{ className: 'col-xs-2' },
							_react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'keywords', placeholder: 'Palavras-chave' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-xs-2' },
							_react2.default.createElement(
								'select',
								{ className: 'form-control' },
								_react2.default.createElement(
									'option',
									null,
									'Disciplina'
								),
								_react2.default.createElement(
									'option',
									null,
									'2'
								),
								_react2.default.createElement(
									'option',
									null,
									'3'
								),
								_react2.default.createElement(
									'option',
									null,
									'4'
								)
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-xs-2' },
							_react2.default.createElement(
								'select',
								{ className: 'form-control' },
								_react2.default.createElement(
									'option',
									null,
									'Domínio'
								),
								_react2.default.createElement(
									'option',
									null,
									'2'
								),
								_react2.default.createElement(
									'option',
									null,
									'3'
								),
								_react2.default.createElement(
									'option',
									null,
									'4'
								)
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-xs-2' },
							_react2.default.createElement(
								'select',
								{ className: 'form-control' },
								_react2.default.createElement(
									'option',
									null,
									'Formato'
								),
								_react2.default.createElement(
									'option',
									null,
									'2'
								),
								_react2.default.createElement(
									'option',
									null,
									'3'
								),
								_react2.default.createElement(
									'option',
									null,
									'4'
								)
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-xs-2' },
							_react2.default.createElement(
								'select',
								{ className: 'form-control' },
								_react2.default.createElement(
									'option',
									null,
									'Ano'
								),
								_react2.default.createElement(
									'option',
									null,
									'2'
								),
								_react2.default.createElement(
									'option',
									null,
									'3'
								),
								_react2.default.createElement(
									'option',
									null,
									'4'
								)
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-xs-2' },
							_react2.default.createElement(
								'button',
								{ type: 'submit', className: 'cta primary' },
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

},{"react":"react","react-redux":"react-redux"}],"/var/www/devbox/app/assets/scripts/containers/app.js":[function(require,module,exports){
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

},{"react":"react"}],"/var/www/devbox/app/assets/scripts/containers/header/index.js":[function(require,module,exports){
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

},{"../../actions/resources":"/var/www/devbox/app/assets/scripts/actions/resources.js","../../components/resources/highlights":"/var/www/devbox/app/assets/scripts/components/resources/highlights.js","react":"react","react-redux":"react-redux","redux":"redux"}],"/var/www/devbox/app/assets/scripts/containers/search/index.js":[function(require,module,exports){
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

var SearchBar = function (_Component) {
	_inherits(SearchBar, _Component);

	function SearchBar() {
		_classCallCheck(this, SearchBar);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SearchBar).apply(this, arguments));
	}

	_createClass(SearchBar, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_searchForm2.default, null);
		}
	}]);

	return SearchBar;
}(_react.Component);

exports.default = SearchBar;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
        _react2.default.createElement(_header2.default, { location: this.props.location })
      );
    }
  }]);

  return IndexPage;
}(_react.Component);

exports.default = IndexPage;

},{"../containers/header":"/var/www/devbox/app/assets/scripts/containers/header/index.js","react":"react"}],"/var/www/devbox/app/assets/scripts/reducers/index.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reduxForm = require('redux-form');

var _resources = require('./resources');

var _resources2 = _interopRequireDefault(_resources);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  form: _reduxForm.reducer,
  highlights: _resources2.default
});

exports.default = rootReducer;

},{"./resources":"/var/www/devbox/app/assets/scripts/reducers/resources.js","redux":"redux","redux-form":"redux-form"}],"/var/www/devbox/app/assets/scripts/reducers/resources.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.HIGHLIGHTS_REQUEST:
      return Object.assign({}, state, {
        fetching: true
      });
    case _actionTypes.HIGHLIGHTS_SUCCESS:

      return Object.assign({}, state, {
        fetching: false,
        fetched: true,
        data: action.data
      });
    case _actionTypes.HIGHLIGHTS_FAILURE:
      return Object.assign({}, state, {
        fetching: false,
        errorMessage: action.message
      });
    default:
      return state;
  }
};

var _actionTypes = require('../actions/action-types');

var INITIAL_STATE = { fetching: false, fetched: false, data: null, errorMessage: null };

},{"../actions/action-types":"/var/www/devbox/app/assets/scripts/actions/action-types.js"}],"/var/www/devbox/app/assets/scripts/routes/index.js":[function(require,module,exports){
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
