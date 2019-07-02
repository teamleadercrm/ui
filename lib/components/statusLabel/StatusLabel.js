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
  _uiUtilities = _interopRequireDefault(require('@teamleader/ui-utilities')),
  SIZES = { medium: { paddingHorizontal: 2, paddingVertical: 1 }, small: { paddingHorizontal: 2 } },
  StatusLabel = (function(e) {
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
              i = e.color,
              u = e.size,
              a = (0, _objectWithoutProperties2.default)(e, ['children', 'className', 'color', 'size']),
              l = (0, _classnames.default)(
                _uiUtilities.default['reset-font-smoothing'],
                _theme.default.label,
                _theme.default[i],
                _theme.default[u],
                r,
              );
            return _react.default.createElement(
              _box.default,
              (0, _extends2.default)({ className: l, element: 'span' }, SIZES[u], a, {
                'data-teamleader-ui': 'status-label',
              }),
              t,
            );
          },
        },
      ]),
      t
    );
  })(_react.PureComponent);
StatusLabel.defaultProps = { color: 'neutral', size: 'medium' };
var _default = StatusLabel;
exports.default = _default;
