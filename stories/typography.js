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
  OldStyleNumber,
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
      <Heading1 marginTop={4}>Heading 1</Heading1>
      <Heading2 marginTop={4}>Heading 2</Heading2>
      <Heading3 marginTop={4}>Heading 3</Heading3>
      <Heading4 marginTop={4}>Heading 4</Heading4>
    </Box>
  ))
  .add('Text', () => (
    <Box padding={5}>
      <TextBody>Text body</TextBody>
      <TextSmall marginTop={2}>Text small</TextSmall>
      <TextTiny marginTop={2}>Text tiny</TextTiny>
      <TextBody marginTop={4}><Monospaced>Monospaced number 1234567890</Monospaced></TextBody>
      <TextBody marginTop={2}><OldStyleNumber>Old style number 1234567890</OldStyleNumber></TextBody>
    </Box>
  ));
