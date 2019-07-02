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
  _box = _interopRequireWildcard(require('../box')),
  _classnames = _interopRequireDefault(require('classnames')),
  _theme = _interopRequireDefault(require('./theme.css')),
  _typography = require('../typography'),
  AvatarInitials = (function(e) {
    function l() {
      var e, a;
      (0, _classCallCheck2.default)(this, l);
      for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
      return (
        (a = (0, _possibleConstructorReturn2.default)(
          this,
          (e = (0, _getPrototypeOf3.default)(l)).call.apply(e, [this].concat(r)),
        )),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(a), 'getInitials', function() {
          var e = a.props.name.split(' '),
            t = e[0].charAt(0);
          if (1 < e.length) {
            var r = e[e.length - 1].charAt(0);
            return ''.concat(t).concat(r);
          }
          return t;
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
            var e = this.props,
              t = e.className,
              r = e.color,
              a = e.shape,
              i = e.size,
              l = (0, _objectWithoutProperties2.default)(e, ['className', 'color', 'shape', 'size']),
              u = (0, _classnames.default)(
                _theme.default['avatar-initials'],
                _theme.default['is-'.concat(i)],
                _theme.default['is-'.concat(a)],
                _theme.default[r],
                t,
              ),
              s = (0, _box.pickBoxProps)(l);
            return _react.default.createElement(
              _box.default,
              (0, _extends2.default)({ className: u }, s, { 'data-teamleader-ui': 'avatar-initials' }),
              _react.default.createElement(
                _typography.Heading4,
                { className: _theme.default.content },
                this.getInitials(),
              ),
            );
          },
        },
      ]),
      l
    );
  })(_react.PureComponent);
AvatarInitials.defaultProps = { shape: 'circle', size: 'medium', name: 'Michael Scott' };
var _default = AvatarInitials;
exports.default = _default;
