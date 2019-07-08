'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends')),
  _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread')),
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
  _lodash = _interopRequireDefault(require('lodash.omit')),
  _box = _interopRequireWildcard(require('../box')),
  _Button = _interopRequireDefault(require('./Button')),
  _classnames = _interopRequireDefault(require('classnames')),
  _isComponentOfType = _interopRequireDefault(require('../utils/is-component-of-type')),
  _theme = _interopRequireDefault(require('./theme.css')),
  ButtonGroup = (function(e) {
    function i() {
      var e, t;
      (0, _classCallCheck2.default)(this, i);
      for (var r = arguments.length, u = new Array(r), a = 0; a < r; a++) u[a] = arguments[a];
      return (
        (t = (0, _possibleConstructorReturn2.default)(
          this,
          (e = (0, _getPrototypeOf3.default)(i)).call.apply(e, [this].concat(u)),
        )),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(t), 'handleChange', function(e, r) {
          t.props.onChange && t.props.onChange(e, r);
        }),
        t
      );
    }
    return (
      (0, _inherits2.default)(i, e),
      (0, _createClass2.default)(i, [
        {
          key: 'render',
          value: function() {
            var a = this,
              e = this.props,
              r = e.children,
              t = e.className,
              u = e.segmented,
              i = e.value,
              l = (0, _objectWithoutProperties2.default)(e, ['children', 'className', 'segmented', 'value']),
              n = (0, _classnames.default)(
                _theme.default.group,
                (0, _defineProperty2.default)({}, _theme.default.segmented, u),
                t,
              );
            return _react.default.createElement(
              _box.default,
              (0, _extends2.default)({ 'data-teamleader-ui': 'button-group', className: n }, l),
              _react.default.Children.map(r, function(r) {
                if (!(0, _isComponentOfType.default)(_Button.default, r)) return r;
                var e = {};
                i &&
                  (e = {
                    active: r.props.value === i,
                    onClick: function(e) {
                      return a.handleChange(r.props.value, e);
                    },
                  });
                var t = (0, _lodash.default)(r.props, ['value']),
                  u = (0, _lodash.default)(l, ['onChange']);
                return _react.default.createElement(
                  r.type,
                  (0, _objectSpread2.default)({}, t, e, (0, _box.omitBoxProps)(u)),
                );
              }),
            );
          },
        },
      ]),
      i
    );
  })(_react.PureComponent);
ButtonGroup.defaultProps = { segmented: !1 };
var _default = ButtonGroup;
exports.default = _default;
