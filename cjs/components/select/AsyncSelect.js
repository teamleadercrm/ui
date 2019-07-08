'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));

var _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties'));

var _toConsumableArray2 = _interopRequireDefault(require('@babel/runtime/helpers/toConsumableArray'));

var _objectSpread3 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn'));

var _getPrototypeOf3 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _assertThisInitialized2 = _interopRequireDefault(require('@babel/runtime/helpers/assertThisInitialized'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _react = _interopRequireWildcard(require('react'));

var _lodash = _interopRequireDefault(require('lodash.omit'));

var _Select = _interopRequireDefault(require('./Select'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var AsyncSelect =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(AsyncSelect, _PureComponent);

    function AsyncSelect() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, AsyncSelect);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(AsyncSelect)).call.apply(
          _getPrototypeOf2,
          [this].concat(args),
        ),
      );
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'state', {
        searchTerm: '',
        pageNumber: 1,
        options: [],
        isLastPage: false,
        loading: false,
        cache: {},
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleInputChange', function(
        searchTerm,
      ) {
        if (_this.props.onInputChange) {
          _this.props.onInputChange(searchTerm);
        }

        if (searchTerm === _this.state.searchTerm) {
          return;
        }

        if (_this.props.cacheOptions === true && _this.state.cache[searchTerm]) {
          return _this.setState(
            (0, _objectSpread3.default)({}, _this.state.cache[searchTerm], {
              searchTerm: searchTerm,
              loading: false,
            }),
          );
        }

        _this.setState(
          {
            options: [],
            pageNumber: 1,
            isLastPage: false,
            searchTerm: searchTerm,
          },
          _this.loadOptions,
        );
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleBlur', function() {
        _this.invalidateCache();
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'loadOptions', function() {
        var _this$props = _this.props,
          loadOptions = _this$props.loadOptions,
          cacheOptions = _this$props.cacheOptions;
        var _this$state = _this.state,
          pageNumber = _this$state.pageNumber,
          searchTerm = _this$state.searchTerm;
        var pageSize = _this.props.pageSize;

        _this.setState(
          {
            loading: true,
          },
          function() {
            loadOptions
              .apply(
                void 0,
                [searchTerm].concat(
                  (0, _toConsumableArray2.default)(_this.props.paginate ? [pageSize, pageNumber] : []),
                ),
              )
              .then(
                function(options) {
                  if (
                    searchTerm !== _this.state.searchTerm ||
                    pageSize !== _this.props.pageSize ||
                    pageNumber !== _this.state.pageNumber
                  ) {
                    return;
                  }

                  _this.handleOptionsLoaded(options, cacheOptions);
                },
                function() {},
              );
          },
        );
      });
      (0, _defineProperty2.default)(
        (0, _assertThisInitialized2.default)(_this),
        'handleMenuScrollToBottom',
        function() {
          if (_this.props.onMenuScrollToBottom) {
            _this.props.onMenuScrollToBottom();
          }

          if (_this.state.isLastPage || !_this.props.paginate) {
            return;
          }

          _this.setState(
            {
              pageNumber: _this.state.pageNumber + 1,
            },
            function() {
              _this.loadOptions();
            },
          );
        },
      );
      return _this;
    }

    (0, _createClass2.default)(AsyncSelect, [
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.loadOptions();
        },
      },
      {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
          if (this.props.pageSize !== prevProps.pageSize || this.props.loadOptions !== prevProps.loadOptions) {
            this.setState(function(state) {
              return (0, _objectSpread3.default)({}, state, {
                options: [],
                cache: {},
                pageNumber: 1,
              });
            }, this.loadOptions);
          }
        },
      },
      {
        key: 'invalidateCache',
        value: function invalidateCache() {
          this.setState({
            cache: {},
          });
        },
      },
      {
        key: 'handleOptionsLoaded',
        value: function handleOptionsLoaded(options, cache) {
          var _this2 = this;

          this.setState(function(state) {
            var newOptions = state.options.concat(options);
            var isLastPage = options.length < _this2.props.pageSize;
            return {
              options: newOptions,
              isLastPage: isLastPage,
              loading: false,
              cache:
                cache !== true
                  ? {}
                  : (0, _objectSpread3.default)(
                      {},
                      state.cache,
                      (0, _defineProperty2.default)({}, state.searchTerm, {
                        options: newOptions,
                        isLastPage: isLastPage,
                      }),
                    ),
            };
          });
        },
      },
      {
        key: 'render',
        value: function render() {
          var _this$props2 = this.props,
            loadOptions = _this$props2.loadOptions,
            restProps = (0, _objectWithoutProperties2.default)(_this$props2, ['loadOptions']);
          var _this$state2 = this.state,
            options = _this$state2.options,
            loading = _this$state2.loading;
          return _react.default.createElement(
            _Select.default,
            (0, _extends2.default)({}, (0, _lodash.default)(restProps, ['loadOptions', 'options']), {
              isSearchable: true,
              isLoading: loading,
              onMenuScrollToBottom: this.handleMenuScrollToBottom,
              options: options,
              onInputChange: this.handleInputChange,
              onBlur: this.handleBlur,
            }),
          );
        },
      },
    ]);
    return AsyncSelect;
  })(_react.PureComponent);

AsyncSelect.defaultProps = {
  pageSize: 10,
};
var _default = AsyncSelect;
exports.default = _default;
