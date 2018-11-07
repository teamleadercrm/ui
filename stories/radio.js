import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs/react';
import { Store, State } from '@sambego/storybook-state';
import { RadioGroup, RadioButton } from '../src/components';

const sizes = ['small', 'medium', 'large'];
const values = ['Option one', 'Option two', 'Option three'];

const store = new Store({
  value: 'Option one',
});
const updateState = value => {
  store.set({ value });
};

storiesOf('Radio', module)
  .addParameters({
    info: {
      propTablesExclude: [State],
    },
  })
  .add('Basic', () => (
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
  ));
