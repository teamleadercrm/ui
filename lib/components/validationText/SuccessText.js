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
  _uiIcons = require('@teamleader/ui-icons'),
  _typography = require('../typography'),
  _box = _interopRequireDefault(require('../box')),
  _icon = _interopRequireDefault(require('../icon')),
  SuccessText = (function(e) {
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
              r = e.children,
              t = e.className,
              i = e.inverse,
              l = (0, _objectWithoutProperties2.default)(e, ['children', 'className', 'inverse']);
            return _react.default.createElement(
              _box.default,
              (0, _extends2.default)(
                {
                  className: t,
                  alignItems: 'center',
                  'data-teamleader-ui': 'success-text',
                  display: 'flex',
                  marginTop: 2,
                },
                l,
              ),
              _react.default.createElement(
                _icon.default,
                { color: 'mint', tint: i ? 'light' : 'dark' },
                _react.default.createElement(_uiIcons.IconCheckmarkSmallFilled, null),
              ),
              _react.default.createElement(
                _typography.TextSmall,
                { color: 'mint', element: 'span', marginLeft: 1, tint: i ? 'light' : 'dark' },
                r,
              ),
            );
          },
        },
      ]),
      r
    );
  })(_react.PureComponent);
(exports.default = SuccessText).defaultProps = { children: 'This is the success text', inverse: !1 };
