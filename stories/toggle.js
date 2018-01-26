import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { Store, State } from '@sambego/storybook-state';
import styles from '@sambego/storybook-styles';
import { Box, Toggle } from '../components';
import { baseStyles, centerStyles } from '../.storybook/styles';

const sizes = ['small', 'medium', 'large'];

const store = new Store({
  checked: false,
});

const handleOnChange = checked => {
  store.set({ checked });
  action(`onChange - checked: ${checked}`)();
};

storiesOf('Toggles', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('sizes', () => (
    <Box>
      {sizes.map((size, index) => (
        <State store={store}>
          <Toggle
            key={index}
            size={size}
            marginVertical={3}
            onChange={handleOnChange}
            disabled={boolean('Disabled', false)}
          />
        </State>
      ))}
    </Box>
  ))
  .add('labels', () => (
    <Box>
      {sizes.map((size, index) => (
        <State store={store}>
          <Toggle
            key={index}
            size={size}
            marginVertical={3}
            onChange={handleOnChange}
            label={`I'm a ${size} toggle`}
            disabled={boolean('Disabled', false)}
          />
        </State>
      ))}
    </Box>
  ));
