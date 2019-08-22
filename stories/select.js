import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, number, text } from '@storybook/addon-knobs/react';
import { Avatar, Box, Label, Select, AsyncSelect, TextBody } from '../src';
import { customOptions, groupedOptions, options } from './static/data/select';

const sizes = ['small', 'medium', 'large'];

/* eslint react/prop-types: 0 */
const CustomOption = ({ children, data, innerProps, isFocused, isSelected, isDisabled }) => {
  const boxStyles = {
    backgroundColor: isFocused ? '#e4e4e6' : isSelected ? '#82828c' : '#fff',
    '&:active': {
      backgroundColor: isDisabled ? '#fff' : '#e4e4e6',
    },
  };

  const textStyles = {
    color: isDisabled ? '#c0c0c4' : isSelected && !isFocused ? '#fff' : '#344b63',
  };

  return (
    <Box paddingVertical={2} paddingHorizontal={2} display="flex" alignItems="center" {...innerProps} style={boxStyles}>
      <Avatar image={data.avatar} size="tiny" marginRight={2} />
      <TextBody style={textStyles}>{children}</TextBody>
    </Box>
  );
};

storiesOf('Form elements/Select', module)
  .addParameters({
    info: {
      propTablesExclude: [Label],
    },
  })
  .add('Basic', () => (
    <Select
      closeMenuOnSelect={boolean('Close menu on select', true)}
      creatable={boolean('creatable', false)}
      inverse={boolean('Inverse', false)}
      isClearable={boolean('Clearable', false)}
      isDisabled={boolean('Disabled', false)}
      isMulti={boolean('Multi select', false)}
      isSearchable={boolean('Searchable', false)}
      options={options}
      placeholder="Select your favourite(s)"
      size={select('Size', sizes, 'medium')}
      hideSelectedOptions={boolean('Hide selected options', true)}
      error={text('error', '')}
      helpText={text('helpText', '')}
      success={text('success', '')}
      warning={text('warning', '')}
      width={text('width', undefined)}
    />
  ))
  .add('Grouped', () => (
    <Select
      closeMenuOnSelect={boolean('Close menu on select', true)}
      creatable={boolean('creatable', false)}
      inverse={boolean('Inverse', false)}
      isClearable={boolean('Clearable', false)}
      isDisabled={boolean('Disabled', false)}
      isMulti={boolean('Multi select', false)}
      isSearchable={boolean('Searchable', false)}
      options={groupedOptions}
      placeholder="Select your favourite(s)"
      size={select('Size', sizes, 'medium')}
      hideSelectedOptions={boolean('Hide selected options', true)}
      error={text('error', '')}
      helpText={text('helpText', '')}
      success={text('success', '')}
      warning={text('warning', '')}
      width={text('width', undefined)}
    />
  ))
  .add('Custom Option', () => (
    <Select
      closeMenuOnSelect={boolean('Close menu on select', true)}
      components={{
        Option: CustomOption,
      }}
      creatable={boolean('creatable', false)}
      inverse={boolean('Inverse', false)}
      isClearable={boolean('Clearable', false)}
      isDisabled={boolean('Disabled', false)}
      isMulti={boolean('Multi select', false)}
      isSearchable={boolean('Searchable', false)}
      options={customOptions}
      placeholder="Select your favourite(s)"
      size={select('Size', sizes, 'medium')}
      hideSelectedOptions={boolean('Hide selected options', true)}
      error={text('error', '')}
      helpText={text('helpText', '')}
      success={text('success', '')}
      warning={text('warning', '')}
      width={text('width', undefined)}
    />
  ))
  .add('With label', () => (
    <Label inverse={boolean('Inverse', false)} size={select('Size', sizes, 'medium')}>
      Select something
      <Select
        closeMenuOnSelect={boolean('Close menu on select', true)}
        creatable={boolean('creatable', false)}
        isClearable={boolean('Clearable', false)}
        isDisabled={boolean('Disabled', false)}
        isMulti={boolean('Multi select', false)}
        isSearchable={boolean('Searchable', false)}
        options={options}
        placeholder="Select your favourite(s)"
        hideSelectedOptions={boolean('Hide selected options', true)}
        error={text('error', '')}
        helpText={text('helpText', '')}
        success={text('success', '')}
        warning={text('warning', '')}
        width={text('width', undefined)}
      />
    </Label>
  ))
  .add('Async', () => {
    const loadOptions = (searchTerm, pageSize = 10, pageNumber = 1) => {
      return new Promise(resolve => {
        setTimeout(() => {
          const options = [];
          for (let i = 0; i < pageSize; i += 1) {
            const optionNr = (pageNumber - 1) * pageSize + i + 1;
            options.push({
              value: `${searchTerm}${optionNr}`,
              label: `${searchTerm} ${optionNr}`,
            });
          }
          resolve(options);
        }, 500);
      });
    };

    return (
      <AsyncSelect
        loadOptions={loadOptions}
        cacheOptions={boolean('cacheOptions', true)}
        creatable={boolean('creatable', false)}
        paginate={boolean('paginate', true)}
        pageSize={number('pageSize', 10)}
        closeMenuOnSelect={boolean('closeMenuOnSelectj', true)}
        inverse={boolean('inverse', false)}
        isClearable={boolean('isClearable', false)}
        isDisabled={boolean('isDisabled', false)}
        isMulti={boolean('isMulti', false)}
        options={options}
        placeholder="Select your favourite(s)"
        size={select('size', sizes, 'medium')}
        hideSelectedOptions={boolean('hideSelectedOptions', true)}
        error={text('error', '')}
        helpText={text('helpText', '')}
        success={text('success', '')}
        warning={text('warning', '')}
        width={text('width', undefined)}
      />
    );
  });
