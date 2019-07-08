import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _objectSpread from '@babel/runtime/helpers/objectSpread';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/inherits';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Box from '../box';
import LoadingBar from '../loadingBar';
import HeaderRowOverlay from './HeaderRowOverlay';
import Cell from './Cell';
import HeaderCell from './HeaderCell';
import isComponentOfType from '../utils/is-component-of-type';
import { isElementOverflowingX } from '../utils/utils';
import FooterRow from './FooterRow';
import HeaderRow from './HeaderRow';
import BodyRow from './BodyRow';
import cx from 'classnames';
import omit from 'lodash.omit';
import ReactResizeDetector from 'react-resize-detector';
import theme from './theme.css';

var DataGrid =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(DataGrid, _PureComponent);

    function DataGrid() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, DataGrid);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(DataGrid)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );

      _defineProperty(_assertThisInitialized(_this), 'state', {
        hoveredRow: null,
        isOverflowing: false,
        selectedRows: [],
      });

      _defineProperty(_assertThisInitialized(_this), 'rowNodes', new Map());

      _defineProperty(_assertThisInitialized(_this), 'scrollableNode', null);

      _defineProperty(_assertThisInitialized(_this), 'handleHeaderRowSelectionChange', function(checked, event) {
        var allBodyRowIndexes = React.Children.map(_this.props.children, function(child) {
          if (isComponentOfType(BodyRow, child)) {
            return child.key;
          }
        });
        var selectedBodyRowIndexes = checked ? allBodyRowIndexes : [];

        _this.setState({
          selectedRows: selectedBodyRowIndexes,
        });

        _this.handleSelectionChange(selectedBodyRowIndexes, event);
      });

      _defineProperty(_assertThisInitialized(_this), 'handleBodyRowMouseEnter', function(row, event) {
        var _row$props = row.props,
          onClick = _row$props.onClick,
          onMouseOver = _row$props.onMouseOver;
        onClick &&
          _this.setState({
            hoveredRow: row.key,
          });
        onMouseOver && onMouseOver(event);
      });

      _defineProperty(_assertThisInitialized(_this), 'handleBodyRowMouseLeave', function(row, event) {
        var _row$props2 = row.props,
          onClick = _row$props2.onClick,
          onMouseOut = _row$props2.onMouseOut;
        onClick &&
          _this.setState({
            hoveredRow: null,
          });
        onMouseOut && onMouseOut(event);
      });

      _defineProperty(_assertThisInitialized(_this), 'handleBodyRowSelectionChange', function(rowIndex, event) {
        _this.setState(function(prevState) {
          var selectedRows = prevState.selectedRows.includes(rowIndex)
            ? prevState.selectedRows.filter(function(row) {
                return row !== rowIndex;
              })
            : [].concat(_toConsumableArray(prevState.selectedRows), [rowIndex]);

          _this.handleSelectionChange(selectedRows, event);

          return _objectSpread({}, prevState, {
            selectedRows: selectedRows,
          });
        });
      });

      _defineProperty(_assertThisInitialized(_this), 'handleResize', function() {
        if (isElementOverflowingX(_this.scrollableNode) && _this.rowNodes) {
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

      _defineProperty(_assertThisInitialized(_this), 'setCalculatedRowWidth', function() {
        var rowDOMNodes = [];
        var maxRowWidth = 0;

        _toConsumableArray(_this.rowNodes.values())
          .filter(function(rowNode) {
            return rowNode != null;
          })
          .forEach(function(rowNode) {
            var rowDOMNode = ReactDOM.findDOMNode(rowNode);

            if (rowDOMNode) {
              var totalRowChildrenWidth = _toConsumableArray(rowDOMNode.children)
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

    _createClass(DataGrid, [
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
            others = _objectWithoutProperties(_this$props, [
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
          var classNames = cx(
            theme['data-grid'],
            ((_cx = {}),
            _defineProperty(_cx, theme['is-bordered'], bordered),
            _defineProperty(_cx, theme['is-overflowing'], isOverflowing),
            _cx),
            className,
          );
          var rest = omit(others, ['comparableId', 'onSelectionChange']);
          var sectionLeftClassNames = cx(
            theme['section'],
            theme['is-sticky-left'],
            ((_cx2 = {}),
            _defineProperty(_cx2, theme['has-blend-right'], selectable || stickyFromLeft > 0),
            _defineProperty(_cx2, theme['has-border-right'], selectable || stickyFromLeft > 0),
            _cx2),
          );
          return React.createElement(
            Box,
            _extends(
              {
                'data-teamleader-ui': 'data-grid',
                className: classNames,
              },
              rest,
            ),
            processing &&
              React.createElement(
                'div',
                {
                  className: cx(theme['loading-bar']),
                },
                React.createElement(LoadingBar, null),
              ),
            selectedRows.length > 0 &&
              React.Children.map(children, function(child) {
                if (isComponentOfType(HeaderRowOverlay, child)) {
                  return React.cloneElement(child, {
                    numSelectedRows: selectedRows.length,
                    headerCellCheckboxSize: checkboxSize,
                  });
                }
              }),
            React.createElement(
              Box,
              {
                display: 'flex',
                className: cx(theme['section-wrapper']),
              },
              (selectable || stickyFromLeft > 0) &&
                React.createElement(
                  'div',
                  {
                    className: sectionLeftClassNames,
                  },
                  React.Children.map(children, function(child) {
                    if (isComponentOfType(HeaderRow, child)) {
                      return React.cloneElement(child, {
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
                    } else if (isComponentOfType(BodyRow, child)) {
                      return React.cloneElement(child, {
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
                    } else if (isComponentOfType(FooterRow, child)) {
                      return React.cloneElement(child, {
                        preserveSelectableSpace: selectable,
                        sliceTo: stickyFromLeft > 0 ? stickyFromLeft : 0,
                      });
                    }
                  }),
                ),
              React.createElement(
                'div',
                {
                  className: cx(theme['section'], theme['is-scrollable']),
                  ref: function ref(node) {
                    return (_this2.scrollableNode = node);
                  },
                },
                React.Children.map(children, function(child, key) {
                  if (isComponentOfType(HeaderRow, child) || isComponentOfType(FooterRow, child)) {
                    return React.cloneElement(child, {
                      sliceFrom: stickyFromLeft > 0 ? stickyFromLeft : 0,
                      sliceTo: stickyFromRight > 0 ? -stickyFromRight : undefined,
                      ref: function ref(rowNode) {
                        return _this2.rowNodes.set(key, rowNode);
                      },
                    });
                  } else if (isComponentOfType(BodyRow, child)) {
                    return React.cloneElement(child, {
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
                React.createElement(
                  'div',
                  {
                    className: cx(theme['section'], theme['has-blend-left']),
                  },
                  React.Children.map(children, function(child) {
                    if (isComponentOfType(HeaderRow, child) || isComponentOfType(FooterRow, child)) {
                      return React.cloneElement(child, {
                        sliceFrom: -stickyFromRight,
                      });
                    } else if (isComponentOfType(BodyRow, child)) {
                      return React.cloneElement(child, {
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
            React.createElement(ReactResizeDetector, {
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
  })(PureComponent);

DataGrid.defaultProps = {
  bordered: false,
  checkboxSize: 'small',
  processing: false,
};
DataGrid.HeaderRow = HeaderRow;
DataGrid.HeaderRow.displayName = 'DataGrid.HeaderRow';
DataGrid.HeaderRowOverlay = HeaderRowOverlay;
DataGrid.HeaderRowOverlay.displayName = 'DataGrid.HeaderRowOverlay';
DataGrid.HeaderCell = HeaderCell;
DataGrid.HeaderCell.displayName = 'DataGrid.HeaderCell';
DataGrid.BodyRow = BodyRow;
DataGrid.BodyRow.displayName = 'DataGrid.BodyRow';
DataGrid.Cell = Cell;
DataGrid.Cell.displayName = 'DataGrid.Cell';
DataGrid.FooterRow = FooterRow;
DataGrid.FooterRow.displayName = 'DataGrid.FooterRow';
export default DataGrid;
