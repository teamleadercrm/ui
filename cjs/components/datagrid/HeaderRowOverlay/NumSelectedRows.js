'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn'));

var _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _box = _interopRequireDefault(require('../../box'));

var _typography = require('../../typography');

var NumSelectedRows =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(NumSelectedRows, _PureComponent);

    function NumSelectedRows() {
      (0, _classCallCheck2.default)(this, NumSelectedRows);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(NumSelectedRows).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(NumSelectedRows, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            numSelectedRows = _this$props.numSelectedRows,
            numSelectedRowsLabel = _this$props.numSelectedRowsLabel;
          return _react.default.createElement(
            _box.default,
            {
              marginRight: 3,
              'data-teamleader-ui': 'datagrid-num-selected-rows',
            },
            _react.default.createElement(
              _typography.TextBody,
              {
                element: 'span',
                marginRight: 1,
              },
              _react.default.createElement(
                _typography.Monospaced,
                null,
                _react.default.createElement('strong', null, numSelectedRows),
              ),
            ),
            _react.default.createElement(
              _typography.TextBody,
              {
                color: 'neutral',
                element: 'span',
              },
              numSelectedRowsLabel(numSelectedRows),
            ),
          );
        },
      },
    ]);
    return NumSelectedRows;
  })(_react.PureComponent);

NumSelectedRows.defaultProps = {
  numSelectedRows: 0,
  numSelectedRowsLabel: function numSelectedRowsLabel() {
    return 'selected';
  },
};
var _default = NumSelectedRows;
exports.default = _default;
