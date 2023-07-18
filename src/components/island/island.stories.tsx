import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Island, TextBody } from '../../index';

export default {
  component: Island,
  title: 'Low level blocks / Island',
} as ComponentMeta<typeof Island>;

export const DefaultStory: ComponentStory<typeof Island> = (args) => (
  <Island {...args}>
    <TextBody>I am an island.</TextBody>
  </Island>
);
