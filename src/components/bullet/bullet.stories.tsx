import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import Bullet from './Bullet';

export default {
  component: Bullet,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Bullet'),
} as ComponentMeta<typeof Bullet>;

export const basic: ComponentStory<typeof Bullet> = (args) => <Bullet {...args} />;
