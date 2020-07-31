import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { Store, State } from '@sambego/storybook-state';
import { RadioGroup, RadioButton } from '../../index';

const values = ['Option one', 'Option two', 'Option three'];

const store = new Store({
  value: 'Option one',
});
const updateState = (value) => {
  store.set({ value });
};

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

export const Group = () => (
  <State store={store}>
    <RadioGroup name="stringValue" onChange={updateState}>
      {values.map((value, key) => (
        <RadioButton key={key} marginVertical={3} label={value} value={value} />
      ))}
    </RadioGroup>
  </State>
);
