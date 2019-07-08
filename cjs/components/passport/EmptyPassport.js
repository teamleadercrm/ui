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

var _classnames = _interopRequireDefault(require('classnames'));

var _theme = _interopRequireDefault(require('./theme.css'));

var _avatar = _interopRequireDefault(require('../avatar'));

var _box = _interopRequireDefault(require('../box'));

var _link = _interopRequireDefault(require('../link'));

var _popover = _interopRequireDefault(require('../popover'));

var _typography = require('../typography');

var EmptyPassport =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(EmptyPassport, _PureComponent);

    function EmptyPassport() {
      (0, _classCallCheck2.default)(this, EmptyPassport);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(EmptyPassport).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(EmptyPassport, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            avatar = _this$props.avatar,
            link = _this$props.link,
            className = _this$props.className,
            description = _this$props.description,
            title = _this$props.title,
            others = (0, _objectWithoutProperties2.default)(_this$props, [
              'avatar',
              'link',
              'className',
              'description',
              'title',
            ]);
          return _react.default.createElement(
            _popover.default,
            (0, _extends2.default)({}, others, {
              backdrop: 'transparent',
              className: (0, _classnames.default)(_theme.default['passport-empty'], className),
            }),
            _react.default.createElement(
              _box.default,
              {
                paddingHorizontal: 4,
                paddingVertical: 5,
              },
              _react.default.createElement(
                _box.default,
                {
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                },
                avatar &&
                  _react.default.createElement(
                    _avatar.default,
                    (0, _extends2.default)({}, avatar, {
                      size: 'small',
                      marginBottom: 4,
                    }),
                  ),
                _react.default.createElement(
                  _typography.Heading3,
                  {
                    color: 'teal',
                  },
                  title,
                ),
                description &&
                  _react.default.createElement(
                    _typography.TextBody,
                    {
                      color: 'neutral',
                      marginTop: 2,
                    },
                    description,
                  ),
                link &&
                  _react.default.createElement(
                    _typography.TextBody,
                    {
                      marginTop: 4,
                    },
                    _react.default.createElement(
                      _link.default,
                      (0, _extends2.default)({}, link, {
                        inherit: false,
                      }),
                    ),
                  ),
              ),
            ),
          );
        },
      },
    ]);
    return EmptyPassport;
  })(_react.PureComponent);

var _default = EmptyPassport;
exports.default = _default;
