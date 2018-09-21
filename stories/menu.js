import React from 'react';
import { storiesOf } from '@storybook/react';
import { IconAddSmallOutline, IconUserSmallFilled, IconClockSmallOutline } from '@teamleader/ui-icons';
import { IconMenu, Menu, MenuItem, MenuDivider } from '../components';

storiesOf('Menus', module)
  .add('Menu', () => (
    <Menu selectable={false}>
      <MenuItem value="foo" caption="Caption" />
      <MenuItem value="bar" caption="Caption & Shortcut" shortcut="Ctrl + P" />
      <MenuItem caption="Disabled ..." disabled shortcut="Ctrl + P" />
      <MenuDivider />
      <MenuItem caption="Caption & Icon" icon={<IconAddSmallOutline />} />
      <MenuItem caption="Caption, Icon & Shortcut" icon={<IconUserSmallFilled />} shortcut="Ctrl + P" />
      <MenuItem caption="Disabled ..." icon={<IconClockSmallOutline />} shortcut="Ctrl + P" disabled />
    </Menu>
  ))
  .add('IconMenu', () => (
    <IconMenu position="top-left">
      <MenuItem value="foo" caption="Caption" />
      <MenuItem value="bar" caption="Caption & Shortcut" shortcut="Ctrl + P" />
      <MenuItem caption="Disabled ..." disabled shortcut="Ctrl + P" />
    </IconMenu>
  ));
