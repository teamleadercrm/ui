import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import styles from '@sambego/storybook-styles';
import { StatusBullet } from '../components';

const colors = ['mint', 'violet', 'ruby', 'gold', 'aqua', 'neutral'];
const sizes = ['small', 'medium', 'large'];

storiesOf('Status Bullets', module)
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
        <StatusBullet color={color} key={key}>
          {color}
        </StatusBullet>
      ))}
    </div>
  ))
  .add('sizes', () => (
    <div>
      {sizes.map((size, key) => (
        <StatusBullet size={size} key={key}>
          {size}
        </StatusBullet>
      ))}
    </div>
  ));
