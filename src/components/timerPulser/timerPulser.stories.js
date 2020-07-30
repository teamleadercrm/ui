import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import TimerPulser from './TimerPulser';

export default {
  component: TimerPulser,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'TimerPulser'),
};

export const Basic = (args) => <TimerPulser {...args} />;
