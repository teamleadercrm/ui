import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import styles from '@sambego/storybook-styles';
import { RadioGroup, RadioButton } from '../components';
import { baseStyles, centerStyles } from '../.storybook/styles';

let stringValue = 'thewalkingdead';
const changeValue = value => {
  stringValue = value;
  action(`change value: ${value}`)();
};

storiesOf('Radio', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('Enabled', () => (
    <RadioGroup name="stringValue" value={stringValue} onChange={changeValue}>
      <RadioButton label="The Walking Dead" value="thewalkingdead" />
      <RadioButton label="From Hell" value="fromhell" />
      <RadioButton label="V for a Vendetta" value="vvendetta" onFocus={action('Focus')} />
      <RadioButton label="Watchmen" value="watchmen" onBlur={action('blur')} />
    </RadioGroup>
  ))
  .add('Disabled', () => (
    <RadioGroup name="stringValue" value={stringValue} onChange={changeValue}>
      <RadioButton label="The Walking Dead" value="thewalkingdead" disabled />
      <RadioButton label="From Hell" value="fromhell" disabled />
      <RadioButton label="V for a Vendetta" value="vvendetta" disabled />
      <RadioButton label="Watchmen" value="watchmen" disabled />
    </RadioGroup>
  ));
