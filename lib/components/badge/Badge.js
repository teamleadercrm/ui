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
  _box = _interopRequireDefault(require('../box')),
  _icon = _interopRequireDefault(require('../icon')),
  _constants = require('../../constants'),
  _typography = require('../typography'),
  _classnames = _interopRequireDefault(require('classnames')),
  _theme = _interopRequireDefault(require('./theme.css')),
  Badge = (function(e) {
    function l() {
      var e, i;
      (0, _classCallCheck2.default)(this, l);
      for (var t = arguments.length, r = new Array(t), a = 0; a < t; a++) r[a] = arguments[a];
      return (
        (i = (0, _possibleConstructorReturn2.default)(
          this,
          (e = (0, _getPrototypeOf3.default)(l)).call.apply(e, [this].concat(r)),
        )),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(i), 'badgeNode', (0, _react.createRef)()),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(i), 'handleMouseUp', function(e) {
          i.badgeNode.current.boxNode.current.blur(), i.props.onMouseUp && i.props.onMouseUp(e);
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(i), 'handleMouseLeave', function(e) {
          i.badgeNode.current.boxNode.current.blur(), i.props.onMouseLeave && i.props.onMouseLeave(e);
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(i), 'renderIcon', function() {
          var e = i.props,
            t = e.color,
            r = e.icon,
            a = e.inverse;
          return _react.default.createElement(
            _icon.default,
            { className: _theme.default.icon, color: 'neutral' === t ? 'teal' : t, tint: a ? 'lightest' : 'darkest' },
            r,
          );
        }),
        i
      );
    }
    return (
      (0, _inherits2.default)(l, e),
      (0, _createClass2.default)(l, [
        {
          key: 'render',
          value: function() {
            var e,
              t = this.props,
              r = t.children,
              a = t.className,
              i = t.disabled,
              l = t.element,
              n = t.icon,
              u = t.iconPlacement,
              o = t.inherit,
              s = t.inverse,
              d = t.color,
              p = (0, _objectWithoutProperties2.default)(t, [
                'children',
                'className',
                'disabled',
                'element',
                'icon',
                'iconPlacement',
                'inherit',
                'inverse',
                'color',
              ]),
              c = (0, _classnames.default)(
                _theme.default.badge,
                _theme.default[d],
                ((e = {}),
                (0, _defineProperty2.default)(e, _theme.default['is-disabled'], i),
                (0, _defineProperty2.default)(e, _theme.default['is-inherit'], o),
                (0, _defineProperty2.default)(e, _theme.default['is-inverse'], s),
                e),
                a,
              );
            return _react.default.createElement(
              _box.default,
              (0, _extends2.default)(
                {
                  className: c,
                  'data-teamleader-ui': 'badge',
                  element: l,
                  ref: this.badgeNode,
                  onMouseUp: this.handleMouseUp,
                  onMouseLeave: this.handleMouseLeave,
                  paddingHorizontal: 2,
                  paddingVertical: 1,
                },
                p,
              ),
              n && 'left' === u && this.renderIcon(),
              o
                ? _react.default.createElement('span', { className: _theme.default.label }, r)
                : _react.default.createElement(
                    _typography.TextBody,
                    { className: _theme.default.label, element: 'span' },
                    r,
                  ),
              n && 'right' === u && this.renderIcon(),
            );
          },
        },
      ]),
      l
    );
  })(_react.PureComponent);
Badge.defaultProps = {
  disabled: !1,
  element: 'button',
  iconPlacement: 'left',
  inherit: !0,
  inverse: !1,
  color: 'neutral',
};
var _default = Badge;
exports.default = _default;
