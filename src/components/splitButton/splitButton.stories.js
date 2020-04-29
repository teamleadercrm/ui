import React from 'react';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { select, boolean } from '@storybook/addon-knobs/react';
import SplitButton from './SplitButton';
import MenuDivider from '../menu/MenuDivider';
import MenuItem from '../menu/MenuItem';

const levels = ['primary', 'secondary', 'destructive'];
const sizes = ['small', 'medium', 'large'];

const handleButtonClick = () => {
  console.log('clicked main button');
};

const handleMenuItemClick = () => {
  console.log('clicked menu item');
};

export default {
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'Split button'),
};

export const basic = () => (
  <SplitButton
    level={select('Level', levels, 'primary')}
    onButtonClick={handleButtonClick}
    size={select('Size', sizes, 'medium')}
    disabled={boolean('Disabled', false)}
  >
    <MenuItem onClick={handleMenuItemClick} label="Main action" />
    <MenuItem onClick={handleMenuItemClick} label="Via file upload" caption="(.CVS, . XLS & .XLSX)" />
    <MenuDivider />
    <MenuItem onClick={handleMenuItemClick} label="Via Marketplace integrations" />
  </SplitButton>
);
