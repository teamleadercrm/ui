import React from 'react';
import { IconMenu, MenuItem, MenuDivider } from '../../index';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import theme from './storyTheme.css';

export default {
  component: IconMenu,
  title: 'Mid level blocks / IconMenu',
} as ComponentMeta<typeof IconMenu>;

export const DefaultStory = (args: ComponentStory<typeof IconMenu>) => (
  <div className={theme['story-container']}>
    <IconMenu {...args}>
      <MenuItem label="Menu item 1" />
      <MenuItem label="Menu item 2" />
      <MenuDivider />
      <MenuItem label="Disabled menu item..." disabled />
    </IconMenu>
  </div>
);
