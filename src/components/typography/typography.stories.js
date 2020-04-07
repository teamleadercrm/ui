import React from 'react';
import { addStoryInGroup, PRIMITIVES } from '../../../.storybook/utils';
import { boolean, select } from '@storybook/addon-knobs/react';
import {
  COLORS,
  TINTS,
  Box,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Marker,
  Monospaced,
  TextBody,
  TextBodyCompact,
  TextDisplay,
  TextSmall,
  UITextDisplay,
  UITextBody,
  UITextSmall,
} from '../../index';

export default {
  title: addStoryInGroup(PRIMITIVES, 'Typography'),

  parameters: {
    info: {
      propTablesExclude: [Box],
    },
  },
};

export const headings = () => (
  <div>
    <Heading1
      color={select('Color', COLORS, 'teal')}
      ellipsis={boolean('Overflow ellipsis', false)}
      tint={select('Tint', TINTS, 'darkest')}
    >
      Heading 1 / font-size: 24px / line-height: 30px / weight: bold (700) / tracking: 0
    </Heading1>
    <Heading2
      color={select('Color', COLORS, 'teal')}
      ellipsis={boolean('Overflow ellipsis', false)}
      tint={select('Tint', TINTS, 'darkest')}
      marginTop={4}
    >
      Heading 2 / font-size: 18px / line-height: 24px / weight: medium (500) / tracking: 0
    </Heading2>
    <Heading3
      color={select('Color', COLORS, 'teal')}
      ellipsis={boolean('Overflow ellipsis', false)}
      tint={select('Tint', TINTS, 'darkest')}
      marginTop={4}
    >
      Heading 3 / font-size: 16px / line-height: 21px / weight: medium (500) / tracking: 0
    </Heading3>
    <Heading4
      color={select('Color', COLORS, 'teal')}
      ellipsis={boolean('Overflow ellipsis', false)}
      tint={select('Tint', TINTS, 'darkest')}
      marginTop={4}
    >
      Heading 4 / font-size: 12px / line-height: 18px / weight: bold (700) / tracking: 0.6px
    </Heading4>
    <Heading5
      color={select('Color', COLORS, 'teal')}
      ellipsis={boolean('Overflow ellipsis', false)}
      tint={select('Tint', TINTS, 'darkest')}
      marginTop={4}
    >
      Heading 5 / font-size: 14px / line-height: 18px / weight: semi bold (600) / tracking: 0
    </Heading5>
  </div>
);

export const text = () => (
  <Box overflow="hidden">
    <TextDisplay
      color={select('Color', COLORS, 'teal')}
      ellipsis={boolean('Overflow ellipsis', false)}
      tint={select('Tint', TINTS, 'darkest')}
    >
      <strong>Text display</strong> / font-size: 16px / line-height: 24px / weight: regular (400) / tracking: 0
    </TextDisplay>
    <TextBody
      color={select('Color', COLORS, 'teal')}
      ellipsis={boolean('Overflow ellipsis', false)}
      tint={select('Tint', TINTS, 'darkest')}
      marginTop={4}
    >
      <strong>Text body</strong> / font-size: 14px / line-height: 21px / weight: regular (400) / tracking: 0
    </TextBody>
    <TextBodyCompact
      color={select('Color', COLORS, 'teal')}
      ellipsis={boolean('Overflow ellipsis', false)}
      tint={select('Tint', TINTS, 'darkest')}
      marginTop={4}
    >
      <strong>Text body compact</strong> / font-size: 14px / line-height: 18px / weight: regular (400) / tracking: 0
    </TextBodyCompact>
    <TextSmall
      color={select('Color', COLORS, 'teal')}
      ellipsis={boolean('Overflow ellipsis', false)}
      tint={select('Tint', TINTS, 'darkest')}
      marginTop={4}
    >
      <strong>Text small</strong> / font-size: 12px / line-height: 18px / weight: regular (400) / tracking: 0
    </TextSmall>
  </Box>
);

