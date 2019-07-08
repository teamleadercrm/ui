'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties'));

var _toConsumableArray2 = _interopRequireDefault(require('@babel/runtime/helpers/toConsumableArray'));

var _assertThisInitialized2 = _interopRequireDefault(require('@babel/runtime/helpers/assertThisInitialized'));

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn'));

var _getPrototypeOf3 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _uiIcons = require('@teamleader/ui-icons');

var _icon = _interopRequireDefault(require('../icon'));

var _SingleLineInputBase = _interopRequireDefault(require('./SingleLineInputBase'));

var _theme = _interopRequireDefault(require('./theme.css'));

var SpinnerControls =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(SpinnerControls, _PureComponent);

    function SpinnerControls() {
      (0, _classCallCheck2.default)(this, SpinnerControls);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf3.default)(SpinnerControls).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(SpinnerControls, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            inverse = _this$props.inverse,
            spinnerUpProps = _this$props.spinnerUpProps,
            spinnerDownProps = _this$props.spinnerDownProps;
          var iconProps = {
            color: inverse ? 'teal' : 'neutral',
            element: 'button',
            tabIndex: '-1',
            tint: inverse ? 'lightest' : 'darkest',
            type: 'button',
          };
          return _react.default.createElement(
            'div',
            {
              className: _theme.default['spinner'],
            },
            _react.default.createElement(
              _icon.default,
              (0, _extends2.default)(
                {
                  className: _theme.default['spinner-up'],
                },
                spinnerUpProps,
                iconProps,
              ),
              _react.default.createElement(_uiIcons.IconChevronUpSmallOutline, null),
            ),
            _react.default.createElement(
              _icon.default,
              (0, _extends2.default)(
                {
                  className: _theme.default['spinner-down'],
                },
                spinnerDownProps,
                iconProps,
              ),
              _react.default.createElement(_uiIcons.IconChevronDownSmallOutline, null),
            ),
          );
        },
      },
    ]);
    return SpinnerControls;
  })(_react.PureComponent);

var NumericInput =
  /*#__PURE__*/
  (function(_PureComponent2) {
    (0, _inherits2.default)(NumericInput, _PureComponent2);

    function NumericInput() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, NumericInput);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(NumericInput)).call.apply(
          _getPrototypeOf2,
          [this].concat(args),
        ),
      );
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'state', {
        value: '',
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleOnChange', function(event) {
        _this.setState({
          value: _this.parseValue(event.currentTarget.value),
        });
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'updateStep', function(n) {
        var _this$props2 = _this.props,
          onChange = _this$props2.onChange,
          step = _this$props2.step;

        var currentValue = _this.toNumber(_this.state.value || 0);

        var newValue = _this.parseValue(currentValue + step * n);

        if (newValue !== currentValue) {
          _this.setState({
            value: newValue,
          });

          onChange && onChange(null, newValue);
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'parseValue', function(value) {
        return _this.bindToMinMax(_this.toNumber(value));
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'toNumber', function(rawNumber) {
        var number = parseFloat(rawNumber);

        if (isNaN(number) || !isFinite(number)) {
          number = 0;
        }

        return number;
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'bindToMinMax', function(value) {
        var _this$props3 = _this.props,
          min = _this$props3.min,
          max = _this$props3.max;
        return Math.min(Math.max(value, min), max);
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleIncreaseValue', function() {
        _this.updateStep(1);
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleDecreaseValue', function() {
        _this.updateStep(-1);
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'isMaxReached', function() {
        return _this.state.value >= _this.props.max;
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'isMinReached', function() {
        return _this.state.value <= _this.props.min;
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'getSuffixWithSpinner', function() {
        return [].concat((0, _toConsumableArray2.default)(_this.props.suffix), [
          _react.default.createElement(SpinnerControls, {
            inverse: _this.props.inverse,
            spinnerUpProps: {
              onClick: _this.handleIncreaseValue,
              disabled: _this.isMaxReached(),
            },
            spinnerDownProps: {
              onClick: _this.handleDecreaseValue,
              disabled: _this.isMinReached(),
            },
          }),
        ]);
      });
      return _this;
    }

    (0, _createClass2.default)(
      NumericInput,
      [
        {
          key: 'render',
          value: function render() {
            var _this2 = this;

            var _this$props4 = this.props,
              spinner = _this$props4.spinner,
              suffix = _this$props4.suffix,
              _onChange = _this$props4.onChange,
              others = (0, _objectWithoutProperties2.default)(_this$props4, ['spinner', 'suffix', 'onChange']);
            return _react.default.createElement(
              _SingleLineInputBase.default,
              (0, _extends2.default)(
                {
                  type: 'number',
                  value: this.state.value,
                  suffix: spinner ? this.getSuffixWithSpinner() : suffix,
                  onChange: function onChange(event) {
                    _this2.handleOnChange(event);

                    _onChange && _onChange(event, event.currentTarget.value);
                  },
                },
                others,
              ),
            );
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function getDerivedStateFromProps(nextProps, prevState) {
            if (nextProps.value !== undefined) {
              var newValue = nextProps.value || '';

              if (newValue !== prevState.value) {
                return {
                  value: newValue,
                };
              }
            }

            return null;
          },
        },
      ],
    );
    return NumericInput;
  })(_react.PureComponent);

NumericInput.defaultProps = {
  min: Number.MIN_SAFE_INTEGER,
  max: Number.MAX_SAFE_INTEGER,
  step: 1,
  suffix: [],
  spinner: true,
};
var _default = NumericInput;
exports.default = _default;
