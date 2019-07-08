import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _extends from '@babel/runtime/helpers/extends';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { IconChevronUpSmallOutline, IconChevronDownSmallOutline } from '@teamleader/ui-icons';
import Icon from '../icon';
import SingleLineInputBase from './SingleLineInputBase';
import theme from './theme.css';

var SpinnerControls =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(SpinnerControls, _PureComponent);

    function SpinnerControls() {
      _classCallCheck(this, SpinnerControls);

      return _possibleConstructorReturn(this, _getPrototypeOf(SpinnerControls).apply(this, arguments));
    }

    _createClass(SpinnerControls, [
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
          return React.createElement(
            'div',
            {
              className: theme['spinner'],
            },
            React.createElement(
              Icon,
              _extends(
                {
                  className: theme['spinner-up'],
                },
                spinnerUpProps,
                iconProps,
              ),
              React.createElement(IconChevronUpSmallOutline, null),
            ),
            React.createElement(
              Icon,
              _extends(
                {
                  className: theme['spinner-down'],
                },
                spinnerDownProps,
                iconProps,
              ),
              React.createElement(IconChevronDownSmallOutline, null),
            ),
          );
        },
      },
    ]);

    return SpinnerControls;
  })(PureComponent);

var NumericInput =
  /*#__PURE__*/
  (function(_PureComponent2) {
    _inherits(NumericInput, _PureComponent2);

    function NumericInput() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, NumericInput);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(NumericInput)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );

      _defineProperty(_assertThisInitialized(_this), 'state', {
        value: '',
      });

      _defineProperty(_assertThisInitialized(_this), 'handleOnChange', function(event) {
        _this.setState({
          value: _this.parseValue(event.currentTarget.value),
        });
      });

      _defineProperty(_assertThisInitialized(_this), 'updateStep', function(n) {
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

      _defineProperty(_assertThisInitialized(_this), 'parseValue', function(value) {
        return _this.bindToMinMax(_this.toNumber(value));
      });

      _defineProperty(_assertThisInitialized(_this), 'toNumber', function(rawNumber) {
        var number = parseFloat(rawNumber);

        if (isNaN(number) || !isFinite(number)) {
          number = 0;
        }

        return number;
      });

      _defineProperty(_assertThisInitialized(_this), 'bindToMinMax', function(value) {
        var _this$props3 = _this.props,
          min = _this$props3.min,
          max = _this$props3.max;
        return Math.min(Math.max(value, min), max);
      });

      _defineProperty(_assertThisInitialized(_this), 'handleIncreaseValue', function() {
        _this.updateStep(1);
      });

      _defineProperty(_assertThisInitialized(_this), 'handleDecreaseValue', function() {
        _this.updateStep(-1);
      });

      _defineProperty(_assertThisInitialized(_this), 'isMaxReached', function() {
        return _this.state.value >= _this.props.max;
      });

      _defineProperty(_assertThisInitialized(_this), 'isMinReached', function() {
        return _this.state.value <= _this.props.min;
      });

      _defineProperty(_assertThisInitialized(_this), 'getSuffixWithSpinner', function() {
        return [].concat(_toConsumableArray(_this.props.suffix), [
          React.createElement(SpinnerControls, {
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

    _createClass(
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
              others = _objectWithoutProperties(_this$props4, ['spinner', 'suffix', 'onChange']);

            return React.createElement(
              SingleLineInputBase,
              _extends(
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
  })(PureComponent);

NumericInput.defaultProps = {
  min: Number.MIN_SAFE_INTEGER,
  max: Number.MAX_SAFE_INTEGER,
  step: 1,
  suffix: [],
  spinner: true,
};
export default NumericInput;
