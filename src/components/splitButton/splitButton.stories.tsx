import React from 'react';
import SplitButton from './SplitButton';
import MenuDivider from '../menu/MenuDivider';
import MenuItem from '../menu/MenuItem';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Tooltip from '../tooltip';
import Box from '../box';
import { TextBody } from '../typography';

const handleButtonClick = () => {
  console.log('clicked main button');
};

const handleMenuItemClick = () => {
  console.log('clicked menu item');
};

export default {
  component: SplitButton,
  title: 'Mid level blocks / Split button',
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

const TooltippedBox = Tooltip(Box);

export const WithTooltip: ComponentStory<typeof SplitButton> = (args) => (
  <SplitButton {...args} onButtonClick={handleButtonClick}>
    <MenuItem onClick={handleMenuItemClick} label="Main action" />
    <TooltippedBox tooltip={<TextBody>I am disabled</TextBody>}>
      <MenuItem onClick={handleMenuItemClick} label="Disabled action" disabled />
    </TooltippedBox>
  </SplitButton>
);
