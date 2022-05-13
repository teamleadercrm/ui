import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import LoadingBar, { LoadingBarProps } from './LoadingBar';

export default {
  component: LoadingBar,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'LoadingBar'),
} as ComponentMeta<typeof LoadingBar>;

export const basic = (args: LoadingBarProps) => <LoadingBar {...args} />;
