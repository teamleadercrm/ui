'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends')),
  _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread')),
  _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty')),
  _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties')),
  _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck')),
  _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass')),
  _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn')),
  _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf')),
  _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits')),
  _react = _interopRequireWildcard(require('react')),
  _propTypes = _interopRequireDefault(require('prop-types')),
  _box = _interopRequireDefault(require('../box')),
  _typography = require('../typography'),
  _theme = _interopRequireDefault(require('./theme.css')),
  _classnames = _interopRequireDefault(require('classnames')),
  Label = (function(e) {
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
          key: 'render',
          value: function() {
            var e = this.props,
              t = e.children,
              r = e.connectedLeft,
              a = e.connectedRight,
              l = e.className,
              i = e.inverse,
              u = e.helpText,
              n = e.required,
              s = e.size,
              o = (0, _objectWithoutProperties2.default)(e, [
                'children',
                'connectedLeft',
                'connectedRight',
                'className',
                'inverse',
                'helpText',
                'required',
                'size',
              ]),
              p = { inverse: i, marginTop: 1, size: s },
              c = (0, _classnames.default)(
                _theme.default.label,
                (0, _defineProperty2.default)({}, _theme.default['is-inverse'], i),
                l,
              ),
              d = 'large' === s ? _typography.TextDisplay : _typography.TextBody;
            return _react.default.createElement(
              _box.default,
              (0, _extends2.default)({ element: 'label', marginBottom: 3, className: c }, o),
              _react.default.Children.map(t, function(e) {
                return 'string' != typeof e
                  ? _react.default.cloneElement(e, (0, _objectSpread2.default)({}, p, e.props))
                  : _react.default.createElement(
                      _box.default,
                      { display: 'flex', alignItems: 'center' },
                      r && _react.default.createElement(_box.default, { element: 'span', marginRight: 1 }, r),
                      _react.default.createElement(
                        d,
                        { color: i ? 'neutral' : 'teal', tint: i ? 'lightest' : 'darkest', element: 'span' },
                        e,
                      ),
                      !n &&
                        _react.default.createElement(
                          _typography.TextSmall,
                          {
                            color: i ? 'teal' : 'neutral',
                            element: 'span',
                            marginLeft: 1,
                            tint: i ? 'light' : 'darkest',
                          },
                          u,
                        ),
                      a && _react.default.createElement(_box.default, { element: 'span', marginLeft: 1 }, a),
                    );
              }),
            );
          },
        },
      ]),
      t
    );
  })(_react.PureComponent);
(exports.default = Label).defaultProps = { inverse: !1, helpText: 'Optional', required: !1, size: 'medium' };
