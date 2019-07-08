'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends')),
  _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties')),
  _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck')),
  _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass')),
  _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn')),
  _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf')),
  _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits')),
  _react = _interopRequireWildcard(require('react')),
  _propTypes = _interopRequireDefault(require('prop-types')),
  _box = _interopRequireDefault(require('../box')),
  _classnames = _interopRequireDefault(require('classnames')),
  _theme = _interopRequireDefault(require('./theme.css')),
  Avatar = (function(e) {
    function t() {
      return (
        (0, _classCallCheck2.default)(this, t),
        (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(t).apply(this, arguments))
      );
    }
    return (
      (0, _inherits2.default)(t, e),
      (0, _createClass2.default)(t, [
        {
          key: 'render',
          value: function() {
            var e = this.props,
              t = e.children,
              r = e.className,
              a = e.image,
              i = e.imageAlt,
              l = e.imageClassName,
              u = e.shape,
              s = e.size,
              n = (0, _objectWithoutProperties2.default)(e, [
                'children',
                'className',
                'image',
                'imageAlt',
                'imageClassName',
                'shape',
                'size',
              ]),
              o = (0, _classnames.default)(
                _theme.default.avatar,
                _theme.default['is-'.concat(u)],
                _theme.default['is-'.concat(s)],
                r,
              );
            return _react.default.createElement(
              _box.default,
              (0, _extends2.default)({ className: o }, n, { 'data-teamleader-ui': 'avatar' }),
              _react.default.createElement('img', {
                alt: i,
                src: a,
                className: (0, _classnames.default)(_theme.default.image, l),
              }),
              t && _react.default.createElement('div', { className: _theme.default.children }, t),
            );
          },
        },
      ]),
      t
    );
  })(_react.PureComponent);
Avatar.defaultProps = { shape: 'circle', size: 'medium' };
var _default = Avatar;
exports.default = _default;
