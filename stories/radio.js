import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import styles from '@sambego/storybook-styles';
import { Store, State } from '@sambego/storybook-state';
import { RadioGroup, RadioButton } from '../components';
import { baseStyles, centerStyles } from '../.storybook/styles';

const sizes = ['small', 'medium', 'large'];

const store = new Store({
  value: 'small',
});
const updateState = value => {
  store.set({ value });
  action(`Selected: ${value}`)();
};

storiesOf('Radio', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('Sizes', () => (
    <State store={store}>
      <RadioGroup name="stringValue" onChange={updateState}>
        {sizes.map((size, key) => (
          <RadioButton
            key={key}
            size={size}
            marginVertical={3}
            label={`I'm a ${size} radio`}
            value={size}
            disabled={boolean('Disabled', false)}
          />
        ))}
      </RadioGroup>
    </State>
  ));
