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

var _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _box = _interopRequireDefault(require('../box'));

var _button = require('../button');

var _classnames = _interopRequireDefault(require('classnames'));

var _theme = _interopRequireDefault(require('./theme.css'));

var Message =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(Message, _PureComponent);

    function Message() {
      (0, _classCallCheck2.default)(this, Message);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(Message).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(Message, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            className = _this$props.className,
            children = _this$props.children,
            image = _this$props.image,
            imagePositioning = _this$props.imagePositioning,
            button = _this$props.button,
            link = _this$props.link,
            others = (0, _objectWithoutProperties2.default)(_this$props, [
              'className',
              'children',
              'image',
              'imagePositioning',
              'button',
              'link',
            ]);
          var classNames = (0, _classnames.default)(
            _theme.default['message'],
            _theme.default['is-image-'.concat(imagePositioning)],
            className,
          );
          var hasAction = Boolean(button || link);
          return _react.default.createElement(
            _box.default,
            (0, _extends2.default)(
              {
                'data-teamleader-ui': 'message',
                className: classNames,
              },
              others,
            ),
            image &&
              _react.default.createElement(
                'div',
                {
                  className: _theme.default['image'],
                },
                image,
              ),
            _react.default.createElement(
              _box.default,
              {
                flex: '2',
              },
              children,
              hasAction &&
                _react.default.createElement(
                  _button.ButtonGroup,
                  {
                    justifyContent: imagePositioning === 'center' ? 'center' : 'flex-end',
                    marginTop: 4,
                  },
                  link,
                  button,
                ),
            ),
          );
        },
      },
    ]);
    return Message;
  })(_react.PureComponent);

Message.defaultProps = {
  imagePositioning: 'left',
};
var _default = Message;
exports.default = _default;
