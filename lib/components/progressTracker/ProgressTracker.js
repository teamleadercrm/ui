'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends')),
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
  _ProgressStep = _interopRequireDefault(require('./ProgressStep')),
  ProgressTracker = (function(e) {
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
              a = e.color,
              r = e.children,
              u = e.currentStep,
              s = e.done,
              t = (0, _classnames.default)(_theme.default.tracker);
            return _react.default.createElement(
              _box.default,
              { className: t },
              _react.default.Children.map(r, function(e, r) {
                var t = Math.max(0, u);
                return _react.default.createElement(
                  _ProgressStep.default,
                  (0, _extends2.default)({}, e.props, { active: !s && r === t, completed: s || r < t, color: a }),
                );
              }),
            );
          },
        },
      ]),
      r
    );
  })(_react.PureComponent);
(ProgressTracker.defaultProps = { currentStep: 0, color: 'neutral' }),
  (ProgressTracker.ProgressStep = _ProgressStep.default),
  (ProgressTracker.ProgressStep.displayName = 'ProgressTracker.ProgressStep');
var _default = ProgressTracker;
exports.default = _default;
