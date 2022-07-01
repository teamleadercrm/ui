import React from 'react';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { IconMenu, MenuItem, MenuDivider } from '../../index';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  component: IconMenu,
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'IconMenu'),
} as ComponentMeta<typeof IconMenu>;

export const DefaultStory = (args: ComponentStory<typeof IconMenu>) => (
  <IconMenu {...args} active>
    <MenuItem label="Menu item 1" />
    <MenuItem label="Menu item 2" />
    <MenuDivider />
    <MenuItem label="Disabled menu item..." disabled />
  </IconMenu>
);
