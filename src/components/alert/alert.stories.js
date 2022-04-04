import React, { useState } from 'react';
import Alert from './Alert';
import Box from '../box';
import Button from '../button';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';

export default {
  component: Alert,
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'Alert'),
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
};

export const DefaultStory = (args) => {
  const [active, setActive] = useState(false);

  const toggleAlert = () => {
    setActive(!active);
  };

  return (
    <Box>
      <Button onClick={toggleAlert} label="Open an alert" />
      <Alert {...args} active={active} onEscKeyDown={toggleAlert} onOverlayClick={toggleAlert} />
    </Box>
  );
};

DefaultStory.args = {
  primaryAction: {
    label: 'Confirm',
    onClick: () => console.log('primaryAction.onClick'),
  },
  secondaryAction: {
    label: 'Cancel',
    onClick: () => console.log('secondaryAction.onClick'),
  },
  title: 'Alert title',
  body: 'I am the alert body text',
};

export const ConfirmationAlert = (args) => {
  const [active, setActive] = useState(false);

  const toggleAlert = () => {
    setActive(!active);
  };

  return (
    <Box>
      <Button onClick={toggleAlert} label="Open a confirmation alert" />
      <Alert {...args} active={active} onEscKeyDown={toggleAlert} onOverlayClick={toggleAlert} />
    </Box>
  );
};

ConfirmationAlert.args = {
  primaryAction: {
    label: 'Yes',
    onClick: () => console.log('primaryAction.onClick'),
  },
  secondaryAction: {
    label: 'Cancel',
    onClick: () => console.log('secondaryAction.onClick'),
  },
  title: 'Confirmation alert title',
  body: 'I am the alert body text',
  type: 'confirm',
};

export const DestructiveAlert = (args) => {
  const [active, setActive] = useState(false);

  const toggleAlert = () => {
    setActive(!active);
  };

  return (
    <Box>
      <Button onClick={toggleAlert} label="Open a destructive alert" />
      <Alert {...args} active={active} onEscKeyDown={toggleAlert} onOverlayClick={toggleAlert} />
    </Box>
  );
};

DestructiveAlert.args = {
  primaryAction: {
    label: 'Delete',
    onClick: () => console.log('primaryAction.onClick'),
  },
  secondaryAction: {
    label: 'Cancel',
    onClick: () => console.log('secondaryAction.onClick'),
  },
  title: 'Destructive alert title',
  body: 'I am the alert body text',
  type: 'destructive',
};

export const ErrorAlert = (args) => {
  const [active, setActive] = useState(false);

  const toggleAlert = () => {
    setActive(!active);
  };

  return (
    <Box>
      <Button onClick={toggleAlert} label="Open a legacy error alert" />
      <Alert {...args} active={active} onEscKeyDown={toggleAlert} onOverlayClick={toggleAlert} />
    </Box>
  );
};

ErrorAlert.args = {
  primaryAction: {
    label: 'Ok',
    onClick: () => console.log('primaryAction.onClick'),
  },
  title: 'Error alert title',
  body: 'I am the alert body text',
  type: 'error',
};
