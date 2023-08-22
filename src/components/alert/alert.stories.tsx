import React, { useState } from 'react';
import Alert from './Alert';
import Box from '../box';
import Button from '../button';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  component: Alert,
  title: 'Mid level blocks / Alert',
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} as ComponentMeta<typeof Alert>;

export const DefaultStory: ComponentStory<typeof Alert> = (args) => {
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

export const ConfirmationAlert: ComponentStory<typeof Alert> = (args) => {
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

export const DestructiveAlert: ComponentStory<typeof Alert> = (args) => {
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

export const ErrorAlert: ComponentStory<typeof Alert> = (args) => {
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
