import React from 'react';
import { storiesOf } from '@storybook/react';
import { Store, State } from '@sambego/storybook-state';
import { Banner, Box, Button, ButtonGroup, Heading3, Link, Popover, TextBody, TextSmall } from '../src/components';
import { select, boolean, number } from '@storybook/addon-knobs/react';

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
};

const handleCloseClick = () => {
  store.set({ active: false });
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
  .add('experiment 1', () => (
    <Box display="flex" justifyContent="center">
      <Button onClick={handleButtonClick} label="Open a experimental Popover" />
      <State store={store}>
        <Popover
          active={false}
          backdrop={select('Backdrop', backdrops, 'transparent')}
          color={select('Color', colors, 'neutral')}
          direction={select('Direction', directions, 'south')}
          position={select('Position', positions, 'center')}
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          tint={select('Tint', tints, 'lightest')}
          lockScroll={boolean('Lock scroll', true)}
          offsetCorrection={number('Offset correction', 0)}
        >
          <Box padding={4}>
            <Heading3>I am a heading 3</Heading3>
            <TextBody marginTop={2}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua.
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
          position={select('Position', positions, 'center')}
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          tint={select('Tint', tints, 'lightest')}
          lockScroll={boolean('Lock scroll', true)}
          offsetCorrection={number('Offset correction', 0)}
        >
          <Box padding={4}>
            <ul>
              <li>Lorem ipsum</li>
              <li>dolor sit amet</li>
            </ul>
          </Box>
        </Popover>
      </State>
    </Box>
  ));
