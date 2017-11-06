import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import styles from '@sambego/storybook-styles';
import { Store, State } from '@sambego/storybook-state';
import { RadioGroup, RadioButton } from '../components';
import { baseStyles, centerStyles } from '../.storybook/styles';

const store = new Store({
  value: 'thewalkingdead',
});
const updateState = value => {
  store.set({ value });
  action(`Selected: ${value}`)();
};

storiesOf('Radio', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('Enabled', () => (
    <State store={store}>
      <div>
        <RadioGroup name="stringValue" onChange={updateState}>
          <RadioButton size="small" marginBottom={2} label="The Walking Dead" value="thewalkingdead" />
          <RadioButton size="medium" marginBottom={2} label="From Hell" value="fromhell" />
          <RadioButton size="medium" marginBottom={2} label="V for a Vendetta" value="vvendetta" onFocus={action('Focus')} />
          <RadioButton size="large" marginBottom={2} label="Watchmen" value="watchmen" onBlur={action('blur')} />
        </RadioGroup>
        <RadioGroup name="stringValue" onChange={updateState} marginTop={6}>
          <RadioButton size="small" marginBottom={2} label="The Walking Dead" value="thewalkingdead" />
          <RadioButton size="medium" marginBottom={2} label="From Hell" value="fromhell" />
          <RadioButton size="medium" marginBottom={2} label="V for a Vendetta" value="vvendetta" onFocus={action('Focus')} />
          <RadioButton size="large" marginBottom={2} label="Watchmen" value="watchmen" onBlur={action('blur')} />
        </RadioGroup>
      </div>
    </State>
  ))
  .add('Disabled', () => (
    <State store={store}>
      <RadioGroup name="stringValue" onChange={updateState}>
        <RadioButton marginBottom={2} label="The Walking Dead" value="thewalkingdead" disabled />
        <RadioButton marginBottom={2} label="From Hell" value="fromhell" disabled />
        <RadioButton marginBottom={2} label="V for a Vendetta" value="vvendetta" disabled />
        <RadioButton marginBottom={2} label="Watchmen" value="watchmen" disabled />
      </RadioGroup>
    </State>
  ));
