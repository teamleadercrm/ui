import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import LoadingSpinner from './LoadingSpinner';

export default {
  component: LoadingSpinner,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Loading spinner'),
};

export const DefaultStory = (args) => <LoadingSpinner {...args} />;
