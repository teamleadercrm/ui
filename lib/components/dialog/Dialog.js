'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
var _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties')),
  _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends')),
  _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck')),
  _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass')),
  _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn')),
  _getPrototypeOf3 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf')),
  _assertThisInitialized2 = _interopRequireDefault(require('@babel/runtime/helpers/assertThisInitialized')),
  _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits')),
  _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty')),
  _react = _interopRequireWildcard(require('react')),
  _propTypes = _interopRequireDefault(require('prop-types')),
  _lodash = _interopRequireDefault(require('lodash.omit')),
  _classnames = _interopRequireDefault(require('classnames')),
  _theme = _interopRequireDefault(require('./theme.css')),
  _index = require('../../index'),
  _constants = require('../../constants'),
  Dialog = (function(e) {
    function a() {
      var e, n;
      (0, _classCallCheck2.default)(this, a);
      for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
      return (
        (n = (0, _possibleConstructorReturn2.default)(
          this,
          (e = (0, _getPrototypeOf3.default)(a)).call.apply(e, [this].concat(r)),
        )),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(n), 'getHeader', function() {
          var e = n.props,
            t = e.headerColor,
            r = e.headerIcon,
            i = e.headingLevel,
            a = e.onCloseClick,
            l = e.title;
          return _react.default.createElement(
            _index.Banner,
            { color: t, fullWidth: !0, icon: r, onClose: a },
            2 === i
              ? _react.default.createElement(_index.Heading2, null, l)
              : _react.default.createElement(_index.Heading3, null, l),
          );
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(n), 'getFooter', function() {
          var e = n.props,
            t = e.tertiaryAction,
            r = e.secondaryAction,
            i = e.primaryAction;
          return _react.default.createElement(
            _index.ButtonGroup,
            { justifyContent: 'flex-end', padding: 4 },
            t && _react.default.createElement(_index.Link, (0, _extends2.default)({ inherit: !1 }, t)),
            r && _react.default.createElement(_index.Button, r),
            _react.default.createElement(_index.Button, (0, _extends2.default)({ level: 'primary' }, i)),
          );
        }),
        n
      );
    }
    return (
      (0, _inherits2.default)(a, e),
      (0, _createClass2.default)(a, [
        {
          key: 'render',
          value: function() {
            var e = this.props,
              t = e.children,
              r = e.className,
              i = e.title,
              a = (0, _objectWithoutProperties2.default)(e, ['children', 'className', 'title']),
              l = (0, _classnames.default)(_theme.default.dialog, r),
              n = (0, _lodash.default)(a, [
                'headerColor',
                'onCloseClick',
                'primaryAction',
                'secondaryAction',
                'tertiaryAction',
              ]);
            return _react.default.createElement(
              _index.DialogBase,
              (0, _extends2.default)({ className: l }, n),
              i && this.getHeader(),
              t,
              this.getFooter(),
            );
          },
        },
      ]),
      a
    );
  })(_react.PureComponent);
Dialog.defaultProps = { headerColor: 'neutral', headingLevel: 3 };
var _default = Dialog;
exports.default = _default;
