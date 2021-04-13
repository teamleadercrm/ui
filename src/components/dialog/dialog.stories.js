import React, { useState } from 'react';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { IconWarningBadgedMediumOutline } from '@teamleader/ui-icons';
import { Box, Button, Dialog, TextBody } from '../../index';

export default {
  component: Dialog,
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'Dialog'),
};

export const DefaultStory = (args) => {
  const [active, setActive] = useState(false);

  const toggleDialog = () => {
    setActive(!active);
  };

  return (
    <Box>
      <Button onClick={toggleDialog} label="Open a dialog" />
      <Dialog
        {...args}
        active={active}
        onCloseClick={toggleDialog}
        onEscKeyDown={toggleDialog}
        onOverlayClick={toggleDialog}
      >
        <Box padding={4}>
          <TextBody>Here you can add arbitrary content.</TextBody>
        </Box>
      </Dialog>
    </Box>
  );
};

DefaultStory.args = {
  headerIcon: <IconWarningBadgedMediumOutline />,
  primaryAction: {
    label: 'Confirm',
    onClick: () => console.log('primaryAction.onClick'),
  },
  secondaryAction: {
    label: 'Cancel',
    onClick: () => console.log('secondaryAction.onClick'),
  },
  tertiaryAction: {
    children: 'Read more',
    onClick: () => console.log('tertiaryAction.onClick'),
  },
  title: 'Dialog title',
};
