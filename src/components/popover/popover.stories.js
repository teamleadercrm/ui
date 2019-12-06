import React from 'react';
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
  Link,
  Menu,
  MenuItem,
  MenuDivider,
  MenuTitle,
  Popover,
  TextBody,
  TextSmall,
} from '../../index';

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

export default {
  title: 'Popover',

  parameters: {
    info: {
      propTablesExclude: [Link, TextBody, TextSmall, Button, State, Banner, Heading3, ButtonGroup, Box],
    },
  },
};

export const basic = () => (
  <Box display="flex" justifyContent="center">
    <Button onClick={handleButtonClick} label="Open a basic Popover" />
    <State store={popoverStore}>
      <Popover
        active={false}
        backdrop={select('Backdrop', backdrops, 'transparent')}
        color={select('Color', colors, 'neutral')}
        direction={select('Direction', directions, 'south')}
        fullHeight={boolean('Full height', true)}
        position={select('Position', positions, 'center')}
        onEscKeyDown={handleCloseClick}
        onOverlayClick={handleCloseClick}
        tint={select('Tint', tints, 'lightest')}
        lockScroll={boolean('Lock scroll', true)}
        maxWidth={text('Max width', '50vw')}
        minWidth={text('Min width', undefined)}
        offsetCorrection={number('Offset correction', 0)}
      >
        {contentBoxWithSingleTextLine}
      </Popover>
    </State>
  </Box>
);

export const withTitle = () => (
  <Box display="flex" justifyContent="center">
    <Button onClick={handleButtonClick} label="Open titled Popover" />
    <State store={popoverStore}>
      <Popover
        active={false}
        backdrop={select('Backdrop', backdrops, 'transparent')}
        color={select('Color', colors, 'neutral')}
        direction={select('Direction', directions, 'south')}
        fullHeight={boolean('Full height', true)}
        position={select('Position', positions, 'center')}
        onEscKeyDown={handleCloseClick}
        onOverlayClick={handleCloseClick}
        tint={select('Tint', tints, 'lightest')}
        lockScroll={boolean('Lock scroll', true)}
        maxWidth={text('Max width', '50vw')}
        minWidth={text('Min width', undefined)}
        offsetCorrection={number('Offset correction', 0)}
      >
        <Banner fullWidth>
          <Heading3>Popover Title</Heading3>
        </Banner>
        {contentBoxWithSingleTextLine}
      </Popover>
    </State>
  </Box>
);

withTitle.story = {
  name: 'With title',
};

export const withTitleSubtitle = () => (
  <Box display="flex" justifyContent="center">
    <Button onClick={handleButtonClick} label="Open titled & subtitled Popover" />
    <State store={popoverStore}>
      <Popover
        active={false}
        backdrop={select('Backdrop', backdrops, 'transparent')}
        color={select('Color', colors, 'neutral')}
        direction={select('Direction', directions, 'south')}
        fullHeight={boolean('Full height', true)}
        position={select('Position', positions, 'center')}
        onEscKeyDown={handleCloseClick}
        onOverlayClick={handleCloseClick}
        tint={select('Tint', tints, 'lightest')}
        lockScroll={boolean('Lock scroll', true)}
        maxWidth={text('Max width', '50vw')}
        minWidth={text('Min width', undefined)}
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
);

withTitleSubtitle.story = {
  name: 'With title & subtitle',
};

export const withCloseButton = () => (
  <Box display="flex" justifyContent="center">
    <Button onClick={handleButtonClick} label="Open Popover with close button" />
    <State store={popoverStore}>
      <Popover
        active={false}
        backdrop={select('Backdrop', backdrops, 'transparent')}
        color={select('Color', colors, 'neutral')}
        direction="south"
        fullHeight={boolean('Full height', true)}
        position={select('Position', positions, 'center')}
        onEscKeyDown={handleCloseClick}
        onOverlayClick={handleCloseClick}
        tint={select('Tint', tints, 'lightest')}
        lockScroll={boolean('Lock scroll', true)}
        maxWidth={text('Max width', '50vw')}
        minWidth={text('Min width', undefined)}
        offsetCorrection={number('Offset correction', 0)}
      >
        <Banner onClose={handleCloseClick} fullWidth>
          <Heading3>I am a heading 3</Heading3>
        </Banner>
        {contentBoxWithSingleTextLine}
      </Popover>
    </State>
  </Box>
);

withCloseButton.story = {
  name: 'With close button',
};

