import React from 'react';
import PropTable from './components/propTable';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { Heading1, Heading2, Heading3, Heading4, Monospaced, TextBody, TextDisplay, TextSmall } from '../components';

storiesOf('Typography', module)
  .addDecorator((story, context) =>
    withInfo({
      TableComponent: PropTable,
      propTablesExclude: [],
    })(story)(context),
  )
  .addDecorator(checkA11y)
  .add('Heading 1', () => <Heading1>Font-size: 24px / line-height: 30px / weight: bold (700) / tracking: 0</Heading1>)
  .add('Heading 2', () => <Heading2>Font-size: 18px / line-height: 24px / weight: medium (500) / tracking: 0</Heading2>)
  .add('Heading 3', () => <Heading3>Font-size: 16px / line-height: 21px / weight: medium (500) / tracking: 0</Heading3>)
  .add('Heading 4', () => (
    <Heading4>Font-size: 12px / line-height: 18px / weight: bold (700) / tracking: 0.6px</Heading4>
  ))
  .add('Display Text', () => (
    <TextDisplay>Font-size: 16px / line-height: 24px / weight: regular (400) / tracking: 0</TextDisplay>
  ))
  .add('Body Text', () => (
    <TextBody>Font-size: 14px / line-height: 21px / weight: regular (400) / tracking: 0</TextBody>
  ))
  .add('Small Text', () => (
    <TextSmall>Font-size: 12px / line-height: 18px / weight: regular (400) / tracking: 0</TextSmall>
  ))
  .add('Monospaced', () => (
    <TextBody>
      <Monospaced>1234567890</Monospaced>
    </TextBody>
  ));
