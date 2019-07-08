import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../../box';

var BulkActions =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(BulkActions, _PureComponent);

    function BulkActions() {
      _classCallCheck(this, BulkActions);

      return _possibleConstructorReturn(this, _getPrototypeOf(BulkActions).apply(this, arguments));
    }

    _createClass(BulkActions, [
      {
        key: 'render',
        value: function render() {
          var bulkActions = this.props.bulkActions;
          return React.createElement(
            Box,
            {
              display: 'flex',
              flex: '1',
              alignItems: 'center',
              'data-teamleader-ui': 'datagrid-bulk-actions',
            },
            bulkActions,
          );
        },
      },
    ]);

    return BulkActions;
  })(PureComponent);

BulkActions.defaultProps = {
  bulkActions: [],
};
export default BulkActions;
