import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import LoadingBar from './LoadingBar';

export default {
  component: LoadingBar,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'LoadingBar'),
};

export const basic = (args) => <LoadingBar {...args} />;
