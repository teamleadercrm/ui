import React, { PureComponent } from 'react';
import omit from 'lodash.omit';
import Select from './Select';
import PropTypes from 'prop-types';

/** @type {React.ComponentType<any>} */
class AsyncSelect extends PureComponent {
  state = {
    searchTerm: '',
    pageNumber: 1,
    options: [],
    isLastPage: false,
    loading: false,
    cache: {},
  };

  componentDidMount() {
    this.loadOptions();
  }

  componentDidUpdate(prevProps) {
    if (this.props.pageSize !== prevProps.pageSize || this.props.loadOptions !== prevProps.loadOptions) {
      /* eslint-disable react/no-did-update-set-state */
      this.setState(
        (state) => ({
          ...state,
          options: [],
          cache: {},
          pageNumber: 1,
        }),
        this.loadOptions,
      );
    }
  }

  handleInputChange = (searchTerm, inputActionMeta) => {
    if (this.props.onInputChange) {
      this.props.onInputChange(searchTerm, inputActionMeta);
    }
    if (searchTerm === this.state.searchTerm) {
      return;
    }
    if (this.props.cacheOptions === true && this.state.cache[searchTerm]) {
      return this.setState({
        ...this.state.cache[searchTerm],
        searchTerm,
        loading: false,
      });
    }

    this.setState(
      {
        options: [],
        pageNumber: 1,
        isLastPage: false,
        searchTerm,
      },
      this.loadOptions,
    );
  };

  invalidateCache() {
    this.setState({
      cache: {},
    });
  }

  handleBlur = () => {
    this.invalidateCache();
  };

  handleOptionsLoaded(options, cache) {
    this.setState((state) => {
      const newOptions = state.options.concat(options);
      const isLastPage = options.length < this.props.pageSize;

      return {
        options: newOptions,
        isLastPage,
        loading: false,
        cache:
          cache !== true
            ? {}
            : {
                ...state.cache,
                [state.searchTerm]: {
                  options: newOptions,
                  isLastPage,
                },
              },
      };
    });
  }

  loadOptions = () => {
    const { loadOptions, cacheOptions } = this.props;
    const { pageNumber, searchTerm } = this.state;
    const pageSize = this.props.pageSize;

    this.setState(
      {
        loading: true,
      },
      () => {
        loadOptions(searchTerm, ...(this.props.paginate ? [pageSize, pageNumber] : [])).then(
          (options) => {
            if (
              searchTerm !== this.state.searchTerm ||
              pageSize !== this.props.pageSize ||
              pageNumber !== this.state.pageNumber
            ) {
              return;
            }
            this.handleOptionsLoaded(options, cacheOptions);
          },
          () => {},
        );
      },
    );
  };

  handleMenuScrollToBottom = () => {
    if (this.props.onMenuScrollToBottom) {
      this.props.onMenuScrollToBottom();
    }
    if (this.state.isLastPage || !this.props.paginate) {
      return;
    }

    this.setState(
      {
        pageNumber: this.state.pageNumber + 1,
      },
      () => {
        this.loadOptions();
      },
    );
  };

  render() {
    const { loadOptions, ...restProps } = this.props;
    const { options, loading } = this.state;
    return (
      <Select
        {...omit(restProps, ['loadOptions', 'options'])}
        isSearchable
        isLoading={loading}
        onMenuScrollToBottom={this.handleMenuScrollToBottom}
        options={options}
        onInputChange={this.handleInputChange}
        onBlur={this.handleBlur}
      />
    );
  }
}

AsyncSelect.propTypes = {
  loadOptions: PropTypes.func.isRequired,
  onMenuScrollToBottom: PropTypes.func,
  onInputChange: PropTypes.func,
  paginate: PropTypes.bool,
  pageSize: PropTypes.number,
  cacheOptions: PropTypes.bool,
};

AsyncSelect.defaultProps = {
  pageSize: 10,
};

export default AsyncSelect;
