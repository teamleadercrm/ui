import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ErrorText from './ErrorText';
import HelpText from './HelpText';
import SuccessText from './SuccessText';
import WarningText from './WarningText';

var ValidationText =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(ValidationText, _PureComponent);

    function ValidationText() {
      _classCallCheck(this, ValidationText);

      return _possibleConstructorReturn(this, _getPrototypeOf(ValidationText).apply(this, arguments));
    }

    _createClass(ValidationText, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            error = _this$props.error,
            inverse = _this$props.inverse,
            help = _this$props.help,
            success = _this$props.success,
            warning = _this$props.warning;

          if (error && typeof error !== 'boolean') {
            return React.createElement(
              ErrorText,
              {
                inverse: inverse,
              },
              error,
            );
          }

          if (warning && typeof warning !== 'boolean') {
            return React.createElement(
              WarningText,
              {
                inverse: inverse,
              },
              warning,
            );
          }

          if (success && typeof success !== 'boolean') {
            return React.createElement(
              SuccessText,
              {
                inverse: inverse,
              },
              success,
            );
          }

          if (help) {
            return React.createElement(
              HelpText,
              {
                inverse: inverse,
              },
              help,
            );
          }

          return null;
        },
      },
    ]);

    return ValidationText;
  })(PureComponent);

export default ValidationText;
