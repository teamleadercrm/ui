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
  _theme = _interopRequireDefault(require('./theme.css')),
  _uiUtilities = _interopRequireDefault(require('@teamleader/ui-utilities')),
  Cell = (function(e) {
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
            var e,
              t = this.props,
              r = t.align,
              l = t.backgroundColor,
              i = t.border,
              a = t.children,
              u = t.className,
              o = t.flex,
              s = t.preventOverflow,
              n = t.soft,
              f = t.strong,
              p = (0, _objectWithoutProperties2.default)(t, [
                'align',
                'backgroundColor',
                'border',
                'children',
                'className',
                'flex',
                'preventOverflow',
                'soft',
                'strong',
              ]),
              d = (0, _classnames.default)(
                _uiUtilities.default['reset-font-smoothing'],
                _theme.default.cell,
                _theme.default['align-'.concat(r)],
                _theme.default['flex-'.concat(o)],
                _theme.default['has-background-'.concat(l)],
                _theme.default['has-border-'.concat(i)],
                ((e = {}),
                (0, _defineProperty2.default)(e, _theme.default['is-soft'], n),
                (0, _defineProperty2.default)(e, _theme.default['is-strong'], f),
                e),
                u,
              );
            return _react.default.createElement(
              _box.default,
              (0, _extends2.default)(
                { className: d, 'data-teamleader-ui': 'datagrid-cell', boxSizing: 'content-box' },
                p,
              ),
              s ? _react.default.createElement('div', { className: _theme.default['has-overflow-prevention'] }, a) : a,
            );
          },
        },
      ]),
      t
    );
  })(_react.PureComponent);
Cell.defaultProps = { align: 'left', flex: '1', preventOverflow: !0, soft: !1, strong: !1 };
var _default = Cell;
exports.default = _default;
