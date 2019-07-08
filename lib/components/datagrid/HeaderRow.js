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
  _Row = _interopRequireDefault(require('./Row')),
  _HeaderCell = _interopRequireDefault(require('./HeaderCell')),
  _checkbox = _interopRequireDefault(require('../checkbox')),
  _classnames = _interopRequireDefault(require('classnames')),
  _theme = _interopRequireDefault(require('./theme.css')),
  HeaderRow = (function(e) {
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
              t = e.checkboxSize,
              l = e.children,
              a = e.sliceFrom,
              i = e.sliceTo,
              u = e.onSelectionChange,
              o = e.selected,
              s = e.selectable,
              n = (0, _objectWithoutProperties2.default)(e, [
                'className',
                'checkboxSize',
                'children',
                'sliceFrom',
                'sliceTo',
                'onSelectionChange',
                'selected',
                'selectable',
              ]),
              c = (Array.isArray(l) ? l : [l]).slice(a, i),
              p = (0, _classnames.default)(_theme.default['header-row'], r);
            return _react.default.createElement(
              _Row.default,
              (0, _extends2.default)(
                { backgroundColor: 'neutral', className: p, 'data-teamleader-ui': 'datagrid-header-row' },
                n,
              ),
              s &&
                _react.default.createElement(
                  _HeaderCell.default,
                  { align: 'center', flex: 'min-width' },
                  _react.default.createElement(_checkbox.default, { checked: o, onChange: u, size: t }),
                ),
              c,
            );
          },
        },
      ]),
      r
    );
  })(_react.PureComponent),
  _default = HeaderRow;
exports.default = _default;
