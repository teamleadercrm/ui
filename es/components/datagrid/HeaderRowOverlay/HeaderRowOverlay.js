import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Box from '../../box';
import BulkActions from './BulkActions';
import NumSelectedRows from './NumSelectedRows';
import theme from './theme.css';

var HeaderRowOverlay =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(HeaderRowOverlay, _PureComponent);

    function HeaderRowOverlay() {
      _classCallCheck(this, HeaderRowOverlay);

      return _possibleConstructorReturn(this, _getPrototypeOf(HeaderRowOverlay).apply(this, arguments));
    }

    _createClass(HeaderRowOverlay, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            headerCellCheckboxSize = _this$props.headerCellCheckboxSize,
            numSelectedRows = _this$props.numSelectedRows,
            numSelectedRowsLabel = _this$props.numSelectedRowsLabel,
            others = _objectWithoutProperties(_this$props, [
              'children',
              'className',
              'headerCellCheckboxSize',
              'numSelectedRows',
              'numSelectedRowsLabel',
            ]);

          var classNames = cx(
            theme['header-row-overlay'],
            theme['data-grid-checkbox-size-'.concat(headerCellCheckboxSize)],
            className,
          );
          return React.createElement(
            Box,
            _extends(
              {
                display: 'flex',
                alignItems: 'center',
                className: classNames,
                'data-teamleader-ui': 'datagrid-header-row-overlay',
              },
              others,
            ),
            React.createElement(NumSelectedRows, {
              numSelectedRows: numSelectedRows,
              numSelectedRowsLabel: numSelectedRowsLabel,
            }),
            React.createElement(BulkActions, {
              bulkActions: children,
            }),
          );
        },
      },
    ]);

    return HeaderRowOverlay;
  })(PureComponent);

HeaderRowOverlay.defaultProps = {
  numSelectedRows: 0,
};
export default HeaderRowOverlay;
