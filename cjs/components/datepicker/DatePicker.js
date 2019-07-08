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

var DatePicker =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(DatePicker, _PureComponent);

    function DatePicker() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, DatePicker);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(DatePicker)).call.apply(
          _getPrototypeOf2,
          [this].concat(args),
        ),
      );
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'state', {
        selectedDate: null,
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleDayClick', function(day) {
        _this.setState(
          {
            selectedDate: day,
          },
          function() {
            return _this.props.onChange(day);
          },
        );
      });
      return _this;
    }

    (0, _createClass2.default)(
      DatePicker,
      [
        {
          key: 'render',
          value: function render() {
            var _this$props = this.props,
              bordered = _this$props.bordered,
              className = _this$props.className,
              modifiers = _this$props.modifiers,
              size = _this$props.size,
              others = (0, _objectWithoutProperties2.default)(_this$props, [
                'bordered',
                'className',
                'modifiers',
                'size',
              ]);
            var selectedDate = this.state.selectedDate;
            var boxProps = (0, _box.pickBoxProps)(others);
            var restProps = (0, _box.omitBoxProps)(others);
            var classNames = (0, _classnames.default)(
              _uiUtilities.default['reset-font-smoothing'],
              _theme.default['date-picker'],
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
                  selectedDays: selectedDate,
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
    return DatePicker;
  })(_react.PureComponent);

DatePicker.defaultProps = {
  bordered: true,
  size: 'medium',
};
var _default = DatePicker;
exports.default = _default;
