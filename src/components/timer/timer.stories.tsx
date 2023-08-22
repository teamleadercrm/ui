import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Timer from './Timer';

export default {
  component: Timer,
  title: 'Low level blocks / Timer',
} as ComponentMeta<typeof Timer>;

export const Basic: ComponentStory<typeof Timer> = (args) => <Timer {...args}>01:26</Timer>;
