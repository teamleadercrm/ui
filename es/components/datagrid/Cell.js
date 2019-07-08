import _extends from '@babel/runtime/helpers/extends';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';
import uiUtilities from '@teamleader/ui-utilities';

var Cell =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(Cell, _PureComponent);

    function Cell() {
      _classCallCheck(this, Cell);

      return _possibleConstructorReturn(this, _getPrototypeOf(Cell).apply(this, arguments));
    }

    _createClass(Cell, [
      {
        key: 'render',
        value: function render() {
          var _cx;

          var _this$props = this.props,
            align = _this$props.align,
            backgroundColor = _this$props.backgroundColor,
            border = _this$props.border,
            children = _this$props.children,
            className = _this$props.className,
            flex = _this$props.flex,
            preventOverflow = _this$props.preventOverflow,
            soft = _this$props.soft,
            strong = _this$props.strong,
            others = _objectWithoutProperties(_this$props, [
              'align',
              'backgroundColor',
              'border',
              'children',
              'className',
              'flex',
              'preventOverflow',
              'soft',
              'strong',
            ]);

          var classNames = cx(
            uiUtilities['reset-font-smoothing'],
            theme['cell'],
            theme['align-'.concat(align)],
            theme['flex-'.concat(flex)],
            theme['has-background-'.concat(backgroundColor)],
            theme['has-border-'.concat(border)],
            ((_cx = {}),
            _defineProperty(_cx, theme['is-soft'], soft),
            _defineProperty(_cx, theme['is-strong'], strong),
            _cx),
            className,
          );
          return React.createElement(
            Box,
            _extends(
              {
                className: classNames,
                'data-teamleader-ui': 'datagrid-cell',
                boxSizing: 'content-box',
              },
              others,
            ),
            preventOverflow
              ? React.createElement(
                  'div',
                  {
                    className: theme['has-overflow-prevention'],
                  },
                  children,
                )
              : children,
          );
        },
      },
    ]);

    return Cell;
  })(PureComponent);

Cell.defaultProps = {
  align: 'left',
  flex: '1',
  preventOverflow: true,
  soft: false,
  strong: false,
};
export default Cell;
