import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import Bullet from './Bullet';

export default {
  component: Bullet,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Bullet'),
};

export const basic = (args) => <Bullet {...args} />;
