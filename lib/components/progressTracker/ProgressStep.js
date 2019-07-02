'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty')),
  _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck')),
  _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass')),
  _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn')),
  _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf')),
  _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits')),
  _react = _interopRequireWildcard(require('react')),
  _propTypes = _interopRequireDefault(require('prop-types')),
  _classnames = _interopRequireDefault(require('classnames')),
  _theme = _interopRequireDefault(require('./theme.css')),
  _box = _interopRequireDefault(require('../box')),
  _typography = require('../typography'),
  ProgressStep = (function(e) {
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
            var e,
              r = this.props,
              t = r.label,
              a = r.active,
              l = r.completed,
              u = r.color,
              i = (0, _classnames.default)(
                _theme.default.step,
                _theme.default[u],
                ((e = {}),
                (0, _defineProperty2.default)(e, _theme.default['is-active'], a),
                (0, _defineProperty2.default)(e, _theme.default['is-completed'], l),
                e),
              );
            return _react.default.createElement(
              _box.default,
              { className: i },
              _react.default.createElement(_typography.TextSmall, { className: _theme.default['step-label'] }, t),
              _react.default.createElement('span', { className: _theme.default['status-bullet'] }),
            );
          },
        },
      ]),
      r
    );
  })(_react.PureComponent);
ProgressStep.defaultProps = { color: 'neutral', active: !1, completed: !1 };
var _default = ProgressStep;
exports.default = _default;
