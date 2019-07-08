'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));

var _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn'));

var _getPrototypeOf3 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _assertThisInitialized2 = _interopRequireDefault(require('@babel/runtime/helpers/assertThisInitialized'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _box = _interopRequireWildcard(require('../box'));

var _datepicker = _interopRequireDefault(require('../datepicker'));

var _icon = _interopRequireDefault(require('../icon'));

var _input = _interopRequireDefault(require('../input'));

var _popover = _interopRequireDefault(require('../popover'));

var _classnames = _interopRequireDefault(require('classnames'));

var _theme = _interopRequireDefault(require('./theme.css'));

var _localeUtils = _interopRequireWildcard(require('./localeUtils'));

var _uiIcons = require('@teamleader/ui-icons');

var DatePickerInput =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(DatePickerInput, _PureComponent);

    function DatePickerInput() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, DatePickerInput);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(DatePickerInput)).call.apply(
          _getPrototypeOf2,
          [this].concat(args),
        ),
      );
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'state', {
        isPopoverActive: false,
        popoverAnchorEl: null,
        selectedDate: null,
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleInputFocus', function(event) {
        var _this$props$inputProp = _this.props.inputProps,
          onFocus = _this$props$inputProp.onFocus,
          readOnly = _this$props$inputProp.readOnly;

        if (readOnly) {
          return;
        }

        _this.setState(
          {
            popoverAnchorEl: event.currentTarget,
            isPopoverActive: true,
          },
          function() {
            return onFocus && onFocus();
          },
        );
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handlePopoverClose', function() {
        _this.setState({
          isPopoverActive: false,
        });
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleDatePickerDateChange', function(
        date,
      ) {
        _this.setState(
          {
            isPopoverActive: false,
            selectedDay: date,
          },
          function() {
            return _this.props.onChange(date);
          },
        );
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'renderIcon', function() {
        var inverse = _this.props.inputProps && _this.props.inputProps.inverse;
        return _react.default.createElement(
          _icon.default,
          {
            color: inverse ? 'teal' : 'neutral',
            tint: inverse ? 'light' : 'darkest',
            marginHorizontal: 2,
          },
          _react.default.createElement(_uiIcons.IconCalendarSmallOutline, null),
        );
      });
      return _this;
    }

    (0, _createClass2.default)(
      DatePickerInput,
      [
        {
          key: 'render',
          value: function render() {
            var _this$props = this.props,
              bordered = _this$props.bordered,
              className = _this$props.className,
              dayPickerProps = _this$props.dayPickerProps,
              inverse = _this$props.inverse,
              inputProps = _this$props.inputProps,
              locale = _this$props.locale,
              popoverProps = _this$props.popoverProps,
              size = _this$props.size,
              others = (0, _objectWithoutProperties2.default)(_this$props, [
                'bordered',
                'className',
                'dayPickerProps',
                'inverse',
                'inputProps',
                'locale',
                'popoverProps',
                'size',
              ]);
            var _this$state = this.state,
              isPopoverActive = _this$state.isPopoverActive,
              popoverAnchorEl = _this$state.popoverAnchorEl,
              selectedDate = _this$state.selectedDate;
            var boxProps = (0, _box.pickBoxProps)(others);
            var datePickerClassNames = (0, _classnames.default)(
              _theme.default['date-picker-input'],
              _theme.default['is-'.concat(size)],
            );
            var formattedDate = this.props.formatDate
              ? this.props.formatDate(selectedDate, locale)
              : (0, _localeUtils.formatDate)(selectedDate, locale);
            return _react.default.createElement(
              _box.default,
              (0, _extends2.default)(
                {
                  className: className,
                },
                boxProps,
              ),
              _react.default.createElement(
                _input.default,
                (0, _extends2.default)(
                  {
                    inverse: inverse,
                    onFocus: this.handleInputFocus,
                    prefix: this.renderIcon(),
                    size: size,
                    value: formattedDate,
                    width: '120px',
                  },
                  inputProps,
                ),
              ),
              _react.default.createElement(
                _popover.default,
                (0, _extends2.default)(
                  {
                    active: isPopoverActive,
                    anchorEl: popoverAnchorEl,
                    backdrop: 'transparent',
                    fullWidth: true,
                    onEscKeyDown: this.handlePopoverClose,
                    onOverlayClick: this.handlePopoverClose,
                    position: 'end',
                    offsetCorrection: 30,
                    zIndex: 500,
                  },
                  popoverProps,
                ),
                _react.default.createElement(
                  _box.default,
                  {
                    overflowY: 'auto',
                  },
                  _react.default.createElement(
                    _datepicker.default,
                    (0, _extends2.default)(
                      {
                        bordered: bordered,
                        className: datePickerClassNames,
                        locale: locale,
                        localeUtils: _localeUtils.default,
                        month: selectedDate,
                        onChange: this.handleDatePickerDateChange,
                        selectedDate: selectedDate,
                      },
                      dayPickerProps,
                    ),
                  ),
                ),
              ),
            );
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function getDerivedStateFromProps(props, state) {
            if (props.selectedDate !== undefined && props.selectedDate !== state.selectedDate) {
              return {
                selectedDate: props.selectedDate,
              };
            }

            return null;
          },
        },
      ],
    );
    return DatePickerInput;
  })(_react.PureComponent);

DatePickerInput.defaultProps = {
  bordered: false,
  dayPickerProps: {},
  inputProps: {},
  inverse: false,
  locale: 'en-GB',
  popoverProps: {},
  size: 'medium',
};
var _default = DatePickerInput;
exports.default = _default;
