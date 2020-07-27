import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { select } from '@storybook/addon-knobs';
import {
  Box,
  Bullet,
  Tooltip,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  TextBody,
  TextDisplay,
  TextSmall,
  COLORS,
  TINTS,
} from '../../index';

const colors = ['neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby'];
const sizes = ['small', 'medium', 'large'];

const TooltippedBullet = Tooltip(Bullet);

export default {
  component: Bullet,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Bullet'),

  parameters: {
    info: {
      propTablesExclude: [Box, Heading1, Heading2, Heading3, Heading4, TextBody, TextDisplay, TextSmall],
    },
  },
};

export const basic = () => (
  <Bullet
    borderColor={select('Border color', COLORS, 'neutral')}
    borderTint={select('Border tint', TINTS, 'lightest')}
    color={select('Color', colors, 'neutral')}
    size={select('Size', sizes, 'medium')}
  />
);

export const withTooltip = () => (
  <TooltippedBullet
    color={select('Color', colors, 'ruby')}
    size={select('Size', sizes, 'medium')}
    tooltip={<TextBody>I am the tooltip</TextBody>}
  />
);

withTooltip.story = {
  name: 'With tooltip',
};

export const inlineWithText = () => (
  <Box>
    <Heading1>
      <Bullet color={select('Color', colors, 'aqua')} size="medium" />
      I'm an Header 1 with a subtle status
    </Heading1>
    <Heading2 marginTop={4}>
      <Bullet color={select('Color', colors, 'aqua')} size="medium" />
      I'm an Header 2 with a subtle status
    </Heading2>
    <Heading3 marginTop={4}>
      <Bullet color={select('Color', colors, 'aqua')} size="small" />
      I'm an Header 3 with a subtle status
    </Heading3>
    <Heading4 marginTop={4}>
      <Bullet color={select('Color', colors, 'aqua')} size="small" />
      I'm an Header 4 with a subtle status
    </Heading4>
    <TextDisplay marginTop={4}>
      <Bullet color={select('Color', colors, 'aqua')} size="small" />
      I'm an text display with a subtle status
    </TextDisplay>
    <TextBody marginTop={4}>
      <Bullet color={select('Color', colors, 'aqua')} size="small" />
      I'm an text body with a subtle status
    </TextBody>
    <TextSmall marginTop={4}>
      <Bullet color={select('Color', colors, 'aqua')} size="small" />
      I'm an text small with a subtle status
    </TextSmall>
  </Box>
);

inlineWithText.story = {
  name: 'Inline with text',
};
