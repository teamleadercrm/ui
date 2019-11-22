import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs/react';
import { IconClockSmallOutline, IconTrashSmallOutline } from '@teamleader/ui-icons';
import { Avatar, IconMenu, Menu, MenuItem, MenuDivider, MenuTitle } from '../src';
import avatars from './static/data/avatar';

const avatar = <Avatar imageUrl={avatars[0].image} size="tiny" shape="circle" />;
const positions = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

storiesOf('Menus', module)
  .add('Menu with buttons', () => (
    <Menu selectable={boolean('Selectable', false)} selected="bar">
      <MenuItem value="foo" label="Foo label" caption="This is foo's caption" />
      <MenuItem value="bar" label="Bar label" caption="Caption of bar" />
      <MenuItem label="Disabled ..." disabled />
      <MenuDivider />
      <MenuItem label="Label & avatar" icon={avatar} />
      <MenuDivider />
      <MenuTitle>Group title</MenuTitle>
      <MenuItem label="Label & icon" icon={<IconClockSmallOutline />} onClick={() => console.log('You clicked me!')} />
      <MenuItem label="Destructive" icon={<IconTrashSmallOutline />} destructive />
      <MenuItem label="Destructive & disabled" icon={<IconTrashSmallOutline />} destructive disabled />
    </Menu>
  ))
  .add('Menu with anchors', () => (
    <Menu selectable={boolean('Selectable', false)} selected="bar">
      <MenuItem
        element="a"
        href="https://teamleader.eu"
        target="_blank"
        value="foo"
        label="Foo label"
        caption="This is foo's caption"
      />
      <MenuItem
        element="a"
        href="https://teamleader.eu"
        target="_blank"
        value="bar"
        label="Bar label"
        caption="Caption of bar"
      />
      <MenuItem element="a" href="https://teamleader.eu" target="_blank" label="Disabled ..." disabled />
      <MenuDivider />
      <MenuItem element="a" href="https://teamleader.eu" target="_blank" label="Label & avatar" icon={avatar} />
      <MenuDivider />
      <MenuTitle>Group title</MenuTitle>
      <MenuItem
        element="a"
        href="https://teamleader.eu"
        target="_blank"
        label="Label & icon"
        icon={<IconClockSmallOutline />}
        onClick={() => console.log('You clicked me!')}
      />
      <MenuItem
        element="a"
        href="https://teamleader.eu"
        target="_blank"
        label="Destructive"
        icon={<IconTrashSmallOutline />}
        destructive
      />
      <MenuItem
        element="a"
        href="https://teamleader.eu"
        target="_blank"
        label="Destructive & disabled"
        icon={<IconTrashSmallOutline />}
        destructive
        disabled
      />
    </Menu>
  ))
  .add('IconMenu', () => (
    <IconMenu active position={select('Position', positions, 'top-left')}>
      <MenuItem label="Menu item 1" />
      <MenuItem label="Menu item 2" />
      <MenuDivider />
      <MenuItem label="Disabled menu item..." disabled />
    </IconMenu>
  ));
