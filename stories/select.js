import React from 'react';
import PropTable from './components/propTable';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, select } from '@storybook/addon-knobs/react';
import { Avatar, Box, Label, Select, TextBody } from '../components';
import { customOptions, groupedOptions, options } from "../static/data/select";

const sizes = ['small', 'medium', 'large'];

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

storiesOf('Select', module)
  .addDecorator((story, context) =>
    withInfo({
      TableComponent: PropTable,
      propTablesExclude: [Label],
    })(story)(context),
  )
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <Select
      closeMenuOnSelect={boolean('Close menu on select', true)}
      inverse={boolean('Inverse', false)}
      isClearable={boolean('Clearable', false)}
      isDisabled={boolean('Disabled', false)}
      isMulti={boolean('Multi select', false)}
      isSearchable={boolean('Searchable', false)}
      options={options}
      placeholder="Select your favourite(s)"
      size={select('Size', sizes, 'medium')}
      hideSelectedOptions={boolean('Hide selected options', true)}
    />
  ))
  .add('Grouped', () => (
    <Select
      closeMenuOnSelect={boolean('Close menu on select', true)}
      inverse={boolean('Inverse', false)}
      isClearable={boolean('Clearable', false)}
      isDisabled={boolean('Disabled', false)}
      isMulti={boolean('Multi select', false)}
      isSearchable={boolean('Searchable', false)}
      options={groupedOptions}
      placeholder="Select your favourite(s)"
      size={select('Size', sizes, 'medium')}
      hideSelectedOptions={boolean('Hide selected options', true)}
    />
  ))
  .add('Custom Option', () => (
    <Select
      closeMenuOnSelect={boolean('Close menu on select', true)}
      components={{
        Option: CustomOption,
      }}
      inverse={boolean('Inverse', false)}
      isClearable={boolean('Clearable', false)}
      isDisabled={boolean('Disabled', false)}
      isMulti={boolean('Multi select', false)}
      isSearchable={boolean('Searchable', false)}
      options={customOptions}
      placeholder="Select your favourite(s)"
      size={select('Size', sizes, 'medium')}
      hideSelectedOptions={boolean('Hide selected options', true)}
    />
  ))
  .add('With label', () => (
    <Label inverse={boolean('Inverse', false)}>
      Select something
      <Select
        closeMenuOnSelect={boolean('Close menu on select', true)}
        inverse={boolean('Inverse', false)}
        isClearable={boolean('Clearable', false)}
        isDisabled={boolean('Disabled', false)}
        isMulti={boolean('Multi select', false)}
        isSearchable={boolean('Searchable', false)}
        options={options}
        placeholder="Select your favourite(s)"
        size={select('Size', sizes, 'medium')}
        hideSelectedOptions={boolean('Hide selected options', true)}
      />
    </Label>
  ));
