'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
var _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties')),
  _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends')),
  _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread')),
  _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck')),
  _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass')),
  _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn')),
  _getPrototypeOf3 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf')),
  _assertThisInitialized2 = _interopRequireDefault(require('@babel/runtime/helpers/assertThisInitialized')),
  _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits')),
  _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty')),
  _react = _interopRequireWildcard(require('react')),
  _reactSelect = _interopRequireDefault(require('react-select')),
  _Creatable = _interopRequireDefault(require('react-select/lib/Creatable')),
  _propTypes = _interopRequireDefault(require('prop-types')),
  _uiIcons = require('@teamleader/ui-icons'),
  _box = _interopRequireWildcard(require('../box')),
  _icon = _interopRequireDefault(require('../icon')),
  _validationText = _interopRequireDefault(require('../validationText')),
  _constants = require('../../constants'),
  _theme = _interopRequireDefault(require('./theme.css')),
  _classnames = _interopRequireDefault(require('classnames')),
  _uiUtilities = _interopRequireDefault(require('@teamleader/ui-utilities')),
  Select = (function(e) {
    function n() {
      var e, _;
      (0, _classCallCheck2.default)(this, n);
      for (var t = arguments.length, r = new Array(t), a = 0; a < t; a++) r[a] = arguments[a];
      return (
        (_ = (0, _possibleConstructorReturn2.default)(
          this,
          (e = (0, _getPrototypeOf3.default)(n)).call.apply(e, [this].concat(r)),
        )),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_), 'getClearIndicatorStyles', function(e) {
          var t = _.props.inverse;
          return (0,
          _objectSpread2.default)({}, e, { color: t ? _constants.COLOR.TEAL.LIGHTEST : _constants.COLOR.TEAL.DARK, '&:hover': { color: t ? _constants.COLOR.NEUTRAL.LIGHTEST : _constants.COLOR.TEAL.DARKEST }, cursor: 'pointer', svg: { height: '14px', width: '14px' } });
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_), 'getControlStyles', function(e, t) {
          var r = t.isDisabled,
            a = t.isFocused,
            n = _.props,
            o = n.error,
            s = n.inverse,
            i = n.size,
            l = n.success,
            u = n.warning,
            c = n.width,
            d = (0, _objectSpread2.default)({}, e, {
              minHeight: 'small' === i ? '30px' : 'medium' === i ? '36px' : '48px',
              width: c,
            });
          return s
            ? (0, _objectSpread2.default)({}, d, {
                backgroundColor: r ? _constants.COLOR.TEAL.DARK : _constants.COLOR.TEAL.NORMAL,
                '&:hover': { borderColor: !a && !o && !u && !l && _constants.COLOR.TEAL.LIGHT },
                borderColor: a
                  ? _constants.COLOR.TEAL.LIGHT
                  : o
                    ? _constants.COLOR.RUBY.LIGHT
                    : u
                      ? _constants.COLOR.GOLD.LIGHT
                      : l
                        ? _constants.COLOR.MINT.LIGHT
                        : r
                          ? _constants.COLOR.TEAL.DARK
                          : _constants.COLOR.TEAL.NORMAL,
                boxShadow: a
                  ? '0 0 0 1px '.concat(_constants.COLOR.TEAL.LIGHT)
                  : o
                    ? '0 0 0 1px '.concat(_constants.COLOR.RUBY.LIGHT)
                    : u
                      ? '0 0 0 1px '.concat(_constants.COLOR.GOLD.LIGHT)
                      : l
                        ? '0 0 0 1px '.concat(_constants.COLOR.MINT.LIGHT)
                        : 'none',
              })
            : (0, _objectSpread2.default)({}, d, {
                backgroundColor: r ? _constants.COLOR.NEUTRAL.NORMAL : _constants.COLOR.NEUTRAL.LIGHTEST,
                '&:hover': { borderColor: !a && !o && !u && !l && _constants.COLOR.NEUTRAL.DARKEST },
                borderColor: a
                  ? _constants.COLOR.NEUTRAL.DARKEST
                  : o
                    ? _constants.COLOR.RUBY.DARK
                    : u
                      ? _constants.COLOR.GOLD.DARK
                      : l
                        ? _constants.COLOR.MINT.DARK
                        : r
                          ? _constants.COLOR.NEUTRAL.NORMAL
                          : _constants.COLOR.NEUTRAL.DARK,
                boxShadow: a
                  ? '0 0 0 1px '.concat(_constants.COLOR.NEUTRAL.DARKEST)
                  : o
                    ? '0 0 0 1px '.concat(_constants.COLOR.RUBY.DARK)
                    : u
                      ? '0 0 0 1px '.concat(_constants.COLOR.GOLD.DARK)
                      : l
                        ? '0 0 0 1px '.concat(_constants.COLOR.MINT.DARK)
                        : 'none',
              });
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_), 'getGroupStyles', function(e) {
          var t = _.props.inverse;
          return (0,
          _objectSpread2.default)({}, e, { borderBottomColor: t ? _constants.COLOR.TEAL.LIGHT : _constants.COLOR.NEUTRAL.NORMAL, borderBottomStyle: 'solid', borderBottomWidth: '1px', '&:last-child': { borderWidth: 0 } });
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_), 'getGroupHeadingStyles', function(e) {
          var t = _.props.inverse;
          return (0,
          _objectSpread2.default)({}, e, { color: t ? _constants.COLOR.NEUTRAL.LIGHTEST : _constants.COLOR.TEAL.DARKEST, fontSize: '12px', fontWeight: '700', letterSpacing: '0.6px' });
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_), 'getInput', function(e) {
          var t = _.props,
            r = t.size,
            a = t.value;
          return (0,
          _objectSpread2.default)({}, e, { marginLeft: a && 0 === a.length && 'large' !== r ? '6px' : '2px' });
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_), 'getMenuPortalStyles', function(e) {
          var t = _.props.inverse;
          return (0,
          _objectSpread2.default)({}, e, { backgroundColor: t ? _constants.COLOR.TEAL.NORMAL : _constants.COLOR.NEUTRAL.LIGHTEST, fontFamily: 'Inter-UI-Regular', fontSize: '14px', fontSmoothing: 'antialiased', '-moz-osx-font-smoothing': 'grayscale', '-webkit-font-smoothing': 'antialiased', zIndex: 500 });
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_), 'getMultiValueStyles', function(e) {
          var t = _.props.inverse;
          return (0,
          _objectSpread2.default)({}, e, { borderColor: t ? _constants.COLOR.TEAL.DARK : _constants.COLOR.NEUTRAL.NORMAL, borderStyle: 'solid', borderWidth: '1px', borderRadius: '4px', margin: '1px' });
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_), 'getMultiValueLabelStyles', function(e) {
          var t = _.props,
            r = t.inverse,
            a = t.size;
          return (0,
          _objectSpread2.default)({}, e, { backgroundColor: r ? _constants.COLOR.TEAL.DARK : _constants.COLOR.NEUTRAL.LIGHT, borderRadius: 0, color: r ? _constants.COLOR.NEUTRAL.LIGHTEST : _constants.COLOR.TEAL.DARKEST, fontFamily: 'Inter-UI-Medium', fontSize: 'small' === a ? '12px' : '14px', lineHeight: 'small' === a ? '1' : '18px', padding: 'large' === a ? '9px' : '6px' });
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_), 'getMultiValueRemoveStyles', function(
          e,
        ) {
          var t = _.props.inverse;
          return (0, _objectSpread2.default)({}, e, {
            backgroundColor: t ? _constants.COLOR.TEAL.DARK : _constants.COLOR.NEUTRAL.LIGHT,
            borderRadius: 0,
            color: t ? _constants.COLOR.NEUTRAL.LIGHTEST : _constants.COLOR.TEAL.DARKEST,
            '&:hover': {
              backgroundColor: t ? _constants.COLOR.TEAL.DARKEST : _constants.COLOR.NEUTRAL.NORMAL,
              color: t ? _constants.COLOR.NEUTRAL.LIGHTEST : _constants.COLOR.TEAL.DARKEST,
            },
            paddingLeft: '6px',
            paddingRight: '6px',
            transition: 'background-color .35s cubic-bezier(.4, 0, .2, 1)',
          });
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_), 'getOptionStyles', function(e, t) {
          var r = t.isDisabled,
            a = t.isFocused,
            n = t.isSelected,
            o = (0, _objectSpread2.default)({}, e, { wordBreak: 'break-all', padding: '8px 12px' });
          return _.props.inverse
            ? (0, _objectSpread2.default)({}, o, {
                color: r
                  ? _constants.COLOR.TEAL.LIGHT
                  : n
                    ? _constants.COLOR.NEUTRAL.LIGHTEST
                    : a
                      ? _constants.COLOR.TEAL.DARK
                      : _constants.COLOR.NEUTRAL.LIGHTEST,
                backgroundColor: n
                  ? _constants.COLOR.TEAL.DARK
                  : a
                    ? _constants.COLOR.TEAL.LIGHT
                    : _constants.COLOR.TEAL.NORMAL,
                '&:active': {
                  backgroundColor: r ? _constants.COLOR.TEAL.NORMAL : _constants.COLOR.TEAL.DARK,
                  color: r ? _constants.COLOR.TEAL.LIGHT : _constants.COLOR.NEUTRAL.LIGHTEST,
                },
              })
            : (0, _objectSpread2.default)({}, o, {
                color: r ? _constants.COLOR.NEUTRAL.DARK : _constants.COLOR.TEAL.DARK,
                backgroundColor: n
                  ? _constants.COLOR.AQUA.LIGHTEST
                  : a
                    ? _constants.COLOR.NEUTRAL.LIGHT
                    : _constants.COLOR.NEUTRAL.LIGHTEST,
                '&:active': {
                  backgroundColor: r ? _constants.COLOR.NEUTRAL.LIGHTEST : _constants.COLOR.AQUA.LIGHTEST,
                  color: r ? _constants.COLOR.NEUTRAL.DARK : _constants.COLOR.TEAL.DARK,
                },
              });
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_), 'getPlaceholderStyles', function(e, t) {
          var r = t.isDisabled,
            a = t.isMulti,
            n = _.props,
            o = n.inverse,
            s = n.size,
            i = (0, _objectSpread2.default)({}, e, {
              marginLeft: a && 'large' !== s ? '6px' : '2px',
              marginRight: a && 'large' !== s ? '6px' : '2px',
              whiteSpace: 'nowrap',
            });
          return o
            ? (0, _objectSpread2.default)({}, i, {
                color: r ? _constants.COLOR.TEAL.NORMAL : _constants.COLOR.TEAL.LIGHT,
              })
            : (0, _objectSpread2.default)({}, i, { color: _constants.COLOR.NEUTRAL.DARKEST });
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_), 'getSingleValueStyles', function(e) {
          return (0,
          _objectSpread2.default)({}, e, { color: _.props.inverse ? _constants.COLOR.NEUTRAL.LIGHTEST : _constants.COLOR.TEAL.DARKEST });
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_), 'getValueContainerStyles', function(
          e,
          t,
        ) {
          var r = t.isMulti,
            a = _.props.size;
          return (0, _objectSpread2.default)({}, e, {
            minHeight: 'small' === a ? '28px' : 'medium' === a ? '34px' : '46px',
            padding: r && 'large' !== a ? '0' : '0 4px',
          });
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_), 'getStyles', function() {
          return {
            clearIndicator: _.getClearIndicatorStyles,
            control: _.getControlStyles,
            group: _.getGroupStyles,
            groupHeading: _.getGroupHeadingStyles,
            input: _.getInput,
            menuPortal: _.getMenuPortalStyles,
            multiValue: _.getMultiValueStyles,
            multiValueLabel: _.getMultiValueLabelStyles,
            multiValueRemove: _.getMultiValueRemoveStyles,
            option: _.getOptionStyles,
            placeholder: _.getPlaceholderStyles,
            singleValue: _.getSingleValueStyles,
            valueContainer: _.getValueContainerStyles,
          };
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_), 'getClearIndicator', function() {
          return function(e) {
            var t = e.innerProps,
              r = _.props.inverse;
            return _react.default.createElement(
              _icon.default,
              (0, _extends2.default)(
                { color: r ? 'teal' : 'neutral', display: 'flex', tint: r ? 'lightest' : 'darkest' },
                t,
              ),
              _react.default.createElement(_uiIcons.IconCloseBadgedSmallFilled, null),
            );
          };
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_), 'getDropDownIndicator', function() {
          return function() {
            var e = _.props.inverse;
            return _react.default.createElement(
              _icon.default,
              {
                alignItems: 'center',
                className: _theme.default['dropdown-indicator'],
                color: e ? 'teal' : 'neutral',
                display: 'flex',
                justifyContent: 'center',
                tint: e ? 'lightest' : 'darkest',
              },
              _react.default.createElement(_uiIcons.IconChevronDownSmallOutline, null),
            );
          };
        }),
        _
      );
    }
    return (
      (0, _inherits2.default)(n, e),
      (0, _createClass2.default)(n, [
        {
          key: 'render',
          value: function() {
            var e,
              t = this.props,
              r = t.components,
              a = t.creatable,
              n = t.error,
              o = t.inverse,
              s = t.helpText,
              i = t.size,
              l = t.success,
              u = t.warning,
              c = (0, _objectWithoutProperties2.default)(t, [
                'components',
                'creatable',
                'error',
                'inverse',
                'helpText',
                'size',
                'success',
                'warning',
              ]),
              d = (0, _box.pickBoxProps)(c),
              _ = (0, _box.omitBoxProps)(c),
              p = (0, _classnames.default)(
                _theme.default['is-'.concat(i)],
                ((e = {}),
                (0, _defineProperty2.default)(e, _theme.default['has-error'], n),
                (0, _defineProperty2.default)(e, _theme.default['is-inverse'], o),
                e),
              ),
              L = a ? _Creatable.default : _reactSelect.default;
            return _react.default.createElement(
              _box.default,
              (0, _extends2.default)({ className: p }, d),
              _react.default.createElement(
                L,
                (0, _extends2.default)(
                  {
                    className: (0, _classnames.default)(
                      _uiUtilities.default['reset-font-smoothing'],
                      _theme.default.select,
                    ),
                    components: (0, _objectSpread2.default)(
                      {
                        ClearIndicator: this.getClearIndicator(),
                        DropdownIndicator: this.getDropDownIndicator(),
                        IndicatorSeparator: null,
                      },
                      r,
                    ),
                    styles: this.getStyles(),
                  },
                  _,
                ),
              ),
              _react.default.createElement(_validationText.default, {
                error: n,
                help: s,
                inverse: o,
                success: l,
                warning: u,
              }),
            );
          },
        },
      ]),
      n
    );
  })(_react.PureComponent);
Select.defaultProps = { creatable: !1, inverse: !1, menuPortalTarget: document.body, size: 'medium', width: '100%' };
var _default = Select;
exports.default = _default;
