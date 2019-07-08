'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends')),
  _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties')),
  _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck')),
  _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass')),
  _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn')),
  _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf')),
  _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits')),
  _react = _interopRequireWildcard(require('react')),
  _propTypes = _interopRequireDefault(require('prop-types')),
  _Cell = _interopRequireDefault(require('./Cell')),
  _Row = _interopRequireDefault(require('./Row')),
  _classnames = _interopRequireDefault(require('classnames')),
  _theme = _interopRequireDefault(require('./theme.css')),
  FooterRow = (function(e) {
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
              r = e.className,
              t = e.children,
              i = e.sliceFrom,
              l = e.sliceTo,
              u = e.preserveSelectableSpace,
              a = (0, _objectWithoutProperties2.default)(e, [
                'className',
                'children',
                'sliceFrom',
                'sliceTo',
                'preserveSelectableSpace',
              ]),
              s = (Array.isArray(t) ? t : [t]).slice(i, l),
              o = (0, _classnames.default)(_theme.default['footer-row'], r);
            return _react.default.createElement(
              _Row.default,
              (0, _extends2.default)({ className: o, 'data-teamleader-ui': 'datagrid-footer-row' }, a),
              u && _react.default.createElement(_Cell.default, { flex: 'min-width' }),
              s,
            );
          },
        },
      ]),
      r
    );
  })(_react.PureComponent),
  _default = FooterRow;
exports.default = _default;
