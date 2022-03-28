import React, { useState } from 'react';
import Alert from './Alert';
import Box from '../box';
import Button from '../button';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { TextBody } from '../typography';

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
      <Button onClick={toggleAlert} label="Open an alert"/>
      <Alert
        {...args}
        active={active}
        onEscKeyDown={toggleAlert}
        onOverlayClick={toggleAlert}
      >
        <TextBody>I am the alert body text</TextBody>
      </Alert>
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
  type: 'confirm',
};
