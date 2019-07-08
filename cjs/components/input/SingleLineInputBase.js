'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));

var _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread'));

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

var _classnames = _interopRequireDefault(require('classnames'));

var _InputBase = _interopRequireDefault(require('./InputBase'));

var _box = _interopRequireWildcard(require('../box'));

var _validationText = _interopRequireDefault(require('../validationText'));

var _theme = _interopRequireDefault(require('./theme.css'));

var SingleLineInputBase =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(SingleLineInputBase, _PureComponent);

    function SingleLineInputBase() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, SingleLineInputBase);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(SingleLineInputBase)).call.apply(
          _getPrototypeOf2,
          [this].concat(args),
        ),
      );
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'state', {
        inputHasfocus: false,
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleBlur', function(event) {
        _this.setState({
          inputHasfocus: false,
        });

        if (_this.props.onBlur) {
          _this.props.onBlur(event);
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleFocus', function(event) {
        _this.setState({
          inputHasfocus: true,
        });

        if (_this.props.onFocus) {
          _this.props.onFocus(event);
        }
      });
      return _this;
    }

    (0, _createClass2.default)(SingleLineInputBase, [
      {
        key: 'renderOneOrMultipleElements',
        value: function renderOneOrMultipleElements(prop) {
          if (Array.isArray(prop)) {
            return prop.map(function(element, index) {
              return _react.default.cloneElement(element, {
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
            others = (0, _objectWithoutProperties2.default)(_this$props, [
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
          var classNames = (0, _classnames.default)(
            _theme.default['wrapper'],
            ((_cx = {}),
            (0, _defineProperty2.default)(_cx, _theme.default['has-focus'], this.state.inputHasfocus),
            (0, _defineProperty2.default)(_cx, _theme.default['has-error'], error),
            (0, _defineProperty2.default)(_cx, _theme.default['has-success'], success),
            (0, _defineProperty2.default)(_cx, _theme.default['has-warning'], warning),
            (0, _defineProperty2.default)(_cx, _theme.default['has-connected-left'], connectedLeft),
            (0, _defineProperty2.default)(_cx, _theme.default['has-connected-right'], connectedRight),
            (0, _defineProperty2.default)(_cx, _theme.default['is-disabled'], disabled),
            (0, _defineProperty2.default)(_cx, _theme.default['is-inverse'], inverse),
            (0, _defineProperty2.default)(_cx, _theme.default['is-read-only'], readOnly),
            _cx),
            className,
          );
          var boxProps = (0, _box.pickBoxProps)(others);
          var inputProps = (0, _objectSpread2.default)(
            {
              disabled: disabled,
              inverse: inverse,
              onBlur: this.handleBlur,
              onFocus: this.handleFocus,
              readOnly: readOnly,
            },
            (0, _box.omitBoxProps)(others),
          );
          return _react.default.createElement(
            _box.default,
            (0, _extends2.default)(
              {
                className: classNames,
              },
              boxProps,
            ),
            _react.default.createElement(
              'div',
              {
                className: _theme.default['input-wrapper'],
              },
              connectedLeft,
              _react.default.createElement(
                'div',
                {
                  className: _theme.default['input-inner-wrapper'],
                  style: {
                    width: width,
                    flex: width && '0 0 auto',
                  },
                },
                prefix &&
                  _react.default.createElement(
                    'div',
                    {
                      className: _theme.default['prefix-wrapper'],
                    },
                    this.renderOneOrMultipleElements(prefix),
                  ),
                _react.default.createElement(_InputBase.default, inputProps),
                suffix &&
                  _react.default.createElement(
                    'div',
                    {
                      className: _theme.default['suffix-wrapper'],
                    },
                    this.renderOneOrMultipleElements(suffix),
                  ),
              ),
              connectedRight,
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
    return SingleLineInputBase;
  })(_react.PureComponent);

var _default = SingleLineInputBase;
exports.default = _default;
