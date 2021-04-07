import React from 'react';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';
import SplitButton from './SplitButton';
import MenuDivider from '../menu/MenuDivider';
import MenuItem from '../menu/MenuItem';

const handleButtonClick = () => {
  console.log('clicked main button');
};

const handleMenuItemClick = () => {
  console.log('clicked menu item');
};

export default {
  component: SplitButton,
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'Split button'),
};

export const DefaultStory = (args) => (
  <SplitButton {...args} onButtonClick={handleButtonClick}>
    <MenuItem onClick={handleMenuItemClick} label="Main action" />
    <MenuItem onClick={handleMenuItemClick} label="Via file upload" caption="(.CVS, . XLS & .XLSX)" />
    <MenuDivider />
    <MenuItem onClick={handleMenuItemClick} label="Via Marketplace integrations" />
  </SplitButton>
);
