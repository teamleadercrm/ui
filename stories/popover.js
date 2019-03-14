import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, boolean, number } from '@storybook/addon-knobs/react';
import { Store, State } from '@sambego/storybook-state';
import { IconAddSmallOutline, IconUserSmallFilled, IconClockSmallOutline } from '@teamleader/ui-icons';
import {
  Banner,
  Box,
  Button,
  ButtonGroup,
  Heading3,
  Link,
  Menu,
  MenuItem,
  MenuDivider,
  Popover,
  TextBody,
  TextSmall,
} from '../src';

const store = new Store({
  active: false,
});
const colors = ['neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'teal'];
const tints = ['lightest', 'light', 'normal', 'dark', 'darkest'];
const backdrops = ['transparent', 'dark'];
const directions = ['north', 'south', 'east', 'west'];
const positions = ['start', 'center', 'end'];

const handleButtonClick = event => {
  store.set({ anchorEl: event.currentTarget, active: true });
  console.log(store);
};

const handleCloseClick = () => {
  store.set({ active: false });
  console.log(store);
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
      <State store={store}>
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
      <State store={store}>
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
      <State store={store}>
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
      <State store={store}>
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
      <State store={store}>
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
      <State store={store}>
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
          offsetCorrection={number('Offset correction', 0)}
        >
          <Menu outline={false}>
            <MenuItem value="foo" caption="Caption" />
            <MenuItem selected value="bar" caption="Caption & Shortcut" shortcut="Ctrl + P" />
            <MenuItem caption="Disabled ..." disabled shortcut="Ctrl + P">
              We are the children!!
            </MenuItem>
            <MenuDivider />
            <MenuItem caption="Caption & Icon" icon={<IconAddSmallOutline />} />
            <MenuItem caption="Caption, Icon & Shortcut" icon={<IconUserSmallFilled />} shortcut="Ctrl + P" />
            <MenuItem caption="Disabled ..." icon={<IconClockSmallOutline />} shortcut="Ctrl + P" disabled />
          </Menu>
        </Popover>
      </State>
    </Box>
  ))
  .add('experiment 0', () => (
    <Box display="flex" justifyContent="center">
      <Button onClick={handleButtonClick} label="Open a experimental Popover" />
      <State store={store}>
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
          offsetCorrection={number('Offset correction', 0)}
        >
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
  .add('experiment 1', () => (
    <Box display="flex" justifyContent="center">
      <Button onClick={handleButtonClick} label="Open a experimental Popover" />
      <State store={store}>
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
      <State store={store}>
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
