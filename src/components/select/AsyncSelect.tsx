import omit from 'lodash.omit';
import React, { useEffect, useState } from 'react';
import { InputActionMeta } from 'react-select';
import Select, { BaseSelectProps, SelectProps } from './Select';
import { Option as OptionType } from './types';

const DEFAULT_PAGE_NUMBER = 1;
const DEFAULT_SEARCH_TERM = '';
const DEFAULT_OPTIONS: OptionType[] = [];
const DEFAULT_CACHE = {};
export interface AsyncSelectProps<
  Option extends OptionType = OptionType,
  IsMulti extends boolean = false,
  IsClearable extends boolean = false,
> extends BaseSelectProps<Option, IsMulti, IsClearable> {
  loadOptions: (searchTerm: string, ...props: any) => Promise<any>;
  paginate?: boolean;
  pageSize?: number;
  cacheOptions?: boolean;
  options?: never;
}
type AsyncSelectCache = Record<string, { options: OptionType[]; isLastPage: boolean }>;
interface AsyncSelectState {
  pageNumber: number;
  searchTerm: string;
  isLoading: boolean;
  options: OptionType[];
  cache: AsyncSelectCache;
  isLastPage: boolean;
}
const AsyncSelect = <Option extends OptionType, IsMulti extends boolean, IsClearable extends boolean>({
  loadOptions,
  pageSize = 10,
  paginate,
  cacheOptions,
  onInputChange,
  onMenuScrollToBottom,
  ...restProps
}: AsyncSelectProps<Option, IsMulti, IsClearable>) => {
  const [state, setState] = useState<AsyncSelectState>({
    pageNumber: DEFAULT_PAGE_NUMBER,
    searchTerm: DEFAULT_SEARCH_TERM,
    isLoading: false,
    options: DEFAULT_OPTIONS,
    cache: DEFAULT_CACHE,
    isLastPage: false,
  });

  const handleOptionsLoaded = (loadedOptions: Option[], searchTerm: string, clearOptions: boolean) => {
    const newOptions = clearOptions ? DEFAULT_OPTIONS.concat(loadedOptions) : state.options.concat(loadedOptions);
    const isLastPage = loadedOptions.length < pageSize;
    setState((previousState) => ({
      ...previousState,
      options: newOptions,
      isLastPage,
      isLoading: false,
      cache: !cacheOptions
        ? {}
        : {
            ...previousState.cache,
            [searchTerm]: {
              options: newOptions,
              isLastPage,
            },
          },
    }));
  };

  const fetchOptions = (searchTerm: string, pageNumber: number, clearOptions: boolean) => {
    setState((previousState) => ({ ...previousState, isLoading: true }));
    loadOptions(searchTerm, ...(paginate ? [pageSize, pageNumber] : [])).then((options) => {
      handleOptionsLoaded(options, searchTerm, clearOptions);
    });
  };

  const handleInputChange = (newSearchTerm: string, inputActionMeta: InputActionMeta) => {
    const { searchTerm, cache } = state;
    if (onInputChange) {
      onInputChange(newSearchTerm, inputActionMeta);
    }
    if (newSearchTerm === searchTerm) {
      return;
    }

    const cachedUsableData = cacheOptions && cache[newSearchTerm];
    if (cachedUsableData) {
      setState((previousState) => ({
        ...previousState,
        options: cachedUsableData.options,
        isLastPage: cachedUsableData.isLastPage,
        isLoading: false,
        searchTerm: newSearchTerm,
      }));
      return;
    }
    setState((previousState) => ({
      ...previousState,
      options: DEFAULT_OPTIONS,
      isLastPage: false,
      pageNumber: DEFAULT_PAGE_NUMBER,
      searchTerm: newSearchTerm,
    }));
    fetchOptions(newSearchTerm, DEFAULT_PAGE_NUMBER, true);
  };

  const handleBlur = () => {
    setState((previousState) => ({
      ...previousState,
      cache: DEFAULT_CACHE,
    }));
  };

  const handleMenuScrollToBottom = (event: WheelEvent | TouchEvent) => {
    const { isLastPage, pageNumber } = state;
    if (onMenuScrollToBottom) {
      onMenuScrollToBottom(event);
    }
    if (isLastPage || !paginate) {
      return;
    }
    const newPageNumber = pageNumber + 1;
    setState((previousState) => ({
      ...previousState,
      pageNumber: newPageNumber,
    }));
    fetchOptions(state.searchTerm, newPageNumber, false);
  };

  useEffect(() => {
    setState((previousState) => ({
      ...previousState,
      options: DEFAULT_OPTIONS,
      cache: DEFAULT_CACHE,
      pageNumber: DEFAULT_PAGE_NUMBER,
    }));
    fetchOptions(state.searchTerm, DEFAULT_PAGE_NUMBER, true);
  }, [pageSize, loadOptions]);

  const { isLoading, options } = state;
  return (
    <Select
      {...(omit(restProps, ['loadOptions', 'options']) as SelectProps)}
      isSearchable
      isLoading={isLoading}
      onMenuScrollToBottom={handleMenuScrollToBottom}
      options={options}
      onInputChange={handleInputChange}
      onBlur={handleBlur}
    />
  );
};

export default AsyncSelect;
