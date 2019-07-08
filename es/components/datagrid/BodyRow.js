import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/inherits';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import Checkbox from '../checkbox';
import Row from './Row';
import cx from 'classnames';
import theme from './theme.css';
var allowedParentNodes = ['datagrid-body-row', 'datagrid-cell'];

var BodyRow =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(BodyRow, _PureComponent);

    function BodyRow() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, BodyRow);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(BodyRow)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );

      _defineProperty(_assertThisInitialized(_this), 'handleClick', function(event) {
        if (allowedParentNodes.includes(event.target.parentNode.dataset.teamleaderUi)) {
          var onClick = _this.props.onClick;
          onClick && onClick(event);
        }
      });

      return _this;
    }

    _createClass(BodyRow, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            className = _this$props.className,
            checkboxSize = _this$props.checkboxSize,
            children = _this$props.children,
            hovered = _this$props.hovered,
            sliceFrom = _this$props.sliceFrom,
            sliceTo = _this$props.sliceTo,
            onClick = _this$props.onClick,
            onSelectionChange = _this$props.onSelectionChange,
            selected = _this$props.selected,
            selectable = _this$props.selectable,
            others = _objectWithoutProperties(_this$props, [
              'className',
              'checkboxSize',
              'children',
              'hovered',
              'sliceFrom',
              'sliceTo',
              'onClick',
              'onSelectionChange',
              'selected',
              'selectable',
            ]);

          var childrenArray = Array.isArray(children) ? children : [children];
          var childrenSliced = childrenArray.slice(sliceFrom, sliceTo);
          var classNames = cx(theme['body-row'], _defineProperty({}, theme['has-pointer-cursor'], onClick), className);
          return React.createElement(
            Row,
            _extends(
              {
                backgroundColor: hovered ? 'neutral' : 'white',
                className: classNames,
                'data-teamleader-ui': 'datagrid-body-row',
                onClick: this.handleClick,
              },
              others,
            ),
            selectable &&
              React.createElement(
                Cell,
                {
                  align: 'center',
                  flex: 'min-width',
                },
                React.createElement(Checkbox, {
                  checked: selected,
                  onChange: onSelectionChange,
                  size: checkboxSize,
                }),
              ),
            childrenSliced,
          );
        },
      },
    ]);

    return BodyRow;
  })(PureComponent);

export default BodyRow;
