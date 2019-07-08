'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends')),
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
  _classnames = _interopRequireDefault(require('classnames')),
  _lodash = _interopRequireDefault(require('lodash.omit')),
  _theme = _interopRequireDefault(require('./theme.css')),
  _utils = require('../utils/utils'),
  SIZES = { small: 3, medium: 4, large: 5 },
  Section = (function(e) {
    function r() {
      return (
        (0, _classCallCheck2.default)(this, r),
        (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(r).apply(this, arguments))
      );
    }
    return (
      (0, _inherits2.default)(r, e),
      (0, _createClass2.default)(r, [
        {
          key: 'render',
          value: function() {
            var e = this.props,
              r = e.children,
              t = e.className,
              i = e.color,
              u = e.dark,
              l = e.size,
              a = (0, _objectWithoutProperties2.default)(e, ['children', 'className', 'color', 'dark', 'size']),
              s = (0, _utils.elementIsDark)(i, u),
              o = (0, _classnames.default)(
                _theme.default.section,
                t,
                _theme.default[i],
                (0, _defineProperty2.default)({}, _theme.default.dark, s),
              ),
              n = (0, _lodash.default)(a, ['dark']);
            return _react.default.createElement(
              _box.default,
              (0, _extends2.default)(
                { 'data-teamleader-ui': 'section', className: o, element: 'section', padding: SIZES[l] },
                n,
              ),
              r,
            );
          },
        },
      ]),
      r
    );
  })(_react.PureComponent);
Section.defaultProps = { color: 'white', size: 'medium' };
var _default = Section;
exports.default = _default;
