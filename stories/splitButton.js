import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/react';
import { SplitButtonMenu, MenuItem } from '../src';

const handleButtonClick = () => {
  console.log('clicked main button');
};

const handleMenuItemClick = () => {
  console.log('clicked menu item');
};

storiesOf('Split button menu', module).add('Basic', () => (
  <SplitButtonMenu
    onButtonClick={handleButtonClick}
    triggerListAction={boolean('Fire action on menu item click', true)}
  >
    <MenuItem onMenuItemClick={handleMenuItemClick} caption="Primary action" level="primary" value="primary" />
    <MenuItem onMenuItemClick={handleMenuItemClick} caption="Secondary action" level="secondary" value="secondary" />
    <MenuItem onMenuItemClick={handleMenuItemClick} caption="Timer action" level="timer" value="timer" />
  </SplitButtonMenu>
));
