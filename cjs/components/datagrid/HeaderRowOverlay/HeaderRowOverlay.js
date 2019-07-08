'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));

var _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn'));

var _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _classnames = _interopRequireDefault(require('classnames'));

var _box = _interopRequireDefault(require('../../box'));

var _BulkActions = _interopRequireDefault(require('./BulkActions'));

var _NumSelectedRows = _interopRequireDefault(require('./NumSelectedRows'));

var _theme = _interopRequireDefault(require('./theme.css'));

var HeaderRowOverlay =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(HeaderRowOverlay, _PureComponent);

    function HeaderRowOverlay() {
      (0, _classCallCheck2.default)(this, HeaderRowOverlay);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(HeaderRowOverlay).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(HeaderRowOverlay, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            headerCellCheckboxSize = _this$props.headerCellCheckboxSize,
            numSelectedRows = _this$props.numSelectedRows,
            numSelectedRowsLabel = _this$props.numSelectedRowsLabel,
            others = (0, _objectWithoutProperties2.default)(_this$props, [
              'children',
              'className',
              'headerCellCheckboxSize',
              'numSelectedRows',
              'numSelectedRowsLabel',
            ]);
          var classNames = (0, _classnames.default)(
            _theme.default['header-row-overlay'],
            _theme.default['data-grid-checkbox-size-'.concat(headerCellCheckboxSize)],
            className,
          );
          return _react.default.createElement(
            _box.default,
            (0, _extends2.default)(
              {
                display: 'flex',
                alignItems: 'center',
                className: classNames,
                'data-teamleader-ui': 'datagrid-header-row-overlay',
              },
              others,
            ),
            _react.default.createElement(_NumSelectedRows.default, {
              numSelectedRows: numSelectedRows,
              numSelectedRowsLabel: numSelectedRowsLabel,
            }),
            _react.default.createElement(_BulkActions.default, {
              bulkActions: children,
            }),
          );
        },
      },
    ]);
    return HeaderRowOverlay;
  })(_react.PureComponent);

HeaderRowOverlay.defaultProps = {
  numSelectedRows: 0,
};
var _default = HeaderRowOverlay;
exports.default = _default;
