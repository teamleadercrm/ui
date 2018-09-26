import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs/react';
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
} from '../components';

const colors = ['neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby'];
const sizes = ['small', 'medium'];

const TooltippedBullet = Tooltip(Bullet);

storiesOf('Bullets', module)
  .addParameters({
    info: {
      propTablesExclude: [Box, Heading1, Heading2, Heading3, Heading4, TextBody, TextDisplay, TextSmall],
    },
  })
  .add('Basic', () => <Bullet color={select('Color', colors, 'neutral')} size={select('Size', sizes, 'medium')} />)
  .add('With tooltip', () => (
    <TooltippedBullet
      color={select('Color', colors, 'ruby')}
      size={select('Size', sizes, 'medium')}
      tooltip={<TextBody>I am the tooltip</TextBody>}
    />
  ))
  .add('Inline with text', () => (
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
  ));
