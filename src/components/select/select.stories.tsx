import { ComponentStory, Meta } from '@storybook/react';
import React, { useState } from 'react';
import { OptionProps } from 'react-select';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { AsyncSelect, Avatar, Box, Label, Select, TextBody } from '../../index';
import { customOptions, groupedOptions, options } from '../../static/data/select';
import { Option } from './types';

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
} as Meta<typeof Select>;

const CustomOption = ({
  children,
  data,
  innerProps,
  isFocused,
  isSelected,
  isDisabled,
}: OptionProps<Option, false>) => {
  const boxStyles = {
    backgroundColor: isFocused ? '#e4e4e6' : isSelected ? '#82828c' : '#fff',
    '&:active': {
      backgroundColor: isDisabled ? '#fff' : '#e4e4e6',
    },
  };

  const textStyles = {
    color: isDisabled ? '#c0c0c4' : isSelected && !isFocused ? '#fff' : '#344b63',
  };
  const avatar = data.avatar;
  return (
    <Box
      paddingVertical={2}
      paddingHorizontal={2}
      display="flex"
      alignItems="center"
      {...(innerProps as any)}
      style={boxStyles}
    >
      <Avatar imageUrl={avatar} size="tiny" marginRight={2} />
      <TextBody style={textStyles}>{children}</TextBody>
    </Box>
  );
};

const loadOptions = (searchTerm: string, pageSize = 10, pageNumber = 1) => {
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

export const basic: ComponentStory<typeof Select> = (args) => <Select {...args} />;

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
  inverse: false,
};

export const grouped: ComponentStory<typeof Select> = () => {
  const [value, setValue] = useState<Option | null>(null);
  const handleChange = (option: Option) => setValue(option);
  return <Select value={value} options={groupedOptions} onChange={handleChange} />;
};

export const customOption: ComponentStory<typeof Select> = () => {
  const [value, setValue] = useState<Option | null>(null);
  const handleChange = (option: Option) => setValue(option);
  return <Select value={value} components={{ Option: CustomOption }} options={customOptions} onChange={handleChange} />;
};

export const async: ComponentStory<typeof AsyncSelect> = () => {
  const [value, setValue] = useState<Option | null>(null);
  const handleChange = (option: Option) => setValue(option);
  return (
    <AsyncSelect value={value} loadOptions={loadOptions} cacheOptions paginate pageSize={10} onChange={handleChange} />
  );
};
