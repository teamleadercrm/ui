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
import theme from './theme.css';
import Cell from './Cell';
import Icon from '../icon';
import cx from 'classnames';
import { IconChevronDownSmallOutline, IconChevronUpSmallOutline, IconSortSmallOutline } from '@teamleader/ui-icons';

var HeaderCell =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(HeaderCell, _PureComponent);

    function HeaderCell() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, HeaderCell);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(HeaderCell)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );

      _defineProperty(_assertThisInitialized(_this), 'renderSortedIndicators', function() {
        var sorted = _this.props.sorted;

        if (sorted === 'asc') {
          return React.createElement(IconChevronUpSmallOutline, null);
        }

        if (sorted === 'desc') {
          return React.createElement(IconChevronDownSmallOutline, null);
        }

        if (!sorted) {
          return React.createElement(IconSortSmallOutline, null);
        }

        return null;
      });

      return _this;
    }

    _createClass(HeaderCell, [
      {
        key: 'render',
        value: function render() {
          var _cx;

          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            onClick = _this$props.onClick,
            sorted = _this$props.sorted,
            others = _objectWithoutProperties(_this$props, ['children', 'className', 'onClick', 'sorted']);

          var classNames = cx(
            theme['header-cell'],
            ((_cx = {}),
            _defineProperty(_cx, theme['is-sortable'], onClick),
            _defineProperty(_cx, theme['is-sorted'], sorted === 'asc' || sorted === 'desc'),
            _cx),
            className,
          );
          return React.createElement(
            Cell,
            _extends(
              {
                className: classNames,
                onClick: onClick,
              },
              others,
              {
                preventOverflow: false,
              },
            ),
            React.createElement(
              'span',
              {
                className: theme['has-overflow-prevention'],
              },
              children,
            ),
            React.createElement(Icon, null, this.renderSortedIndicators()),
          );
        },
      },
    ]);

    return HeaderCell;
  })(PureComponent);

HeaderCell.defaultProps = {
  sorted: 'none',
};
export default HeaderCell;
