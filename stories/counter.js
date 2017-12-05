import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import styles from '@sambego/storybook-styles';
import { Box, Counter } from '../components';
import { baseStyles, centerStyles } from '../.storybook/styles';

const colors = ['neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby'];
const sizes = ['small', 'medium'];

storiesOf('Counters', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('colors', () => (
    <Box>
      {colors.map((color, index) => <Counter count={99} color={color} key={index} marginHorizontal={3} />)}
    </Box>
  ))
  .add('sizes', () => (
    <Box>
      {sizes.map((size, index) => <Counter count={99} color="ruby" key={index} size={size} marginHorizontal={3} />)}
    </Box>
  ))
  .add('maximum count', () => (
    <Box>
      <Counter count={116} color="ruby" maxCount={99} />
    </Box>
  ));
