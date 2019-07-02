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
  _classnames = _interopRequireDefault(require('classnames')),
  _theme = _interopRequireDefault(require('./theme.css')),
  _uiUtilities = _interopRequireDefault(require('@teamleader/ui-utilities')),
  IconButton = (function(e) {
    function l() {
      var e, t;
      (0, _classCallCheck2.default)(this, l);
      for (var r = arguments.length, i = new Array(r), u = 0; u < r; u++) i[u] = arguments[u];
      return (
        (t = (0, _possibleConstructorReturn2.default)(
          this,
          (e = (0, _getPrototypeOf3.default)(l)).call.apply(e, [this].concat(i)),
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
      (0, _inherits2.default)(l, e),
      (0, _createClass2.default)(l, [
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
              u = r.className,
              l = r.disabled,
              a = r.element,
              o = r.icon,
              s = r.size,
              n = r.color,
              p = r.type,
              d = (0, _objectWithoutProperties2.default)(r, [
                'children',
                'className',
                'disabled',
                'element',
                'icon',
                'size',
                'color',
                'type',
              ]),
              f = (0, _classnames.default)(
                _uiUtilities.default['reset-box-sizing'],
                _uiUtilities.default['reset-font-smoothing'],
                _theme.default['button-base'],
                _theme.default.button,
                _theme.default['icon-button'],
                _theme.default[n],
                ((e = {}),
                (0, _defineProperty2.default)(e, _theme.default['is-disabled'], l),
                (0, _defineProperty2.default)(e, _theme.default[s], _theme.default[s]),
                e),
                u,
              ),
              _ = (0, _objectSpread2.default)({}, d, {
                ref: function(e) {
                  t.buttonNode = e;
                },
                className: f,
                disabled: 'button' === a ? l : null,
                onMouseUp: this.handleMouseUp,
                onMouseLeave: this.handleMouseLeave,
                type: 'button' === a ? p : null,
                'data-teamleader-ui': 'button',
              });
            return _react.default.createElement(a, _, o, i);
          },
        },
      ]),
      l
    );
  })(_react.Component);
IconButton.defaultProps = { className: '', element: 'button', size: 'medium', color: 'neutral', type: 'button' };
var _default = IconButton;
exports.default = _default;
