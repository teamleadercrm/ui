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

var _reactDayPicker = _interopRequireDefault(require('react-day-picker'));

var _box = _interopRequireWildcard(require('../box'));

var _NavigationBar = _interopRequireDefault(require('./NavigationBar'));

var _WeekDay = _interopRequireDefault(require('./WeekDay'));

var _utils = require('./utils');

var _classnames = _interopRequireDefault(require('classnames'));

var _theme = _interopRequireDefault(require('./theme.css'));

var _uiUtilities = _interopRequireDefault(require('@teamleader/ui-utilities'));

var DatePickerRange =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(DatePickerRange, _PureComponent);

    function DatePickerRange() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, DatePickerRange);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(DatePickerRange)).call.apply(
          _getPrototypeOf2,
          [this].concat(args),
        ),
      );
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'state', {
        selectedStartDate: null,
        selectedEndDate: null,
        mouseEnteredEndDate: null,
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleDayClick', function(day) {
        var _this$state = _this.state,
          selectedStartDate = _this$state.selectedStartDate,
          selectedEndDate = _this$state.selectedEndDate;

        if ((0, _utils.isSelectingFirstDay)(selectedStartDate, selectedEndDate, day)) {
          _this.setState(
            {
              selectedStartDate: day,
              selectedEndDate: null,
              mouseEnteredEndDate: null,
            },
            function() {
              return _this.props.onChange({
                selectedStartDate: day,
                selectedEndDate: null,
              });
            },
          );
        } else {
          _this.setState(
            {
              selectedEndDate: day,
              mouseEnteredEndDate: day,
            },
            function() {
              return _this.props.onChange({
                selectedStartDate: selectedStartDate,
                selectedEndDate: day,
              });
            },
          );
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleDayMouseEnter', function(day) {
        var _this$state2 = _this.state,
          selectedStartDate = _this$state2.selectedStartDate,
          selectedEndDate = _this$state2.selectedEndDate;

        if (!(0, _utils.isSelectingFirstDay)(selectedStartDate, selectedEndDate, day)) {
          _this.setState({
            mouseEnteredEndDate: day,
          });
        }
      });
      return _this;
    }

    (0, _createClass2.default)(
      DatePickerRange,
      [
        {
          key: 'render',
          value: function render() {
            var _this$props = this.props,
              bordered = _this$props.bordered,
              className = _this$props.className,
              size = _this$props.size,
              others = (0, _objectWithoutProperties2.default)(_this$props, ['bordered', 'className', 'size']);
            var _this$state3 = this.state,
              selectedStartDate = _this$state3.selectedStartDate,
              mouseEnteredEndDate = _this$state3.mouseEnteredEndDate;
            var modifiers = {
              from: selectedStartDate,
              to: mouseEnteredEndDate,
            };
            var selectedDays = [
              selectedStartDate,
              {
                from: selectedStartDate,
                to: mouseEnteredEndDate,
              },
            ];
            var boxProps = (0, _box.pickBoxProps)(others);
            var restProps = (0, _box.omitBoxProps)(others);
            var classNames = (0, _classnames.default)(
              _uiUtilities.default['reset-font-smoothing'],
              _theme.default['date-picker'],
              _theme.default['has-range'],
              _theme.default['is-'.concat(size)],
              (0, _defineProperty2.default)({}, _theme.default['is-bordered'], bordered),
              className,
            );
            return _react.default.createElement(
              _box.default,
              boxProps,
              _react.default.createElement(
                _reactDayPicker.default,
                (0, _extends2.default)({}, restProps, {
                  className: classNames,
                  classNames: _theme.default,
                  modifiers: (0, _utils.convertModifiersToClassnames)(modifiers, _theme.default),
                  navbarElement: _react.default.createElement(_NavigationBar.default, {
                    size: size,
                  }),
                  onDayClick: this.handleDayClick,
                  onDayMouseEnter: this.handleDayMouseEnter,
                  selectedDays: selectedDays,
                  weekdayElement: _react.default.createElement(_WeekDay.default, {
                    size: size,
                  }),
                }),
              ),
            );
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function getDerivedStateFromProps(props, state) {
            if (
              props.selectedRange !== undefined &&
              (props.selectedRange.selectedStartDate !== state.selectedStartDate ||
                props.selectedRange.selectedEndDate !== state.selectedEndDate)
            ) {
              return {
                selectedStartDate: props.selectedRange.selectedStartDate,
                selectedEndDate: props.selectedRange.selectedEndDate,
                mouseEnteredEndDate: props.selectedRange.selectedEndDate,
              };
            }

            return null;
          },
        },
      ],
    );
    return DatePickerRange;
  })(_react.PureComponent);

DatePickerRange.defaultProps = {
  bordered: false,
  size: 'medium',
};
var _default = DatePickerRange;
exports.default = _default;
