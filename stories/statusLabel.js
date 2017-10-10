import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import styles from '@sambego/storybook-styles';
import { StatusLabel } from '../components';

const colors = ['mint', 'violet', 'ruby', 'gold', 'aqua', 'neutral'];
const sizes = ['small', 'medium'];

storiesOf('Status Labels', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(
    styles({
      fontFamily: 'ProximaNova-Semibold, trebuchet ms, Verdana, Arial, sans-serif',
    }),
  )
  .add('colors', () => (
    <div>
      {colors.map((color, key) => (
        <StatusLabel color={color} key={key}>
          {color}
        </StatusLabel>
      ))}
    </div>
  ))
  .add('sizes', () => (
    <div>
      {sizes.map((size, key) => (
        <StatusLabel size={size} key={key}>
          {size}
        </StatusLabel>
      ))}
    </div>
  ));
