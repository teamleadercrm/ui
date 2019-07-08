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

var BulkActions =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(BulkActions, _PureComponent);

    function BulkActions() {
      (0, _classCallCheck2.default)(this, BulkActions);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(BulkActions).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(BulkActions, [
      {
        key: 'render',
        value: function render() {
          var bulkActions = this.props.bulkActions;
          return _react.default.createElement(
            _box.default,
            {
              display: 'flex',
              flex: '1',
              alignItems: 'center',
              'data-teamleader-ui': 'datagrid-bulk-actions',
            },
            bulkActions,
          );
        },
      },
    ]);
    return BulkActions;
  })(_react.PureComponent);

BulkActions.defaultProps = {
  bulkActions: [],
};
var _default = BulkActions;
exports.default = _default;
