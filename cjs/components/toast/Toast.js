'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

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

var _button = require('../button');

var _link = _interopRequireDefault(require('../link'));

var _typography = require('../typography');

var _loadingSpinner = _interopRequireDefault(require('../loadingSpinner'));

var _uiIcons = require('@teamleader/ui-icons');

var _theme = _interopRequireDefault(require('./theme.css'));

var _uiUtilities = _interopRequireDefault(require('@teamleader/ui-utilities'));

var Toast =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(Toast, _PureComponent);

    function Toast() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, Toast);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Toast)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'scheduleTimeout', function(props) {
        var onTimeout = props.onTimeout,
          timeout = props.timeout;

        if (_this.currentTimeout) {
          clearTimeout(_this.currentTimeout);
        }

        _this.currentTimeout = setTimeout(function() {
          if (onTimeout) {
            onTimeout();
          }

          _this.currentTimeout = null;
        }, timeout);
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'renderCustomAction', function() {
        var _this$props = _this.props,
          action = _this$props.action,
          actionLabel = _this$props.actionLabel;
        return (
          action &&
          _react.default.createElement(
            _link.default,
            {
              className: _theme.default['action-link'],
              onClick: action,
            },
            actionLabel,
          )
        );
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'renderCustomLink', function() {
        var link = _this.props.link;
        return (
          link &&
          _react.default.createElement(
            _typography.TextBody,
            null,
            _react.default.cloneElement(link, {
              className: (0, _classnames.default)(link.props.className, _theme.default['action-link']),
            }),
          )
        );
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'renderCloseButton', function() {
        var onClose = _this.props.onClose;
        return (
          onClose &&
          _react.default.createElement(_button.IconButton, {
            className: _theme.default['action-button'],
            icon: _react.default.createElement(_uiIcons.IconCloseMediumOutline, null),
            color: 'white',
            onClick: onClose,
          })
        );
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleMouseEnter', function() {
        if (_this.props.timeout) {
          clearTimeout(_this.currentTimeout);
          _this.currentTimeout = null;
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleMouseLeave', function() {
        if (_this.props.timeout) {
          _this.scheduleTimeout(_this.props);
        }
      });
      return _this;
    }

    (0, _createClass2.default)(Toast, [
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (this.props.timeout) {
            this.scheduleTimeout(this.props);
          }
        },
      },
      {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          clearTimeout(this.currentTimeout);
        },
      },
      {
        key: 'render',
        value: function render() {
          var _this$props2 = this.props,
            children = _this$props2.children,
            className = _this$props2.className,
            label = _this$props2.label,
            processing = _this$props2.processing;
          var classNames = (0, _classnames.default)(
            _uiUtilities.default['reset-box-sizing'],
            _uiUtilities.default['box-shadow-400'],
            _theme.default['toast'],
            className,
          );
          return _react.default.createElement(
            'div',
            {
              'data-teamleader-ui': 'toast',
              onMouseEnter: this.handleMouseEnter,
              onMouseLeave: this.handleMouseLeave,
              className: classNames,
            },
            processing &&
              _react.default.createElement(_loadingSpinner.default, {
                className: _theme.default['spinner'],
                color: 'neutral',
                tint: 'lightest',
              }),
            _react.default.createElement(
              _typography.TextBody,
              {
                className: _theme.default['label'],
                color: 'neutral',
                tint: 'lightest',
                element: 'div',
              },
              label,
              children,
            ),
            this.renderCustomAction() || this.renderCustomLink() || this.renderCloseButton(),
          );
        },
      },
    ]);
    return Toast;
  })(_react.PureComponent);

var _default = Toast;
exports.default = _default;
