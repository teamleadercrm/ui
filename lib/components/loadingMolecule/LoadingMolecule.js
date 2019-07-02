'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends')),
  _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties')),
  _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck')),
  _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass')),
  _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn')),
  _getPrototypeOf3 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf')),
  _assertThisInitialized2 = _interopRequireDefault(require('@babel/runtime/helpers/assertThisInitialized')),
  _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits')),
  _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty')),
  _react = _interopRequireWildcard(require('react')),
  _propTypes = _interopRequireDefault(require('prop-types')),
  _classnames = _interopRequireDefault(require('classnames')),
  _theme = _interopRequireDefault(require('./theme.css')),
  LoadingMolecule = (function(e) {
    function i() {
      var e, t;
      (0, _classCallCheck2.default)(this, i);
      for (var r = arguments.length, a = new Array(r), l = 0; l < r; l++) a[l] = arguments[l];
      return (
        (t = (0, _possibleConstructorReturn2.default)(
          this,
          (e = (0, _getPrototypeOf3.default)(i)).call.apply(e, [this].concat(a)),
        )),
        (0, _defineProperty2.default)(
          (0, _assertThisInitialized2.default)(t),
          'randomGradientPostFix',
          Math.random()
            .toString(16)
            .slice(2),
        ),
        t
      );
    }
    return (
      (0, _inherits2.default)(i, e),
      (0, _createClass2.default)(i, [
        {
          key: 'render',
          value: function() {
            var e = this.props,
              t = e.className,
              r = e.basePath,
              a = e.startColor,
              l = e.stopColor,
              i = e.type,
              o = (0, _objectWithoutProperties2.default)(e, [
                'className',
                'basePath',
                'startColor',
                'stopColor',
                'type',
              ]),
              s = (0, _classnames.default)(_theme.default['loading-molecule'], _theme.default[i], t),
              n = 'linearGradient-1-'.concat(this.randomGradientPostFix),
              u = 'linearGradient-2-'.concat(this.randomGradientPostFix),
              d = 'url('.concat(r, '#').concat(n, ')'),
              c = 'url('.concat(r, '#').concat(u, ')');
            return _react.default.createElement(
              'div',
              (0, _extends2.default)({ 'data-teamleader-ui': 'loading-molecule', className: s }, o),
              _react.default.createElement(
                'svg',
                { className: 'loader', width: '100px', height: '56px', version: '1.1' },
                _react.default.createElement(
                  'defs',
                  null,
                  _react.default.createElement(
                    'linearGradient',
                    { x1: '63.2191022%', y1: '50%', x2: '21.8036493%', y2: '115.713387%', id: n },
                    _react.default.createElement('stop', { stopColor: a, offset: '0%' }),
                    _react.default.createElement('stop', { stopColor: l, offset: '100%' }),
                  ),
                  _react.default.createElement(
                    'linearGradient',
                    { x1: '63.2191002%', y1: '50%', x2: '63.2191002%', y2: '0%', id: u },
                    _react.default.createElement('stop', { stopColor: a, offset: '0%' }),
                    _react.default.createElement('stop', { stopColor: l, offset: '100%' }),
                  ),
                ),
                _react.default.createElement(
                  'g',
                  { id: 'Content', stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
                  _react.default.createElement('polyline', {
                    id: 'left-solid',
                    className: _theme.default['left-solid'],
                    fill: a,
                    points:
                      '48.1016216 0.241175937 48.1016216 28.1174122 0.0416216216 28.1174122 48.1016216 0.241175937',
                  }),
                  _react.default.createElement('polyline', {
                    id: 'right-solid',
                    className: _theme.default['right-solid'],
                    fill: a,
                    points: '51.7081081 56.0633336 75.747027 42.0745849 51.7081081 0.241175937 51.7081081 56.0633336',
                  }),
                  _react.default.createElement('polyline', {
                    id: 'right-gradient',
                    className: _theme.default['right-gradient'],
                    fill: d,
                    points: '67.7264865 28.1168678 75.747027 42.0745849 99.7772973 28.1168678 67.7264865 28.1168678',
                  }),
                  _react.default.createElement('polyline', {
                    id: 'left-gradient',
                    className: _theme.default['left-gradient'],
                    fill: c,
                    points: '32.0897297 28.1174122 48.1016216 28.1174122 48.0843243 56.0736775 32.0897297 28.1174122',
                  }),
                ),
              ),
            );
          },
        },
      ]),
      i
    );
  })(_react.PureComponent);
LoadingMolecule.defaultProps = { className: '', startColor: '#BABABA', stopColor: '#DADADA', type: 'normal' };
var _default = LoadingMolecule;
exports.default = _default;
