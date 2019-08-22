import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs/react';
import { SplitButton, MenuItem } from '../src';

const levels = ['primary', 'secondary', 'destructive'];
const sizes = ['small', 'medium', 'large'];

const handleButtonClick = () => {
  console.log('clicked main button');
};

const handleMenuItemClick = () => {
  console.log('clicked menu item');
};

storiesOf('Split button', module).add('Basic', () => (
  <SplitButton
    level={select('Level', levels, 'primary')}
    onButtonClick={handleButtonClick}
    size={select('Size', sizes, 'medium')}
  >
    <MenuItem onClick={handleMenuItemClick} caption="Main action" />
    <MenuItem onClick={handleMenuItemClick} caption="Action 1" />
    <MenuItem onClick={handleMenuItemClick} caption="Action 2" />
  </SplitButton>
));
