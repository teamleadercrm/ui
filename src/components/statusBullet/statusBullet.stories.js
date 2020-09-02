import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { StatusBullet, TextBody } from '../../index';

export default {
  component: StatusBullet,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Status Bullet'),
};

export const Basic = (args) => (
  <StatusBullet {...args}>
    <TextBody>label</TextBody>
  </StatusBullet>
);
