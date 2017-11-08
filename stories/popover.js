import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Store, State } from '@sambego/storybook-state';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { Box, Button, PopoverHorizontal, PopoverVertical, TextBody } from '../components';
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
          onCloseClick={handleCloseClick}
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
          onCloseClick={handleCloseClick}
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
          onCloseClick={handleCloseClick}
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
          onCloseClick={handleCloseClick}
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
      <Button onClick={handleButtonClick} label="Open a vertical Popover" />
      <State store={store}>
        <PopoverVertical
          active={false}
          backdrop="dark"
          direction="south"
          position="center"
          onCloseClick={handleCloseClick}
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
        >
          <TextBody>This is the popover content</TextBody>
        </PopoverVertical>
      </State>
    </Box>
  ))
  .add('full-option', () => (
    <Box>
      <Button onClick={handleButtonClick} label="Open a full-option Popover" />
      <State store={store}>
        <PopoverVertical
          active={false}
          actions={actions}
          backdrop="transparent"
          direction="south"
          position="center"
          title="Popover Title"
          subtitle="And this is the subtitle"
          onCloseClick={handleCloseClick}
          onEscKeyDown={handleCloseClick}
          onOverlayClick={handleCloseClick}
        >
          <TextBody>This is the popover content</TextBody>
        </PopoverVertical>
      </State>
    </Box>
  ));
