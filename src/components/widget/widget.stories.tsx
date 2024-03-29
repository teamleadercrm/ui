import React from 'react';
import { Box, ButtonGroup, Heading3, IconButton, IconMenu, MenuItem, TextBody, Widget, MenuDivider } from '../../index';
import { IconAddMediumOutline, IconEditMediumOutline } from '@teamleader/ui-icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  component: Widget,
  title: 'Compositions / Widget',
} as ComponentMeta<typeof Widget>;

export const FullWidget: ComponentStory<typeof Widget> = (args) => (
  <Widget {...args}>
    <Widget.Header display="flex" alignItems="center" justifyContent="space-between">
      <Heading3>I am the widget header title</Heading3>
      <ButtonGroup>
        <IconButton icon={<IconEditMediumOutline />} />
        <IconButton icon={<IconAddMediumOutline />} />
        <IconMenu active position="top-right">
          <MenuItem label="Menu item 1" />
          <MenuItem label="Menu item 2" />
          <MenuDivider />
          <MenuItem label="Disabled menu item..." disabled />
        </IconMenu>
      </ButtonGroup>
    </Widget.Header>
    <Widget.Body>
      <TextBody>Here you can add arbitrary content.</TextBody>
    </Widget.Body>
  </Widget>
);

export const Basic: ComponentStory<typeof Widget> = () => (
  <Widget>
    <Widget.Body>
      <TextBody>Here you can add arbitrary content.</TextBody>
    </Widget.Body>
  </Widget>
);

export const WithMultipleBody: ComponentStory<typeof Widget> = () => (
  <Widget>
    <Widget.Body>
      <TextBody>Here you can add arbitrary content.</TextBody>
    </Widget.Body>
    <Widget.Body>
      <TextBody>Here you can add arbitrary content.</TextBody>
    </Widget.Body>
  </Widget>
);

export const WithHeader: ComponentStory<typeof Widget> = () => (
  <Widget>
    <Widget.Header>
      <Heading3>I am the widget header title</Heading3>
    </Widget.Header>
    <Widget.Body>
      <TextBody>Here you can add arbitrary content.</TextBody>
    </Widget.Body>
  </Widget>
);

export const WithHeaderAndAction: ComponentStory<typeof Widget> = () => (
  <Widget>
    <Widget.Header display="flex" alignItems="center">
      <Box flex={1}>
        <Heading3>I am the widget header title</Heading3>
      </Box>
      <Box>
        <IconButton icon={<IconAddMediumOutline />} />
      </Box>
    </Widget.Header>
    <Widget.Body>
      <TextBody>Here you can add arbitrary content.</TextBody>
    </Widget.Body>
  </Widget>
);

export const WithFooter: ComponentStory<typeof Widget> = () => (
  <Widget>
    <Widget.Body>
      <TextBody>Here you can add arbitrary content.</TextBody>
    </Widget.Body>
    <Widget.Footer>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <TextBody>I am the widget footer</TextBody>
      </Box>
    </Widget.Footer>
  </Widget>
);
