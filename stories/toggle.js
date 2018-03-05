import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withKnobs, boolean, select } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { Toggle } from '../components';

const sizes = ['small', 'medium', 'large'];

storiesOf('Toggles', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <Toggle
      checked={boolean('Checked', false)}
      disabled={boolean('Disabled', false)}
      size={select('Size', sizes, 'medium')}
    />
  ))
  .add('With labels', () => (
    <Toggle
      checked={boolean('Checked', false)}
      disabled={boolean('Disabled', false)}
      label={`I'm a toggle`}
      size={select('Size', sizes, 'medium')}
    />
  ));
