import React from 'react';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { IconClockSmallOutline, IconTrashSmallOutline } from '@teamleader/ui-icons';
import { Avatar, Menu, MenuItem, MenuDivider, MenuTitle, TextBody } from '../../index';
import avatars from '../../static/data/avatar';
import { ComponentStory } from '@storybook/react';

const avatar = <Avatar imageUrl={avatars[0].image} size="tiny" shape="circle" />;

export default {
  component: Menu,
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'Menu'),
};

export const DefaultStory = (args: ComponentStory<typeof Menu>) => (
  <Menu {...args}>
    <MenuItem value="foo" label="Foo label" caption="This is foo's caption" />
    <MenuItem value="bar" label="Bar label" caption="Caption of bar" />
    <MenuItem value="withChildren" caption="Caption of with children prop">
      <TextBody color="teal">With children prop</TextBody>
    </MenuItem>
    <MenuItem label="Disabled ..." disabled />
    <MenuDivider />
    <MenuItem label="Label & avatar" icon={avatar} />
    <MenuDivider />
    <MenuTitle>Group title</MenuTitle>
    <MenuItem label="Label & icon" icon={<IconClockSmallOutline />} onClick={() => console.log('You clicked me!')} />
    <MenuItem label="Destructive" icon={<IconTrashSmallOutline />} destructive />
    <MenuItem label="Destructive & disabled" icon={<IconTrashSmallOutline />} destructive disabled />
  </Menu>
);

DefaultStory.args = {
  selectable: true,
  selected: 'bar',
};
