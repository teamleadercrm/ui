import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { Island, TextBody } from '../../index';

export default {
  component: Island,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Island'),
};

export const DefaultStory = (args) => (
  <Island {...args}>
    <TextBody>I am an island.</TextBody>
  </Island>
);
