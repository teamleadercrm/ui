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
  _index = _interopRequireDefault(require('./index')),
  _box = _interopRequireDefault(require('../box')),
  _isComponentOfType = _interopRequireDefault(require('../utils/is-component-of-type')),
  _lodash = _interopRequireDefault(require('lodash.omit')),
  RadioGroup = (function(e) {
    function u() {
      var e, t;
      (0, _classCallCheck2.default)(this, u);
      for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
      return (
        (t = (0, _possibleConstructorReturn2.default)(
          this,
          (e = (0, _getPrototypeOf3.default)(u)).call.apply(e, [this].concat(i)),
        )),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(t), 'handleChange', function(e, r) {
          t.props.onChange && t.props.onChange(e, r);
        }),
        t
      );
    }
    return (
      (0, _inherits2.default)(u, e),
      (0, _createClass2.default)(u, [
        {
          key: 'render',
          value: function() {
            var t = this,
              e = this.props,
              r = e.children,
              i = e.className,
              a = e.disabled,
              u = e.value,
              l = (0, _objectWithoutProperties2.default)(e, ['children', 'className', 'disabled', 'value']),
              n = (0, _lodash.default)(l, ['onChange']);
            return _react.default.createElement(
              _box.default,
              (0, _extends2.default)({ 'data-teamleader-ui': 'radio-group', className: i }, n),
              _react.default.Children.map(r, function(r) {
                return (0, _isComponentOfType.default)(_index.default, r)
                  ? _react.default.cloneElement(r, {
                      checked: r.props.value === u,
                      disabled: a || r.props.disabled,
                      onChange: function(e) {
                        return t.handleChange(r.props.value, e);
                      },
                    })
                  : r;
              }),
            );
          },
        },
      ]),
      u
    );
  })(_react.PureComponent);
RadioGroup.defaultProps = { className: '', disabled: !1 };
var _default = RadioGroup;
exports.default = _default;
