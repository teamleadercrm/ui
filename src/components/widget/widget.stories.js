import React from 'react';
import { addStoryInGroup, COMPOSITIONS } from '../../../.storybook/utils';
import { select } from '@storybook/addon-knobs';
import {
  Box,
  ButtonGroup,
  DatePicker,
  Heading3,
  Heading5,
  IconButton,
  IconMenu,
  MenuItem,
  TextBody,
  Widget,
  MenuDivider,
} from '../../index';
import { IconAddMediumOutline, IconEditMediumOutline } from '@teamleader/ui-icons';
import { basic as DataGrid } from '../datagrid/datagrid.stories';
import { basic as EmptyState, withTitle as EmptyStateWithTitle } from '../emptyState/emptyState.stories';

const colors = ['mint', 'violet', 'ruby', 'gold', 'aqua', 'white', 'neutral'];
const sizes = ['small', 'medium', 'large'];

export default {
  title: addStoryInGroup(COMPOSITIONS, 'Widget'),
};

export const basic = () => (
  <Widget size={select('Size', sizes, 'medium')}>
    <Widget.Body>
      <EmptyState />
    </Widget.Body>
  </Widget>
);

export const withHeader = () => (
  <Widget size={select('Size', sizes, 'medium')}>
    <Widget.Header color={select('Header color', colors, 'white')}>
      <Heading3>I am the widget header title</Heading3>
    </Widget.Header>
    <Widget.Body>
      <EmptyState />
    </Widget.Body>
  </Widget>
);

withHeader.story = {
  name: 'With header',
};

export const withHeaderAndAction = () => (
  <Widget size={select('Size', sizes, 'medium')}>
    <Widget.Header color={select('Header color', colors, 'white')} display="flex" alignItems="center">
      <Box flex={1}>
        <Heading3>I am the widget header title</Heading3>
      </Box>
      <Box>
        <IconButton icon={<IconAddMediumOutline />} />
      </Box>
    </Widget.Header>
    <Widget.Body>
      <EmptyStateWithTitle />
    </Widget.Body>
  </Widget>
);

withHeaderAndAction.story = {
  name: 'With header and action',
};

export const withHeaderAndMulipleActions = () => (
  <Widget size={select('Size', sizes, 'medium')}>
    <Widget.Header
      color={select('header color', colors, 'white')}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
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

withHeaderAndMulipleActions.story = {
  name: 'With header and muliple actions',
};

export const withFooter = () => (
  <Widget size={select('Size', sizes, 'medium')}>
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

withFooter.story = {
  name: 'With footer',
};

export const fullWidget = () => (
  <Widget size={select('Size', sizes, 'medium')}>
    <Widget.Header color={select('Header color', colors, 'white')}>
      <Heading3>I am the widget header title</Heading3>
    </Widget.Header>
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

fullWidget.story = {
  name: 'Full widget',
};

export const fullWidget2Cols = () => (
  <Widget size={select('Size', sizes, 'medium')}>
    <Widget.Header color={select('Header color', colors, 'white')}>
      <Heading3>I am the widget header title</Heading3>
    </Widget.Header>
    <Widget.Body display="flex">
      <Box flex={1}>
        <Heading5>Column 1 header</Heading5>
        <TextBody>Here you can add arbitrary content.</TextBody>
      </Box>
      <Box flex={1}>
        <Heading5>Column 2 header</Heading5>
        <TextBody>Here you can add arbitrary content.</TextBody>
      </Box>
    </Widget.Body>
    <Widget.Footer>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <TextBody>I am the widget footer</TextBody>
      </Box>
    </Widget.Footer>
  </Widget>
);

fullWidget2Cols.story = {
  name: 'Full widget 2 cols',
};

export const withDatePicker = () => (
  <Widget size={select('Size', sizes, 'medium')}>
    <Widget.Header color={select('Header color', colors, 'white')}>
      <Heading3>I am the widget header title</Heading3>
    </Widget.Header>
    <Widget.Body padding={0}>
      <DatePicker
        locale="nl-BE"
        numberOfMonths={12}
        onChange={() => console.log('Date changed')}
        selectedDate={new Date()}
      />
    </Widget.Body>
  </Widget>
);

withDatePicker.story = {
  name: 'With DatePicker',
};

export const withDataGridOnly = () => (
  <Widget size={select('Size', sizes, 'medium')}>
    <Widget.Body padding={0}>
      <DataGrid />
    </Widget.Body>
  </Widget>
);

withDataGridOnly.story = {
  name: 'With DataGrid only',
};

export const withDataGrid = () => (
  <Widget size={select('Size', sizes, 'medium')}>
    <Widget.Header color={select('Header color', colors, 'white')}>
      <Heading3>I am the widget header title</Heading3>
    </Widget.Header>
    <Widget.Body padding={0}>
      <DataGrid />
    </Widget.Body>
    <Widget.Footer>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <TextBody>I am the widget footer</TextBody>
      </Box>
    </Widget.Footer>
  </Widget>
);

withDataGrid.story = {
  name: 'With DataGrid',
};
