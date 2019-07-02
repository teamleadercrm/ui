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
  _SingleLineInputBase = _interopRequireDefault(require('./SingleLineInputBase')),
  Input = (function(e) {
    function a() {
      var e, r;
      (0, _classCallCheck2.default)(this, a);
      for (var t = arguments.length, i = new Array(t), u = 0; u < t; u++) i[u] = arguments[u];
      return (
        (r = (0, _possibleConstructorReturn2.default)(
          this,
          (e = (0, _getPrototypeOf3.default)(a)).call.apply(e, [this].concat(i)),
        )),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(r), 'state', { value: '' }),
        r
      );
    }
    return (
      (0, _inherits2.default)(a, e),
      (0, _createClass2.default)(
        a,
        [
          {
            key: 'render',
            value: function() {
              var r = this,
                e = this.props,
                t = e.onChange,
                i = (0, _objectWithoutProperties2.default)(e, ['onChange']);
              return _react.default.createElement(
                _SingleLineInputBase.default,
                (0, _extends2.default)(
                  {
                    value: this.state.value,
                    onChange: function(e) {
                      r.setState({ value: e.currentTarget.value }), t && t(e, e.currentTarget.value);
                    },
                  },
                  i,
                ),
              );
            },
          },
        ],
        [
          {
            key: 'getDerivedStateFromProps',
            value: function(e, r) {
              if (void 0 !== e.value) {
                var t = e.value || '';
                if (t !== r.value) return { value: t };
              }
              return null;
            },
          },
        ],
      ),
      a
    );
  })(_react.PureComponent);
Input.defaultProps = { type: 'text' };
var _default = Input;
exports.default = _default;
