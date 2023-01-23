import React from 'react';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';
import SplitButton from './SplitButton';
import MenuDivider from '../menu/MenuDivider';
import MenuItem from '../menu/MenuItem';
import { ComponentMeta, ComponentStory } from '@storybook/react';

const handleButtonClick = () => {
  console.log('clicked main button');
};

const handleMenuItemClick = () => {
  console.log('clicked menu item');
};

export default {
  component: SplitButton,
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'Split button'),
} as ComponentMeta<typeof SplitButton>;

export const DefaultStory: ComponentStory<typeof SplitButton> = (args) => (
  <SplitButton {...args} onButtonClick={handleButtonClick}>
    <MenuItem onClick={handleMenuItemClick} label="Main action" />
    <MenuItem onClick={handleMenuItemClick} label="Via file upload" caption="(.CVS, . XLS &amp; .XLSX)" />
    <MenuDivider />
    <MenuItem onClick={handleMenuItemClick} label="Via Marketplace integrations" />
  </SplitButton>
);

export const WithPopoverOverrides: ComponentStory<typeof SplitButton> = (args) => (
  <SplitButton {...args} popoverProps={{ direction: 'north' }} onButtonClick={handleButtonClick}>
    <MenuItem onClick={handleMenuItemClick} label="Main action" />
    <MenuItem onClick={handleMenuItemClick} label="I appear above the button" />
  </SplitButton>
);

export const WithoutExtraMenuItems: ComponentStory<typeof SplitButton> = (args) => (
  <SplitButton {...args} popoverProps={{ direction: 'north' }} onButtonClick={handleButtonClick}>
    <MenuItem onClick={handleMenuItemClick} label="Main action" />
  </SplitButton>
);
