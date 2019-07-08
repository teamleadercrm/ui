import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import HeaderCell from './HeaderCell';
import Checkbox from '../checkbox';
import cx from 'classnames';
import theme from './theme.css';

var HeaderRow =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(HeaderRow, _PureComponent);

    function HeaderRow() {
      _classCallCheck(this, HeaderRow);

      return _possibleConstructorReturn(this, _getPrototypeOf(HeaderRow).apply(this, arguments));
    }

    _createClass(HeaderRow, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            className = _this$props.className,
            checkboxSize = _this$props.checkboxSize,
            children = _this$props.children,
            sliceFrom = _this$props.sliceFrom,
            sliceTo = _this$props.sliceTo,
            onSelectionChange = _this$props.onSelectionChange,
            selected = _this$props.selected,
            selectable = _this$props.selectable,
            others = _objectWithoutProperties(_this$props, [
              'className',
              'checkboxSize',
              'children',
              'sliceFrom',
              'sliceTo',
              'onSelectionChange',
              'selected',
              'selectable',
            ]);

          var childrenArray = Array.isArray(children) ? children : [children];
          var childrenSliced = childrenArray.slice(sliceFrom, sliceTo);
          var classNames = cx(theme['header-row'], className);
          return React.createElement(
            Row,
            _extends(
              {
                backgroundColor: 'neutral',
                className: classNames,
                'data-teamleader-ui': 'datagrid-header-row',
              },
              others,
            ),
            selectable &&
              React.createElement(
                HeaderCell,
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

    return HeaderRow;
  })(PureComponent);

export default HeaderRow;
