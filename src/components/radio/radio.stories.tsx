import React, { useState } from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { RadioGroup, RadioButton } from '../../index';

const values = ['Option one', 'Option two', 'Option three'];

export default {
  component: RadioButton,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Form elements/Radio'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=6454%3A22776',
    },
  },
};

export const DefaultStory = (args) => <RadioButton {...args} />;

DefaultStory.args = {
  checked: true,
  label: 'I am the label',
  value: 'the_value',
};

export const Group = () => {
  const [value, setValue] = useState('Option one');

  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <RadioGroup name="stringValue" onChange={handleChange} value={value}>
      {values.map((value, key) => (
        <RadioButton key={key} marginVertical={3} label={value} value={value} />
      ))}
    </RadioGroup>
  );
};
