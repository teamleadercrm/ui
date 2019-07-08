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
  _classnames = _interopRequireDefault(require('classnames')),
  _box = _interopRequireDefault(require('../../box')),
  _BulkActions = _interopRequireDefault(require('./BulkActions')),
  _NumSelectedRows = _interopRequireDefault(require('./NumSelectedRows')),
  _theme = _interopRequireDefault(require('./theme.css')),
  HeaderRowOverlay = (function(e) {
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
              l = e.headerCellCheckboxSize,
              a = e.numSelectedRows,
              u = e.numSelectedRowsLabel,
              i = (0, _objectWithoutProperties2.default)(e, [
                'children',
                'className',
                'headerCellCheckboxSize',
                'numSelectedRows',
                'numSelectedRowsLabel',
              ]),
              s = (0, _classnames.default)(
                _theme.default['header-row-overlay'],
                _theme.default['data-grid-checkbox-size-'.concat(l)],
                t,
              );
            return _react.default.createElement(
              _box.default,
              (0, _extends2.default)(
                {
                  display: 'flex',
                  alignItems: 'center',
                  className: s,
                  'data-teamleader-ui': 'datagrid-header-row-overlay',
                },
                i,
              ),
              _react.default.createElement(_NumSelectedRows.default, { numSelectedRows: a, numSelectedRowsLabel: u }),
              _react.default.createElement(_BulkActions.default, { bulkActions: r }),
            );
          },
        },
      ]),
      r
    );
  })(_react.PureComponent);
HeaderRowOverlay.defaultProps = { numSelectedRows: 0 };
var _default = HeaderRowOverlay;
exports.default = _default;
