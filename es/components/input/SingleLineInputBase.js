import _extends from '@babel/runtime/helpers/extends';
import _objectSpread from '@babel/runtime/helpers/objectSpread';
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
import cx from 'classnames';
import InputBase from './InputBase';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import ValidationText from '../validationText';
import theme from './theme.css';

var SingleLineInputBase =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(SingleLineInputBase, _PureComponent);

    function SingleLineInputBase() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, SingleLineInputBase);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(SingleLineInputBase)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );

      _defineProperty(_assertThisInitialized(_this), 'state', {
        inputHasfocus: false,
      });

      _defineProperty(_assertThisInitialized(_this), 'handleBlur', function(event) {
        _this.setState({
          inputHasfocus: false,
        });

        if (_this.props.onBlur) {
          _this.props.onBlur(event);
        }
      });

      _defineProperty(_assertThisInitialized(_this), 'handleFocus', function(event) {
        _this.setState({
          inputHasfocus: true,
        });

        if (_this.props.onFocus) {
          _this.props.onFocus(event);
        }
      });

      return _this;
    }

    _createClass(SingleLineInputBase, [
      {
        key: 'renderOneOrMultipleElements',
        value: function renderOneOrMultipleElements(prop) {
          if (Array.isArray(prop)) {
            return prop.map(function(element, index) {
              return React.cloneElement(element, {
                key: index,
              });
            });
          }

          return prop;
        },
      },
      {
        key: 'render',
        value: function render() {
          var _cx;

          var _this$props = this.props,
            className = _this$props.className,
            connectedLeft = _this$props.connectedLeft,
            connectedRight = _this$props.connectedRight,
            disabled = _this$props.disabled,
            error = _this$props.error,
            helpText = _this$props.helpText,
            onFocus = _this$props.onFocus,
            onBlur = _this$props.onBlur,
            prefix = _this$props.prefix,
            inverse = _this$props.inverse,
            readOnly = _this$props.readOnly,
            success = _this$props.success,
            suffix = _this$props.suffix,
            width = _this$props.width,
            warning = _this$props.warning,
            others = _objectWithoutProperties(_this$props, [
              'className',
              'connectedLeft',
              'connectedRight',
              'disabled',
              'error',
              'helpText',
              'onFocus',
              'onBlur',
              'prefix',
              'inverse',
              'readOnly',
              'success',
              'suffix',
              'width',
              'warning',
            ]);

          var classNames = cx(
            theme['wrapper'],
            ((_cx = {}),
            _defineProperty(_cx, theme['has-focus'], this.state.inputHasfocus),
            _defineProperty(_cx, theme['has-error'], error),
            _defineProperty(_cx, theme['has-success'], success),
            _defineProperty(_cx, theme['has-warning'], warning),
            _defineProperty(_cx, theme['has-connected-left'], connectedLeft),
            _defineProperty(_cx, theme['has-connected-right'], connectedRight),
            _defineProperty(_cx, theme['is-disabled'], disabled),
            _defineProperty(_cx, theme['is-inverse'], inverse),
            _defineProperty(_cx, theme['is-read-only'], readOnly),
            _cx),
            className,
          );
          var boxProps = pickBoxProps(others);

          var inputProps = _objectSpread(
            {
              disabled: disabled,
              inverse: inverse,
              onBlur: this.handleBlur,
              onFocus: this.handleFocus,
              readOnly: readOnly,
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
              'div',
              {
                className: theme['input-wrapper'],
              },
              connectedLeft,
              React.createElement(
                'div',
                {
                  className: theme['input-inner-wrapper'],
                  style: {
                    width: width,
                    flex: width && '0 0 auto',
                  },
                },
                prefix &&
                  React.createElement(
                    'div',
                    {
                      className: theme['prefix-wrapper'],
                    },
                    this.renderOneOrMultipleElements(prefix),
                  ),
                React.createElement(InputBase, inputProps),
                suffix &&
                  React.createElement(
                    'div',
                    {
                      className: theme['suffix-wrapper'],
                    },
                    this.renderOneOrMultipleElements(suffix),
                  ),
              ),
              connectedRight,
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

    return SingleLineInputBase;
  })(PureComponent);

export default SingleLineInputBase;
