import React from 'react';
import PropTable from './components/propTable';
import { storiesOf } from '@storybook/react';
import { Store, State } from '@sambego/storybook-state';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import {
  Banner,
  Box,
  Button,
  ButtonGroup,
  Heading3,
  Link,
  PopoverHorizontal,
  PopoverVertical,
  TextBody,
  TextSmall,
} from '../components';
import { withKnobs, select, boolean, number } from '@storybook/addon-knobs/react';

const store = new Store({
  active: false,
});

const colors = ['neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'teal'];
const tints = ['lightest', 'light', 'normal', 'dark', 'darkest'];
const backdrops = ['transparent', 'dark'];
const horizontalDirections = ['east', 'west'];
const verticalDirections = ['north', 'south'];
const horizontalPositions = ['top', 'middle', 'bottom'];
const verticalPositions = ['left', 'center', 'right'];

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
  .addDecorator((story, context) =>
    withInfo({
      TableComponent: PropTable,
      propTablesExclude: [Link, TextBody, TextSmall, Button, State, Banner, Heading3, ButtonGroup, Box],
    })(story)(context),
  )
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .add('horizontal', () => (
    <Box>
      <Button onClick={handleButtonClick} label="Open a horizontalPopover" />
      <State store={store}>
        <PopoverHorizontal
          active={false}
          backdrop={select('Backdrop', backdrops, 'transparent')}
          color={select('Color', colors, 'neutral')}
          direction={select('Direction', horizontalDirections, 'west')}
          position={select('Position', horizontalPositions, 'middle')}
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          tint={select('Tint', tints, 'lightest')}
          offsetCorrection={number('Offset correction', 0)}
        >
          {contentBoxWithSingleTextLine}
        </PopoverHorizontal>
      </State>
    </Box>
  ))
  .add('vertical', () => (
    <Box>
      <Button onClick={handleButtonClick} label="Open a vertical Popover" />
      <State store={store}>
        <PopoverVertical
          active={false}
          backdrop={select('Backdrop', backdrops, 'transparent')}
          color={select('Color', colors, 'neutral')}
          direction={select('Direction', verticalDirections, 'south')}
          position={select('Position', verticalPositions, 'center')}
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          tint={select('Tint', tints, 'lightest')}
          lockScroll={boolean('Lock scroll', false)}
          offsetCorrection={number('Offset correction', 0)}
        >
          {contentBoxWithSingleTextLine}
        </PopoverVertical>
      </State>
    </Box>
  ))
  .add('with title', () => (
    <Box>
      <Button onClick={handleButtonClick} label="Open titled Popover" />
      <State store={store}>
        <PopoverVertical
          active={false}
          backdrop={select('Backdrop', backdrops, 'transparent')}
          color={select('Color', colors, 'neutral')}
          direction={select('Direction', verticalDirections, 'south')}
          position={select('Position', verticalPositions, 'center')}
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          tint={select('Tint', tints, 'lightest')}
          lockScroll={boolean('Lock scroll', false)}
          offsetCorrection={number('Offset correction', 0)}
        >
          <Banner fullWidth>
            <Heading3>Popover Title</Heading3>
          </Banner>
          {contentBoxWithSingleTextLine}
        </PopoverVertical>
      </State>
    </Box>
  ))
  .add('with title & subtitle', () => (
    <Box>
      <Button onClick={handleButtonClick} label="Open titled & subtitled Popover" />
      <State store={store}>
        <PopoverVertical
          active={false}
          backdrop={select('Backdrop', backdrops, 'transparent')}
          color={select('Color', colors, 'neutral')}
          direction={select('Direction', verticalDirections, 'south')}
          position={select('Position', verticalPositions, 'center')}
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          tint={select('Tint', tints, 'lightest')}
          lockScroll={boolean('Lock scroll', false)}
          offsetCorrection={number('Offset correction', 0)}
        >
          <Banner color="neutral" fullWidth>
            <Heading3>Popover Title</Heading3>
            <TextSmall marginTop={1}>This is the popover content</TextSmall>
          </Banner>
          {contentBoxWithSingleTextLine}
        </PopoverVertical>
      </State>
    </Box>
  ))
  .add('with close button', () => (
    <Box>
      <Button onClick={handleButtonClick} label="Open Popover with close button" />
      <State store={store}>
        <PopoverVertical
          active={false}
          backdrop={select('Backdrop', backdrops, 'transparent')}
          color={select('Color', colors, 'neutral')}
          direction="south"
          position={select('Position', verticalPositions, 'center')}
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          tint={select('Tint', tints, 'lightest')}
          lockScroll={boolean('Lock scroll', false)}
          offsetCorrection={number('Offset correction', 0)}
        >
          <Banner onClose={handleCloseClick} fullWidth>
            <Heading3>I am a heading 3</Heading3>
          </Banner>
          {contentBoxWithSingleTextLine}
        </PopoverVertical>
      </State>
    </Box>
  ))
  .add('with actions', () => (
    <Box>
      <Button onClick={handleButtonClick} label="Open Popover with actions" />
      <State store={store}>
        <PopoverVertical
          active={false}
          backdrop={select('Backdrop', backdrops, 'transparent')}
          color={select('Color', colors, 'neutral')}
          direction={select('Direction', verticalDirections, 'south')}
          position={select('Position', verticalPositions, 'center')}
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          tint={select('Tint', tints, 'lightest')}
          lockScroll={boolean('Lock scroll', false)}
          offsetCorrection={number('Offset correction', 0)}
        >
          {contentBoxWithSingleTextLine}
          <ButtonGroup justifyContent="flex-end" padding={4}>
            <Button label="Cancel" />
            <Button level="primary" label="Confirm" />
          </ButtonGroup>
        </PopoverVertical>
      </State>
    </Box>
  ))
  .add('with dark backdrop', () => (
    <Box>
      <Button onClick={handleButtonClick} label="Open a Popover with dark backdrop" />
      <State store={store}>
        <PopoverVertical
          active={false}
          backdrop="dark"
          color={select('Color', colors, 'neutral')}
          direction={select('Direction', verticalDirections, 'south')}
          position={select('Position', verticalPositions, 'center')}
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          tint={select('Tint', tints, 'lightest')}
          lockScroll={boolean('Lock scroll', false)}
          offsetCorrection={number('Offset correction', 0)}
        >
          {contentBoxWithSingleTextLine}
        </PopoverVertical>
      </State>
    </Box>
  ))
  .add('experiment 1', () => (
    <Box>
      <Button onClick={handleButtonClick} label="Open a experimental Popover" />
      <State store={store}>
        <PopoverVertical
          active={false}
          backdrop={select('Backdrop', backdrops, 'transparent')}
          color={select('Color', colors, 'neutral')}
          direction={select('Direction', verticalDirections, 'south')}
          position={select('Position', verticalPositions, 'center')}
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          tint={select('Tint', tints, 'lightest')}
          lockScroll={boolean('Lock scroll', false)}
          offsetCorrection={number('Offset correction', 0)}
        >
          <Box padding={4}>
            <Heading3>I am a heading 3</Heading3>
            <TextBody marginTop={2}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua.
            </TextBody>
          </Box>
        </PopoverVertical>
      </State>
    </Box>
  ))
  .add('experiment 2', () => (
    <Box>
      <Button onClick={handleButtonClick} label="Open a experimental Popover" />
      <State store={store}>
        <PopoverVertical
          active={false}
          backdrop={select('Backdrop', backdrops, 'transparent')}
          color={select('Color', colors, 'neutral')}
          direction={select('Direction', verticalDirections, 'south')}
          position={select('Position', verticalPositions, 'center')}
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
          tint={select('Tint', tints, 'lightest')}
          lockScroll={boolean('Lock scroll', false)}
          offsetCorrection={number('Offset correction', 0)}
        >
          <Box padding={4}>
            <ul>
              <li>Lorem ipsum</li>
              <li>dolor sit amet</li>
            </ul>
          </Box>
        </PopoverVertical>
      </State>
    </Box>
  ));
