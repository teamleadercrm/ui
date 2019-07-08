import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import Row from './Row';
import cx from 'classnames';
import theme from './theme.css';

var FooterRow =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(FooterRow, _PureComponent);

    function FooterRow() {
      _classCallCheck(this, FooterRow);

      return _possibleConstructorReturn(this, _getPrototypeOf(FooterRow).apply(this, arguments));
    }

    _createClass(FooterRow, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            className = _this$props.className,
            children = _this$props.children,
            sliceFrom = _this$props.sliceFrom,
            sliceTo = _this$props.sliceTo,
            preserveSelectableSpace = _this$props.preserveSelectableSpace,
            others = _objectWithoutProperties(_this$props, [
              'className',
              'children',
              'sliceFrom',
              'sliceTo',
              'preserveSelectableSpace',
            ]);

          var childrenArray = Array.isArray(children) ? children : [children];
          var childrenSliced = childrenArray.slice(sliceFrom, sliceTo);
          var classNames = cx(theme['footer-row'], className);
          return React.createElement(
            Row,
            _extends(
              {
                className: classNames,
                'data-teamleader-ui': 'datagrid-footer-row',
              },
              others,
            ),
            preserveSelectableSpace &&
              React.createElement(Cell, {
                flex: 'min-width',
              }),
            childrenSliced,
          );
        },
      },
    ]);

    return FooterRow;
  })(PureComponent);

export default FooterRow;
