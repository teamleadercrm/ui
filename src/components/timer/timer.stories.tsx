import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import Timer from './Timer';

export default {
  component: Timer,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Timer'),
};

export const Basic = (args) => <Timer {...args}>01:26</Timer>;
