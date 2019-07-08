import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../../box';
import { TextBody, Monospaced } from '../../typography';

var NumSelectedRows =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(NumSelectedRows, _PureComponent);

    function NumSelectedRows() {
      _classCallCheck(this, NumSelectedRows);

      return _possibleConstructorReturn(this, _getPrototypeOf(NumSelectedRows).apply(this, arguments));
    }

    _createClass(NumSelectedRows, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            numSelectedRows = _this$props.numSelectedRows,
            numSelectedRowsLabel = _this$props.numSelectedRowsLabel;
          return React.createElement(
            Box,
            {
              marginRight: 3,
              'data-teamleader-ui': 'datagrid-num-selected-rows',
            },
            React.createElement(
              TextBody,
              {
                element: 'span',
                marginRight: 1,
              },
              React.createElement(Monospaced, null, React.createElement('strong', null, numSelectedRows)),
            ),
            React.createElement(
              TextBody,
              {
                color: 'neutral',
                element: 'span',
              },
              numSelectedRowsLabel(numSelectedRows),
            ),
          );
        },
      },
    ]);

    return NumSelectedRows;
  })(PureComponent);

NumSelectedRows.defaultProps = {
  numSelectedRows: 0,
  numSelectedRowsLabel: function numSelectedRowsLabel() {
    return 'selected';
  },
};
export default NumSelectedRows;
