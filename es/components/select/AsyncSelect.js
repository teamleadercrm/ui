import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _objectSpread from '@babel/runtime/helpers/objectSpread';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/inherits';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import React, { PureComponent } from 'react';
import omit from 'lodash.omit';
import Select from './Select';
import PropTypes from 'prop-types';

var AsyncSelect =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(AsyncSelect, _PureComponent);

    function AsyncSelect() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, AsyncSelect);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(AsyncSelect)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );

      _defineProperty(_assertThisInitialized(_this), 'state', {
        searchTerm: '',
        pageNumber: 1,
        options: [],
        isLastPage: false,
        loading: false,
        cache: {},
      });

      _defineProperty(_assertThisInitialized(_this), 'handleInputChange', function(searchTerm) {
        if (_this.props.onInputChange) {
          _this.props.onInputChange(searchTerm);
        }

        if (searchTerm === _this.state.searchTerm) {
          return;
        }

        if (_this.props.cacheOptions === true && _this.state.cache[searchTerm]) {
          return _this.setState(
            _objectSpread({}, _this.state.cache[searchTerm], {
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

      _defineProperty(_assertThisInitialized(_this), 'handleBlur', function() {
        _this.invalidateCache();
      });

      _defineProperty(_assertThisInitialized(_this), 'loadOptions', function() {
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
                [searchTerm].concat(_toConsumableArray(_this.props.paginate ? [pageSize, pageNumber] : [])),
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

      _defineProperty(_assertThisInitialized(_this), 'handleMenuScrollToBottom', function() {
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
      });

      return _this;
    }

    _createClass(AsyncSelect, [
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
              return _objectSpread({}, state, {
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
                  : _objectSpread(
                      {},
                      state.cache,
                      _defineProperty({}, state.searchTerm, {
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
            restProps = _objectWithoutProperties(_this$props2, ['loadOptions']);

          var _this$state2 = this.state,
            options = _this$state2.options,
            loading = _this$state2.loading;
          return React.createElement(
            Select,
            _extends({}, omit(restProps, ['loadOptions', 'options']), {
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
  })(PureComponent);

AsyncSelect.defaultProps = {
  pageSize: 10,
};
export default AsyncSelect;
