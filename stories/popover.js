import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, boolean, number, text } from '@storybook/addon-knobs/react';
import { Store, State } from '@sambego/storybook-state';
import {
  IconChevronDownSmallOutline,
  IconCloseSmallOutline,
  IconTrashSmallOutline,
  IconClockSmallOutline,
} from '@teamleader/ui-icons';
import {
  Banner,
  Box,
  Button,
  ButtonGroup,
  Heading3,
  Heading4,
  Link,
  Menu,
  MenuItem,
  MenuDivider,
  MenuTitle,
  Popover,
  TextBody,
  TextSmall,
} from '../src';

const popoverStore = new Store({
  active: false,
});

const splitButtonStore = new Store({
  label: 'Primary action',
  level: 'primary',
});

const splitButtonChevronStore = new Store({
  level: 'primary',
});

const splitButtonMenuStore = new Store({
  selected: 'foo',
});

const colors = ['neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'teal'];
const tints = ['lightest', 'light', 'normal', 'dark', 'darkest'];
const backdrops = ['transparent', 'dark'];
const directions = ['north', 'south', 'east', 'west'];
const positions = ['start', 'center', 'end'];

const handleButtonClick = event => {
  popoverStore.set({ anchorEl: event.currentTarget, active: true });
};

const handleSplitButtonNormalMenuItemClick = () => {
  splitButtonStore.set({
    label: 'Primary action',
    level: 'primary',
  });
  splitButtonChevronStore.set({ level: 'primary' });
  splitButtonMenuStore.set({ selected: 'foo' });
  popoverStore.set({ active: false });
};

const handleSplitButtonDestructiveMenuItemClick = () => {
  splitButtonStore.set({
    label: 'Destructive action',
    level: 'destructive',
  });
  splitButtonChevronStore.set({ level: 'destructive' });
  splitButtonMenuStore.set({ selected: 'bar' });
  popoverStore.set({ active: false });
};

const handleCloseClick = () => {
  popoverStore.set({ active: false });
};

const contentBoxWithSingleTextLine = (
  <Box padding={4}>
    <TextBody>
      This is the popover content with a{' '}
      <Link href="#" inherit={false}>
        link
      </Link>{' '}
      inside
    </TextBody>
  </Box>
);

storiesOf('Popover', module)
  .addParameters({
    info: {
      propTablesExclude: [Link, TextBody, TextSmall, Button, State, Banner, Heading3, ButtonGroup, Box],
    },
  })
  .add('Basic', () => (
    <Box display="flex" justifyContent="center">
      <Button onClick={handleButtonClick} label="Open a basic Popover" />
      <State store={popoverStore}>
        <Popover
          active={false}
          backdrop={select('Backdrop', backdrops, 'transparent')}
          color={select('Color', colors, 'neutral')}
          direction={select('Direction', directions, 'south')}
          fullHeight={boolean('fullHeight', true)}
          position={select('Position', positions, 'center')}
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          tint={select('Tint', tints, 'lightest')}
          lockScroll={boolean('Lock scroll', true)}
          minWidth={text('minWidth', undefined)}
          offsetCorrection={number('Offset correction', 0)}
        >
          {contentBoxWithSingleTextLine}
        </Popover>
      </State>
    </Box>
  ))
  .add('with title', () => (
    <Box display="flex" justifyContent="center">
      <Button onClick={handleButtonClick} label="Open titled Popover" />
      <State store={popoverStore}>
        <Popover
          active={false}
          backdrop={select('Backdrop', backdrops, 'transparent')}
          color={select('Color', colors, 'neutral')}
          direction={select('Direction', directions, 'south')}
          fullHeight={boolean('fullHeight', true)}
          position={select('Position', positions, 'center')}
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          tint={select('Tint', tints, 'lightest')}
          lockScroll={boolean('Lock scroll', true)}
          minWidth={text('minWidth', undefined)}
          offsetCorrection={number('Offset correction', 0)}
        >
          <Banner fullWidth>
            <Heading3>Popover Title</Heading3>
          </Banner>
          {contentBoxWithSingleTextLine}
        </Popover>
      </State>
    </Box>
  ))
  .add('with title & subtitle', () => (
    <Box display="flex" justifyContent="center">
      <Button onClick={handleButtonClick} label="Open titled & subtitled Popover" />
      <State store={popoverStore}>
        <Popover
          active={false}
          backdrop={select('Backdrop', backdrops, 'transparent')}
          color={select('Color', colors, 'neutral')}
          direction={select('Direction', directions, 'south')}
          fullHeight={boolean('fullHeight', true)}
          position={select('Position', positions, 'center')}
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          tint={select('Tint', tints, 'lightest')}
          lockScroll={boolean('Lock scroll', true)}
          minWidth={text('minWidth', undefined)}
          offsetCorrection={number('Offset correction', 0)}
        >
          <Banner color="neutral" fullWidth>
            <Heading3>Popover Title</Heading3>
            <TextSmall marginTop={1}>This is the popover content</TextSmall>
          </Banner>
          {contentBoxWithSingleTextLine}
        </Popover>
      </State>
    </Box>
  ))
  .add('with close button', () => (
    <Box display="flex" justifyContent="center">
      <Button onClick={handleButtonClick} label="Open Popover with close button" />
      <State store={popoverStore}>
        <Popover
          active={false}
          backdrop={select('Backdrop', backdrops, 'transparent')}
          color={select('Color', colors, 'neutral')}
          direction="south"
          fullHeight={boolean('fullHeight', true)}
          position={select('Position', positions, 'center')}
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          tint={select('Tint', tints, 'lightest')}
          lockScroll={boolean('Lock scroll', true)}
          minWidth={text('minWidth', undefined)}
          offsetCorrection={number('Offset correction', 0)}
        >
          <Banner onClose={handleCloseClick} fullWidth>
            <Heading3>I am a heading 3</Heading3>
          </Banner>
          {contentBoxWithSingleTextLine}
        </Popover>
      </State>
    </Box>
  ))
  .add('with actions', () => (
    <Box display="flex" justifyContent="center">
      <Button onClick={handleButtonClick} label="Open Popover with actions" />
      <State store={popoverStore}>
        <Popover
          active={false}
          backdrop={select('Backdrop', backdrops, 'transparent')}
          color={select('Color', colors, 'neutral')}
          direction={select('Direction', directions, 'south')}
          fullHeight={boolean('fullHeight', true)}
          position={select('Position', positions, 'center')}
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          tint={select('Tint', tints, 'lightest')}
          lockScroll={boolean('Lock scroll', true)}
          minWidth={text('minWidth', undefined)}
          offsetCorrection={number('Offset correction', 0)}
        >
          {contentBoxWithSingleTextLine}
          <ButtonGroup justifyContent="flex-end" padding={4}>
            <Button label="Cancel" />
            <Button level="primary" label="Confirm" />
          </ButtonGroup>
        </Popover>
      </State>
    </Box>
  ))
  .add('with menu', () => (
    <Box display="flex" justifyContent="center">
      <Button onClick={handleButtonClick} label="Open Popover with menu" />
      <State store={popoverStore}>
        <Popover
          active={false}
          backdrop={select('Backdrop', backdrops, 'transparent')}
          color={select('Color', colors, 'neutral')}
          direction={select('Direction', directions, 'south')}
          fullHeight={boolean('fullHeight', true)}
          position={select('Position', positions, 'end')}
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          tint={select('Tint', tints, 'lightest')}
          lockScroll={boolean('Lock scroll', true)}
          minWidth={text('minWidth', undefined)}
          offsetCorrection={number('Offset correction', 0)}
        >
          <Box overflowY="auto">
            <Menu outline={false} selected="bar">
              <MenuItem value="foo" caption="Foo caption" />
              <MenuItem value="bar" caption="Bar caption" />
              <MenuItem caption="Disabled ..." disabled />
              <MenuDivider />
              <MenuTitle>Group title</MenuTitle>
              <MenuItem caption="Caption & icon" icon={<IconClockSmallOutline />} />
              <MenuItem caption="Destructive" icon={<IconTrashSmallOutline />} destructive />
              <MenuItem caption="Destructive & disabled" icon={<IconCloseSmallOutline />} destructive disabled />
            </Menu>
          </Box>
        </Popover>
      </State>
    </Box>
  ))
  .add('with split button menu', () => (
    <Box display="flex" justifyContent="center">
      <ButtonGroup segmented>
        <State store={splitButtonStore}>
          <Button />
        </State>
        <State store={splitButtonChevronStore}>
          <Button onClick={handleButtonClick} icon={<IconChevronDownSmallOutline />} />
        </State>
      </ButtonGroup>
      <State store={popoverStore}>
        <Popover
          active={false}
          backdrop="transparent"
          position="start"
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          lockScroll={boolean('Lock scroll', true)}
        >
          <State store={splitButtonMenuStore}>
            <Menu outline={false}>
              <MenuItem
                value="foo"
                caption="Primary action"
                icon={<IconClockSmallOutline />}
                onClick={handleSplitButtonNormalMenuItemClick}
              />
              <MenuItem
                value="bar"
                caption="Destructive action"
                icon={<IconTrashSmallOutline />}
                destructive
                onClick={handleSplitButtonDestructiveMenuItemClick}
              />
            </Menu>
          </State>
        </Popover>
      </State>
    </Box>
  ))
  .add('experiment 1', () => (
    <Box display="flex" justifyContent="center">
      <Button onClick={handleButtonClick} label="Open a experimental Popover" />
      <State store={popoverStore}>
        <Popover
          active={false}
          backdrop={select('Backdrop', backdrops, 'transparent')}
          color={select('Color', colors, 'neutral')}
          direction={select('Direction', directions, 'south')}
          fullHeight={boolean('fullHeight', true)}
          position={select('Position', positions, 'center')}
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          tint={select('Tint', tints, 'lightest')}
          lockScroll={boolean('Lock scroll', true)}
          minWidth={text('minWidth', undefined)}
          offsetCorrection={number('Offset correction', 0)}
        >
          <Banner color="neutral" fullWidth>
            <Heading3>Popover Title</Heading3>
            <TextSmall marginTop={1}>This is the popover content</TextSmall>
          </Banner>
          <Box padding={4} overflow="auto">
            <TextBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </TextBody>
          </Box>
        </Popover>
      </State>
    </Box>
  ))
  .add('experiment 2', () => (
    <Box display="flex" justifyContent="center">
      <Button onClick={handleButtonClick} label="Open a experimental Popover" />
      <State store={popoverStore}>
        <Popover
          active={false}
          backdrop={select('Backdrop', backdrops, 'transparent')}
          color={select('Color', colors, 'neutral')}
          direction={select('Direction', directions, 'south')}
          fullHeight={boolean('fullHeight', true)}
          position={select('Position', positions, 'center')}
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          tint={select('Tint', tints, 'lightest')}
          lockScroll={boolean('Lock scroll', true)}
          minWidth={text('minWidth', undefined)}
          offsetCorrection={number('Offset correction', 0)}
        >
          <Banner color="neutral" fullWidth>
            <Heading3>Popover Title</Heading3>
            <TextSmall marginTop={1}>This is the popover content</TextSmall>
          </Banner>
          <Box padding={4} overflow="auto">
            <TextBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </TextBody>
          </Box>
          <ButtonGroup justifyContent="flex-end" padding={4}>
            <Button label="Cancel" />
            <Button level="primary" label="Confirm" />
          </ButtonGroup>
        </Popover>
      </State>
    </Box>
  ));
