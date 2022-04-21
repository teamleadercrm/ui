import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { Avatar, Box, Label, Select, AsyncSelect, TextBody } from '../../index';
import { customOptions, groupedOptions, options } from '../../static/data/select';

/* eslint react/prop-types: 0 */
const CustomOption = ({ children, data, innerProps, isFocused, isSelected, isDisabled, selectProps }) => {
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
      <Avatar imageUrl={data.avatar} size="tiny" marginRight={2} />
      <TextBody style={textStyles} maxLines={selectProps.truncateOptionText ? 1 : undefined}>
        {children}
      </TextBody>
    </Box>
  );
};

const loadOptions = (searchTerm, pageSize = 10, pageNumber = 1) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const options = [];
      for (let i = 0; i < pageSize; i++) {
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

export default {
  component: Select,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Form elements/Select'),

  parameters: {
    info: {
      propTablesExclude: [Label],
    },
  },
  argTypes: {
    size: {
      options: ['tiny', 'small', 'medium', 'large'],
      control: {
        type: 'select',
      },
    },
  },
};

export const basic = (args) => <Select {...args} />;

basic.args = {
  isClearable: false,
  isDisabled: false,
  isMulti: false,
  isSearchable: false,
  hideSelectedOptions: false,
  options,
  placeholder: 'Select your favourite(s)',
  size: 'medium',
  menuWidth: undefined,
  menuHorizontalOffset: undefined,
};

export const grouped = () => <Select options={groupedOptions} />;

export const customOption = () => <Select components={{ Option: CustomOption }} options={customOptions} />;

export const async = () => (
  <AsyncSelect loadOptions={loadOptions} cacheOptions paginate pageSize={10} options={options} />
);
