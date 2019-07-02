'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends')),
  _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties')),
  _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck')),
  _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass')),
  _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn')),
  _getPrototypeOf3 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf')),
  _assertThisInitialized2 = _interopRequireDefault(require('@babel/runtime/helpers/assertThisInitialized')),
  _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits')),
  _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty')),
  _react = _interopRequireWildcard(require('react')),
  _propTypes = _interopRequireDefault(require('prop-types')),
  _theme = _interopRequireDefault(require('./theme.css')),
  _Cell = _interopRequireDefault(require('./Cell')),
  _icon = _interopRequireDefault(require('../icon')),
  _classnames = _interopRequireDefault(require('classnames')),
  _uiIcons = require('@teamleader/ui-icons'),
  HeaderCell = (function(e) {
    function a() {
      var e, r;
      (0, _classCallCheck2.default)(this, a);
      for (var t = arguments.length, l = new Array(t), i = 0; i < t; i++) l[i] = arguments[i];
      return (
        (r = (0, _possibleConstructorReturn2.default)(
          this,
          (e = (0, _getPrototypeOf3.default)(a)).call.apply(e, [this].concat(l)),
        )),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(r), 'renderSortedIndicators', function() {
          var e = r.props.sorted;
          return 'asc' === e
            ? _react.default.createElement(_uiIcons.IconChevronUpSmallOutline, null)
            : 'desc' === e
              ? _react.default.createElement(_uiIcons.IconChevronDownSmallOutline, null)
              : e
                ? null
                : _react.default.createElement(_uiIcons.IconSortSmallOutline, null);
        }),
        r
      );
    }
    return (
      (0, _inherits2.default)(a, e),
      (0, _createClass2.default)(a, [
        {
          key: 'render',
          value: function() {
            var e,
              r = this.props,
              t = r.children,
              l = r.className,
              i = r.onClick,
              a = r.sorted,
              u = (0, _objectWithoutProperties2.default)(r, ['children', 'className', 'onClick', 'sorted']),
              n = (0, _classnames.default)(
                _theme.default['header-cell'],
                ((e = {}),
                (0, _defineProperty2.default)(e, _theme.default['is-sortable'], i),
                (0, _defineProperty2.default)(e, _theme.default['is-sorted'], 'asc' === a || 'desc' === a),
                e),
                l,
              );
            return _react.default.createElement(
              _Cell.default,
              (0, _extends2.default)({ className: n, onClick: i }, u, { preventOverflow: !1 }),
              _react.default.createElement('span', { className: _theme.default['has-overflow-prevention'] }, t),
              _react.default.createElement(_icon.default, null, this.renderSortedIndicators()),
            );
          },
        },
      ]),
      a
    );
  })(_react.PureComponent);
HeaderCell.defaultProps = { sorted: 'none' };
var _default = HeaderCell;
exports.default = _default;
