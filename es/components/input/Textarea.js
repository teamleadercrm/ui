import _extends from '@babel/runtime/helpers/extends';
import _objectSpread from '@babel/runtime/helpers/objectSpread';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import InputBase from './InputBase';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import ValidationText from '../validationText';
import theme from './theme.css';

var Textarea =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(Textarea, _PureComponent);

    function Textarea() {
      _classCallCheck(this, Textarea);

      return _possibleConstructorReturn(this, _getPrototypeOf(Textarea).apply(this, arguments));
    }

    _createClass(Textarea, [
      {
        key: 'render',
        value: function render() {
          var _cx;

          var _this$props = this.props,
            className = _this$props.className,
            error = _this$props.error,
            helpText = _this$props.helpText,
            inverse = _this$props.inverse,
            success = _this$props.success,
            warning = _this$props.warning,
            others = _objectWithoutProperties(_this$props, [
              'className',
              'error',
              'helpText',
              'inverse',
              'success',
              'warning',
            ]);

          var classNames = cx(
            theme['wrapper'],
            ((_cx = {}),
            _defineProperty(_cx, theme['has-error'], error),
            _defineProperty(_cx, theme['has-success'], success),
            _defineProperty(_cx, theme['has-warning'], warning),
            _cx),
            className,
          );
          var boxProps = pickBoxProps(others);

          var inputProps = _objectSpread(
            {
              inverse: inverse,
            },
            omitBoxProps(others),
          );

          return React.createElement(
            Box,
            _extends(
              {
                className: classNames,
              },
              boxProps,
            ),
            React.createElement(
              InputBase,
              _extends(
                {
                  className: theme['textarea'],
                  element: 'textarea',
                },
                inputProps,
              ),
            ),
            React.createElement(ValidationText, {
              error: error,
              help: helpText,
              inverse: inverse,
              success: success,
              warning: warning,
            }),
          );
        },
      },
    ]);

    return Textarea;
  })(PureComponent);

Textarea.defaultProps = {
  inverse: false,
};
export default Textarea;
