import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs/react';
import {
  Box,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Monospaced,
  TextBody,
  TextDisplay,
  TextSmall,
} from '../components';
import { COLORS, TINTS } from '../constants';

storiesOf('Typography', module)
  .addParameters({
    info: {
      propTablesExclude: [Box],
    },
  })
  .add('Headings', () => (
    <div>
      <Heading1 color={select('Color', COLORS, 'teal')} tint={select('Tint', TINTS, 'darkest')}>
        Heading 1 / font-size: 24px / line-height: 30px / weight: bold (700) / tracking: 0
      </Heading1>
      <Heading2 color={select('Color', COLORS, 'teal')} tint={select('Tint', TINTS, 'darkest')} marginTop={4}>
        Heading 2 / font-size: 18px / line-height: 24px / weight: medium (500) / tracking: 0
      </Heading2>
      <Heading3 color={select('Color', COLORS, 'teal')} tint={select('Tint', TINTS, 'darkest')} marginTop={4}>
        Heading 3 / font-size: 16px / line-height: 21px / weight: medium (500) / tracking: 0
      </Heading3>
      <Heading4 color={select('Color', COLORS, 'teal')} tint={select('Tint', TINTS, 'darkest')} marginTop={4}>
        Heading 4 / font-size: 12px / line-height: 18px / weight: bold (700) / tracking: 0.6px
      </Heading4>
    </div>
  ))
  .add('Text', () => (
    <div>
      <TextDisplay color={select('Color', COLORS, 'teal')} tint={select('Tint', TINTS, 'darkest')}>
        Text display / font-size: 16px / line-height: 24px / weight: regular (400) / tracking: 0
      </TextDisplay>
      <TextBody color={select('Color', COLORS, 'teal')} tint={select('Tint', TINTS, 'darkest')} marginTop={2}>
        Text body / font-size: 14px / line-height: 21px / weight: regular (400) / tracking: 0
      </TextBody>
      <TextSmall color={select('Color', COLORS, 'teal')} tint={select('Tint', TINTS, 'darkest')} marginTop={2}>
        Text small / font-size: 12px / line-height: 18px / weight: regular (400) / tracking: 0
      </TextSmall>
    </div>
  ))
  .add('Monospaced', () => (
    <Box padding={5}>
      <Heading1 color={select('Color', COLORS, 'teal')} tint={select('Tint', TINTS, 'darkest')}>
        <Monospaced>1234567890</Monospaced>
      </Heading1>
      <Heading2 color={select('Color', COLORS, 'teal')} tint={select('Tint', TINTS, 'darkest')} marginTop={2}>
        <Monospaced>1234567890</Monospaced>
      </Heading2>
      <Heading3 color={select('Color', COLORS, 'teal')} tint={select('Tint', TINTS, 'darkest')} marginTop={2}>
        <Monospaced>1234567890</Monospaced>
      </Heading3>
      <Heading4 color={select('Color', COLORS, 'teal')} tint={select('Tint', TINTS, 'darkest')} marginTop={2}>
        <Monospaced>1234567890</Monospaced>
      </Heading4>
      <TextDisplay color={select('Color', COLORS, 'teal')} tint={select('Tint', TINTS, 'darkest')} marginTop={6}>
        <Monospaced>1234567890</Monospaced>
      </TextDisplay>
      <TextBody color={select('Color', COLORS, 'teal')} tint={select('Tint', TINTS, 'darkest')} marginTop={2}>
        <Monospaced>1234567890</Monospaced>
      </TextBody>
      <TextSmall color={select('Color', COLORS, 'teal')} tint={select('Tint', TINTS, 'darkest')} marginTop={2}>
        <Monospaced>1234567890</Monospaced>
      </TextSmall>
    </Box>
  ));
