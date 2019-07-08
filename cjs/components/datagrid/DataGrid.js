'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));

var _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties'));

var _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread'));

var _toConsumableArray2 = _interopRequireDefault(require('@babel/runtime/helpers/toConsumableArray'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn'));

var _getPrototypeOf3 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _assertThisInitialized2 = _interopRequireDefault(require('@babel/runtime/helpers/assertThisInitialized'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _react = _interopRequireWildcard(require('react'));

var _reactDom = _interopRequireDefault(require('react-dom'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _box = _interopRequireDefault(require('../box'));

var _loadingBar = _interopRequireDefault(require('../loadingBar'));

var _HeaderRowOverlay = _interopRequireDefault(require('./HeaderRowOverlay'));

var _Cell = _interopRequireDefault(require('./Cell'));

var _HeaderCell = _interopRequireDefault(require('./HeaderCell'));

var _isComponentOfType = _interopRequireDefault(require('../utils/is-component-of-type'));

var _utils = require('../utils/utils');

var _FooterRow = _interopRequireDefault(require('./FooterRow'));

var _HeaderRow = _interopRequireDefault(require('./HeaderRow'));

var _BodyRow = _interopRequireDefault(require('./BodyRow'));

var _classnames = _interopRequireDefault(require('classnames'));

var _lodash = _interopRequireDefault(require('lodash.omit'));

var _reactResizeDetector = _interopRequireDefault(require('react-resize-detector'));

var _theme = _interopRequireDefault(require('./theme.css'));

var DataGrid =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(DataGrid, _PureComponent);

    function DataGrid() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, DataGrid);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(DataGrid)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'state', {
        hoveredRow: null,
        isOverflowing: false,
        selectedRows: [],
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'rowNodes', new Map());
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'scrollableNode', null);
      (0, _defineProperty2.default)(
        (0, _assertThisInitialized2.default)(_this),
        'handleHeaderRowSelectionChange',
        function(checked, event) {
          var allBodyRowIndexes = _react.default.Children.map(_this.props.children, function(child) {
            if ((0, _isComponentOfType.default)(_BodyRow.default, child)) {
              return child.key;
            }
          });

          var selectedBodyRowIndexes = checked ? allBodyRowIndexes : [];

          _this.setState({
            selectedRows: selectedBodyRowIndexes,
          });

          _this.handleSelectionChange(selectedBodyRowIndexes, event);
        },
      );
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleBodyRowMouseEnter', function(
        row,
        event,
      ) {
        var _row$props = row.props,
          onClick = _row$props.onClick,
          onMouseOver = _row$props.onMouseOver;
        onClick &&
          _this.setState({
            hoveredRow: row.key,
          });
        onMouseOver && onMouseOver(event);
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleBodyRowMouseLeave', function(
        row,
        event,
      ) {
        var _row$props2 = row.props,
          onClick = _row$props2.onClick,
          onMouseOut = _row$props2.onMouseOut;
        onClick &&
          _this.setState({
            hoveredRow: null,
          });
        onMouseOut && onMouseOut(event);
      });
      (0, _defineProperty2.default)(
        (0, _assertThisInitialized2.default)(_this),
        'handleBodyRowSelectionChange',
        function(rowIndex, event) {
          _this.setState(function(prevState) {
            var selectedRows = prevState.selectedRows.includes(rowIndex)
              ? prevState.selectedRows.filter(function(row) {
                  return row !== rowIndex;
                })
              : [].concat((0, _toConsumableArray2.default)(prevState.selectedRows), [rowIndex]);

            _this.handleSelectionChange(selectedRows, event);

            return (0, _objectSpread2.default)({}, prevState, {
              selectedRows: selectedRows,
            });
          });
        },
      );
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleResize', function() {
        if ((0, _utils.isElementOverflowingX)(_this.scrollableNode) && _this.rowNodes) {
          _this.setCalculatedRowWidth();

          _this.setState({
            isOverflowing: true,
          });
        } else {
          _this.setState({
            isOverflowing: false,
          });
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'setCalculatedRowWidth', function() {
        var rowDOMNodes = [];
        var maxRowWidth = 0;
        (0, _toConsumableArray2.default)(_this.rowNodes.values())
          .filter(function(rowNode) {
            return rowNode != null;
          })
          .forEach(function(rowNode) {
            var rowDOMNode = _reactDom.default.findDOMNode(rowNode);

            if (rowDOMNode) {
              var totalRowChildrenWidth = (0, _toConsumableArray2.default)(rowDOMNode.children)
                .map(function(child) {
                  return child.offsetWidth;
                })
                .reduce(function(accumulatedChildWidth, currentChildWidth) {
                  return accumulatedChildWidth + currentChildWidth;
                });
              maxRowWidth = maxRowWidth < totalRowChildrenWidth ? totalRowChildrenWidth : maxRowWidth;
              rowDOMNodes.push(rowDOMNode);
            }
          });
        rowDOMNodes.forEach(function(rowDOMNode) {
          return (rowDOMNode.style.minWidth = ''.concat(maxRowWidth, 'px'));
        });
      });
      return _this;
    }

    (0, _createClass2.default)(DataGrid, [
      {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
          this.handleResize();

          if (prevProps.comparableId !== this.props.comparableId) {
            this.handleSelectionChange([]);
            this.setState({
              selectedRows: [],
            });
          }
        },
      },
      {
        key: 'handleSelectionChange',
        value: function handleSelectionChange(selection) {
          var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

          if (this.props.onSelectionChange) {
            this.props.onSelectionChange(selection, event);
          }
        },
      },
      {
        key: 'render',
        value: function render() {
          var _cx,
            _cx2,
            _this2 = this;

          var _this$props = this.props,
            bordered = _this$props.bordered,
            checkboxSize = _this$props.checkboxSize,
            children = _this$props.children,
            className = _this$props.className,
            processing = _this$props.processing,
            selectable = _this$props.selectable,
            stickyFromLeft = _this$props.stickyFromLeft,
            stickyFromRight = _this$props.stickyFromRight,
            others = (0, _objectWithoutProperties2.default)(_this$props, [
              'bordered',
              'checkboxSize',
              'children',
              'className',
              'processing',
              'selectable',
              'stickyFromLeft',
              'stickyFromRight',
            ]);
          var _this$state = this.state,
            hoveredRow = _this$state.hoveredRow,
            isOverflowing = _this$state.isOverflowing,
            selectedRows = _this$state.selectedRows;
          var classNames = (0, _classnames.default)(
            _theme.default['data-grid'],
            ((_cx = {}),
            (0, _defineProperty2.default)(_cx, _theme.default['is-bordered'], bordered),
            (0, _defineProperty2.default)(_cx, _theme.default['is-overflowing'], isOverflowing),
            _cx),
            className,
          );
          var rest = (0, _lodash.default)(others, ['comparableId', 'onSelectionChange']);
          var sectionLeftClassNames = (0, _classnames.default)(
            _theme.default['section'],
            _theme.default['is-sticky-left'],
            ((_cx2 = {}),
            (0, _defineProperty2.default)(_cx2, _theme.default['has-blend-right'], selectable || stickyFromLeft > 0),
            (0, _defineProperty2.default)(_cx2, _theme.default['has-border-right'], selectable || stickyFromLeft > 0),
            _cx2),
          );
          return _react.default.createElement(
            _box.default,
            (0, _extends2.default)(
              {
                'data-teamleader-ui': 'data-grid',
                className: classNames,
              },
              rest,
            ),
            processing &&
              _react.default.createElement(
                'div',
                {
                  className: (0, _classnames.default)(_theme.default['loading-bar']),
                },
                _react.default.createElement(_loadingBar.default, null),
              ),
            selectedRows.length > 0 &&
              _react.default.Children.map(children, function(child) {
                if ((0, _isComponentOfType.default)(_HeaderRowOverlay.default, child)) {
                  return _react.default.cloneElement(child, {
                    numSelectedRows: selectedRows.length,
                    headerCellCheckboxSize: checkboxSize,
                  });
                }
              }),
            _react.default.createElement(
              _box.default,
              {
                display: 'flex',
                className: (0, _classnames.default)(_theme.default['section-wrapper']),
              },
              (selectable || stickyFromLeft > 0) &&
                _react.default.createElement(
                  'div',
                  {
                    className: sectionLeftClassNames,
                  },
                  _react.default.Children.map(children, function(child) {
                    if ((0, _isComponentOfType.default)(_HeaderRow.default, child)) {
                      return _react.default.cloneElement(child, {
                        checkboxSize: checkboxSize,
                        onSelectionChange: _this2.handleHeaderRowSelectionChange,
                        selected:
                          selectedRows.length ===
                          children.find(function(child) {
                            return Array.isArray(child);
                          }).length,
                        selectable: selectable,
                        sliceTo: stickyFromLeft > 0 ? stickyFromLeft : 0,
                      });
                    } else if ((0, _isComponentOfType.default)(_BodyRow.default, child)) {
                      return _react.default.cloneElement(child, {
                        checkboxSize: checkboxSize,
                        hovered: hoveredRow === child.key,
                        onMouseEnter: function onMouseEnter(event) {
                          return _this2.handleBodyRowMouseEnter(child, event);
                        },
                        onMouseLeave: function onMouseLeave(event) {
                          return _this2.handleBodyRowMouseLeave(child, event);
                        },
                        onSelectionChange: function onSelectionChange(checked, event) {
                          return _this2.handleBodyRowSelectionChange(child.key, event);
                        },
                        selected: selectedRows.indexOf(child.key) !== -1,
                        selectable: selectable,
                        sliceTo: stickyFromLeft > 0 ? stickyFromLeft : 0,
                      });
                    } else if ((0, _isComponentOfType.default)(_FooterRow.default, child)) {
                      return _react.default.cloneElement(child, {
                        preserveSelectableSpace: selectable,
                        sliceTo: stickyFromLeft > 0 ? stickyFromLeft : 0,
                      });
                    }
                  }),
                ),
              _react.default.createElement(
                'div',
                {
                  className: (0, _classnames.default)(_theme.default['section'], _theme.default['is-scrollable']),
                  ref: function ref(node) {
                    return (_this2.scrollableNode = node);
                  },
                },
                _react.default.Children.map(children, function(child, key) {
                  if (
                    (0, _isComponentOfType.default)(_HeaderRow.default, child) ||
                    (0, _isComponentOfType.default)(_FooterRow.default, child)
                  ) {
                    return _react.default.cloneElement(child, {
                      sliceFrom: stickyFromLeft > 0 ? stickyFromLeft : 0,
                      sliceTo: stickyFromRight > 0 ? -stickyFromRight : undefined,
                      ref: function ref(rowNode) {
                        return _this2.rowNodes.set(key, rowNode);
                      },
                    });
                  } else if ((0, _isComponentOfType.default)(_BodyRow.default, child)) {
                    return _react.default.cloneElement(child, {
                      hovered: hoveredRow === child.key,
                      onMouseEnter: function onMouseEnter(event) {
                        return _this2.handleBodyRowMouseEnter(child, event);
                      },
                      onMouseLeave: function onMouseLeave(event) {
                        return _this2.handleBodyRowMouseLeave(child, event);
                      },
                      sliceFrom: stickyFromLeft > 0 ? stickyFromLeft : 0,
                      sliceTo: stickyFromRight > 0 ? -stickyFromRight : undefined,
                      ref: function ref(rowNode) {
                        return _this2.rowNodes.set(key, rowNode);
                      },
                    });
                  }
                }),
              ),
              stickyFromRight > 0 &&
                _react.default.createElement(
                  'div',
                  {
                    className: (0, _classnames.default)(_theme.default['section'], _theme.default['has-blend-left']),
                  },
                  _react.default.Children.map(children, function(child) {
                    if (
                      (0, _isComponentOfType.default)(_HeaderRow.default, child) ||
                      (0, _isComponentOfType.default)(_FooterRow.default, child)
                    ) {
                      return _react.default.cloneElement(child, {
                        sliceFrom: -stickyFromRight,
                      });
                    } else if ((0, _isComponentOfType.default)(_BodyRow.default, child)) {
                      return _react.default.cloneElement(child, {
                        hovered: hoveredRow === child.key,
                        onMouseEnter: function onMouseEnter(event) {
                          return _this2.handleBodyRowMouseEnter(child, event);
                        },
                        onMouseLeave: function onMouseLeave(event) {
                          return _this2.handleBodyRowMouseLeave(child, event);
                        },
                        sliceFrom: -stickyFromRight,
                      });
                    }
                  }),
                ),
            ),
            _react.default.createElement(_reactResizeDetector.default, {
              handleWidth: true,
              onResize: this.handleResize,
              refreshMode: 'throttle',
              refreshRate: 16,
            }),
          );
        },
      },
    ]);
    return DataGrid;
  })(_react.PureComponent);

DataGrid.defaultProps = {
  bordered: false,
  checkboxSize: 'small',
  processing: false,
};
DataGrid.HeaderRow = _HeaderRow.default;
DataGrid.HeaderRow.displayName = 'DataGrid.HeaderRow';
DataGrid.HeaderRowOverlay = _HeaderRowOverlay.default;
DataGrid.HeaderRowOverlay.displayName = 'DataGrid.HeaderRowOverlay';
DataGrid.HeaderCell = _HeaderCell.default;
DataGrid.HeaderCell.displayName = 'DataGrid.HeaderCell';
DataGrid.BodyRow = _BodyRow.default;
DataGrid.BodyRow.displayName = 'DataGrid.BodyRow';
DataGrid.Cell = _Cell.default;
DataGrid.Cell.displayName = 'DataGrid.Cell';
DataGrid.FooterRow = _FooterRow.default;
DataGrid.FooterRow.displayName = 'DataGrid.FooterRow';
var _default = DataGrid;
exports.default = _default;
