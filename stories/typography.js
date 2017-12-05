import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import styles from '@sambego/storybook-styles';
import {
  Box,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Monospaced,
  TextBody,
  TextSmall,
  TextTiny,
} from '../components';
import { baseStyles } from '../.storybook/styles';

storiesOf('Typography', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(styles(baseStyles))
  .add('Headings', () => (
    <Box padding={5}>
      <Heading1>Heading 1 / font-size: 24px / line-height: 30px / weight: medium (500) / tracking: 0</Heading1>
      <Heading2 marginTop={4}>Heading 2 / font-size: 20px / line-height: 24px / weight: medium (500) / tracking: 0</Heading2>
      <Heading3 marginTop={4}>Heading 3 / font-size: 18px / line-height: 24px / weight: medium (500) / tracking: 0</Heading3>
      <Heading4 marginTop={4}>Heading 4 / font-size: 12px / line-height: 18px / weight: bold (700) / tracking: 0.6px</Heading4>
    </Box>
  ))
  .add('Text', () => (
    <Box padding={5}>
      <TextBody>Text body / font-size: 16px / line-height: 24px / weight: regular (400) / tracking: 0</TextBody>
      <TextSmall marginTop={2}>Text small / font-size: 14px / line-height: 18px / weight: regular (400) / tracking: 0</TextSmall>
      <TextTiny marginTop={2}>Text tiny / font-size: 12px / line-height: 18px / weight: regular (400) / tracking: 0</TextTiny>
    </Box>
  ))
  .add('Monospaced', () => (
    <Box padding={5}>
      <Heading1><Monospaced>1234567890</Monospaced></Heading1>
      <Heading2 marginTop={2}><Monospaced>1234567890</Monospaced></Heading2>
      <Heading3 marginTop={2}><Monospaced>1234567890</Monospaced></Heading3>
      <Heading4 marginTop={2}><Monospaced>1234567890</Monospaced></Heading4>
      <TextBody marginTop={6}><Monospaced>1234567890</Monospaced></TextBody>
      <TextSmall marginTop={2}><Monospaced>1234567890</Monospaced></TextSmall>
      <TextTiny marginTop={2}><Monospaced>1234567890</Monospaced></TextTiny>
    </Box>
  ));
