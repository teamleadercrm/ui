'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
var _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread')),
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
  _loadingSpinner = _interopRequireDefault(require('../loadingSpinner')),
  _classnames = _interopRequireDefault(require('classnames')),
  _theme = _interopRequireDefault(require('./theme.css')),
  _uiUtilities = _interopRequireDefault(require('@teamleader/ui-utilities')),
  Button = (function(e) {
    function a() {
      var e, t;
      (0, _classCallCheck2.default)(this, a);
      for (var r = arguments.length, i = new Array(r), l = 0; l < r; l++) i[l] = arguments[l];
      return (
        (t = (0, _possibleConstructorReturn2.default)(
          this,
          (e = (0, _getPrototypeOf3.default)(a)).call.apply(e, [this].concat(i)),
        )),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(t), 'handleMouseUp', function(e) {
          t.blur(), t.props.onMouseUp && t.props.onMouseUp(e);
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(t), 'handleMouseLeave', function(e) {
          t.blur(), t.props.onMouseLeave && t.props.onMouseLeave(e);
        }),
        t
      );
    }
    return (
      (0, _inherits2.default)(a, e),
      (0, _createClass2.default)(a, [
        {
          key: 'getSpinnerColor',
          value: function() {
            var e = this.props,
              t = e.inverse;
            switch (e.level) {
              case 'secondary':
                return 'teal';
              case 'outline':
                return t ? 'neutral' : 'teal';
              case 'link':
                return t ? 'neutral' : 'aqua';
              default:
                return 'neutral';
            }
          },
        },
        {
          key: 'getSpinnerTint',
          value: function() {
            var e = this.props,
              t = e.inverse;
            switch (e.level) {
              case 'secondary':
                return 'darkest';
              case 'outline':
                return t ? 'lightest' : 'darkest';
              case 'link':
                return t ? 'lightest' : 'dark';
              default:
                return 'lightest';
            }
          },
        },
        {
          key: 'blur',
          value: function() {
            this.buttonNode.blur && this.buttonNode.blur();
          },
        },
        {
          key: 'render',
          value: function() {
            var e,
              t = this,
              r = this.props,
              i = r.children,
              l = r.className,
              a = r.level,
              u = r.disabled,
              n = r.element,
              s = r.active,
              o = r.fullWidth,
              d = r.icon,
              p = r.iconPlacement,
              f = r.inverse,
              c = r.label,
              _ = r.size,
              h = r.type,
              b = r.processing,
              m = (0, _objectWithoutProperties2.default)(r, [
                'children',
                'className',
                'level',
                'disabled',
                'element',
                'active',
                'fullWidth',
                'icon',
                'iconPlacement',
                'inverse',
                'label',
                'size',
                'type',
                'processing',
              ]),
              q = (0, _classnames.default)(
                _uiUtilities.default['reset-box-sizing'],
                _uiUtilities.default['reset-font-smoothing'],
                _theme.default['button-base'],
                _theme.default.button,
                _theme.default[a],
                ((e = {}),
                (0, _defineProperty2.default)(
                  e,
                  _theme.default['has-icon-only'],
                  (!i && !c) || (Array.isArray(i) && !i[0] && !c),
                ),
                (0, _defineProperty2.default)(e, _theme.default['is-inverse'], f && ('outline' === a || 'link' === a)),
                (0, _defineProperty2.default)(e, _theme.default['is-disabled'], u),
                (0, _defineProperty2.default)(e, _theme.default['is-full-width'], o),
                (0, _defineProperty2.default)(e, _theme.default['is-processing'], b),
                (0, _defineProperty2.default)(e, _theme.default['is-active'], s),
                (0, _defineProperty2.default)(e, _theme.default[_], _theme.default[_]),
                e),
                l,
              ),
              v = (0, _objectSpread2.default)({}, m, {
                ref: function(e) {
                  t.buttonNode = e;
                },
                className: q,
                disabled: 'button' === n ? u : null,
                onMouseUp: this.handleMouseUp,
                onMouseLeave: this.handleMouseLeave,
                type: 'button' === n ? h : null,
                'data-teamleader-ui': 'button',
              });
            return _react.default.createElement(
              n,
              v,
              d && 'left' === p && d,
              (c || i) && _react.default.createElement('span', null, c, i),
              d && 'right' === p && d,
              b &&
                _react.default.createElement(_loadingSpinner.default, {
                  className: _theme.default.spinner,
                  color: this.getSpinnerColor(),
                  size: 'small' === _ ? 'small' : 'medium',
                  tint: this.getSpinnerTint(),
                }),
            );
          },
        },
      ]),
      a
    );
  })(_react.PureComponent);
Button.defaultProps = {
  className: '',
  element: 'button',
  fullWidth: !1,
  level: 'secondary',
  iconPlacement: 'left',
  inverse: !1,
  processing: !1,
  size: 'medium',
  type: 'button',
};
var _default = Button;
exports.default = _default;
