import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import styles from '@sambego/storybook-styles';
import { Box, Section, TextBody } from '../components';
import { baseStyles } from '../.storybook/styles';

const colors = ['mint', 'violet', 'ruby', 'gold', 'aqua', 'white', 'neutral'];
const sizes = ['small', 'medium', 'large'];

storiesOf('Section', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(styles(baseStyles))
  .add('colors', () => (
    <Box padding={5}>
      {colors.map((color, key) => (
        <Section color={color} key={key} marginTop={4}>
          <TextBody>I am a {color} section</TextBody>
        </Section>
      ))}
      <Section dark marginTop={4}><TextBody>I am a dark white section</TextBody></Section>
      <Section color="neutral" dark marginTop={4}>
        <TextBody>I am a dark neutral section</TextBody>
      </Section>
    </Box>
  ))
  .add('sizes', () => (
    <Box padding={5}>
      {sizes.map((size, index) => (
        <Section key={index} size={size}>
          <TextBody>I am a {size} section.</TextBody>
        </Section>
      ))}
    </Box>
  ));
