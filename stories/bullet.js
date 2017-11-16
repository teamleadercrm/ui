import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import styles from '@sambego/storybook-styles';
import { Box, Bullet } from '../components';
import { baseStyles, centerStyles } from '../.storybook/styles';

const colors = ['neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby'];
const sizes = ['small', 'medium'];

storiesOf('Bullets', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('colors', () => (
    <Box>
      {colors.map((color, index) => <Bullet color={color} key={index} marginHorizontal={3} />)}
    </Box>
  ))
  .add('sizes', () => (
    <Box>
      {sizes.map((size, index) => <Bullet key={index} color="ruby" size={size} marginHorizontal={3} />)}
    </Box>
  ));
