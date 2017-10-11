import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import styles from '@sambego/storybook-styles';
import {
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
    <div>
      <Heading1>Heading 1</Heading1>
      <Heading2>Heading 2</Heading2>
      <Heading3>Heading 3</Heading3>
      <Heading4>Heading 4</Heading4>
    </div>
  ))
  .add('Body', () => (
    <div>
      <Monospaced>Monospaced</Monospaced>
      <OldStyleNumber>Old style number</OldStyleNumber>
      <TextBody>Text body</TextBody>
      <TextSmall>Text small</TextSmall>
      <TextTiny>Text tiny</TextTiny>
    </div>
  ));
