import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _extends from '@babel/runtime/helpers/extends';
import _objectSpread from '@babel/runtime/helpers/objectSpread';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/inherits';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import React, { PureComponent } from 'react';
import ReactSelect from 'react-select';
import ReactCreatableSelect from 'react-select/lib/Creatable';
import PropTypes from 'prop-types';
import { IconCloseBadgedSmallFilled, IconChevronDownSmallOutline } from '@teamleader/ui-icons';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import Icon from '../icon';
import ValidationText from '../validationText';
import { COLOR } from '../../constants';
import theme from './theme.css';
import cx from 'classnames';
import uiUtilities from '@teamleader/ui-utilities';

var Select =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(Select, _PureComponent);

    function Select() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Select);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(Select)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );

      _defineProperty(_assertThisInitialized(_this), 'getClearIndicatorStyles', function(base) {
        var inverse = _this.props.inverse;
        return _objectSpread({}, base, {
          color: inverse ? COLOR.TEAL.LIGHTEST : COLOR.TEAL.DARK,
          '&:hover': {
            color: inverse ? COLOR.NEUTRAL.LIGHTEST : COLOR.TEAL.DARKEST,
          },
          cursor: 'pointer',
          svg: {
            height: '14px',
            width: '14px',
          },
        });
      });

      _defineProperty(_assertThisInitialized(_this), 'getControlStyles', function(base, _ref) {
        var isDisabled = _ref.isDisabled,
          isFocused = _ref.isFocused;
        var _this$props = _this.props,
          error = _this$props.error,
          inverse = _this$props.inverse,
          size = _this$props.size,
          success = _this$props.success,
          warning = _this$props.warning,
          width = _this$props.width;

        var commonStyles = _objectSpread({}, base, {
          minHeight: size === 'small' ? '30px' : size === 'medium' ? '36px' : '48px',
          width: width,
        });

        if (inverse) {
          return _objectSpread({}, commonStyles, {
            backgroundColor: isDisabled ? COLOR.TEAL.DARK : COLOR.TEAL.NORMAL,
            '&:hover': {
              borderColor: !isFocused && !error && !warning && !success && COLOR.TEAL.LIGHT,
            },
            borderColor: isFocused
              ? COLOR.TEAL.LIGHT
              : error
              ? COLOR.RUBY.LIGHT
              : warning
              ? COLOR.GOLD.LIGHT
              : success
              ? COLOR.MINT.LIGHT
              : isDisabled
              ? COLOR.TEAL.DARK
              : COLOR.TEAL.NORMAL,
            boxShadow: isFocused
              ? '0 0 0 1px '.concat(COLOR.TEAL.LIGHT)
              : error
              ? '0 0 0 1px '.concat(COLOR.RUBY.LIGHT)
              : warning
              ? '0 0 0 1px '.concat(COLOR.GOLD.LIGHT)
              : success
              ? '0 0 0 1px '.concat(COLOR.MINT.LIGHT)
              : 'none',
          });
        }

        return _objectSpread({}, commonStyles, {
          backgroundColor: isDisabled ? COLOR.NEUTRAL.NORMAL : COLOR.NEUTRAL.LIGHTEST,
          '&:hover': {
            borderColor: !isFocused && !error && !warning && !success && COLOR.NEUTRAL.DARKEST,
          },
          borderColor: isFocused
            ? COLOR.NEUTRAL.DARKEST
            : error
            ? COLOR.RUBY.DARK
            : warning
            ? COLOR.GOLD.DARK
            : success
            ? COLOR.MINT.DARK
            : isDisabled
            ? COLOR.NEUTRAL.NORMAL
            : COLOR.NEUTRAL.DARK,
          boxShadow: isFocused
            ? '0 0 0 1px '.concat(COLOR.NEUTRAL.DARKEST)
            : error
            ? '0 0 0 1px '.concat(COLOR.RUBY.DARK)
            : warning
            ? '0 0 0 1px '.concat(COLOR.GOLD.DARK)
            : success
            ? '0 0 0 1px '.concat(COLOR.MINT.DARK)
            : 'none',
        });
      });

      _defineProperty(_assertThisInitialized(_this), 'getGroupStyles', function(base) {
        var inverse = _this.props.inverse;
        return _objectSpread({}, base, {
          borderBottomColor: inverse ? COLOR.TEAL.LIGHT : COLOR.NEUTRAL.NORMAL,
          borderBottomStyle: 'solid',
          borderBottomWidth: '1px',
          '&:last-child': {
            borderWidth: 0,
          },
        });
      });

      _defineProperty(_assertThisInitialized(_this), 'getGroupHeadingStyles', function(base) {
        var inverse = _this.props.inverse;
        return _objectSpread({}, base, {
          color: inverse ? COLOR.NEUTRAL.LIGHTEST : COLOR.TEAL.DARKEST,
          fontSize: '12px',
          fontWeight: '700',
          letterSpacing: '0.6px',
        });
      });

      _defineProperty(_assertThisInitialized(_this), 'getInput', function(base) {
        var _this$props2 = _this.props,
          size = _this$props2.size,
          value = _this$props2.value;
        return _objectSpread({}, base, {
          marginLeft: value && value.length === 0 && size !== 'large' ? '6px' : '2px',
        });
      });

      _defineProperty(_assertThisInitialized(_this), 'getMenuPortalStyles', function(base) {
        var inverse = _this.props.inverse;
        return _objectSpread({}, base, {
          backgroundColor: inverse ? COLOR.TEAL.NORMAL : COLOR.NEUTRAL.LIGHTEST,
          fontFamily: 'Inter-UI-Regular',
          fontSize: '14px',
          fontSmoothing: 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
          '-webkit-font-smoothing': 'antialiased',
          zIndex: 500,
        });
      });

      _defineProperty(_assertThisInitialized(_this), 'getMultiValueStyles', function(base) {
        var inverse = _this.props.inverse;
        return _objectSpread({}, base, {
          borderColor: inverse ? COLOR.TEAL.DARK : COLOR.NEUTRAL.NORMAL,
          borderStyle: 'solid',
          borderWidth: '1px',
          borderRadius: '4px',
          margin: '1px',
        });
      });

      _defineProperty(_assertThisInitialized(_this), 'getMultiValueLabelStyles', function(base) {
        var _this$props3 = _this.props,
          inverse = _this$props3.inverse,
          size = _this$props3.size;
        return _objectSpread({}, base, {
          backgroundColor: inverse ? COLOR.TEAL.DARK : COLOR.NEUTRAL.LIGHT,
          borderRadius: 0,
          color: inverse ? COLOR.NEUTRAL.LIGHTEST : COLOR.TEAL.DARKEST,
          fontFamily: 'Inter-UI-Medium',
          fontSize: size === 'small' ? '12px' : '14px',
          lineHeight: size === 'small' ? '1' : '18px',
          padding: size === 'large' ? '9px' : '6px',
        });
      });

      _defineProperty(_assertThisInitialized(_this), 'getMultiValueRemoveStyles', function(base) {
        var inverse = _this.props.inverse;
        return _objectSpread({}, base, {
          backgroundColor: inverse ? COLOR.TEAL.DARK : COLOR.NEUTRAL.LIGHT,
          borderRadius: 0,
          color: inverse ? COLOR.NEUTRAL.LIGHTEST : COLOR.TEAL.DARKEST,
          '&:hover': {
            backgroundColor: inverse ? COLOR.TEAL.DARKEST : COLOR.NEUTRAL.NORMAL,
            color: inverse ? COLOR.NEUTRAL.LIGHTEST : COLOR.TEAL.DARKEST,
          },
          paddingLeft: '6px',
          paddingRight: '6px',
          transition: 'background-color .35s cubic-bezier(.4, 0, .2, 1)',
        });
      });

      _defineProperty(_assertThisInitialized(_this), 'getOptionStyles', function(base, _ref2) {
        var isDisabled = _ref2.isDisabled,
          isFocused = _ref2.isFocused,
          isSelected = _ref2.isSelected;

        var commonStyles = _objectSpread({}, base, {
          wordBreak: 'break-all',
          padding: '8px 12px',
        });

        if (_this.props.inverse) {
          return _objectSpread({}, commonStyles, {
            color: isDisabled
              ? COLOR.TEAL.LIGHT
              : isSelected
              ? COLOR.NEUTRAL.LIGHTEST
              : isFocused
              ? COLOR.TEAL.DARK
              : COLOR.NEUTRAL.LIGHTEST,
            backgroundColor: isSelected ? COLOR.TEAL.DARK : isFocused ? COLOR.TEAL.LIGHT : COLOR.TEAL.NORMAL,
            '&:active': {
              backgroundColor: isDisabled ? COLOR.TEAL.NORMAL : COLOR.TEAL.DARK,
              color: isDisabled ? COLOR.TEAL.LIGHT : COLOR.NEUTRAL.LIGHTEST,
            },
          });
        }

        return _objectSpread({}, commonStyles, {
          color: isDisabled ? COLOR.NEUTRAL.DARK : COLOR.TEAL.DARK,
          backgroundColor: isSelected ? COLOR.AQUA.LIGHTEST : isFocused ? COLOR.NEUTRAL.LIGHT : COLOR.NEUTRAL.LIGHTEST,
          '&:active': {
            backgroundColor: isDisabled ? COLOR.NEUTRAL.LIGHTEST : COLOR.AQUA.LIGHTEST,
            color: isDisabled ? COLOR.NEUTRAL.DARK : COLOR.TEAL.DARK,
          },
        });
      });

      _defineProperty(_assertThisInitialized(_this), 'getPlaceholderStyles', function(base, _ref3) {
        var isDisabled = _ref3.isDisabled,
          isMulti = _ref3.isMulti;
        var _this$props4 = _this.props,
          inverse = _this$props4.inverse,
          size = _this$props4.size;

        var commonStyles = _objectSpread({}, base, {
          marginLeft: isMulti && size !== 'large' ? '6px' : '2px',
          marginRight: isMulti && size !== 'large' ? '6px' : '2px',
          whiteSpace: 'nowrap',
        });

        if (inverse) {
          return _objectSpread({}, commonStyles, {
            color: isDisabled ? COLOR.TEAL.NORMAL : COLOR.TEAL.LIGHT,
          });
        }

        return _objectSpread({}, commonStyles, {
          color: COLOR.NEUTRAL.DARKEST,
        });
      });

      _defineProperty(_assertThisInitialized(_this), 'getSingleValueStyles', function(base) {
        return _objectSpread({}, base, {
          color: _this.props.inverse ? COLOR.NEUTRAL.LIGHTEST : COLOR.TEAL.DARKEST,
        });
      });

      _defineProperty(_assertThisInitialized(_this), 'getValueContainerStyles', function(base, _ref4) {
        var isMulti = _ref4.isMulti;
        var size = _this.props.size;
        return _objectSpread({}, base, {
          minHeight: size === 'small' ? '28px' : size === 'medium' ? '34px' : '46px',
          padding: isMulti && size !== 'large' ? '0' : '0 4px',
        });
      });

      _defineProperty(_assertThisInitialized(_this), 'getStyles', function() {
        return {
          clearIndicator: _this.getClearIndicatorStyles,
          control: _this.getControlStyles,
          group: _this.getGroupStyles,
          groupHeading: _this.getGroupHeadingStyles,
          input: _this.getInput,
          menuPortal: _this.getMenuPortalStyles,
          multiValue: _this.getMultiValueStyles,
          multiValueLabel: _this.getMultiValueLabelStyles,
          multiValueRemove: _this.getMultiValueRemoveStyles,
          option: _this.getOptionStyles,
          placeholder: _this.getPlaceholderStyles,
          singleValue: _this.getSingleValueStyles,
          valueContainer: _this.getValueContainerStyles,
        };
      });

      _defineProperty(_assertThisInitialized(_this), 'getClearIndicator', function() {
        return function(_ref5) {
          var innerProps = _ref5.innerProps;
          var inverse = _this.props.inverse;
          return React.createElement(
            Icon,
            _extends(
              {
                color: inverse ? 'teal' : 'neutral',
                display: 'flex',
                tint: inverse ? 'lightest' : 'darkest',
              },
              innerProps,
            ),
            React.createElement(IconCloseBadgedSmallFilled, null),
          );
        };
      });

      _defineProperty(_assertThisInitialized(_this), 'getDropDownIndicator', function() {
        return function() {
          var inverse = _this.props.inverse;
          return React.createElement(
            Icon,
            {
              alignItems: 'center',
              className: theme['dropdown-indicator'],
              color: inverse ? 'teal' : 'neutral',
              display: 'flex',
              justifyContent: 'center',
              tint: inverse ? 'lightest' : 'darkest',
            },
            React.createElement(IconChevronDownSmallOutline, null),
          );
        };
      });

      return _this;
    }

    _createClass(Select, [
      {
        key: 'render',
        value: function render() {
          var _cx;

          var _this$props5 = this.props,
            components = _this$props5.components,
            creatable = _this$props5.creatable,
            error = _this$props5.error,
            inverse = _this$props5.inverse,
            helpText = _this$props5.helpText,
            size = _this$props5.size,
            success = _this$props5.success,
            warning = _this$props5.warning,
            otherProps = _objectWithoutProperties(_this$props5, [
              'components',
              'creatable',
              'error',
              'inverse',
              'helpText',
              'size',
              'success',
              'warning',
            ]);

          var boxProps = pickBoxProps(otherProps);
          var restProps = omitBoxProps(otherProps);
          var wrapperClassnames = cx(
            theme['is-'.concat(size)],
            ((_cx = {}),
            _defineProperty(_cx, theme['has-error'], error),
            _defineProperty(_cx, theme['is-inverse'], inverse),
            _cx),
          );
          var Element = creatable ? ReactCreatableSelect : ReactSelect;
          return React.createElement(
            Box,
            _extends(
              {
                className: wrapperClassnames,
              },
              boxProps,
            ),
            React.createElement(
              Element,
              _extends(
                {
                  className: cx(uiUtilities['reset-font-smoothing'], theme['select']),
                  components: _objectSpread(
                    {
                      ClearIndicator: this.getClearIndicator(),
                      DropdownIndicator: this.getDropDownIndicator(),
                      IndicatorSeparator: null,
                    },
                    components,
                  ),
                  styles: this.getStyles(),
                },
                restProps,
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

    return Select;
  })(PureComponent);

Select.defaultProps = {
  creatable: false,
  inverse: false,
  menuPortalTarget: document.body,
  size: 'medium',
  width: '100%',
};
export default Select;
