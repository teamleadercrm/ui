import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { Store, State } from '@sambego/storybook-state';
import styles from '@sambego/storybook-styles';
import { Box, Checkbox, Link, TextBody } from '../components';
import { baseStyles, centerStyles } from '../.storybook/styles';

const sizes = ['small', 'medium', 'large'];

const store = new Store({
  checked: false,
});

const handleOnChange = checked => {
  store.set({ checked });
  action(`onChange - checked: ${checked}`)();
};

storiesOf('Checkboxes', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('sizes', () => (
    <Box>
      {sizes.map((size, key) => (
        <State store={store} key={key}>
          <Checkbox size={size} marginVertical={3} onChange={handleOnChange} disabled={boolean('Disabled', false)}/>
        </State>
      ))}
    </Box>
  ))
  .add('with labels', () => (
    <Box>
      {sizes.map((size, key) => (
        <State store={store} key={key}>
          <Checkbox size={size} marginVertical={3} onChange={handleOnChange} disabled={boolean('Disabled', false)} label={`I'm a ${size} Checkbox`}/>
        </State>
      ))}
    </Box>
  ))
  .add('with link in label', () => (
    <State store={store}>
      <Checkbox marginVertical={3} onChange={handleOnChange} disabled={boolean('Disabled', false)}>
        <TextBody>I'm a medium label with a <Link href="#" inherit={false}>link</Link> inside</TextBody>
      </Checkbox>
    </State>
  ));
