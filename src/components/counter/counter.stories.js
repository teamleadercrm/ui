import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { number, select } from '@storybook/addon-knobs/react';
import { Counter, Tooltip, TextBody } from '../../index';

const colors = ['neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby'];
const sizes = ['small', 'medium'];

const TooltippedCounter = Tooltip(Counter);

export default {
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Counter'),
};

export const basic = () => (
  <Counter
    count={number('Count', 99)}
    color={select('Color', colors, 'neutral')}
    size={select('Size', sizes, 'medium')}
    maxCount={number('Maximum count', 100)}
  />
);

export const withExtraText = () => (
  <Counter
    count={number('Count', 99)}
    color={select('Color', colors, 'neutral')}
    size={select('Size', sizes, 'medium')}
    maxCount={number('Maximum count', 100)}
  >
    Tasks
  </Counter>
);

withExtraText.story = {
  name: 'With extra text',
};

export const withTooltip = () => (
  <TooltippedCounter
    count={number('Count', 99)}
    color={select('Color', colors, 'neutral')}
    size={select('Size', sizes, 'medium')}
    maxCount={number('Maximum count', 100)}
    tooltip={<TextBody>I am the tooltip</TextBody>}
  >
    tasks
  </TooltippedCounter>
);

withTooltip.story = {
  name: 'With tooltip',
};
