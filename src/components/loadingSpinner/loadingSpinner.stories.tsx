import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import LoadingSpinner, { LoadingSpinnerProps } from './LoadingSpinner';

export default {
  component: LoadingSpinner,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Loading spinner'),
} as ComponentMeta<typeof LoadingSpinner>;

export const DefaultStory = (args: LoadingSpinnerProps) => <LoadingSpinner {...args} />;
