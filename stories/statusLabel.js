import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import styles from '@sambego/storybook-styles';
import { Box, StatusLabel } from '../components';
import { baseStyles, centerStyles } from '../.storybook/styles';

const colors = ['mint', 'violet', 'ruby', 'gold', 'aqua', 'neutral'];
const sizes = ['small', 'medium'];

storiesOf('Status Labels', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('colors', () => (
    <Box>
      {colors.map((color, key) => (
        <StatusLabel color={color} key={key} marginHorizontal={1}>
          {color}
        </StatusLabel>
      ))}
    </Box>
  ))
  .add('sizes', () => (
    <Box>
      {sizes.map((size, key) => (
        <StatusLabel size={size} key={key} marginHorizontal={1}>
          {size}
        </StatusLabel>
      ))}
    </Box>
  ));
