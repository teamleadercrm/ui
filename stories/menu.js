import React from 'react';
import { storiesOf } from '@storybook/react';
import { IconAddSmallOutline, IconUserSmallFilled, IconClockSmallOutline } from '@teamleader/ui-icons';
import { Box, IconMenu, Menu, MenuItem, MenuDivider } from '../src';

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
    <Box display="flex" justifyContent="center">
      <IconMenu>
        <MenuItem value="foo" caption="Caption" />
        <MenuItem value="bar" caption="Caption & Shortcut" shortcut="Ctrl + P" />
        <MenuItem caption="Disabled ..." disabled shortcut="Ctrl + P" />
      </IconMenu>
    </Box>
  ));
