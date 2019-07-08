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

var _classnames = _interopRequireDefault(require('classnames'));

var _theme = _interopRequireDefault(require('./theme.css'));

var _avatar = _interopRequireDefault(require('../avatar'));

var _box = _interopRequireDefault(require('../box'));

var _icon = _interopRequireDefault(require('../icon'));

var _link = _interopRequireDefault(require('../link'));

var _popover = _interopRequireDefault(require('../popover'));

var _typography = require('../typography');

var Passport =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(Passport, _PureComponent);

    function Passport() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, Passport);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Passport)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'renderDescription', function() {
        var description = _this.props.description;

        if (!description) {
          return null;
        }

        if (Array.isArray(description)) {
          return _react.default.createElement(
            _react.Fragment,
            null,
            description.map(function(child, index) {
              return _react.default.createElement(
                _typography.TextBody,
                {
                  color: 'teal',
                  key: index,
                },
                child,
              );
            }),
          );
        } else {
          return _react.default.createElement(
            _typography.TextBody,
            {
              color: 'teal',
            },
            description,
          );
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'renderTitle', function() {
        var title = _this.props.title;
        return _react.default.createElement(
          _typography.Heading3,
          {
            className: (0, _classnames.default)(
              _theme.default['prevent-overflow'],
              _theme.default['prevent-wrap'],
              _theme.default['show-ellipsis'],
            ),
            color: 'teal',
          },
          typeof title === 'string'
            ? title
            : _react.default.createElement(
                _link.default,
                (0, _extends2.default)({}, title, {
                  inherit: false,
                }),
              ),
        );
      });
      return _this;
    }

    (0, _createClass2.default)(Passport, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            avatar = _this$props.avatar,
            className = _this$props.className,
            lineItems = _this$props.lineItems,
            others = (0, _objectWithoutProperties2.default)(_this$props, ['avatar', 'className', 'lineItems']);
          return _react.default.createElement(
            _popover.default,
            (0, _extends2.default)({}, others, {
              backdrop: 'transparent',
              className: (0, _classnames.default)(_theme.default['passport'], className),
            }),
            _react.default.createElement(
              _box.default,
              {
                padding: 3,
              },
              _react.default.createElement(
                _box.default,
                {
                  display: 'flex',
                },
                _react.default.createElement(
                  _box.default,
                  {
                    flex: '48px 0 0',
                    paddingRight: 3,
                  },
                  _react.default.createElement(
                    _avatar.default,
                    (0, _extends2.default)({}, avatar, {
                      size: 'small',
                    }),
                  ),
                ),
                _react.default.createElement(
                  _box.default,
                  {
                    className: _theme.default['prevent-overflow'],
                  },
                  this.renderTitle(),
                  this.renderDescription(),
                ),
              ),
              lineItems &&
                _react.default.createElement(
                  _box.default,
                  {
                    marginTop: 3,
                  },
                  lineItems.map(function(_ref, index) {
                    var icon = _ref.icon,
                      lineItem = (0, _objectWithoutProperties2.default)(_ref, ['icon']);
                    return _react.default.createElement(
                      _box.default,
                      {
                        alignItems: 'flex-start',
                        display: 'flex',
                        key: index,
                      },
                      _react.default.createElement(
                        _box.default,
                        {
                          display: 'flex',
                          flex: '48px 0 0',
                          justifyContent: 'center',
                          paddingRight: 3,
                        },
                        icon &&
                          _react.default.createElement(
                            _icon.default,
                            {
                              color: lineItem.href || lineItem.onClick ? 'aqua' : 'teal',
                              tint: lineItem.href || lineItem.onClick ? 'dark' : 'darkest',
                              marginTop: 1,
                            },
                            icon,
                          ),
                      ),
                      _react.default.createElement(
                        _typography.TextBody,
                        {
                          className: (0, _classnames.default)(
                            _theme.default['prevent-overflow'],
                            _theme.default['prevent-wrap'],
                            _theme.default['show-ellipsis'],
                          ),
                          color: 'teal',
                        },
                        lineItem.href || lineItem.onClick
                          ? _react.default.createElement(
                              _link.default,
                              (0, _extends2.default)({}, lineItem, {
                                inherit: false,
                              }),
                            )
                          : lineItem.children,
                      ),
                    );
                  }),
                ),
            ),
          );
        },
      },
    ]);
    return Passport;
  })(_react.PureComponent);

var _default = Passport;
exports.default = _default;
