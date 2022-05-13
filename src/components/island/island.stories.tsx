import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { Island, TextBody } from '../../index';

export default {
  component: Island,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Island'),
} as ComponentMeta<typeof Island>;

export const DefaultStory: ComponentStory<typeof Island> = (args) => (
  <Island {...args}>
    <TextBody>I am an island.</TextBody>
  </Island>
);
