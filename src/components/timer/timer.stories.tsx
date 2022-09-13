import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import Timer from './Timer';

export default {
  component: Timer,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Timer'),
} as ComponentMeta<typeof Timer>;

export const Basic: ComponentStory<typeof Timer> = (args) => <Timer {...args}>01:26</Timer>;
