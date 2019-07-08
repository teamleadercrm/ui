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

var _classnames = _interopRequireDefault(require('classnames'));

var _theme = _interopRequireDefault(require('./theme.css'));

var Avatar =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(Avatar, _PureComponent);

    function Avatar() {
      (0, _classCallCheck2.default)(this, Avatar);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(Avatar).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(Avatar, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            image = _this$props.image,
            imageAlt = _this$props.imageAlt,
            imageClassName = _this$props.imageClassName,
            shape = _this$props.shape,
            size = _this$props.size,
            others = (0, _objectWithoutProperties2.default)(_this$props, [
              'children',
              'className',
              'image',
              'imageAlt',
              'imageClassName',
              'shape',
              'size',
            ]);
          var avatarClassNames = (0, _classnames.default)(
            _theme.default['avatar'],
            _theme.default['is-'.concat(shape)],
            _theme.default['is-'.concat(size)],
            className,
          );
          return _react.default.createElement(
            _box.default,
            (0, _extends2.default)(
              {
                className: avatarClassNames,
              },
              others,
              {
                'data-teamleader-ui': 'avatar',
              },
            ),
            _react.default.createElement('img', {
              alt: imageAlt,
              src: image,
              className: (0, _classnames.default)(_theme.default['image'], imageClassName),
            }),
            children &&
              _react.default.createElement(
                'div',
                {
                  className: _theme.default['children'],
                },
                children,
              ),
          );
        },
      },
    ]);
    return Avatar;
  })(_react.PureComponent);

Avatar.defaultProps = {
  shape: 'circle',
  size: 'medium',
};
var _default = Avatar;
exports.default = _default;
