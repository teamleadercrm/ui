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
      <RadioGroup name="stringValue" onChange={updateState}>
        <RadioButton label="The Walking Dead" value="thewalkingdead" />
        <RadioButton label="From Hell" value="fromhell" />
        <RadioButton label="V for a Vendetta" value="vvendetta" onFocus={action('Focus')} />
        <RadioButton label="Watchmen" value="watchmen" onBlur={action('blur')} />
      </RadioGroup>
    </State>
  ))
  .add('Disabled', () => (
    <State store={store}>
      <RadioGroup name="stringValue" onChange={updateState}>
        <RadioButton label="The Walking Dead" value="thewalkingdead" disabled />
        <RadioButton label="From Hell" value="fromhell" disabled />
        <RadioButton label="V for a Vendetta" value="vvendetta" disabled />
        <RadioButton label="Watchmen" value="watchmen" disabled />
      </RadioGroup>
    </State>
  ));
