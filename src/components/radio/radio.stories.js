import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { boolean, select } from '@storybook/addon-knobs';
import { Store, State } from '@sambego/storybook-state';
import { RadioGroup, RadioButton } from '../../index';

const sizes = ['small', 'medium', 'large'];
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
    info: {
      propTablesExclude: [State],
    },
  },
};

export const basic = () => (
  <State store={store}>
    <RadioGroup name="stringValue" onChange={updateState}>
      {values.map((value, key) => (
        <RadioButton
          key={key}
          size={select('Size', sizes, 'medium')}
          marginVertical={3}
          label={value}
          value={value}
          disabled={boolean('Disabled', false)}
        />
      ))}
    </RadioGroup>
  </State>
);