export const UIText = () => (
  <Box overflow="hidden">
    <UITextDisplay
      color={select('Color', COLORS, 'teal')}
      ellipsis={boolean('Overflow ellipsis', false)}
      tint={select('Tint', TINTS, 'darkest')}
    >
      <strong>UI Text display</strong> / font-size: 16px / line-height: 24px / weight: medium (500) / tracking: 0
    </UITextDisplay>
    <UITextBody
      color={select('Color', COLORS, 'teal')}
      ellipsis={boolean('Overflow ellipsis', false)}
      tint={select('Tint', TINTS, 'darkest')}
      marginTop={4}
    >
      <strong>UI Text body</strong> / font-size: 14px / line-height: 18px / weight: medium (500) / tracking: 0
    </UITextBody>
    <UITextSmall
      color={select('Color', COLORS, 'teal')}
      ellipsis={boolean('Overflow ellipsis', false)}
      tint={select('Tint', TINTS, 'darkest')}
      marginTop={4}
    >
      <strong>UIText small</strong> / font-size: 12px / line-height: 18px / weight: medium (500) / tracking: 0
    </UITextSmall>
  </Box>
);

export const monospaced = () => (
  <Box padding={5}>
    <Heading1
      color={select('Color', COLORS, 'teal')}
      ellipsis={boolean('Overflow ellipsis', false)}
      tint={select('Tint', TINTS, 'darkest')}
    >
      <Monospaced>1234567890</Monospaced>
    </Heading1>
    <Heading2
      color={select('Color', COLORS, 'teal')}
      ellipsis={boolean('Overflow ellipsis', false)}
      tint={select('Tint', TINTS, 'darkest')}
      marginTop={2}
    >
      <Monospaced>1234567890</Monospaced>
    </Heading2>
    <Heading3
      color={select('Color', COLORS, 'teal')}
      ellipsis={boolean('Overflow ellipsis', false)}
      tint={select('Tint', TINTS, 'darkest')}
      marginTop={2}
    >
      <Monospaced>1234567890</Monospaced>
    </Heading3>
    <Heading4
      color={select('Color', COLORS, 'teal')}
      ellipsis={boolean('Overflow ellipsis', false)}
      tint={select('Tint', TINTS, 'darkest')}
      marginTop={2}
    >
      <Monospaced>1234567890</Monospaced>
    </Heading4>
    <Heading5
      color={select('Color', COLORS, 'teal')}
      ellipsis={boolean('Overflow ellipsis', false)}
      tint={select('Tint', TINTS, 'darkest')}
      marginTop={2}
    >
      <Monospaced>1234567890</Monospaced>
    </Heading5>
    <TextDisplay
      color={select('Color', COLORS, 'teal')}
      ellipsis={boolean('Overflow ellipsis', false)}
      tint={select('Tint', TINTS, 'darkest')}
      marginTop={6}
    >
      <Monospaced>1234567890</Monospaced>
    </TextDisplay>
    <TextBody
      color={select('Color', COLORS, 'teal')}
      ellipsis={boolean('Overflow ellipsis', false)}
      tint={select('Tint', TINTS, 'darkest')}
      marginTop={2}
    >
      <Monospaced>1234567890</Monospaced>
    </TextBody>
    <TextSmall
      color={select('Color', COLORS, 'teal')}
      ellipsis={boolean('Overflow ellipsis', false)}
      tint={select('Tint', TINTS, 'darkest')}
      marginTop={2}
    >
      <Monospaced>1234567890</Monospaced>
    </TextSmall>
  </Box>
);

export const marked = () => (
  <Heading3 color={select('Color', COLORS, 'teal')} tint={select('Tint', TINTS, 'darkest')}>
    We can use our <Marker>Marker component</Marker> to highlight some keywords
  </Heading3>
);

marked.story = {
  parameters: {
    info: {
      propTables: [Marker],
    },
  },
};
