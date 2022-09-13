import { ComponentMeta, ComponentStory } from '@storybook/react';
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
} as ComponentMeta<typeof RadioButton>;

export const DefaultStory: ComponentStory<typeof RadioButton> = (args) => <RadioButton {...args} />;

DefaultStory.args = {
  checked: true,
  label: 'I am the label',
  value: 'the_value',
};

export const Group: ComponentStory<typeof RadioGroup> = (args) => {
  const [value, setValue] = useState<string | boolean>('Option one');

  const handleChange = (value: string | boolean) => {
    setValue(value);
  };

  return (
    <RadioGroup {...args} name="stringValue" onChange={handleChange} value={value}>
      {values.map((value, key) => (
        <RadioButton key={key} marginVertical={3} label={value} value={value} />
      ))}
    </RadioGroup>
  );
};
