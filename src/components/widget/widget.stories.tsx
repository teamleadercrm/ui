import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { addStoryInGroup, COMPOSITIONS } from '../../../.storybook/utils';
import ButtonGroup from '../buttonGroup';
import IconButton from '../iconButton';
import { IconMenu, MenuDivider, MenuItem } from '../menu';
import { Heading3, TextBody } from '../typography';
import Widget, { WidgetProps } from './Widget';
import { IconAddMediumOutline, IconEditMediumOutline } from '@teamleader/ui-icons';
import WidgetHeader from './WidgetHeader';
import WidgetBody from './WidgetBody';
import Box from '../box';
import WidgetFooter from './WidgetFooter';

export default {
  component: Widget,
  title: addStoryInGroup(COMPOSITIONS, 'WidgetTs'),
} as ComponentMeta<typeof Widget>;

export const FullWidget = (args: WidgetProps) => (
  <Widget {...args}>
    <WidgetHeader display="flex" alignItems="center" justifyContent="space-between">
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
    </WidgetHeader>
    <WidgetBody>
      <TextBody>Here you can add arbitrary content.</TextBody>
    </WidgetBody>
  </Widget>
);

export const Basic = () => (
  <Widget>
    <WidgetBody>
      <TextBody>Here you can add arbitrary content.</TextBody>
    </WidgetBody>
  </Widget>
);

export const WithMultipleBody = () => (
  <Widget>
    <WidgetBody>
      <TextBody>Here you can add arbitrary content.</TextBody>
    </WidgetBody>
    <WidgetBody>
      <TextBody>Here you can add arbitrary content.</TextBody>
    </WidgetBody>
  </Widget>
);

export const WithHeader = () => (
  <Widget>
    <WidgetHeader>
      <Heading3>I am the widget header title</Heading3>
    </WidgetHeader>
    <WidgetBody>
      <TextBody>Here you can add arbitrary content.</TextBody>
    </WidgetBody>
  </Widget>
);

export const WithHeaderAndAction = () => (
  <Widget>
    <WidgetHeader display="flex" alignItems="center">
      <Box flex={1}>
        <Heading3>I am the widget header title</Heading3>
      </Box>
      <Box>
        <IconButton icon={<IconAddMediumOutline />} />
      </Box>
    </WidgetHeader>
    <WidgetBody>
      <TextBody>Here you can add arbitrary content.</TextBody>
    </WidgetBody>
  </Widget>
);

export const WithFooter = () => (
  <Widget>
    <WidgetBody>
      <TextBody>Here you can add arbitrary content.</TextBody>
    </WidgetBody>
    <WidgetFooter>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <TextBody>I am the widget footer</TextBody>
      </Box>
    </WidgetFooter>
  </Widget>
);
