import React from 'react';
import PropTable from "./components/propTable";
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { IconAddSmallOutline, IconUserSmallFilled, IconClockSmallOutline } from '@teamleader/ui-icons';
import { IconMenu, Menu, MenuItem, MenuDivider } from '../components';

storiesOf('Menus', module)
  .addDecorator((story, context) => withInfo({TableComponent: PropTable})(story)(context))
  .addDecorator(checkA11y)
  .add('Menu', () => (
    <Menu selectable={false}>
      <MenuItem value="foo" caption="Caption" />
      <MenuItem value="bar" caption="Caption & Shortcut" shortcut="Ctrl + P" />
      <MenuItem caption="Disabled ..." disabled shortcut="Ctrl + P" />
      <MenuDivider />
      <MenuItem caption="Caption & Icon" icon={<IconAddSmallOutline/>} />
      <MenuItem caption="Caption, Icon & Shortcut" icon={<IconUserSmallFilled/>} shortcut="Ctrl + P" />
      <MenuItem caption="Disabled ..." icon={<IconClockSmallOutline/>} shortcut="Ctrl + P" disabled />
    </Menu>
  ))
  .add('IconMenu', () => (
    <IconMenu position="top-left">
      <MenuItem value="foo" caption="Caption" />
      <MenuItem value="bar" caption="Caption & Shortcut" shortcut="Ctrl + P" />
      <MenuItem caption="Disabled ..." disabled shortcut="Ctrl + P" />
    </IconMenu>
  ));
