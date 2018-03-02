import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { Box, Counter, Tooltip, TextBody } from '../components';

const colors = ['neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby'];
const sizes = ['small', 'medium'];

const TooltippedCounter = Tooltip(Counter);

storiesOf('Counters', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
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
  ))
  .add('with tooltip', () => (
    <TooltippedCounter count={116} color="ruby" maxCount={99} tooltip={<TextBody>I am the tooltip</TextBody>}>
      tasks
    </TooltippedCounter>
  ));
