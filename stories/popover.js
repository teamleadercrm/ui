import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Store, State } from '@sambego/storybook-state';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { Box, Button, Heading3,PopoverHorizontal, PopoverVertical, TextBody } from '../components';
import { baseStyles, centerStyles } from '../.storybook/styles';
import styles from '@sambego/storybook-styles';

const actions = [
  { label: 'Cancel', onClick: action('Cancel clicked') },
  { label: 'Save', onClick: action('Save clicked'), level: "primary" },
];

const store = new Store({
  active: false,
});

const handleButtonClick = (event) => {
  store.set({ anchorEl: event.currentTarget, active: true });
  action('onClick - active: true')();
};

const handleCloseClick = () => {
  store.set({ active: false });
  action('onClick - active: false')();
};

storiesOf('Popover', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('horizontal', () => (
    <Box>
      <Button onClick={handleButtonClick} label="Open a horizontalPopover" />
      <State store={store}>
        <PopoverHorizontal
          active={false}
          backdrop="transparent"
          direction="west"
          position="middle"
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
        >
          <TextBody>This is the popover content</TextBody>
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
          backdrop="transparent"
          direction="south"
          position="center"
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
        >
          <TextBody>This is the popover content</TextBody>
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
          backdrop="transparent"
          direction="south"
          position="center"
          title="Popover Title"
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
        >
          <TextBody>This is the popover content</TextBody>
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
          backdrop="transparent"
          direction="south"
          position="center"
          title="Popover Title"
          subtitle="And this is the subtitle"
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
        >
          <TextBody>This is the popover content</TextBody>
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
          backdrop="transparent"
          direction="south"
          position="center"
          title="Popover Title"
          onCloseClick={handleCloseClick}
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
        >
          <TextBody>This is the popover content</TextBody>
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
          actions={actions}
          backdrop="transparent"
          direction="south"
          position="center"
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
        >
          <TextBody>This is the popover content</TextBody>
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
          direction="south"
          position="center"
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
        >
          <TextBody>This is the popover content</TextBody>
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
          backdrop="transparent"
          direction="south"
          position="center"
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
        >
          <Heading3>I am a heading 3</Heading3>
          <TextBody marginTop={2}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</TextBody>
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
          backdrop="transparent"
          direction="south"
          position="center"
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
        >
          <ul>
            <li>Lorem ipsum</li>
            <li>dolor sit amet</li>
          </ul>
        </PopoverVertical>
      </State>
    </Box>
  ));
