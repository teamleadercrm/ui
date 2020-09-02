import React from 'react';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { IconMenu, MenuItem, MenuDivider } from '../../index';

export default {
  component: IconMenu,
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'IconMenu'),
};

export const DefaultStory = (args) => (
  <IconMenu {...args} active>
    <MenuItem label="Menu item 1" />
    <MenuItem label="Menu item 2" />
    <MenuDivider />
    <MenuItem label="Disabled menu item..." disabled />
  </IconMenu>
);
