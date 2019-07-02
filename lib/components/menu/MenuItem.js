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
  _typography = require('../typography'),
  _classnames = _interopRequireDefault(require('classnames')),
  _theme = _interopRequireDefault(require('./theme.css')),
  MenuItem = (function(e) {
    function l() {
      var e, a;
      (0, _classCallCheck2.default)(this, l);
      for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
      return (
        (a = (0, _possibleConstructorReturn2.default)(
          this,
          (e = (0, _getPrototypeOf3.default)(l)).call.apply(e, [this].concat(r)),
        )),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(a), 'handleClick', function(e) {
          var t = a.props,
            r = t.disabled,
            i = t.onClick;
          i && !r && i(e, (0, _assertThisInitialized2.default)(a));
        }),
        a
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
              r = t.icon,
              i = t.caption,
              a = t.className,
              l = t.destructive,
              u = t.selected,
              s = t.disabled,
              n = (0, _objectWithoutProperties2.default)(t, [
                'icon',
                'caption',
                'className',
                'destructive',
                'selected',
                'disabled',
              ]),
              o = (0, _classnames.default)(
                _theme.default['menu-item'],
                ((e = {}),
                (0, _defineProperty2.default)(e, _theme.default['is-selected'], u),
                (0, _defineProperty2.default)(e, _theme.default['is-disabled'], s),
                e),
                a,
              ),
              d = l ? 'ruby' : s ? 'neutral' : 'teal',
              p = s && l ? 'light' : s || l ? 'dark' : 'darkest';
            return _react.default.createElement(
              _box.default,
              (0, _extends2.default)({}, n, {
                alignItems: 'center',
                className: o,
                'data-teamleader-ui': 'menu-item',
                display: 'flex',
                element: 'li',
                onClick: this.handleClick,
                paddingHorizontal: 3,
              }),
              r && _react.default.createElement(_icon.default, { color: d, tint: p, marginRight: 3 }, r),
              _react.default.createElement(_typography.TextBody, { color: d, tint: p, element: 'span' }, i),
            );
          },
        },
      ]),
      l
    );
  })(_react.PureComponent);
MenuItem.defaultProps = { className: '', destructive: !1, disabled: !1, selected: !1 };
var _default = MenuItem;
exports.default = _default;
