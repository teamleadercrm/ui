import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Bullet from './Bullet';

export default {
  component: Bullet,
  title: 'Low level blocks / Bullet',
} as ComponentMeta<typeof Bullet>;

export const basic: ComponentStory<typeof Bullet> = (args) => <Bullet {...args} />;
