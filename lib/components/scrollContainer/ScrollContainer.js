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
  _classnames = _interopRequireDefault(require('classnames')),
  _propTypes = _interopRequireDefault(require('prop-types')),
  _box = require('../box'),
  _theme = _interopRequireDefault(require('./theme.css')),
  ScrollContainer = (function(e) {
    function r() {
      return (
        (0, _classCallCheck2.default)(this, r),
        (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(r).apply(this, arguments))
      );
    }
    return (
      (0, _inherits2.default)(r, e),
      (0, _createClass2.default)(r, [
        {
          key: 'render',
          value: function() {
            var e = this.props,
              r = e.className,
              t = e.header,
              a = e.body,
              l = e.footer,
              u = (0, _objectWithoutProperties2.default)(e, ['className', 'header', 'body', 'footer']),
              i = (0, _classnames.default)(_theme.default['scroll-container'], r);
            return _react.default.createElement(
              _box.Box,
              (0, _extends2.default)({ className: i, display: 'flex', flexDirection: 'column' }, u),
              t && _react.default.createElement('header', { className: _theme.default['scroll-container-header'] }, t),
              a &&
                _react.default.createElement(
                  'div',
                  { className: _theme.default['scroll-container-body'] },
                  _react.default.createElement(_box.Box, { flex: '1' }, a),
                ),
              l && _react.default.createElement('footer', { className: _theme.default['scroll-container-footer'] }, l),
            );
          },
        },
      ]),
      r
    );
  })(_react.PureComponent),
  _default = ScrollContainer;
exports.default = _default;
