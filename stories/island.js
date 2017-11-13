import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { Box, Island, TextBody } from '../components';

const colors = ['neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'white'];
const sizes = ['small', 'medium', 'large'];

storiesOf('Island', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .add('colors', () => (
    <Box padding={5}>
      {colors.map((color, index) => (
        <Island key={index} color={color} marginTop={4}>
          <TextBody>I am a {color} island.</TextBody>
        </Island>
      ))}
      <Island marginTop={4} dark>
        <TextBody>I am a dark island.</TextBody>
      </Island>
    </Box>
  ))
  .add('sizes', () => (
    <Box padding={5}>
      {sizes.map((size, index) => (
        <Island key={index} size={size} marginTop={4}>
          <TextBody>I am a {size} island.</TextBody>
        </Island>
      ))}
    </Box>
  ));