export const withActions = () => (
  <Box display="flex" justifyContent="center">
    <Button onClick={handleButtonClick} label="Open Popover with actions" />
    <State store={popoverStore}>
      <Popover
        active={false}
        backdrop={select('Backdrop', backdrops, 'transparent')}
        color={select('Color', colors, 'neutral')}
        direction={select('Direction', directions, 'south')}
        fullHeight={boolean('Full height', true)}
        position={select('Position', positions, 'center')}
        onEscKeyDown={handleCloseClick}
        onOverlayClick={handleCloseClick}
        tint={select('Tint', tints, 'lightest')}
        lockScroll={boolean('Lock scroll', true)}
        maxWidth={text('Max width', '50vw')}
        minWidth={text('Min width', undefined)}
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
);

withActions.story = {
  name: 'With actions',
};

export const withMenu = () => (
  <Box display="flex" justifyContent="center">
    <Button onClick={handleButtonClick} label="Open Popover with menu" />
    <State store={popoverStore}>
      <Popover
        active={false}
        backdrop={select('Backdrop', backdrops, 'transparent')}
        color={select('Color', colors, 'neutral')}
        direction={select('Direction', directions, 'south')}
        fullHeight={boolean('Full height', true)}
        position={select('Position', positions, 'end')}
        onEscKeyDown={handleCloseClick}
        onOverlayClick={handleCloseClick}
        tint={select('Tint', tints, 'lightest')}
        lockScroll={boolean('Lock scroll', true)}
        maxWidth={text('Max width', '50vw')}
        minWidth={text('Min width', undefined)}
        offsetCorrection={number('Offset correction', 0)}
      >
        <Box overflowY="auto">
          <Menu outline={false} selected="bar">
            <MenuItem value="foo" label="Foo label" />
            <MenuItem value="bar" label="Bar label" />
            <MenuItem label="Disabled ..." disabled />
            <MenuDivider />
            <MenuTitle>Group title</MenuTitle>
            <MenuItem label="Label & icon" icon={<IconClockSmallOutline />} />
            <MenuItem label="Destructive" icon={<IconTrashSmallOutline />} destructive />
            <MenuItem label="Destructive & disabled" icon={<IconCloseSmallOutline />} destructive disabled />
          </Menu>
        </Box>
      </Popover>
    </State>
  </Box>
);

withMenu.story = {
  name: 'With menu',
};

export const withSplitButtonMenu = () => (
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
              label="Primary action"
              icon={<IconClockSmallOutline />}
              onClick={handleSplitButtonNormalMenuItemClick}
            />
            <MenuItem
              value="bar"
              label="Destructive action"
              icon={<IconTrashSmallOutline />}
              destructive
              onClick={handleSplitButtonDestructiveMenuItemClick}
            />
          </Menu>
        </State>
      </Popover>
    </State>
  </Box>
);

withSplitButtonMenu.story = {
  name: 'With split button menu',
};

export const experiment1 = () => (
  <Box display="flex" justifyContent="center">
    <Button onClick={handleButtonClick} label="Open a experimental Popover" />
    <State store={popoverStore}>
      <Popover
        active={false}
        backdrop={select('Backdrop', backdrops, 'transparent')}
        color={select('Color', colors, 'neutral')}
        direction={select('Direction', directions, 'south')}
        fullHeight={boolean('Full height', true)}
        position={select('Position', positions, 'center')}
        onEscKeyDown={handleCloseClick}
        onOverlayClick={handleCloseClick}
        tint={select('Tint', tints, 'lightest')}
        lockScroll={boolean('Lock scroll', true)}
        maxWidth={text('Max width', '50vw')}
        minWidth={text('Min width', undefined)}
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
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </TextBody>
        </Box>
      </Popover>
    </State>
  </Box>
);

export const experiment2 = () => (
  <Box display="flex" justifyContent="center">
    <Button onClick={handleButtonClick} label="Open a experimental Popover" />
    <State store={popoverStore}>
      <Popover
        active={false}
        backdrop={select('Backdrop', backdrops, 'transparent')}
        color={select('Color', colors, 'neutral')}
        direction={select('Direction', directions, 'south')}
        fullHeight={boolean('Full height', true)}
        position={select('Position', positions, 'center')}
        onEscKeyDown={handleCloseClick}
        onOverlayClick={handleCloseClick}
        tint={select('Tint', tints, 'lightest')}
        lockScroll={boolean('Lock scroll', true)}
        maxWidth={text('Max width', '50vw')}
        minWidth={text('Min width', undefined)}
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
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </TextBody>
        </Box>
        <ButtonGroup justifyContent="flex-end" padding={4}>
          <Button label="Cancel" />
          <Button level="primary" label="Confirm" />
        </ButtonGroup>
      </Popover>
    </State>
  </Box>
);
