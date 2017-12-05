import React from 'react';
import styles from '@sambego/storybook-styles';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { Box, LoadingSpinner } from '../components';
import { baseStyles, centerStyles } from '../.storybook/styles';

const colors = ['teal', 'white'];
const sizes = ['small', 'medium'];

storiesOf('Loading spinners', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('sizes', () => (
    <Box padding={5}>
      {sizes.map((size, index) => <LoadingSpinner key={index} size={size} marginHorizontal={3} />)}
    </Box>
  ))
  .add('colors', () => (
    <Box padding={5}>
      {colors.map((color, index) => <LoadingSpinner key={index} color={color} marginHorizontal={3} />)}
    </Box>
  ));
