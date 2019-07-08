'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends')),
  _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties')),
  _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread')),
  _toConsumableArray2 = _interopRequireDefault(require('@babel/runtime/helpers/toConsumableArray')),
  _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck')),
  _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass')),
  _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn')),
  _getPrototypeOf3 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf')),
  _assertThisInitialized2 = _interopRequireDefault(require('@babel/runtime/helpers/assertThisInitialized')),
  _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits')),
  _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty')),
  _react = _interopRequireWildcard(require('react')),
  _reactDom = _interopRequireDefault(require('react-dom')),
  _propTypes = _interopRequireDefault(require('prop-types')),
  _box = _interopRequireDefault(require('../box')),
  _loadingBar = _interopRequireDefault(require('../loadingBar')),
  _HeaderRowOverlay = _interopRequireDefault(require('./HeaderRowOverlay')),
  _Cell = _interopRequireDefault(require('./Cell')),
  _HeaderCell = _interopRequireDefault(require('./HeaderCell')),
  _isComponentOfType = _interopRequireDefault(require('../utils/is-component-of-type')),
  _utils = require('../utils/utils'),
  _FooterRow = _interopRequireDefault(require('./FooterRow')),
  _HeaderRow = _interopRequireDefault(require('./HeaderRow')),
  _BodyRow = _interopRequireDefault(require('./BodyRow')),
  _classnames = _interopRequireDefault(require('classnames')),
  _lodash = _interopRequireDefault(require('lodash.omit')),
  _reactResizeDetector = _interopRequireDefault(require('react-resize-detector')),
  _theme = _interopRequireDefault(require('./theme.css')),
  DataGrid = (function(e) {
    function l() {
      var e, o;
      (0, _classCallCheck2.default)(this, l);
      for (var t = arguments.length, r = new Array(t), a = 0; a < t; a++) r[a] = arguments[a];
      return (
        (o = (0, _possibleConstructorReturn2.default)(
          this,
          (e = (0, _getPrototypeOf3.default)(l)).call.apply(e, [this].concat(r)),
        )),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(o), 'state', {
          hoveredRow: null,
          isOverflowing: !1,
          selectedRows: [],
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(o), 'rowNodes', new Map()),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(o), 'scrollableNode', null),
        (0, _defineProperty2.default)(
          (0, _assertThisInitialized2.default)(o),
          'handleHeaderRowSelectionChange',
          function(e, t) {
            var r = _react.default.Children.map(o.props.children, function(e) {
                if ((0, _isComponentOfType.default)(_BodyRow.default, e)) return e.key;
              }),
              a = e ? r : [];
            o.setState({ selectedRows: a }), o.handleSelectionChange(a, t);
          },
        ),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(o), 'handleBodyRowMouseEnter', function(
          e,
          t,
        ) {
          var r = e.props,
            a = r.onClick,
            l = r.onMouseOver;
          a && o.setState({ hoveredRow: e.key }), l && l(t);
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(o), 'handleBodyRowMouseLeave', function(
          e,
          t,
        ) {
          var r = e.props,
            a = r.onClick,
            l = r.onMouseOut;
          a && o.setState({ hoveredRow: null }), l && l(t);
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(o), 'handleBodyRowSelectionChange', function(
          r,
          a,
        ) {
          o.setState(function(e) {
            var t = e.selectedRows.includes(r)
              ? e.selectedRows.filter(function(e) {
                  return e !== r;
                })
              : [].concat((0, _toConsumableArray2.default)(e.selectedRows), [r]);
            return o.handleSelectionChange(t, a), (0, _objectSpread2.default)({}, e, { selectedRows: t });
          });
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(o), 'handleResize', function() {
          (0, _utils.isElementOverflowingX)(o.scrollableNode) && o.rowNodes
            ? (o.setCalculatedRowWidth(), o.setState({ isOverflowing: !0 }))
            : o.setState({ isOverflowing: !1 });
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(o), 'setCalculatedRowWidth', function() {
          var a = [],
            l = 0;
          (0, _toConsumableArray2.default)(o.rowNodes.values())
            .filter(function(e) {
              return null != e;
            })
            .forEach(function(e) {
              var t = _reactDom.default.findDOMNode(e);
              if (t) {
                var r = (0, _toConsumableArray2.default)(t.children)
                  .map(function(e) {
                    return e.offsetWidth;
                  })
                  .reduce(function(e, t) {
                    return e + t;
                  });
                (l = l < r ? r : l), a.push(t);
              }
            }),
            a.forEach(function(e) {
              return (e.style.minWidth = ''.concat(l, 'px'));
            });
        }),
        o
      );
    }
    return (
      (0, _inherits2.default)(l, e),
      (0, _createClass2.default)(l, [
        {
          key: 'componentDidUpdate',
          value: function(e) {
            this.handleResize(),
              e.comparableId !== this.props.comparableId &&
                (this.handleSelectionChange([]), this.setState({ selectedRows: [] }));
          },
        },
        {
          key: 'handleSelectionChange',
          value: function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
            this.props.onSelectionChange && this.props.onSelectionChange(e, t);
          },
        },
        {
          key: 'render',
          value: function() {
            var e,
              t,
              a = this,
              r = this.props,
              l = r.bordered,
              o = r.checkboxSize,
              i = r.children,
              n = r.className,
              d = r.processing,
              u = r.selectable,
              s = r.stickyFromLeft,
              f = r.stickyFromRight,
              c = (0, _objectWithoutProperties2.default)(r, [
                'bordered',
                'checkboxSize',
                'children',
                'className',
                'processing',
                'selectable',
                'stickyFromLeft',
                'stickyFromRight',
              ]),
              _ = this.state,
              p = _.hoveredRow,
              h = _.isOverflowing,
              m = _.selectedRows,
              R = (0, _classnames.default)(
                _theme.default['data-grid'],
                ((e = {}),
                (0, _defineProperty2.default)(e, _theme.default['is-bordered'], l),
                (0, _defineProperty2.default)(e, _theme.default['is-overflowing'], h),
                e),
                n,
              ),
              y = (0, _lodash.default)(c, ['comparableId', 'onSelectionChange']),
              w = (0, _classnames.default)(
                _theme.default.section,
                _theme.default['is-sticky-left'],
                ((t = {}),
                (0, _defineProperty2.default)(t, _theme.default['has-blend-right'], u || 0 < s),
                (0, _defineProperty2.default)(t, _theme.default['has-border-right'], u || 0 < s),
                t),
              );
            return _react.default.createElement(
              _box.default,
              (0, _extends2.default)({ 'data-teamleader-ui': 'data-grid', className: R }, y),
              d &&
                _react.default.createElement(
                  'div',
                  { className: (0, _classnames.default)(_theme.default['loading-bar']) },
                  _react.default.createElement(_loadingBar.default, null),
                ),
              0 < m.length &&
                _react.default.Children.map(i, function(e) {
                  if ((0, _isComponentOfType.default)(_HeaderRowOverlay.default, e))
                    return _react.default.cloneElement(e, { numSelectedRows: m.length, headerCellCheckboxSize: o });
                }),
              _react.default.createElement(
                _box.default,
                { display: 'flex', className: (0, _classnames.default)(_theme.default['section-wrapper']) },
                (u || 0 < s) &&
                  _react.default.createElement(
                    'div',
                    { className: w },
                    _react.default.Children.map(i, function(r) {
                      return (0, _isComponentOfType.default)(_HeaderRow.default, r)
                        ? _react.default.cloneElement(r, {
                            checkboxSize: o,
                            onSelectionChange: a.handleHeaderRowSelectionChange,
                            selected:
                              m.length ===
                              i.find(function(e) {
                                return Array.isArray(e);
                              }).length,
                            selectable: u,
                            sliceTo: 0 < s ? s : 0,
                          })
                        : (0, _isComponentOfType.default)(_BodyRow.default, r)
                          ? _react.default.cloneElement(r, {
                              checkboxSize: o,
                              hovered: p === r.key,
                              onMouseEnter: function(e) {
                                return a.handleBodyRowMouseEnter(r, e);
                              },
                              onMouseLeave: function(e) {
                                return a.handleBodyRowMouseLeave(r, e);
                              },
                              onSelectionChange: function(e, t) {
                                return a.handleBodyRowSelectionChange(r.key, t);
                              },
                              selected: -1 !== m.indexOf(r.key),
                              selectable: u,
                              sliceTo: 0 < s ? s : 0,
                            })
                          : (0, _isComponentOfType.default)(_FooterRow.default, r)
                            ? _react.default.cloneElement(r, { preserveSelectableSpace: u, sliceTo: 0 < s ? s : 0 })
                            : void 0;
                    }),
                  ),
                _react.default.createElement(
                  'div',
                  {
                    className: (0, _classnames.default)(_theme.default.section, _theme.default['is-scrollable']),
                    ref: function(e) {
                      return (a.scrollableNode = e);
                    },
                  },
                  _react.default.Children.map(i, function(t, r) {
                    return (0, _isComponentOfType.default)(_HeaderRow.default, t) ||
                      (0, _isComponentOfType.default)(_FooterRow.default, t)
                      ? _react.default.cloneElement(t, {
                          sliceFrom: 0 < s ? s : 0,
                          sliceTo: 0 < f ? -f : void 0,
                          ref: function(e) {
                            return a.rowNodes.set(r, e);
                          },
                        })
                      : (0, _isComponentOfType.default)(_BodyRow.default, t)
                        ? _react.default.cloneElement(t, {
                            hovered: p === t.key,
                            onMouseEnter: function(e) {
                              return a.handleBodyRowMouseEnter(t, e);
                            },
                            onMouseLeave: function(e) {
                              return a.handleBodyRowMouseLeave(t, e);
                            },
                            sliceFrom: 0 < s ? s : 0,
                            sliceTo: 0 < f ? -f : void 0,
                            ref: function(e) {
                              return a.rowNodes.set(r, e);
                            },
                          })
                        : void 0;
                  }),
                ),
                0 < f &&
                  _react.default.createElement(
                    'div',
                    { className: (0, _classnames.default)(_theme.default.section, _theme.default['has-blend-left']) },
                    _react.default.Children.map(i, function(t) {
                      return (0, _isComponentOfType.default)(_HeaderRow.default, t) ||
                        (0, _isComponentOfType.default)(_FooterRow.default, t)
                        ? _react.default.cloneElement(t, { sliceFrom: -f })
                        : (0, _isComponentOfType.default)(_BodyRow.default, t)
                          ? _react.default.cloneElement(t, {
                              hovered: p === t.key,
                              onMouseEnter: function(e) {
                                return a.handleBodyRowMouseEnter(t, e);
                              },
                              onMouseLeave: function(e) {
                                return a.handleBodyRowMouseLeave(t, e);
                              },
                              sliceFrom: -f,
                            })
                          : void 0;
                    }),
                  ),
              ),
              _react.default.createElement(_reactResizeDetector.default, {
                handleWidth: !0,
                onResize: this.handleResize,
                refreshMode: 'throttle',
                refreshRate: 16,
              }),
            );
          },
        },
      ]),
      l
    );
  })(_react.PureComponent);
(DataGrid.defaultProps = { bordered: !1, checkboxSize: 'small', processing: !1 }),
  (DataGrid.HeaderRow = _HeaderRow.default),
  (DataGrid.HeaderRow.displayName = 'DataGrid.HeaderRow'),
  (DataGrid.HeaderRowOverlay = _HeaderRowOverlay.default),
  (DataGrid.HeaderRowOverlay.displayName = 'DataGrid.HeaderRowOverlay'),
  (DataGrid.HeaderCell = _HeaderCell.default),
  (DataGrid.HeaderCell.displayName = 'DataGrid.HeaderCell'),
  (DataGrid.BodyRow = _BodyRow.default),
  (DataGrid.BodyRow.displayName = 'DataGrid.BodyRow'),
  (DataGrid.Cell = _Cell.default),
  (DataGrid.Cell.displayName = 'DataGrid.Cell'),
  (DataGrid.FooterRow = _FooterRow.default),
  (DataGrid.FooterRow.displayName = 'DataGrid.FooterRow');
var _default = DataGrid;
exports.default = _default;
