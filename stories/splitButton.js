import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs/react';
import { SplitButtonMenu, MenuItem } from '../src';

const levels = ['primary', 'secondary', 'destructive'];
const sizes = ['small', 'medium', 'large'];

const handleButtonClick = () => {
  console.log('clicked main button');
};

const handleMenuItemClick = () => {
  console.log('clicked menu item');
};

storiesOf('Split button menu', module).add('Basic', () => (
  <SplitButtonMenu
    level={select('Level', levels, 'primary')}
    onButtonClick={handleButtonClick}
    size={select('Size', sizes, 'medium')}
    triggerListAction={boolean('Fire action on menu item click', true)}
    width={text('width', '100')}
  >
    <MenuItem onMenuItemClick={handleMenuItemClick} caption="Main action" />
    <MenuItem onMenuItemClick={handleMenuItemClick} caption="Action 1" />
    <MenuItem onMenuItemClick={handleMenuItemClick} caption="Action 2" />
  </SplitButtonMenu>
));
