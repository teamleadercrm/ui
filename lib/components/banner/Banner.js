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
  _island = _interopRequireDefault(require('../island')),
  _section = _interopRequireDefault(require('../section')),
  _button = require('../button'),
  _theme = _interopRequireDefault(require('./theme.css')),
  _uiIcons = require('@teamleader/ui-icons'),
  Banner = (function(e) {
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
          key: 'getCloseButtonColor',
          value: function() {
            var e = this.props.color;
            return 'white' === e ? 'neutral' : e;
          },
        },
        {
          key: 'render',
          value: function() {
            var e = this.props,
              t = e.children,
              r = e.className,
              l = e.icon,
              u = e.onClose,
              a = e.fullWidth,
              i = (0, _objectWithoutProperties2.default)(e, ['children', 'className', 'icon', 'onClose', 'fullWidth']),
              n = a ? _section.default : _island.default;
            return _react.default.createElement(
              n,
              (0, _extends2.default)({ 'data-teamleader-ui': 'banner', className: r }, i),
              _react.default.createElement(
                'div',
                { className: _theme.default.inner },
                l && _react.default.createElement('span', { className: _theme.default.icon }, l),
                _react.default.createElement('span', { className: _theme.default.content }, t),
                u &&
                  _react.default.createElement(_button.IconButton, {
                    className: _theme.default['close-button'],
                    icon: _react.default.createElement(_uiIcons.IconCloseMediumOutline, null),
                    color: this.getCloseButtonColor(),
                    onClick: u,
                  }),
              ),
            );
          },
        },
      ]),
      t
    );
  })(_react.PureComponent);
Banner.defaultProps = { color: 'white' };
var _default = Banner;
exports.default = _default;
