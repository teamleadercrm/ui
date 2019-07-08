'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));

var _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn'));

var _getPrototypeOf3 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _assertThisInitialized2 = _interopRequireDefault(require('@babel/runtime/helpers/assertThisInitialized'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _classnames = _interopRequireDefault(require('classnames'));

var _theme = _interopRequireDefault(require('./theme.css'));

var LoadingMolecule =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(LoadingMolecule, _PureComponent);

    function LoadingMolecule() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, LoadingMolecule);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(LoadingMolecule)).call.apply(
          _getPrototypeOf2,
          [this].concat(args),
        ),
      );
      (0, _defineProperty2.default)(
        (0, _assertThisInitialized2.default)(_this),
        'randomGradientPostFix',
        Math.random()
          .toString(16)
          .slice(2),
      );
      return _this;
    }

    (0, _createClass2.default)(LoadingMolecule, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            className = _this$props.className,
            basePath = _this$props.basePath,
            startColor = _this$props.startColor,
            stopColor = _this$props.stopColor,
            type = _this$props.type,
            others = (0, _objectWithoutProperties2.default)(_this$props, [
              'className',
              'basePath',
              'startColor',
              'stopColor',
              'type',
            ]);
          var classNames = (0, _classnames.default)(
            _theme.default['loading-molecule'],
            _theme.default[type],
            className,
          );
          var gradient1Name = 'linearGradient-1-'.concat(this.randomGradientPostFix);
          var gradient2Name = 'linearGradient-2-'.concat(this.randomGradientPostFix);
          var grandient1Source = 'url('.concat(basePath, '#').concat(gradient1Name, ')');
          var grandient2Source = 'url('.concat(basePath, '#').concat(gradient2Name, ')');
          return _react.default.createElement(
            'div',
            (0, _extends2.default)(
              {
                'data-teamleader-ui': 'loading-molecule',
                className: classNames,
              },
              others,
            ),
            _react.default.createElement(
              'svg',
              {
                className: 'loader',
                width: '100px',
                height: '56px',
                version: '1.1',
              },
              _react.default.createElement(
                'defs',
                null,
                _react.default.createElement(
                  'linearGradient',
                  {
                    x1: '63.2191022%',
                    y1: '50%',
                    x2: '21.8036493%',
                    y2: '115.713387%',
                    id: gradient1Name,
                  },
                  _react.default.createElement('stop', {
                    stopColor: startColor,
                    offset: '0%',
                  }),
                  _react.default.createElement('stop', {
                    stopColor: stopColor,
                    offset: '100%',
                  }),
                ),
                _react.default.createElement(
                  'linearGradient',
                  {
                    x1: '63.2191002%',
                    y1: '50%',
                    x2: '63.2191002%',
                    y2: '0%',
                    id: gradient2Name,
                  },
                  _react.default.createElement('stop', {
                    stopColor: startColor,
                    offset: '0%',
                  }),
                  _react.default.createElement('stop', {
                    stopColor: stopColor,
                    offset: '100%',
                  }),
                ),
              ),
              _react.default.createElement(
                'g',
                {
                  id: 'Content',
                  stroke: 'none',
                  strokeWidth: '1',
                  fill: 'none',
                  fillRule: 'evenodd',
                },
                _react.default.createElement('polyline', {
                  id: 'left-solid',
                  className: _theme.default['left-solid'],
                  fill: startColor,
                  points: '48.1016216 0.241175937 48.1016216 28.1174122 0.0416216216 28.1174122 48.1016216 0.241175937',
                }),
                _react.default.createElement('polyline', {
                  id: 'right-solid',
                  className: _theme.default['right-solid'],
                  fill: startColor,
                  points: '51.7081081 56.0633336 75.747027 42.0745849 51.7081081 0.241175937 51.7081081 56.0633336',
                }),
                _react.default.createElement('polyline', {
                  id: 'right-gradient',
                  className: _theme.default['right-gradient'],
                  fill: grandient1Source,
                  points: '67.7264865 28.1168678 75.747027 42.0745849 99.7772973 28.1168678 67.7264865 28.1168678',
                }),
                _react.default.createElement('polyline', {
                  id: 'left-gradient',
                  className: _theme.default['left-gradient'],
                  fill: grandient2Source,
                  points: '32.0897297 28.1174122 48.1016216 28.1174122 48.0843243 56.0736775 32.0897297 28.1174122',
                }),
              ),
            ),
          );
        },
      },
    ]);
    return LoadingMolecule;
  })(_react.PureComponent);

LoadingMolecule.defaultProps = {
  className: '',
  startColor: '#BABABA',
  stopColor: '#DADADA',
  type: 'normal',
};
var _default = LoadingMolecule;
exports.default = _default;
