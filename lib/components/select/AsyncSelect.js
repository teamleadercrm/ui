'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends')),
  _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties')),
  _toConsumableArray2 = _interopRequireDefault(require('@babel/runtime/helpers/toConsumableArray')),
  _objectSpread3 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread')),
  _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck')),
  _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass')),
  _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn')),
  _getPrototypeOf3 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf')),
  _assertThisInitialized2 = _interopRequireDefault(require('@babel/runtime/helpers/assertThisInitialized')),
  _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits')),
  _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty')),
  _react = _interopRequireWildcard(require('react')),
  _lodash = _interopRequireDefault(require('lodash.omit')),
  _Select = _interopRequireDefault(require('./Select')),
  _propTypes = _interopRequireDefault(require('prop-types')),
  AsyncSelect = (function(e) {
    function i() {
      var e, s;
      (0, _classCallCheck2.default)(this, i);
      for (var t = arguments.length, r = new Array(t), a = 0; a < t; a++) r[a] = arguments[a];
      return (
        (s = (0, _possibleConstructorReturn2.default)(
          this,
          (e = (0, _getPrototypeOf3.default)(i)).call.apply(e, [this].concat(r)),
        )),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(s), 'state', {
          searchTerm: '',
          pageNumber: 1,
          options: [],
          isLastPage: !1,
          loading: !1,
          cache: {},
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(s), 'handleInputChange', function(e) {
          if ((s.props.onInputChange && s.props.onInputChange(e), e !== s.state.searchTerm))
            return !0 === s.props.cacheOptions && s.state.cache[e]
              ? s.setState((0, _objectSpread3.default)({}, s.state.cache[e], { searchTerm: e, loading: !1 }))
              : void s.setState({ options: [], pageNumber: 1, isLastPage: !1, searchTerm: e }, s.loadOptions);
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(s), 'handleBlur', function() {
          s.invalidateCache();
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(s), 'loadOptions', function() {
          var e = s.props,
            t = e.loadOptions,
            r = e.cacheOptions,
            a = s.state,
            i = a.pageNumber,
            o = a.searchTerm,
            n = s.props.pageSize;
          s.setState({ loading: !0 }, function() {
            t.apply(void 0, [o].concat((0, _toConsumableArray2.default)(s.props.paginate ? [n, i] : []))).then(
              function(e) {
                o === s.state.searchTerm &&
                  n === s.props.pageSize &&
                  i === s.state.pageNumber &&
                  s.handleOptionsLoaded(e, r);
              },
              function() {},
            );
          });
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(s), 'handleMenuScrollToBottom', function() {
          s.props.onMenuScrollToBottom && s.props.onMenuScrollToBottom(),
            !s.state.isLastPage &&
              s.props.paginate &&
              s.setState({ pageNumber: s.state.pageNumber + 1 }, function() {
                s.loadOptions();
              });
        }),
        s
      );
    }
    return (
      (0, _inherits2.default)(i, e),
      (0, _createClass2.default)(i, [
        {
          key: 'componentDidMount',
          value: function() {
            this.loadOptions();
          },
        },
        {
          key: 'componentDidUpdate',
          value: function(e) {
            (this.props.pageSize === e.pageSize && this.props.loadOptions === e.loadOptions) ||
              this.setState(function(e) {
                return (0, _objectSpread3.default)({}, e, { options: [], cache: {}, pageNumber: 1 });
              }, this.loadOptions);
          },
        },
        {
          key: 'invalidateCache',
          value: function() {
            this.setState({ cache: {} });
          },
        },
        {
          key: 'handleOptionsLoaded',
          value: function(a, i) {
            var o = this;
            this.setState(function(e) {
              var t = e.options.concat(a),
                r = a.length < o.props.pageSize;
              return {
                options: t,
                isLastPage: r,
                loading: !1,
                cache:
                  !0 !== i
                    ? {}
                    : (0, _objectSpread3.default)(
                        {},
                        e.cache,
                        (0, _defineProperty2.default)({}, e.searchTerm, { options: t, isLastPage: r }),
                      ),
              };
            });
          },
        },
        {
          key: 'render',
          value: function() {
            var e = this.props,
              t = (e.loadOptions, (0, _objectWithoutProperties2.default)(e, ['loadOptions'])),
              r = this.state,
              a = r.options,
              i = r.loading;
            return _react.default.createElement(
              _Select.default,
              (0, _extends2.default)({}, (0, _lodash.default)(t, ['loadOptions', 'options']), {
                isSearchable: !0,
                isLoading: i,
                onMenuScrollToBottom: this.handleMenuScrollToBottom,
                options: a,
                onInputChange: this.handleInputChange,
                onBlur: this.handleBlur,
              }),
            );
          },
        },
      ]),
      i
    );
  })(_react.PureComponent);
AsyncSelect.defaultProps = { pageSize: 10 };
var _default = AsyncSelect;
exports.default = _default;
