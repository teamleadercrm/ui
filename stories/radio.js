import React from 'react';
import PropTable from "./components/propTable";
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, select } from '@storybook/addon-knobs/react';
import { Store, State } from '@sambego/storybook-state';
import { RadioGroup, RadioButton } from '../components';

const sizes = ['small', 'medium', 'large'];
const values = ['Option one', 'Option two', 'Option three'];

const store = new Store({
  value: 'Option one',
});
const updateState = value => {
  store.set({ value });
};

storiesOf('Radio', module)
  .addDecorator((story, context) => withInfo({TableComponent: PropTable})(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
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
