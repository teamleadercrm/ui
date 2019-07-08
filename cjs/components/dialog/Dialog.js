'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties'));

var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn'));

var _getPrototypeOf3 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _assertThisInitialized2 = _interopRequireDefault(require('@babel/runtime/helpers/assertThisInitialized'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _lodash = _interopRequireDefault(require('lodash.omit'));

var _classnames = _interopRequireDefault(require('classnames'));

var _theme = _interopRequireDefault(require('./theme.css'));

var _index = require('../../index');

var _constants = require('../../constants');

var Dialog =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(Dialog, _PureComponent);

    function Dialog() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, Dialog);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Dialog)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'getHeader', function() {
        var _this$props = _this.props,
          headerColor = _this$props.headerColor,
          headerIcon = _this$props.headerIcon,
          headingLevel = _this$props.headingLevel,
          onCloseClick = _this$props.onCloseClick,
          title = _this$props.title;
        return _react.default.createElement(
          _index.Banner,
          {
            color: headerColor,
            fullWidth: true,
            icon: headerIcon,
            onClose: onCloseClick,
          },
          headingLevel === 2
            ? _react.default.createElement(_index.Heading2, null, title)
            : _react.default.createElement(_index.Heading3, null, title),
        );
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'getFooter', function() {
        var _this$props2 = _this.props,
          tertiaryAction = _this$props2.tertiaryAction,
          secondaryAction = _this$props2.secondaryAction,
          primaryAction = _this$props2.primaryAction;
        return _react.default.createElement(
          _index.ButtonGroup,
          {
            justifyContent: 'flex-end',
            padding: 4,
          },
          tertiaryAction &&
            _react.default.createElement(
              _index.Link,
              (0, _extends2.default)(
                {
                  inherit: false,
                },
                tertiaryAction,
              ),
            ),
          secondaryAction && _react.default.createElement(_index.Button, secondaryAction),
          _react.default.createElement(
            _index.Button,
            (0, _extends2.default)(
              {
                level: 'primary',
              },
              primaryAction,
            ),
          ),
        );
      });
      return _this;
    }

    (0, _createClass2.default)(Dialog, [
      {
        key: 'render',
        value: function render() {
          var _this$props3 = this.props,
            children = _this$props3.children,
            className = _this$props3.className,
            scrollable = _this$props3.scrollable,
            title = _this$props3.title,
            otherProps = (0, _objectWithoutProperties2.default)(_this$props3, [
              'children',
              'className',
              'scrollable',
              'title',
            ]);
          var classNames = (0, _classnames.default)(_theme.default['dialog'], className);
          var restProps = (0, _lodash.default)(otherProps, [
            'headerColor',
            'onCloseClick',
            'primaryAction',
            'secondaryAction',
            'tertiaryAction',
          ]);
          return _react.default.createElement(
            _index.DialogBase,
            (0, _extends2.default)(
              {
                className: classNames,
              },
              restProps,
              {
                scrollable: false,
              },
            ),
            title && this.getHeader(),
            scrollable
              ? _react.default.createElement(
                  _index.Box,
                  {
                    display: 'flex',
                    flexDirection: 'column',
                    overflowY: 'auto',
                  },
                  children,
                )
              : children,
            this.getFooter(),
          );
        },
      },
    ]);
    return Dialog;
  })(_react.PureComponent);

Dialog.defaultProps = {
  headerColor: 'neutral',
  headingLevel: 3,
  scrollable: true,
};
var _default = Dialog;
exports.default = _default;
