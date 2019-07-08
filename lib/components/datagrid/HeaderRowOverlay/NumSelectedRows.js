'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck')),
  _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass')),
  _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn')),
  _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf')),
  _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits')),
  _react = _interopRequireWildcard(require('react')),
  _propTypes = _interopRequireDefault(require('prop-types')),
  _box = _interopRequireDefault(require('../../box')),
  _typography = require('../../typography'),
  NumSelectedRows = (function(e) {
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
              r = e.numSelectedRows,
              t = e.numSelectedRowsLabel;
            return _react.default.createElement(
              _box.default,
              { marginRight: 3, 'data-teamleader-ui': 'datagrid-num-selected-rows' },
              _react.default.createElement(
                _typography.TextBody,
                { element: 'span', marginRight: 1 },
                _react.default.createElement(
                  _typography.Monospaced,
                  null,
                  _react.default.createElement('strong', null, r),
                ),
              ),
              _react.default.createElement(_typography.TextBody, { color: 'neutral', element: 'span' }, t(r)),
            );
          },
        },
      ]),
      r
    );
  })(_react.PureComponent);
NumSelectedRows.defaultProps = {
  numSelectedRows: 0,
  numSelectedRowsLabel: function() {
    return 'selected';
  },
};
var _default = NumSelectedRows;
exports.default = _default;
