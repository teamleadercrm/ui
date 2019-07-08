'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties'));

var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));

var _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn'));

var _getPrototypeOf3 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _assertThisInitialized2 = _interopRequireDefault(require('@babel/runtime/helpers/assertThisInitialized'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _react = _interopRequireWildcard(require('react'));

var _reactSelect = _interopRequireDefault(require('react-select'));

var _Creatable = _interopRequireDefault(require('react-select/lib/Creatable'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _uiIcons = require('@teamleader/ui-icons');

var _box = _interopRequireWildcard(require('../box'));

var _icon = _interopRequireDefault(require('../icon'));

var _validationText = _interopRequireDefault(require('../validationText'));

var _constants = require('../../constants');

var _theme = _interopRequireDefault(require('./theme.css'));

var _classnames = _interopRequireDefault(require('classnames'));

var _uiUtilities = _interopRequireDefault(require('@teamleader/ui-utilities'));

var Select =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(Select, _PureComponent);

    function Select() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, Select);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Select)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'getClearIndicatorStyles', function(
        base,
      ) {
        var inverse = _this.props.inverse;
        return (0, _objectSpread2.default)({}, base, {
          color: inverse ? _constants.COLOR.TEAL.LIGHTEST : _constants.COLOR.TEAL.DARK,
          '&:hover': {
            color: inverse ? _constants.COLOR.NEUTRAL.LIGHTEST : _constants.COLOR.TEAL.DARKEST,
          },
          cursor: 'pointer',
          svg: {
            height: '14px',
            width: '14px',
          },
        });
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'getControlStyles', function(
        base,
        _ref,
      ) {
        var isDisabled = _ref.isDisabled,
          isFocused = _ref.isFocused;
        var _this$props = _this.props,
          error = _this$props.error,
          inverse = _this$props.inverse,
          size = _this$props.size,
          success = _this$props.success,
          warning = _this$props.warning,
          width = _this$props.width;
        var commonStyles = (0, _objectSpread2.default)({}, base, {
          minHeight: size === 'small' ? '30px' : size === 'medium' ? '36px' : '48px',
          width: width,
        });

        if (inverse) {
          return (0, _objectSpread2.default)({}, commonStyles, {
            backgroundColor: isDisabled ? _constants.COLOR.TEAL.DARK : _constants.COLOR.TEAL.NORMAL,
            '&:hover': {
              borderColor: !isFocused && !error && !warning && !success && _constants.COLOR.TEAL.LIGHT,
            },
            borderColor: isFocused
              ? _constants.COLOR.TEAL.LIGHT
              : error
              ? _constants.COLOR.RUBY.LIGHT
              : warning
              ? _constants.COLOR.GOLD.LIGHT
              : success
              ? _constants.COLOR.MINT.LIGHT
              : isDisabled
              ? _constants.COLOR.TEAL.DARK
              : _constants.COLOR.TEAL.NORMAL,
            boxShadow: isFocused
              ? '0 0 0 1px '.concat(_constants.COLOR.TEAL.LIGHT)
              : error
              ? '0 0 0 1px '.concat(_constants.COLOR.RUBY.LIGHT)
              : warning
              ? '0 0 0 1px '.concat(_constants.COLOR.GOLD.LIGHT)
              : success
              ? '0 0 0 1px '.concat(_constants.COLOR.MINT.LIGHT)
              : 'none',
          });
        }

        return (0, _objectSpread2.default)({}, commonStyles, {
          backgroundColor: isDisabled ? _constants.COLOR.NEUTRAL.NORMAL : _constants.COLOR.NEUTRAL.LIGHTEST,
          '&:hover': {
            borderColor: !isFocused && !error && !warning && !success && _constants.COLOR.NEUTRAL.DARKEST,
          },
          borderColor: isFocused
            ? _constants.COLOR.NEUTRAL.DARKEST
            : error
            ? _constants.COLOR.RUBY.DARK
            : warning
            ? _constants.COLOR.GOLD.DARK
            : success
            ? _constants.COLOR.MINT.DARK
            : isDisabled
            ? _constants.COLOR.NEUTRAL.NORMAL
            : _constants.COLOR.NEUTRAL.DARK,
          boxShadow: isFocused
            ? '0 0 0 1px '.concat(_constants.COLOR.NEUTRAL.DARKEST)
            : error
            ? '0 0 0 1px '.concat(_constants.COLOR.RUBY.DARK)
            : warning
            ? '0 0 0 1px '.concat(_constants.COLOR.GOLD.DARK)
            : success
            ? '0 0 0 1px '.concat(_constants.COLOR.MINT.DARK)
            : 'none',
        });
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'getGroupStyles', function(base) {
        var inverse = _this.props.inverse;
        return (0, _objectSpread2.default)({}, base, {
          borderBottomColor: inverse ? _constants.COLOR.TEAL.LIGHT : _constants.COLOR.NEUTRAL.NORMAL,
          borderBottomStyle: 'solid',
          borderBottomWidth: '1px',
          '&:last-child': {
            borderWidth: 0,
          },
        });
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'getGroupHeadingStyles', function(
        base,
      ) {
        var inverse = _this.props.inverse;
        return (0, _objectSpread2.default)({}, base, {
          color: inverse ? _constants.COLOR.NEUTRAL.LIGHTEST : _constants.COLOR.TEAL.DARKEST,
          fontSize: '12px',
          fontWeight: '700',
          letterSpacing: '0.6px',
        });
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'getInput', function(base) {
        var _this$props2 = _this.props,
          size = _this$props2.size,
          value = _this$props2.value;
        return (0, _objectSpread2.default)({}, base, {
          marginLeft: value && value.length === 0 && size !== 'large' ? '6px' : '2px',
        });
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'getMenuPortalStyles', function(base) {
        var inverse = _this.props.inverse;
        return (0, _objectSpread2.default)({}, base, {
          backgroundColor: inverse ? _constants.COLOR.TEAL.NORMAL : _constants.COLOR.NEUTRAL.LIGHTEST,
          fontFamily: 'Inter-UI-Regular',
          fontSize: '14px',
          fontSmoothing: 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
          '-webkit-font-smoothing': 'antialiased',
          zIndex: 500,
        });
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'getMultiValueStyles', function(base) {
        var inverse = _this.props.inverse;
        return (0, _objectSpread2.default)({}, base, {
          borderColor: inverse ? _constants.COLOR.TEAL.DARK : _constants.COLOR.NEUTRAL.NORMAL,
          borderStyle: 'solid',
          borderWidth: '1px',
          borderRadius: '4px',
          margin: '1px',
        });
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'getMultiValueLabelStyles', function(
        base,
      ) {
        var _this$props3 = _this.props,
          inverse = _this$props3.inverse,
          size = _this$props3.size;
        return (0, _objectSpread2.default)({}, base, {
          backgroundColor: inverse ? _constants.COLOR.TEAL.DARK : _constants.COLOR.NEUTRAL.LIGHT,
          borderRadius: 0,
          color: inverse ? _constants.COLOR.NEUTRAL.LIGHTEST : _constants.COLOR.TEAL.DARKEST,
          fontFamily: 'Inter-UI-Medium',
          fontSize: size === 'small' ? '12px' : '14px',
          lineHeight: size === 'small' ? '1' : '18px',
          padding: size === 'large' ? '9px' : '6px',
        });
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'getMultiValueRemoveStyles', function(
        base,
      ) {
        var inverse = _this.props.inverse;
        return (0, _objectSpread2.default)({}, base, {
          backgroundColor: inverse ? _constants.COLOR.TEAL.DARK : _constants.COLOR.NEUTRAL.LIGHT,
          borderRadius: 0,
          color: inverse ? _constants.COLOR.NEUTRAL.LIGHTEST : _constants.COLOR.TEAL.DARKEST,
          '&:hover': {
            backgroundColor: inverse ? _constants.COLOR.TEAL.DARKEST : _constants.COLOR.NEUTRAL.NORMAL,
            color: inverse ? _constants.COLOR.NEUTRAL.LIGHTEST : _constants.COLOR.TEAL.DARKEST,
          },
          paddingLeft: '6px',
          paddingRight: '6px',
          transition: 'background-color .35s cubic-bezier(.4, 0, .2, 1)',
        });
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'getOptionStyles', function(
        base,
        _ref2,
      ) {
        var isDisabled = _ref2.isDisabled,
          isFocused = _ref2.isFocused,
          isSelected = _ref2.isSelected;
        var commonStyles = (0, _objectSpread2.default)({}, base, {
          wordBreak: 'break-all',
          padding: '8px 12px',
        });

        if (_this.props.inverse) {
          return (0, _objectSpread2.default)({}, commonStyles, {
            color: isDisabled
              ? _constants.COLOR.TEAL.LIGHT
              : isSelected
              ? _constants.COLOR.NEUTRAL.LIGHTEST
              : isFocused
              ? _constants.COLOR.TEAL.DARK
              : _constants.COLOR.NEUTRAL.LIGHTEST,
            backgroundColor: isSelected
              ? _constants.COLOR.TEAL.DARK
              : isFocused
              ? _constants.COLOR.TEAL.LIGHT
              : _constants.COLOR.TEAL.NORMAL,
            '&:active': {
              backgroundColor: isDisabled ? _constants.COLOR.TEAL.NORMAL : _constants.COLOR.TEAL.DARK,
              color: isDisabled ? _constants.COLOR.TEAL.LIGHT : _constants.COLOR.NEUTRAL.LIGHTEST,
            },
          });
        }

        return (0, _objectSpread2.default)({}, commonStyles, {
          color: isDisabled ? _constants.COLOR.NEUTRAL.DARK : _constants.COLOR.TEAL.DARK,
          backgroundColor: isSelected
            ? _constants.COLOR.AQUA.LIGHTEST
            : isFocused
            ? _constants.COLOR.NEUTRAL.LIGHT
            : _constants.COLOR.NEUTRAL.LIGHTEST,
          '&:active': {
            backgroundColor: isDisabled ? _constants.COLOR.NEUTRAL.LIGHTEST : _constants.COLOR.AQUA.LIGHTEST,
            color: isDisabled ? _constants.COLOR.NEUTRAL.DARK : _constants.COLOR.TEAL.DARK,
          },
        });
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'getPlaceholderStyles', function(
        base,
        _ref3,
      ) {
        var isDisabled = _ref3.isDisabled,
          isMulti = _ref3.isMulti;
        var _this$props4 = _this.props,
          inverse = _this$props4.inverse,
          size = _this$props4.size;
        var commonStyles = (0, _objectSpread2.default)({}, base, {
          marginLeft: isMulti && size !== 'large' ? '6px' : '2px',
          marginRight: isMulti && size !== 'large' ? '6px' : '2px',
          whiteSpace: 'nowrap',
        });

        if (inverse) {
          return (0, _objectSpread2.default)({}, commonStyles, {
            color: isDisabled ? _constants.COLOR.TEAL.NORMAL : _constants.COLOR.TEAL.LIGHT,
          });
        }

        return (0, _objectSpread2.default)({}, commonStyles, {
          color: _constants.COLOR.NEUTRAL.DARKEST,
        });
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'getSingleValueStyles', function(
        base,
      ) {
        return (0, _objectSpread2.default)({}, base, {
          color: _this.props.inverse ? _constants.COLOR.NEUTRAL.LIGHTEST : _constants.COLOR.TEAL.DARKEST,
        });
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'getValueContainerStyles', function(
        base,
        _ref4,
      ) {
        var isMulti = _ref4.isMulti;
        var size = _this.props.size;
        return (0, _objectSpread2.default)({}, base, {
          minHeight: size === 'small' ? '28px' : size === 'medium' ? '34px' : '46px',
          padding: isMulti && size !== 'large' ? '0' : '0 4px',
        });
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'getStyles', function() {
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
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'getClearIndicator', function() {
        return function(_ref5) {
          var innerProps = _ref5.innerProps;
          var inverse = _this.props.inverse;
          return _react.default.createElement(
            _icon.default,
            (0, _extends2.default)(
              {
                color: inverse ? 'teal' : 'neutral',
                display: 'flex',
                tint: inverse ? 'lightest' : 'darkest',
              },
              innerProps,
            ),
            _react.default.createElement(_uiIcons.IconCloseBadgedSmallFilled, null),
          );
        };
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'getDropDownIndicator', function() {
        return function() {
          var inverse = _this.props.inverse;
          return _react.default.createElement(
            _icon.default,
            {
              alignItems: 'center',
              className: _theme.default['dropdown-indicator'],
              color: inverse ? 'teal' : 'neutral',
              display: 'flex',
              justifyContent: 'center',
              tint: inverse ? 'lightest' : 'darkest',
            },
            _react.default.createElement(_uiIcons.IconChevronDownSmallOutline, null),
          );
        };
      });
      return _this;
    }

    (0, _createClass2.default)(Select, [
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
            otherProps = (0, _objectWithoutProperties2.default)(_this$props5, [
              'components',
              'creatable',
              'error',
              'inverse',
              'helpText',
              'size',
              'success',
              'warning',
            ]);
          var boxProps = (0, _box.pickBoxProps)(otherProps);
          var restProps = (0, _box.omitBoxProps)(otherProps);
          var wrapperClassnames = (0, _classnames.default)(
            _theme.default['is-'.concat(size)],
            ((_cx = {}),
            (0, _defineProperty2.default)(_cx, _theme.default['has-error'], error),
            (0, _defineProperty2.default)(_cx, _theme.default['is-inverse'], inverse),
            _cx),
          );
          var Element = creatable ? _Creatable.default : _reactSelect.default;
          return _react.default.createElement(
            _box.default,
            (0, _extends2.default)(
              {
                className: wrapperClassnames,
              },
              boxProps,
            ),
            _react.default.createElement(
              Element,
              (0, _extends2.default)(
                {
                  className: (0, _classnames.default)(
                    _uiUtilities.default['reset-font-smoothing'],
                    _theme.default['select'],
                  ),
                  components: (0, _objectSpread2.default)(
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
            _react.default.createElement(_validationText.default, {
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
  })(_react.PureComponent);

Select.defaultProps = {
  creatable: false,
  inverse: false,
  menuPortalTarget: document.body,
  size: 'medium',
  width: '100%',
};
var _default = Select;
exports.default = _default;
