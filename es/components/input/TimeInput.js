import _extends from '@babel/runtime/helpers/extends';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/inherits';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import React, { PureComponent } from 'react';
import InputMask from 'react-input-mask';
import Icon from '../icon';
import SingleLineInputBase from './SingleLineInputBase';
import { IconTimerSmallOutline } from '@teamleader/ui-icons';

var isValidTime = function isValidTime(input) {
  return RegExp('([0-1][0-9]|[2][0-3]):([0-5][0-9])').test(input);
};

var TimeInput =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(TimeInput, _PureComponent);

    function TimeInput() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, TimeInput);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(TimeInput)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );

      _defineProperty(_assertThisInitialized(_this), 'beforeMaskedValueChange', function(_ref, _ref2) {
        var newValue = _ref.value,
          selection = _ref.selection;
        var oldValue = _ref2.value;

        if (!isValidTime(newValue)) {
          return {
            value: oldValue,
            selection: selection,
          };
        }

        return {
          value: newValue,
          selection: selection,
        };
      });

      return _this;
    }

    _createClass(TimeInput, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            disabled = _this$props.disabled,
            readOnly = _this$props.readOnly;
          return React.createElement(
            InputMask,
            _extends({}, this.props, {
              mask: '99:99',
              maskChar: '0',
              beforeMaskedValueChange: this.beforeMaskedValueChange,
            }),
            function(inputProps) {
              return React.createElement(
                SingleLineInputBase,
                _extends({}, inputProps, {
                  autoComplete: 'off',
                  readOnly: readOnly,
                  disabled: disabled,
                  prefix: React.createElement(
                    Icon,
                    {
                      color: 'neutral',
                      tint: 'darkest',
                    },
                    React.createElement(IconTimerSmallOutline, null),
                  ),
                }),
              );
            },
          );
        },
      },
    ]);

    return TimeInput;
  })(PureComponent);

export default TimeInput;
