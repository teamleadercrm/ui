import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs/react';
import { IconClockSmallOutline, IconTrashSmallOutline } from '@teamleader/ui-icons';
import { Avatar, IconMenu, Menu, MenuItem, MenuDivider, MenuTitle } from '../src';
import avatars from './static/data/avatar';

const avatar = <Avatar image={avatars[0].image} size="tiny" shape="circle" />;
const positions = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

storiesOf('Menus', module)
  .add('Menu', () => (
    <Menu selectable={boolean('selectable', false)} selected="bar">
      <MenuItem value="foo" caption="Foo caption" />
      <MenuItem value="bar" caption="Bar caption" />
      <MenuItem caption="Disabled ..." disabled />
      <MenuDivider />
      <MenuItem caption="Caption & avatar" icon={avatar} />
      <MenuDivider />
      <MenuTitle>Group title</MenuTitle>
      <MenuItem caption="Caption & icon" icon={<IconClockSmallOutline />} />
      <MenuItem caption="Destructive" icon={<IconTrashSmallOutline />} destructive />
      <MenuItem caption="Destructive & disabled" icon={<IconTrashSmallOutline />} destructive disabled />
    </Menu>
  ))
  .add('IconMenu', () => (
    <IconMenu active position={select('position', positions, 'top-left')}>
      <MenuItem caption="Menu item 1" />
      <MenuItem caption="Menu item 2" />
      <MenuDivider />
      <MenuItem caption="Disabled menu item..." disabled />
    </IconMenu>
  ));
